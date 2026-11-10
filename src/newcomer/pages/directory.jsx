import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import SearchFilters from '../components/searchFilters'
import DirectoryCard from '../components/directoryCard'

const places = [
  { id: 1, name: 'City General Hospital', category: 'Hospital', address: 'Main Road', distance: 2.4, rating: 4.5, reviews: 210, price: 'Insurance accepted', open: true },
  { id: 2, name: 'Night Care Pharmacy', category: 'Pharmacy', address: 'Station Junction', distance: 0.8, rating: 4.2, reviews: 88, price: '24 hours', open: true },
  { id: 3, name: 'Fresh Mart Supermarket', category: 'Supermarket', address: 'Lake Avenue', distance: 1.6, rating: 4.1, reviews: 143, price: 'Delivers', open: false },
  { id: 4, name: 'Quick Fix Plumbing', category: 'Plumber', address: 'Sector 5', distance: 3.2, rating: 4.7, reviews: 56, price: 'From ₹300', open: true },
  { id: 5, name: 'Spark Electricals', category: 'Electrician', address: 'Central Market', distance: 1.1, rating: 4.4, reviews: 39, price: 'From ₹250', open: false },
  { id: 6, name: 'Greenfield Park', category: 'Park', address: 'East Side', distance: 4.0, rating: 4.8, reviews: 320, price: 'Free', open: true },
]

const categories = ['All', ...new Set(places.map((p) => p.category))]

function Directory() {
  const [filters, setFilters] = useState({
    query: '',
    category: 'All',
    openOnly: false,
    sort: 'distance',
  })

  const updateFilters = (patch) => setFilters((prev) => ({ ...prev, ...patch }))

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase()

    const matches = places.filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) &&
        (filters.category === 'All' || p.category === filters.category) &&
        (!filters.openOnly || p.open),
    )

    return [...matches].sort((a, b) =>
      filters.sort === 'rating' ? b.rating - a.rating : a.distance - b.distance,
    )
  }, [filters])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Directory" subtitle="Find hospitals, services, and daily essentials near you." />

      <SearchFilters filters={filters} categories={categories} onChange={updateFilters} />

      <p className="mt-6 text-sm text-slate-400">{results.length} places found</p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((place) => (
          <DirectoryCard key={place.id} place={place} />
        ))}
      </div>

      {results.length === 0 && (
        <p className="mt-12 text-center text-slate-500">No places match your filters. Try clearing some of them.</p>
      )}
    </div>
  )
}

export default Directory