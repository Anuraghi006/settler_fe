import { Card } from 'flowbite-react'
import { LuFlame, LuTrophy } from 'react-icons/lu'

function Leaderboard({ rows }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
        <LuTrophy className="text-amber-400" /> Neighborhood leaderboard
      </h2>
      <ol className="flex flex-col gap-2">
        {rows.map((row) => (
          <li key={row.rank} className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-800">
            <span className="flex items-center gap-3">
              <span className="w-6 text-sm font-bold text-slate-500">{row.rank}</span>
              <span className="text-slate-200">{row.name}</span>
            </span>
            <span className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-orange-400"><LuFlame /> {row.streak}</span>
              <span className="font-semibold text-brand-400">{row.points} pts</span>
            </span>
          </li>
        ))}
      </ol>
    </Card>
  )
}

export default Leaderboard