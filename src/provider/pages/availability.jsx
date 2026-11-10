import { useState } from 'react'
import { Button } from 'flowbite-react'
import PageHeader from '../../components/PageHeader'
import AvailabilityEditor from '../components/availabilityEditor'

const initialAvailability = {
  Mon: { on: true, start: '09:00', end: '18:00' },
  Tue: { on: true, start: '09:00', end: '18:00' },
  Wed: { on: true, start: '09:00', end: '18:00' },
  Thu: { on: true, start: '09:00', end: '18:00' },
  Fri: { on: true, start: '09:00', end: '14:00' },
  Sat: { on: false, start: '10:00', end: '13:00' },
  Sun: { on: false, start: '10:00', end: '13:00' },
}

function Availability() {
  const [availability, setAvailability] = useState(initialAvailability)
  const [saved, setSaved] = useState(false)

  const updateDay = (day, patch) => {
    setSaved(false)
    setAvailability((prev) => ({ ...prev, [day]: { ...prev[day], ...patch } }))
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageHeader
        title="Availability"
        subtitle="Set the hours you accept jobs. Customers only see open slots."
        action={
          <Button className="bg-brand-600 hover:bg-brand-700" onClick={() => setSaved(true)}>
            Save availability
          </Button>
        }
      />

      <AvailabilityEditor value={availability} onChange={updateDay} />

      {saved && <p className="mt-4 text-sm text-emerald-400">Availability saved.</p>}
    </div>
  )
}

export default Availability