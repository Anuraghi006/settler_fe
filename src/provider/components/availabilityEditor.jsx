import { Card, Checkbox, TextInput } from 'flowbite-react'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function AvailabilityEditor({ value, onChange }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex flex-col gap-4">
        {days.map((day) => {
          const slot = value[day]
          return (
            <div key={day} className="grid items-center gap-3 sm:grid-cols-[80px_1fr_1fr]">
              <label className="flex items-center gap-2 text-slate-200">
                <Checkbox checked={slot.on} onChange={(e) => onChange(day, { on: e.target.checked })} />
                {day}
              </label>
              <TextInput type="time" value={slot.start} disabled={!slot.on} onChange={(e) => onChange(day, { start: e.target.value })} />
              <TextInput type="time" value={slot.end} disabled={!slot.on} onChange={(e) => onChange(day, { end: e.target.value })} />
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default AvailabilityEditor