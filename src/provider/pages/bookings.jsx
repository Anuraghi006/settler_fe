import { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import BookingRequestCard from '../components/bookingRequestCard'

const initialBookings = [
  { id: 1, service: 'Pipe leak repair', customer: 'Anita', time: 'Today, 3:00 PM', address: 'Sector 5, Flat 12', price: '₹450', status: 'pending' },
  { id: 2, service: 'Ceiling fan installation', customer: 'Rahul', time: 'Tomorrow, 10:00 AM', address: 'Lake Avenue', price: '₹300', status: 'accepted' },
  { id: 3, service: 'Switchboard repair', customer: 'Sam', time: 'Last Monday', address: 'Central Market', price: '₹250', status: 'completed' },
  { id: 4, service: 'Water heater check', customer: 'Meera', time: 'Friday, 9:00 AM', address: 'East Side', price: '₹400', status: 'pending' },
]

const tabs = ['all', 'pending', 'accepted', 'completed']

function Bookings() {
  const [bookings, setBookings] = useState(initialBookings)
  const [tab, setTab] = useState('all')

  const updateStatus = (id, status) =>
    setBookings((list) => list.map((b) => (b.id === id ? { ...b, status } : b)))

  const visible = tab === 'all' ? bookings : bookings.filter((b) => b.status === tab)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Bookings" subtitle="Accept or decline new requests from customers." />

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
              tab === t ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((booking) => (
          <BookingRequestCard
            key={booking.id}
            booking={booking}
            onAccept={(id) => updateStatus(id, 'accepted')}
            onDecline={(id) => updateStatus(id, 'declined')}
          />
        ))}
      </div>

      {visible.length === 0 && <p className="mt-12 text-center text-slate-500">No bookings in this list.</p>}
    </div>
  )
}

export default Bookings