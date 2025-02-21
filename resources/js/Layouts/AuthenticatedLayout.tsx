import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { X, Menu, User, UserCircle, Settings, LogOut } from 'lucide-react';
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        const { isOpen, toggle, close } = useMobileMenu();
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

<nav className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-gray-900 border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
                <div className="flex items-center justify-between h-full">
                  {/* Left section */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={toggle}
                      className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {isOpen ? (
                        <X className="h-5 w-5 text-gray-300" />
                      ) : (
                        <Menu className="h-5 w-5 text-gray-300" />
                      )}
                    </button>
                    <Link href="/" className="flex items-center gap-2">
                      <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        GamingBaeren.de
                      </span>
                    </Link>
                  </div>

                  {/* Center section */}
                  <div className="hidden lg:flex items-center gap-6">
                    <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                      Dashboard
                    </Link>
                    {/* <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                      Downloads
                    </Link> */}
                  </div>

                  {/* Right section */}
                  <div className="flex items-center gap-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg transition-colors">
                          <User className="h-5 w-5 text-gray-300" />
                          <span className="hidden lg:block text-sm text-gray-300">Logged In</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-gray-900 border border-gray-800">
                          <Link href="/profile">
                            <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                              <UserCircle className="h-4 w-4 mr-2" />
                              My Profile
                            </DropdownMenuItem>
                          </Link>
                          <Link href="/settings">
                            <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                              <Settings className="h-4 w-4 mr-2" />
                              Settings
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuSeparator className="bg-gray-800" />
                          <Link method="post" href="/logout">
                            <DropdownMenuItem className="text-red-400 focus:text-red-300 focus:bg-gray-800">
                              <LogOut className="h-4 w-4 mr-2" />
                              Logout
                            </DropdownMenuItem>
                          </Link>
                        </DropdownMenuContent>
                      </DropdownMenu>

                  </div>
                </div>
              </div>

              {/* Mobile menu */}
              {isOpen && (
                <div className="lg:hidden relative bg-gray-900 border-b border-gray-800 py-4 shadow-lg">
                  <div className="px-4 space-y-4">
                    <Link
                      href="/"
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                      onClick={close}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                      onClick={close}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/team"
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                      onClick={close}
                    >
                      Team
                    </Link>
                    <Link
                      href="/reports"
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                      onClick={close}
                    >
                      Reports
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
            {/* <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav> */}

            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
