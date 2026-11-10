import { Badge, Card } from 'flowbite-react'

function QuestionCard({ question, children }) {
  return (
    <Card className="border-slate-800 bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{question.title}</h3>
          {question.body && <p className="mt-1 text-sm text-slate-400">{question.body}</p>}
        </div>
        <Badge color="purple">{question.answers} answers</Badge>
      </div>
      <p className="text-xs text-slate-500">
        Asked by {question.author} · {question.category} · {question.time}
      </p>
      {children}
    </Card>
  )
}

export default QuestionCard