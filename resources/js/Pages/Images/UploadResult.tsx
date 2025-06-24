import React, { useState } from 'react';
import PrimaryButton from '../../Components/PrimaryButton';

interface UploadResultProps {
    viewUrl: string;
    directUrl: string;
}

export default function UploadResult({ viewUrl, directUrl }: UploadResultProps) {
    const [copiedView, setCopiedView] = useState(false);
    const [copiedDirect, setCopiedDirect] = useState(false);

    const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            });
        } else {
            // fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } catch {
                alert('Copy failed. Please copy manually.');
            }
            document.body.removeChild(textarea);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Upload Successful</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">View URL (requires login)</label>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        readOnly
                        value={viewUrl}
                        className="flex-grow rounded border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <PrimaryButton
                        type="button"
                        onClick={() => copyToClipboard(viewUrl, setCopiedView)}
                    >
                        {copiedView ? 'Copied' : 'Copy'}
                    </PrimaryButton>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Direct Image URL (public)</label>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        readOnly
                        value={directUrl}
                        className="flex-grow rounded border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <PrimaryButton
                        type="button"
                        onClick={() => copyToClipboard(directUrl, setCopiedDirect)}
                    >
                        {copiedDirect ? 'Copied' : 'Copy'}
                    </PrimaryButton>
                </div>
            </div>
            <div className="flex space-x-4">
                <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    View Image Page
                </a>
                <a
                    href={directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Download Image
                </a>
            </div>
        </div>
    );
}