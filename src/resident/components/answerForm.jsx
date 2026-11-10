import { useState } from 'react'
import { Button, Textarea } from 'flowbite-react'

function AnswerForm({ onSubmit }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t border-slate-800 pt-4">
      <Textarea
        rows={3}
        placeholder="Share what you know. Accepted answers earn you 10 points."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" size="sm" className="self-end bg-brand-600 hover:bg-brand-700">Post answer</Button>
    </form>
  )
}

export default AnswerForm