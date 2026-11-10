import { Card } from 'flowbite-react'
import { LuFlame, LuMessageCircle, LuSparkles, LuUsers } from 'react-icons/lu'
import PageHeader from '../../components/pageHeader'
import StatCard from '../../components/StatCard'
import Leaderboard from '../components/leaderboard'

const leaderboard = [
  { rank: 1, name: 'Meera', points: 480, streak: 31 },
  { rank: 2, name: 'Arjun', points: 362, streak: 12 },
  { rank: 3, name: 'You', points: 240, streak: 7 },
  { rank: 4, name: 'Priya', points: 190, streak: 3 },
]

const pointRules = [
  ['Answer accepted by the asker', '+10'],
  ['Answer upvoted (max 20 per answer)', '+2 each'],
  ['Place suggestion approved', '+15'],
  ['Event hosted and attended', '+20'],
  ['Review with photos', '+5'],
]

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader title="Resident dashboard" subtitle="Thanks for helping newcomers settle in." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={LuSparkles} label="Points" value={240} hint="+30 this week" />
        <StatCard icon={LuFlame} label="Current streak" value="7 days" hint="Next milestone: 30 days" />
        <StatCard icon={LuMessageCircle} label="Answers given" value={18} hint="11 accepted" />
        <StatCard icon={LuUsers} label="Newcomers helped" value={9} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Leaderboard rows={leaderboard} />
        </div>

        <Card className="border-slate-800 bg-slate-900">
          <h2 className="text-lg font-semibold text-white">How you earn points</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {pointRules.map(([rule, points]) => (
              <li key={rule} className="flex items-center justify-between gap-4">
                <span className="text-slate-300">{rule}</span>
                <span className="font-semibold text-emerald-400">{points}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard