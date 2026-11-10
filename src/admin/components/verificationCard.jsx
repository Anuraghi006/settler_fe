import { Badge, Button, Card } from 'flowbite-react'

function VerificationCard({ item, onApprove, onReject }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-slate-400">{item.detail}</p>
        </div>
        <Badge color="gray">{item.submitted}</Badge>
      </div>
      <p className="text-sm text-slate-300">Document: <span className="text-brand-400">{item.document}</span></p>
      <div className="flex gap-2 pt-2">
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => onApprove(item.id)}>Approve</Button>
        <Button size="sm" color="failure" onClick={() => onReject(item.id)}>Reject</Button>
      </div>
    </Card>
  )
}

export default VerificationCard