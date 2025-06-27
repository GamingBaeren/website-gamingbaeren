import { useForm } from '@inertiajs/react';
import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';
import InputLabel from '../../Components/InputLabel';
import InputError from '../../Components/InputError';

export default function Upload() {
    const { data, setData, post, processing, errors } = useForm({
        image: undefined as File | undefined,
    });

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setData('image', e.target.files[0]);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('images.store'));
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <form onSubmit={submit} className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Bild hochladen</h2>
                <div className="mb-4">
                    <InputLabel htmlFor="image" value="Wähle eine Bilddatei aus" />
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="mt-1 block w-full rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                    <InputError message={errors.image} className="mt-2" />
                </div>
                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>Hochladen</PrimaryButton>
                </div>
            </form>
        </section>
    );
}