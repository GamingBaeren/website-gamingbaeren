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
import { X, Menu, User, UserCircle, Settings, LogOut, UserPlus, LogIn } from 'lucide-react';
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
                    <Link href="/images/upload" className="text-gray-300 hover:text-white transition-colors">
                      Image Upload
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
                          <span className="hidden lg:block text-sm text-gray-300">Login</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-gray-900 border border-gray-800">
                          <Link href={route('login')}>
                            <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                              <LogIn className="h-4 w-4 mr-2" />
                              Login
                            </DropdownMenuItem>
                          </Link>
                          <Link href={route('register')}>
                            <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                              <UserPlus className="h-4 w-4 mr-2" />
                              Sign-up
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
                      href="/images/upload"
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                      onClick={close}
                    >
                      Image Upload
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
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
