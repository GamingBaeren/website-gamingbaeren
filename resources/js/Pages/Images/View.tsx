import React, { useState, useEffect } from 'react';

interface ImageProps {
    image?: {
        id: number;
        user_id: number;
        filename: string;
        created_at: string;
        updated_at: string;
        // Add other fields if available
    };
}

function formatFileSize(bytes: number): string {
    if (bytes >= 1048576) {
        return (bytes / 1048576).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
        return (bytes / 1024).toFixed(2) + ' KB';
    } else {
        return bytes + ' bytes';
    }
}

export default function View({ image }: ImageProps) {
    const [shareStatus, setShareStatus] = useState('🔗 Link teilen');

    useEffect(() => {
        console.log('Image props:', image);
    }, [image]);

    const shareImage = () => {
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: image?.filename || '',
                url: url,
            }).catch(() => {
                // fallback to clipboard if share fails
                navigator.clipboard.writeText(url).then(() => {
                    setShareStatus('✅ Link kopiert!');
                    setTimeout(() => setShareStatus('🔗 Link teilen'), 2000);
                });
            });
        } else {
            navigator.clipboard.writeText(url).then(() => {
                setShareStatus('✅ Link kopiert!');
                setTimeout(() => setShareStatus('🔗 Link teilen'), 2000);
            });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                window.location.href = '/images/upload';
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Ensure image URL is absolute and handle undefined image
    const imageUrl = image?.filename
        ? (image.filename.startsWith('http')
            ? image.filename
            : window.location.origin + '/storage/' + image.filename.replace(/^\/+/, ''))
        : '';

    if (!image) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
                <div className="text-center text-gray-700 dark:text-gray-300">
                    <p>Bilddaten konnten nicht geladen werden.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        📷 {image.filename}
                    </h1>
                    <a
                        href="/images/upload"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                        ← Neues Bild hochladen
                    </a>
                </header>

                <div className="mb-6 flex justify-center">
                    <img
                        src={imageUrl}
                        alt={image.filename}
                        className="max-w-full rounded shadow"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700 dark:text-gray-300">
                    <div>
                        <span className="font-semibold">Dateiname:</span> {image.filename}
                    </div>
                    <div>
                        <span className="font-semibold">Hochgeladen:</span>{' '}
                        {new Date(image.created_at).toLocaleString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </div>
                </div>

                <div className="flex space-x-4">
                    <a
                        href={imageUrl}
                        download={image.filename}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        📥 Herunterladen
                    </a>
                    <button
                        onClick={shareImage}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                        {shareStatus}
                    </button>
                </div>
            </div>
        </div>
    );
}
