import { Card } from 'flowbite-react'
import { LuFlag, LuShieldCheck, LuUserCheck, LuUsers } from 'react-icons/lu'
import PageHeader from '../../components/pageHeader'
import StatCard from '../../components/StatCard'

const activity = [
  'Provider "Quick Fix Plumbing" submitted verification',
  'Resident request from Priya awaiting address proof',
  'Review flagged on City General Hospital',
  'New event "Language Exchange Evening" approved',
]

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Admin dashboard" subtitle="City-wide status and items that need your attention." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={LuShieldCheck} label="Providers to verify" value={4} />
        <StatCard icon={LuUserCheck} label="Residents to approve" value={6} />
        <StatCard icon={LuFlag} label="Open reports" value={3} />
        <StatCard icon={LuUsers} label="Active users this week" value={412} hint="+12% from last week" />
      </div>

      <Card className="mt-8 border-slate-800 bg-slate-900">
        <h2 className="text-lg font-semibold text-white">Recent activity</h2>
        <ul className="flex flex-col divide-y divide-slate-800">
          {activity.map((line) => (
            <li key={line} className="py-3 text-sm text-slate-300">{line}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default Dashboard