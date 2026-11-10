import { Badge, Card } from 'flowbite-react'
import { LuCalendarCheck, LuClipboardList, LuShieldCheck, LuStar } from 'react-icons/lu'
import PageHeader from '../../components/pageHeader'
import StatCard from '../../components/StatCard'
const upcoming = [
  { id: 1, service: 'Pipe leak repair', customer: 'Anita', time: 'Today, 3:00 PM' },
  { id: 2, service: 'Ceiling fan installation', customer: 'Rahul', time: 'Tomorrow, 10:00 AM' },
]

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Provider dashboard"
        subtitle="Your jobs, availability, and reputation at a glance."
        action={<Badge color="success" icon={LuShieldCheck}>Verified provider</Badge>}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <StatCard icon={LuClipboardList} label="Pending requests" value={3} hint="Respond within 2 hours" />
        <StatCard icon={LuCalendarCheck} label="Jobs this week" value={7} />
        <StatCard icon={LuStar} label="Average rating" value="4.7" hint="From 56 reviews" />
      </div>

      <Card className="mt-8 border-slate-800 bg-slate-900">
        <h2 className="text-lg font-semibold text-white">Upcoming jobs</h2>
        <ul className="flex flex-col divide-y divide-slate-800">
          {upcoming.map((job) => (
            <li key={job.id} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-slate-200">{job.service}</p>
                <p className="text-sm text-slate-400">{job.customer}</p>
              </div>
              <span className="text-sm text-slate-400">{job.time}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default Dashboard