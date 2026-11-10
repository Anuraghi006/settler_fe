import { useState } from 'react'
import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react'
import PageHeader from '../../components/pageHeader'
import EventCard from '../components/eventCard'

const initialEvents = [
  { id: 1, title: 'Weekend Community Cricket', date: 'Sat, 5:00 PM', place: 'Greenfield Park', description: 'Casual match for newcomers and locals.', attendees: 14, approved: true, rsvped: false },
  { id: 2, title: 'Language Exchange Evening', date: 'Wed, 6:30 PM', place: 'City Library', description: 'Practice the local language over tea.', attendees: 8, approved: true, rsvped: true },
]

const emptyForm = { title: '', date: '', place: '', description: '' }

function Events() {
  const [events, setEvents] = useState(initialEvents)
  const [form, setForm] = useState(emptyForm)

  const toggleRsvp = (id) =>
    setEvents((list) =>
      list.map((e) =>
        e.id === id
          ? { ...e, rsvped: !e.rsvped, attendees: e.attendees + (e.rsvped ? -1 : 1) }
          : e,
      ),
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    // New events start unapproved and wait for an admin
    setEvents([{ id: Date.now(), ...form, attendees: 0, approved: false, rsvped: false }, ...events])
    setForm(emptyForm)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Community events" subtitle="Host a meetup or join one near you." />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onRsvp={toggleRsvp} />
          ))}
        </div>

        <Card className="h-fit border-slate-800 bg-slate-900">
          <h2 className="text-lg font-semibold text-white">Host an event</h2>
          <p className="text-sm text-slate-400">Events are reviewed by an admin before they appear publicly.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <Label htmlFor="title" value="Title" className="text-slate-300" />
              <TextInput id="title" name="title" value={form.title} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="date" value="Date and time" className="text-slate-300" />
              <TextInput id="date" name="date" placeholder="Sat, 5:00 PM" value={form.date} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="place" value="Place" className="text-slate-300" />
              <TextInput id="place" name="place" value={form.place} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="description" value="Description" className="text-slate-300" />
              <Textarea id="description" name="description" rows={3} value={form.description} onChange={handleChange} />
            </div>
            <Button type="submit" className="bg-brand-600 hover:bg-brand-700">Submit for approval</Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Events