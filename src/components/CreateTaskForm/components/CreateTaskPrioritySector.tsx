import type { TaskPriority } from '../../../types/taskPriority';

interface CreateTaskPrioritySectorProps {
  priority: TaskPriority;
  setPriority: (value: TaskPriority) => void;
}

function CreateTaskPrioritySector({
  priority,
  setPriority,
}: CreateTaskPrioritySectorProps) {
  return (
    <>
      <div className="flex items-center gap-1 border border-gray-300 rounded-full p-1">
        <button
          type="button"
          onClick={() => setPriority('low')}
          className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition ${
            priority === 'low'
              ? 'bg-green-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Low
        </button>
        <button
          type="button"
          onClick={() => setPriority('medium')}
          className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition ${
            priority === 'medium'
              ? 'bg-yellow-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => setPriority('high')}
          className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition ${
            priority === 'high'
              ? 'bg-red-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          High
        </button>
      </div>
    </>
  );
}

export default CreateTaskPrioritySector;
