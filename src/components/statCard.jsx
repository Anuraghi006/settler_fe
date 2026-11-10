import { Card } from 'flowbite-react'

function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        {Icon && <Icon className="h-5 w-5 text-brand-400" />}
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
    </Card>
  )
}

export default StatCard