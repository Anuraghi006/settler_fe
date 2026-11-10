import { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import VerificationCard from '../components/verificationCard'

const initialProviders = [
  { id: 1, name: 'Quick Fix Plumbing', detail: 'Plumber · 8 years experience', document: 'Trade license.pdf', submitted: '2 days ago' },
  { id: 2, name: 'Spark Electricals', detail: 'Electrician · Licensed', document: 'Electrical license.pdf', submitted: '5 hours ago' },
]

const initialResidents = [
  { id: 3, name: 'Priya Nair', detail: 'Requested resident status', document: 'Electricity bill.pdf', submitted: 'Today' },
]

function Providers() {
  const [providers, setProviders] = useState(initialProviders)
  const [residents, setResidents] = useState(initialResidents)

  const remove = (setter) => (id) => setter((list) => list.filter((item) => item.id !== id))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Verification" subtitle="Approve providers and residents before they go live." />

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-white">Provider requests ({providers.length})</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {providers.map((item) => (
            <VerificationCard key={item.id} item={item} onApprove={remove(setProviders)} onReject={remove(setProviders)} />
          ))}
        </div>
        {providers.length === 0 && <p className="text-slate-500">No provider requests waiting.</p>}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">Resident requests ({residents.length})</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {residents.map((item) => (
            <VerificationCard key={item.id} item={item} onApprove={remove(setResidents)} onReject={remove(setResidents)} />
          ))}
        </div>
        {residents.length === 0 && <p className="text-slate-500">No resident requests waiting.</p>}
      </section>
    </div>
  )
}

export default Providers