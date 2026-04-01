import React, { useEffect, useState } from 'react';

const REGION_COLORS = {
  'Africa': '#f59e0b',
  'Americas': '#10b981',
  'Asia': '#3b82f6',
  'Europe': '#8b5cf6',
  'Oceania': '#06b6d4',
  'Antarctic': '#64748b',
};

const Regions = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,cca3,flags,capital'
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
const EXCLUDED = ['ISR', 'XKX', 'TWN', 'COK','IND'];
const sorted = data
  .filter(c => !EXCLUDED.includes(c.cca3))
  .sort((a, b) => a.name.common.localeCompare(b.name.common));
setCountries(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const regions = ['All', ...Object.keys(REGION_COLORS)];

  const filtered = countries.filter(c => {
    const matchSearch = c.name.common.toLowerCase().includes(search.toLowerCase());
    const matchRegion = activeRegion === 'All' || c.region === activeRegion;
    return matchSearch && matchRegion;
  });

  return (
    <div className="countries-wrapper">

      {/* Search + Filter Bar */}
      <div className="countries-controls">
        <div className="countries-search-wrap">
          <span className="countries-search-icon">🔍</span>
          <input
            type="text"
            className="countries-search"
            placeholder="Search countries..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="countries-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>

        <div className="countries-filters">
          {regions.map(r => (
            <button
              key={r}
              className={`countries-filter-btn ${activeRegion === r ? 'active' : ''}`}
              style={activeRegion === r && r !== 'All' ? { background: REGION_COLORS[r], borderColor: REGION_COLORS[r] } : {}}
              onClick={() => setActiveRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="countries-count">
        Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'country' : 'countries'}
        {activeRegion !== 'All' && <span> in <strong>{activeRegion}</strong></span>}
        {search && <span> matching "<strong>{search}</strong>"</span>}
      </div>

      {/* Loading / Error */}
      {loading && (
        <div className="countries-loading">
          <div className="countries-spinner" />
          <p>Loading countries...</p>
        </div>
      )}
      {error && (
        <div className="countries-error">
          <span>⚠️</span>
          <p>Failed to load countries: {error}</p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <div className="countries-empty">
              <span>🌍</span>
              <p>No countries found. Try a different search.</p>
            </div>
          ) : (
            <div className="countries-grid">
              {filtered.map(country => (
                <div className="country-card" key={country.cca3}>
                  <div className="country-card-flag">
                    <img
                      src={country.flags?.svg || country.flags?.png}
                      alt={`${country.name.common} flag`}
                    />
                  </div>
                  <div className="country-card-body">
                    <h3>{country.name.common}</h3>
                    {country.capital?.[0] && (
                      <span className="country-capital">📍 {country.capital[0]}</span>
                    )}
                    <span
                      className="country-region-tag"
                      style={{ background: REGION_COLORS[country.region] + '18', color: REGION_COLORS[country.region] || '#555', borderColor: REGION_COLORS[country.region] + '40' }}
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