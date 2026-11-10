import { useState } from 'react'
import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react'
import PageHeader from '../../components/pageHeader'
import QuestionCard from '../../components/questionCard'

const seedQuestions = [
  { id: 1, title: 'Which bus goes from the station to Lake Avenue?', body: '', category: 'Transport', author: 'Anita', answers: 2, time: '2 hours ago' },
  { id: 2, title: 'Is the water supply safe to drink without boiling?', body: 'Moved in last week.', category: 'Daily life', author: 'Rahul', answers: 0, time: 'Yesterday' },
]

function Questions() {
  const [questions, setQuestions] = useState(seedQuestions)
  const [form, setForm] = useState({ title: '', body: '', category: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim()) return
    setQuestions([{ id: Date.now(), ...form, author: 'You', answers: 0, time: 'Just now' }, ...questions])
    setForm({ title: '', body: '', category: '' })
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <PageHeader title="Questions" subtitle="Ask residents anything about living in the city." />

      <Card className="mb-8 border-slate-800 bg-slate-900">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="title" value="Your question" className="text-slate-300" />
            <TextInput id="title" name="title" placeholder="e.g. Where can I renew a driving license?" value={form.title} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="category" value="Category" className="text-slate-300" />
            <TextInput id="category" name="category" placeholder="Transport, Health, Paperwork..." value={form.category} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="body" value="Details (optional)" className="text-slate-300" />
            <Textarea id="body" name="body" rows={3} placeholder="Add any context that helps residents answer" value={form.body} onChange={handleChange} />
          </div>
          <Button type="submit" className="self-end bg-brand-600 hover:bg-brand-700">Post question</Button>
        </form>
      </Card>

      <div className="flex flex-col gap-4">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  )
}

export default Questions