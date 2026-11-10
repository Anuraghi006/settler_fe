import { Card } from 'flowbite-react'
import { LuCircle, LuCircleCheck } from 'react-icons/lu'

function ChecklistCard({ items, onToggle }) {
  const done = items.filter((item) => item.done).length
  const percent = Math.round((done / items.length) * 100)

  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Settling-in checklist</h2>
        <span className="text-sm text-slate-400">{done} of {items.length} done</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-brand-500 transition-all" style={{ width: `${percent}%` }} />
      </div>

      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-slate-800"
            >
              {item.done
                ? <LuCircleCheck className="h-5 w-5 text-emerald-400" />
                : <LuCircle className="h-5 w-5 text-slate-500" />}
              <span className={item.done ? 'text-slate-500 line-through' : 'text-slate-200'}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ChecklistCard