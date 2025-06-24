import React from 'react';

export default function TextInput({ id, name, type = 'text', value, className = '', autoComplete, isFocused = false, onChange }: {
    id: string;
    name: string;
    type?: string;
    value: string;
    className?: string;
    autoComplete?: string;
    isFocused?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            className={`border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${className}`}
            autoComplete={autoComplete}
            onChange={onChange}
            ref={inputRef}
        />
    );
}
