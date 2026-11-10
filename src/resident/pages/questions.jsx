import { useState } from 'react'
import { Badge, Button } from 'flowbite-react'
import PageHeader from '../../components/PageHeader'
import QuestionCard from '../../components/questionCard'
import AnswerForm from '../components/answerform'

const initialQuestions = [
  { id: 1, title: 'Which bus goes from the station to Lake Avenue?', body: '', category: 'Transport', author: 'Anita', answers: 2, time: '2 hours ago' },
  { id: 2, title: 'Is the water supply safe to drink without boiling?', body: 'Moved in last week.', category: 'Daily life', author: 'Rahul', answers: 0, time: 'Yesterday' },
  { id: 3, title: 'Best way to get a residence proof?', body: '', category: 'Paperwork', author: 'Sam', answers: 1, time: '3 days ago' },
]

function Questions() {
  const [questions, setQuestions] = useState(initialQuestions)
  const [openId, setOpenId] = useState(null)

  const addAnswer = (questionId) => (text) => {
    setQuestions((list) =>
      list.map((q) => (q.id === questionId ? { ...q, answers: q.answers + 1 } : q)),
    )
    setOpenId(null)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageHeader title="Questions to answer" subtitle="Help a newcomer and earn points when your answer is accepted." />

      <div className="flex flex-col gap-4">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q}>
            {q.answers === 0 && <Badge color="warning" className="self-start">Needs an answer</Badge>}

            {openId === q.id ? (
              <AnswerForm onSubmit={addAnswer(q.id)} />
            ) : (
              <div>
                <Button size="sm" color="purple" onClick={() => setOpenId(q.id)}>Answer</Button>
              </div>
            )}
          </QuestionCard>
        ))}
      </div>
    </div>
  )
}

export default Questions