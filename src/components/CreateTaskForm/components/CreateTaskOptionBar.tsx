import type { priority } from "../../../types/priority"
import CreateTaskCounter from "./CreateTaskCounter"
import CreateTaskPrioritySector from "./CreateTaskPrioritySector"

interface CreateTaskOptionBarProps{
  deadline: string
  setDeadline: (value: string) => void
  priority: priority
  setPriority: (value: priority) => void
  charCount: number
  maxChars: number
  canPost: boolean
}

function CreateTaskOptionBar({
  deadline,
  setDeadline,
  priority,
  setPriority,
  charCount,
  maxChars,
  canPost
}: CreateTaskOptionBarProps) {
  return (<>
    <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-100">
      {/* Mobile: Stack vertically */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
        {/* Deadline and Priority - Mobile: Full width, Desktop: Side by side */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          {/* Deadline Picker */}
          <div className="relative">
            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full sm:w-auto text-xs sm:text-sm text-gray-700 border border-gray-300 rounded-full px-3 sm:px-4 py-2 hover:bg-gray-50 transition cursor-pointer"
            />
          </div>

          {/* Priority Selector */}
          <CreateTaskPrioritySector priority={priority} setPriority={setPriority}/>
        </div>

        {/* Submit Button with Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          {charCount > 0 && (
            <CreateTaskCounter charCount={charCount} maxChars={maxChars}/>
          )}
          <button
            type="submit"
            disabled={!canPost}
            className="bg-blue-500 text-white font-bold px-5 sm:px-6 py-2 rounded-full hover:bg-blue-600 active:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 text-sm sm:text-base"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </>)
}

export default CreateTaskOptionBar