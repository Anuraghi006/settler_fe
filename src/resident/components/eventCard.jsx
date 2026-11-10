import { Badge, Button, Card } from 'flowbite-react'
import { LuCalendarDays, LuMapPin } from 'react-icons/lu'

function EventCard({ event, onRsvp }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
        {event.approved
          ? <Badge color="success">Approved</Badge>
          : <Badge color="warning">Awaiting approval</Badge>}
      </div>
      <p className="flex items-center gap-2 text-sm text-slate-400"><LuCalendarDays /> {event.date}</p>
      <p className="flex items-center gap-2 text-sm text-slate-400"><LuMapPin /> {event.place}</p>
      <p className="text-sm text-slate-300">{event.description}</p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-slate-500">{event.attendees} attending</span>
        <Button
          size="sm"
          color={event.rsvped ? 'gray' : 'purple'}
          disabled={!event.approved}
          onClick={() => onRsvp(event.id)}
        >
          {event.rsvped ? 'Cancel RSVP' : 'RSVP'}
        </Button>
      </div>
    </Card>
  )
}

export default EventCard