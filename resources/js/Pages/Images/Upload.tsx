import { useForm } from '@inertiajs/react';
import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';
import InputLabel from '../../Components/InputLabel';
import InputError from '../../Components/InputError';

export default function Upload() {
    const { data, setData, post, processing, errors } = useForm<{ image: File | undefined }>({
        image: undefined,
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
        <form onSubmit={submit} className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div>
                <InputLabel htmlFor="image" value="Upload Image" />
                <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                    className="mt-1 block w-full"
                />
                <InputError message={errors.image} className="mt-2" />
            </div>
            <div className="mt-4">
                <PrimaryButton disabled={processing}>Upload</PrimaryButton>
            </div>
        </form>
    );
}
