import React, { useState } from 'react';
import { router } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    is_blocked: boolean;
}

interface Image {
    id: number;
    filename: string;
    created_at: string;
    user: {
        username: string;
    };
}

interface DashboardProps {
    users: User[];
    images: Image[];
}

export default function Dashboard({ users, images }: DashboardProps) {
    const [passwords, setPasswords] = useState<{ [key: number]: { password: string; password_confirmation: string } }>({});

    const handlePasswordChange = (userId: number, field: string, value: string) => {
        setPasswords((prev) => ({
            ...prev,
            [userId]: {
                ...prev[userId],
                [field]: value,
            },
        }));
    };

    const submitPasswordChange = (userId: number) => {
        const data = passwords[userId];
        if (!data || !data.password || !data.password_confirmation) {
            alert('Please fill in both password fields.');
            return;
        }
        if (data.password !== data.password_confirmation) {
            alert('Passwords do not match.');
            return;
        }
        router.post(route('admin.users.changePassword', { user: userId }), data);
    };

    const toggleBlock = (userId: number) => {
        router.post(route('admin.users.toggleBlock', { user: userId }));
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">User Management</h2>
                <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Email</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Blocked</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Change Password</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                                    {user.is_blocked ? 'Yes' : 'No'}
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="mb-1 w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                        value={passwords[user.id]?.password || ''}
                                        onChange={(e) => handlePasswordChange(user.id, 'password', e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full rounded border border-gray-300 dark:border-gray-600 px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                        value={passwords[user.id]?.password_confirmation || ''}
                                        onChange={(e) => handlePasswordChange(user.id, 'password_confirmation', e.target.value)}
                                    />
                                    <button
                                        onClick={() => submitPasswordChange(user.id)}
                                        className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                    >
                                        Change
                                    </button>
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                                    <button
                                        onClick={() => toggleBlock(user.id)}
                                        className={`px-3 py-1 rounded ${user.is_blocked ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white`}
                                    >
                                        {user.is_blocked ? 'Unblock' : 'Block'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Image Upload Logs</h2>
                <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr className="bg-gray-200 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Uploader</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Filename</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Uploaded At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {images.map((image) => (
                            <tr key={image.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{image.user?.username || 'Unbekannt'}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{image.filename}</td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{new Date(image.created_at).toLocaleString('de-DE')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}