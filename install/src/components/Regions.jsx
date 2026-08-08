import React, { useEffect, useState } from "react";

const REGION_COLORS = {
  Africa: "#f59e0b",
  Americas: "#10b981",
  Asia: "#3b82f6",
  Europe: "#8b5cf6",
  Oceania: "#06b6d4",
  Antarctic: "#64748b",
};

const Regions = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${import.meta.env.VITE_RESTCOUNTRIES_KEY}`,
        };
  
        const urls = [
          "https://api.restcountries.com/countries/v5?limit=100&offset=0",
          "https://api.restcountries.com/countries/v5?limit=100&offset=100",
          "https://api.restcountries.com/countries/v5?limit=100&offset=200",
        ];
  
        const responses = await Promise.all(
          urls.map((url) => fetch(url, { headers }))
        );
  
        responses.forEach((r) => {
          if (!r.ok) {
            throw new Error(`HTTP ${r.status}`);
          }
        });
  
        const pages = await Promise.all(
          responses.map((r) => r.json())
        );
  
        const countries = pages.flatMap(
          (page) => page.data.objects
        );
  
        const EXCLUDED = ["ISR", "XKX", "TWN", "COK", "IND"];
  
        const sorted = countries
          .filter(
            (c) =>
              !EXCLUDED.includes(c.codes?.alpha_3)
          )
          .sort((a, b) =>
            a.names.common.localeCompare(b.names.common)
          );
  
        setCountries(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCountries();
  }, []);

  const regions = ["All", ...Object.keys(REGION_COLORS)];

  const filtered = countries.filter((c) => {
    const matchSearch = (c.names?.common || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchRegion =
      activeRegion === "All" ||
      c.region === activeRegion;

    return matchSearch && matchRegion;
  });

  return (
    <div className="countries-wrapper">

      <div className="countries-controls">
        <div className="countries-search-wrap">
          <span className="countries-search-icon">🔍</span>

          <input
            className="countries-search"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="countries-search-clear"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="countries-filters">
          {regions.map((r) => (
            <button
              key={r}
              className={`countries-filter-btn ${
                activeRegion === r ? "active" : ""
              }`}
              style={
                activeRegion === r && r !== "All"
                  ? {
                      background: REGION_COLORS[r],
                      borderColor: REGION_COLORS[r],
                    }
                  : {}
              }
              onClick={() => setActiveRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="countries-count">
        Showing <strong>{filtered.length}</strong>{" "}
        {filtered.length === 1 ? "country" : "countries"}
      </div>

      {loading && (
        <div className="countries-loading">
          <div className="countries-spinner"></div>
          <p>Loading countries...</p>
        </div>
      )}

      {error && (
        <div className="countries-error">
          ⚠️ Failed to load countries: {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <div className="countries-empty">
              🌍 No countries found.
            </div>
          ) : (
            <div className="countries-grid">
              {filtered.map((country) => (
                <div
                  className="country-card"
                  key={country.uuid}
                >
                  <div className="country-card-flag">
                    {country.flag?.url_svg ||
                    country.flag?.url_png ? (
                      <img
                        src={
                          country.flag.url_svg ||
                          country.flag.url_png
                        }
                        alt={country.names.common}
                      />
                    ) : (
                      <div
                        style={{
                          fontSize: "3rem",
                          textAlign: "center",
                          padding: "20px",
                        }}
                      >
                        🏳️
                      </div>
                    )}
                  </div>

                  <div className="country-card-body">
                    <h3>{country.names.common}</h3>

                    {country.capitals?.length > 0 && (
                      <span className="country-capital">
                        📍 {country.capitals[0].name}
                      </span>
                    )}

                    <span
                      className="country-region-tag"
                      style={{
                        background:
                          (REGION_COLORS[country.region] ||
                            "#555") + "18",
                        color:
                          REGION_COLORS[country.region] ||
                          "#555",
                        borderColor:
                          (REGION_COLORS[country.region] ||
                            "#555") + "40",
                      }}
                    >
                      {country.region}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Regions;