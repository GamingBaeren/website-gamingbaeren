import React, { useState } from 'react';

interface UploadResultProps {
    viewUrl: string;
    directUrl: string;
}

export default function UploadResult({ viewUrl, directUrl }: UploadResultProps) {
    const [copiedView, setCopiedView] = useState(false);
    const [copiedDirect, setCopiedDirect] = useState(false);

    const copyLink = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="success-message text-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎉 Upload Erfolgreich!</h1>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">Dein Bild wurde erfolgreich hochgeladen.</p>

                    <div className="link-box mb-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">🔗 View-Link (Bildseite):</h2>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={viewUrl}
                                readOnly
                                className="flex-grow rounded border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                id="viewLinkInput"
                            />
                            <button
                                onClick={() => copyLink(viewUrl, setCopiedView)}
                                className="copy-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                {copiedView ? 'Kopiert!' : 'Kopieren'}
                            </button>
                        </div>
                    </div>

                    <div className="link-box mb-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">📷 Direkte Bild-URL:</h2>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={directUrl}
                                readOnly
                                className="flex-grow rounded border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                id="directLinkInput"
                            />
                            <button
                                onClick={() => copyLink(directUrl, setCopiedDirect)}
                                className="copy-btn px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                {copiedDirect ? 'Kopiert!' : 'Kopieren'}
                            </button>
                        </div>
                    </div>

                    <div className="preview-link mb-4">
                        <a
                            href={viewUrl}
                            className="view-btn inline-block px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Bild anzeigen
                        </a>
                    </div>

                    <div className="back-link">
                        <a
                            href="/images/upload"
                            className="back-btn inline-block text-blue-600 hover:underline"
                        >
                            ← Zurück zum Upload
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}