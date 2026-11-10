import { Badge, Button, Card } from 'flowbite-react'
import { LuMapPin, LuPhone, LuStar } from 'react-icons/lu'

function DirectoryCard({ place }) {
  return (
    <Card className="h-full border-slate-800 bg-slate-900">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{place.name}</h3>
          <p className="text-sm text-slate-400">{place.category}</p>
        </div>
        <Badge color={place.open ? 'success' : 'gray'}>{place.open ? 'Open now' : 'Closed'}</Badge>
      </div>

      <p className="flex items-center gap-2 text-sm text-slate-400">
        <LuMapPin /> {place.address} · {place.distance} km
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 text-amber-400">
          <LuStar /> {place.rating} ({place.reviews} reviews)
        </span>
        <span className="text-slate-400">{place.price}</span>
      </div>

      <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
        <LuPhone className="mr-2" /> Call
      </Button>
    </Card>
  )
}

export default DirectoryCard