import { useState, type ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string;
  title: string;
}

const TextAreaInput = ({ placeholder, title }: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.replace(/\s+/g, '');
    if (newValue.length <= 500) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-text-600 text-list">{title}</span>

      <div className="relative">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          maxLength={500}
          className={`bg-background-main border-background-700 placeholder:text-text-200 text-text-600 h-69 w-114 resize-none rounded-[0.31rem] border px-4 py-3 leading-relaxed`}
        />

        <div className="flex w-114 items-start justify-between">
          {value.length < 500 && (
            <span className="text-text-400 text-table-sm w-63 break-words">{value}</span>
          )}
          <span className="text-table-sm text-red-500">
            {value.length === 500 && 'You have reached the maximum character limit.'}
          </span>
          <span
            className={`text-table-sm ${value.length >= 500 ? 'text-red-500' : 'text-text-400'}`}
          >
            {value.length} / 500
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextAreaInput;
