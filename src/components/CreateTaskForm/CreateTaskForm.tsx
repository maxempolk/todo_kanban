import { useState } from 'react'
import CreateTaskOptionBar from './components/CreateTaskOptionBar'

function CreateTaskForm() {
  const [text, setText] = useState('')
  const [deadline, setDeadline] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    console.log({ text, deadline, priority })

    // Reset form
    setText('')
    setDeadline('')
    setPriority('medium')
    setIsFocused(false)
  }

  const charCount = text.length
  const maxChars = 280

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-3 sm:p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="What needs to be done?"
            maxLength={maxChars}
            className="w-full text-lg sm:text-xl placeholder-gray-500 resize-none outline-none min-h-[100px] sm:min-h-[120px] font-normal"
          />
        </div>
      </form>

      {
        (isFocused || text.trim()) && 
        <CreateTaskOptionBar
          deadline={deadline}
          setDeadline={setDeadline}
          setPriority={setPriority}
          priority={priority}
          charCount={charCount}
          maxChars={maxChars}
          canPost={!!text.trim() || charCount > maxChars}
        />
      }
    </div>
  )
}

export default CreateTaskForm