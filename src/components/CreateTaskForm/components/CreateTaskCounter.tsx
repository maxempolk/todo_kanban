interface CreateTaskCounterProps {
  charCount: number;
  maxChars: number;
}

function CreateTaskCounter({ charCount, maxChars }: CreateTaskCounterProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transform -rotate-90">
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="none"
            className="sm:hidden"
          />
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke={charCount > maxChars * 0.9 ? '#ef4444' : '#1d9bf0'}
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${(charCount / maxChars) * 75.4} 75.4`}
            strokeLinecap="round"
            className="sm:hidden"
          />
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="none"
            className="hidden sm:block"
          />
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke={charCount > maxChars * 0.9 ? '#ef4444' : '#1d9bf0'}
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${(charCount / maxChars) * 87.96} 87.96`}
            strokeLinecap="round"
            className="hidden sm:block"
          />
        </svg>

        {charCount > maxChars * 0.8 && (
          <span
            className={`text-xs sm:text-sm ${charCount > maxChars * 0.9 ? 'text-red-500' : 'text-gray-500'}`}
          >
            {maxChars - charCount}
          </span>
        )}
      </div>
    </>
  );
}

export default CreateTaskCounter;
