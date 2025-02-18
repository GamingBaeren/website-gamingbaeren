import { Users, Trophy, Video, Gamepad2, Menu, Home, Layout, Settings, LogIn, LayoutDashboard, LogOut, User, Bell, Search, X, UserCircle } from "lucide-react";
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useIsMobile } from "@/hooks/use-mobil";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import React from 'react';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
export default function Welcome({
  auth,
  laravelVersion,
  phpVersion,

}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  const handleImageError = () => {
    document
      .getElementById('screenshot-container')
      ?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document
      .getElementById('docs-card-content')
      ?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // Auto-collapse on mobile
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);
  const Index = () => {
    const games = [
      { name: "Minecraft", players: "200+" },
      { name: "League of Legends", players: "150+" },
      { name: "Valorant", players: "100+" },
      { name: "CS:GO", players: "175+" },
    ];

    const stats = [
      { icon: Users, label: "Active Members", value: "1000+" },
      { icon: Trophy, label: "Weekly Tournaments", value: "5+" },
      { icon: Video, label: "Streaming Channels", value: "10+" },
      { icon: Gamepad2, label: "Game Categories", value: "20+" },
    ];

    const rules = [
      "Be respectful to all members",
      "No spam or self-promotion",
      "Keep content appropriate",
      "Use appropriate channels",
      "Follow Discord's TOS",
    ];

    const { isOpen, toggle, close } = useMobileMenu();


    return (
      <>

        <Head title="Welcome" />
        {/* Hero Section */}
        <div>

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
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                      Dashboard
                    </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                      Downloads
                    </Link>
                  </div>

                  {/* Right section */}
                  <div className="flex items-center gap-4">
                    {auth.user ? (
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
                    ) : (
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
                              <LogIn className="h-4 w-4 mr-2" />
                              Sign-up
                            </DropdownMenuItem>
                          </Link>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
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

          <div className={`ml-0 md:ml-0 lg:${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}> {/* Add transition here */}
            <div className="hero-section">

              <div className="hero-overlay"></div>
              <div className="hero-content">
                <svg className="hero-logo animate-fade-up"
                  width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <circle cx="250" cy="250" r="250" fill="#FAF3F0" />
                  <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M973 3244 c-50 -25 -67 -61 -64 -132 1 -13 16 -39 35 -58 29 -29 41
                               -34 81 -34 40 0 52 5 81 34 19 19 34 43 34 55 0 19 -6 21 -54 21 -72 0 -83
                               -18 -14 -22 l53 -3 -32 -32 c-42 -44 -92 -45 -134 -4 -38 39 -39 87 -3 130 21
                               26 33 31 69 31 36 0 48 -5 68 -30 23 -27 47 -39 47 -25 0 18 -39 60 -67 71
                               -41 18 -60 17 -100 -2z"/>
                    <path d="M1412 3157 c-56 -139 -56 -137 -43 -137 7 0 17 14 22 30 10 28 14 30
                               65 30 52 0 56 -2 65 -30 6 -16 17 -30 25 -30 10 0 11 6 5 23 -46 115 -84 203
                               -90 209 -4 5 -26 -38 -49 -95z m70 -2 l17 -45 -39 0 c-22 0 -40 2 -40 5 0 13
                               33 85 39 85 4 0 14 -20 23 -45z"/>
                    <path d="M2500 3142 c0 -75 4 -122 10 -122 6 0 10 34 10 81 0 49 4 78 10 74 5
                               -3 33 -39 61 -80 28 -41 53 -75 55 -75 2 0 4 52 4 115 0 131 -18 159 -22 34
                               l-3 -80 -62 87 -63 88 0 -122z"/>
                    <path d="M2954 3244 c-40 -19 -64 -62 -64 -114 0 -34 6 -48 34 -76 29 -29 41
                               -34 80 -34 36 0 52 6 81 31 22 19 35 40 35 55 0 22 -4 24 -55 24 -67 0 -73
                               -18 -7 -22 l47 -3 -32 -32 c-60 -63 -148 -33 -160 54 -5 37 -2 45 25 73 43 42
                               100 43 135 0 14 -16 30 -30 36 -30 31 0 -11 58 -55 76 -42 18 -61 17 -100 -2z"/>
                    <path d="M1779 3135 c-19 -86 -22 -115 -13 -115 7 0 17 24 24 58 22 114 23
                               114 59 18 19 -47 35 -86 36 -86 1 0 14 33 30 73 15 39 31 76 35 80 4 5 15 -25
                               24 -67 10 -42 22 -76 27 -76 12 0 12 14 -6 95 -9 39 -18 85 -22 103 -3 17 -9
                               32 -12 32 -4 0 -20 -36 -37 -81 -17 -44 -35 -79 -40 -78 -5 1 -22 37 -39 80
                               -16 44 -32 79 -35 79 -4 0 -18 -52 -31 -115z"/>
                    <path d="M2237 3243 c-4 -3 -7 -55 -7 -115 0 -89 3 -108 15 -108 12 0 15 19
                               15 115 0 105 -5 127 -23 108z"/>
                    <path d="M3625 3090 c-214 -49 -428 -157 -630 -319 -129 -103 -285 -275 -285
                               -314 0 -32 25 -17 60 36 54 80 193 215 314 305 187 138 398 234 589 268 205
                               36 305 0 294 -106 -10 -102 -100 -220 -252 -328 -88 -62 -88 -62 -159 -62
                               -127 0 -252 -41 -295 -96 -25 -32 -23 -45 11 -61 35 -18 116 4 246 67 57 28
                               114 50 127 50 58 0 110 -83 103 -165 l-3 -40 -122 -7 c-154 -8 -294 -37 -453
                               -92 -69 -23 -133 -46 -143 -51 -21 -9 21 62 161 270 151 223 311 426 375 473
                               9 7 17 20 17 28 0 94 -323 -310 -569 -713 -55 -89 -70 -106 -117 -134 -73 -41
                               -148 -116 -164 -163 -14 -45 -1 -86 36 -110 l23 -16 -25 -56 c-18 -40 -22 -60
                               -15 -67 15 -15 26 -2 48 56 l18 48 105 4 c249 7 557 140 730 315 36 37 76 90
                               90 119 l25 52 73 -5 c64 -4 73 -3 70 12 -2 9 -10 18 -18 19 -8 1 -36 4 -61 8
                               l-45 6 0 62 c0 34 -6 73 -13 87 -19 35 -62 80 -78 80 -27 0 -11 19 50 63 34
                               24 95 79 136 122 149 157 169 293 51 353 -37 18 -60 22 -135 21 -49 0 -126 -9
                               -170 -19z m-95 -570 c-52 -29 -181 -78 -214 -82 -48 -5 -41 19 14 47 57 29
                               147 53 200 54 l35 0 -35 -19z m194 -239 c10 -15 -69 -124 -128 -178 -164 -150
                               -468 -273 -673 -273 -46 0 -83 3 -83 7 0 9 96 198 122 241 23 37 55 55 189
                               105 111 42 216 71 314 86 122 20 251 26 259 12z m-863 -321 c-31 -60 -59 -110
                               -63 -110 -15 0 -38 33 -38 56 0 37 28 72 93 121 33 24 60 43 62 43 2 0 -23
                               -49 -54 -110z"/>
                    <path d="M2340 2891 c-203 -66 -419 -257 -600 -531 -79 -121 -129 -220 -170
                               -340 -74 -214 -31 -332 119 -332 156 0 361 117 614 351 55 50 103 91 108 91
                               12 0 -2 -34 -72 -180 l-60 -125 -171 -125 c-367 -269 -561 -439 -599 -525 -18
                               -41 -19 -47 -4 -75 27 -52 88 -52 192 0 153 77 360 303 537 589 l68 111 167
                               117 c225 159 351 253 351 263 0 23 -25 18 -63 -12 -34 -28 -202 -149 -384
                               -276 l-32 -23 41 88 c89 194 110 263 78 263 -5 0 -61 -47 -123 -105 -288 -267
                               -493 -394 -640 -395 -120 0 -153 79 -106 250 39 145 144 341 265 497 129 165
                               273 290 409 353 144 68 233 73 280 18 49 -59 25 -172 -61 -285 -25 -33 -32
                               -63 -14 -63 14 0 66 73 103 145 38 73 44 163 14 208 -44 67 -135 84 -247 48z
                               m-175 -1248 c-192 -290 -402 -498 -542 -539 -39 -11 -57 -12 -73 -4 -75 40 67
                               187 480 499 102 76 187 137 189 135 2 -2 -22 -43 -54 -91z"/>
                    <path d="M2850 1725 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
                               -11 -4 -11 -13z"/>
                    <path d="M2916 1733 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z" />
                    <path d="M2887 1683 c-3 -5 -19 -42 -35 -83 -17 -41 -38 -92 -46 -112 -14 -32
                               -14 -38 -2 -38 7 0 19 14 26 30 12 28 16 30 65 30 50 0 54 -2 64 -30 9 -26 31
                               -42 31 -22 0 8 -89 224 -94 230 -2 2 -6 0 -9 -5z m40 -140 c-3 -2 -21 -3 -40
                               -1 l-34 3 20 45 19 45 20 -43 c11 -24 17 -46 15 -49z"/>
                    <path d="M3971 1573 c-1 -141 17 -170 21 -36 l3 86 59 -86 c33 -48 63 -87 68
                               -87 4 0 8 52 8 115 0 96 -3 115 -15 115 -12 0 -15 -16 -15 -82 l0 -82 -50 69
                               c-28 39 -57 79 -65 90 -12 18 -14 6 -14 -102z"/>
                    <path d="M2440 1565 l0 -115 53 0 c66 0 97 20 97 62 0 17 -7 39 -15 48 -13 14
                               -14 22 -4 43 10 22 9 31 -5 52 -14 22 -24 25 -71 25 l-55 0 0 -115z m105 60
                               c0 -27 -3 -30 -37 -33 -38 -3 -38 -3 -38 33 0 36 0 36 38 33 34 -3 37 -6 37
                               -33z m13 -77 c32 -32 0 -78 -54 -78 -34 0 -34 0 -34 45 l0 45 38 0 c21 0 43
                               -5 50 -12z"/>
                    <path d="M3220 1565 c0 -70 4 -115 10 -115 6 0 10 20 10 45 0 32 4 45 14 45 8
                               0 29 -20 47 -45 18 -25 38 -45 46 -45 19 0 16 8 -17 50 l-31 39 23 12 c31 16
                               38 28 38 65 0 45 -26 64 -88 64 l-52 0 0 -115z m108 83 c33 -33 -9 -94 -60
                               -86 -20 3 -23 10 -26 51 l-3 47 38 0 c22 0 44 -5 51 -12z"/>
                    <path d="M3590 1565 l0 -115 70 0 c84 0 94 18 13 22 l-58 3 0 40 0 40 58 3
                               c73 4 66 22 -9 22 l-54 0 0 40 0 40 60 0 c33 0 60 4 60 10 0 6 -30 10 -70 10
                               l-70 0 0 -115z"/>
                  </g>
                </svg>
                <p className="hero-text">Join our community of passionate gamers where every player matters</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <Users />
                    <span>1000+ Members</span>
                  </div>
                  <div className="stat-item">
                    <Trophy />
                    <span>Daily Events</span>
                  </div>
                </div>
                <a
                  href="https://discord.gg/your-invite-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button"
                >
                  Join Our Discord
                </a>
              </div>
            </div>
            {/* Featured Games Section */}
            <section className="featured-games">
              <h2>Featured Games</h2>
              <div className="games-grid">
                {games.map((game) => (
                  <div key={game.name} className="game-card">
                    <div className="game-header">
                      <Gamepad2 />
                      <span>{game.players}</span>
                    </div>
                    <h3>{game.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Community Stats Section */}
            <section className="community-stats">
              <h2>Our Community</h2>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <stat.icon />
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Server Rules Section */}
            <section className="server-rules">
              <h2>Server Rules</h2>
              <div className="rules-container">
                {rules.map((rule, index) => (
                  <div key={index} className="rule-card">
                    <p>
                      <span className="rule-number">#{index + 1}</span> {rule}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Discord Button */}
            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="join-discord-button"
            >
              <Gamepad2 />
              <span>Join Discord</span>
            </a>
          </div>
        </div>
      </>
    );
  };

  return <Index />;
};


