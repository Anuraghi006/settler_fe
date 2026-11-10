import { useState } from 'react'
import PageHeader from '../../components/pageHeader'
import ModerationCard from '../components/moderationCard'

const initialReports = [
  { id: 1, type: 'Review', content: '"Worst service ever, avoid this place!!!"', reason: 'Possible fake review', reportedBy: 'Sam' },
  { id: 2, type: 'Answer', content: 'Just call the number on the website and ask for a discount.', reason: 'Spam or scam', reportedBy: 'Meera' },
]

function Moderation() {
  const [reports, setReports] = useState(initialReports)

  const resolve = (id) => setReports((list) => list.filter((r) => r.id !== id))

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageHeader title="Moderation" subtitle="Review reported reviews, answers, and incidents." />

      <div className="flex flex-col gap-4">
        {reports.map((report) => (
          <ModerationCard key={report.id} item={report} onKeep={resolve} onRemove={resolve} />
        ))}
      </div>

      {reports.length === 0 && <p className="mt-12 text-center text-slate-500">All reports are resolved.</p>}
    </div>
  )
}

export default Moderation