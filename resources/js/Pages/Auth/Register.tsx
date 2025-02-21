import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/Components/ui/form';
import GuestLayout from '@/Layouts/GuestLayout';
import { Input } from '@headlessui/react';
import { Head, Link, useForm,} from '@inertiajs/react';
import { UserPlus,} from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from 'react-day-picker';
import { Form } from 'react-hook-form';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
      
            <><Head title="Register" /><div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <UserPlus className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-3xl font-bold text-white">Create an account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/90">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
            <form onSubmit={submit}>
              <div>
                <InputLabel htmlFor="firstname" value="Firstname" />

                <TextInput
                  id="firstname"
                  name="firstname"
                  value={data.firstname}
                  className="mt-1 block w-full"
                  autoComplete="namfirstnamee"
                  isFocused={true}
                  onChange={(e) => setData('firstname', e.target.value)}
                  required />

                <InputError message={errors.firstname} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="lastname" value="Lastname" />

                <TextInput
                  id="lastname"
                  name="lastname"
                  value={data.lastname}
                  className="mt-1 block w-full"
                  autoComplete="lastname"
                  isFocused={true}
                  onChange={(e) => setData('lastname', e.target.value)}
                  required />

                <InputError message={errors.lastname} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="username" value="Username" />

                <TextInput
                  id="username"
                  name="username"
                  value={data.username}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('username', e.target.value)}
                  required />

                <InputError message={errors.username} className="mt-2" />
              </div>


              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  onChange={(e) => setData('email', e.target.value)}
                  required />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) => setData('password', e.target.value)}
                  required />

                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirm Password" />

                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  required />

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2" />
              </div>

              <div className="mt-4 flex items-center justify-end">
                <Link
                  href={route('login')}
                  className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                  Already registered?
                </Link>

                <PrimaryButton className="ms-4" disabled={processing}>
                  Register
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div></>

    );
}
