import { Badge, Button, Card } from 'flowbite-react'

function ModerationCard({ item, onKeep, onRemove }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between">
        <Badge color="failure">{item.reason}</Badge>
        <span className="text-xs text-slate-500">Reported by {item.reportedBy}</span>
      </div>
      <p className="text-sm text-slate-500">{item.type}</p>
      <p className="text-slate-200">{item.content}</p>
      <div className="flex gap-2 pt-2">
        <Button size="sm" color="gray" onClick={() => onKeep(item.id)}>Keep</Button>
        <Button size="sm" color="failure" onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </Card>
  )
}

export default ModerationCard