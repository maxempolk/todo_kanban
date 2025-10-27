import { useState } from 'react';
import CreateTaskOptionBar from './components/CreateTaskOptionBar';
import type { TaskPriority } from '@/types/taskPriority';
import { TASK_FORM_CONFIG } from '@/config/taskForm';

function CreateTaskForm() {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [priority, setPriority] = useState<TaskPriority>(
    TASK_FORM_CONFIG.defaultPriority
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setText('');
    setDeadline(new Date());
    setPriority(TASK_FORM_CONFIG.defaultPriority);
    setIsFocused(false);
  };

  const charCount = text.length;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="p-3 sm:p-4">
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="What needs to be done?"
            className="w-full text-lg sm:text-xl placeholder-gray-500 resize-none outline-none min-h-[100px] sm:min-h-[120px] font-normal"
          />
        </div>
      </form>

      {(isFocused || text.trim()) && (
        <CreateTaskOptionBar
          deadline={deadline}
          setDeadline={setDeadline}
          setPriority={setPriority}
          priority={priority}
          charCount={charCount}
          maxChars={TASK_FORM_CONFIG.maxChars}
          canPost={!!text.trim() && charCount <= TASK_FORM_CONFIG.maxChars}
        />
      )}
    </div>
  );
}

export default CreateTaskForm;
