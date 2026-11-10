import { Badge, Button, Card } from 'flowbite-react'
import { LuCalendarDays, LuMapPin } from 'react-icons/lu'

const statusColor = { pending: 'warning', accepted: 'info', completed: 'success', declined: 'failure' }

function BookingRequestCard({ booking, onAccept, onDecline }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{booking.service}</h3>
          <p className="text-sm text-slate-400">Customer: {booking.customer}</p>
        </div>
        <Badge color={statusColor[booking.status]} className="capitalize">{booking.status}</Badge>
      </div>

      <p className="flex items-center gap-2 text-sm text-slate-400"><LuCalendarDays /> {booking.time}</p>
      <p className="flex items-center gap-2 text-sm text-slate-400"><LuMapPin /> {booking.address}</p>
      <p className="text-sm text-slate-300">Price: <span className="font-semibold text-white">{booking.price}</span></p>

      {booking.status === 'pending' && (
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="bg-brand-600 hover:bg-brand-700" onClick={() => onAccept(booking.id)}>Accept</Button>
          <Button size="sm" color="gray" onClick={() => onDecline(booking.id)}>Decline</Button>
        </div>
      )}
    </Card>
  )
}

export default BookingRequestCard