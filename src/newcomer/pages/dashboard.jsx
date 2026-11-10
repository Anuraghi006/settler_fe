import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import { LuBookmark, LuClipboardCheck, LuMessageCircle } from 'react-icons/lu'
import PageHeader from '../../components/PageHeader'
import StatCard from '../../components/StatCard'
import ChecklistCard from '../components/checklistCard'

const initialChecklist = [
  { id: 1, label: 'Get a local SIM card', done: true },
  { id: 2, label: 'Open a bank account', done: false },
  { id: 3, label: 'Register your residence proof', done: false },
  { id: 4, label: 'Find a family doctor', done: false },
  { id: 5, label: 'Save emergency numbers', done: true },
]

// Placeholder numbers. Replace with the numbers for your city.
const emergencyNumbers = [
  { label: 'Emergency', number: '112' },
  { label: 'Police', number: '100' },
  { label: 'Ambulance', number: '102' },
]

function Dashboard() {
  const [checklist, setChecklist] = useState(initialChecklist)

  const toggleItem = (id) =>
    setChecklist((items) => items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))

  const doneCount = checklist.filter((item) => item.done).length

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Welcome to Settler"
        subtitle="Here's your settling-in progress and quick help."
        action={
          <Link to="/newcomer/directory">
            <Button className="bg-brand-600 hover:bg-brand-700">Find services</Button>
          </Link>
        }
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <StatCard icon={LuClipboardCheck} label="Checklist progress" value={`${doneCount}/${checklist.length}`} />
        <StatCard icon={LuMessageCircle} label="Questions asked" value={2} hint="1 answered" />
        <StatCard icon={LuBookmark} label="Saved places" value={6} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChecklistCard items={checklist} onToggle={toggleItem} />
        </div>

        <Card className="border-slate-800 bg-slate-900">
          <h2 className="text-lg font-semibold text-white">Emergency numbers</h2>
          <ul className="flex flex-col gap-3">
            {emergencyNumbers.map((item) => (
              <li key={item.label} className="flex items-center justify-between">
                <span className="text-slate-300">{item.label}</span>
                <span className="font-mono text-lg font-bold text-rose-400">{item.number}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard