import React from 'react';

export default function PrimaryButton({ children, className = '', disabled = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode; className?: string; disabled?: boolean }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
