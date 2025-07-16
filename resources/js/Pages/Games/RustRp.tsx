import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { X, Menu, User, UserCircle, Settings, LogOut, LogIn, UserPlus } from 'lucide-react';
import { useMobileMenu } from '@/hooks/use-mobile-menu';

export default function RustRp() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { props } = usePage();
  const { auth } = props;

  return (
    <>
      <Head title="Rust Roleplay Server - GamingBaeren.de" />
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
                <Link href="/games/rust-rp" className="text-gray-300 hover:text-white transition-colors">
                  Rust-RP
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
                          <UserPlus className="h-4 w-4 mr-2" />
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
      <div className="max-w-7xl mx-auto p-6 text-white">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">GamingBaeren.de-RP</h1>
          <p className="text-lg mb-2">
            Wir sind ein Roleplay Server aber keine Sorge wir sind kein Hardcore-RP-Server ihr braucht keine Angst vor Fehlern zu haben.
          </p>
          <p className="text-lg mb-2">
            Streamen ist hier nur nach Erlaubnis gestattet.
          </p>
          <p className="text-lg mb-4">
            Unser Rust Roleplay Server bietet eine freundliche Community, spannende Rollenspiel-Erlebnisse und regelmäßige Events. Tritt ein und werde Teil unserer wachsenden Familie!
          </p>
          <p className="text-sm text-gray-400">
            Der Server steht in Deutschland. Lies dir die weiteren Abschnitte im Info-Panel durch für mehr Infos über den Server wie Regeln und mehr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Regeln</h2>
          <p className="text-lg mb-1">Hier sind die Regeln für den Server</p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Keine Cheats</li>
            <li>Kein Bugusing</li>
            <li>Kein Metagaming (Außer im Falle Regelfragen oder <b>WIRKLICH NÖTIGER RP ABSPRACHE</b>)</li>
            <li>Kein Spamming</li>
            <li>Keine Beleidigungen die nicht auf das RP zurückzuführen sind</li>
            <li>Keine Werbung für andere Server <b>Explicit das abwerben ist untersagt</b> über andere Server darf geredet werden solange es kein abwerben ist.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Wipe Cycle</h2>
          <p className="text-lg mb-1">Wir wipen alles was gebaut ist einmal im Monat.</p>
          <p className="text-lg">Technologischer Fortschritt und das Bankkonto werden alle 6 Monate gelöscht. immer im Januar und Juli.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">📜 Allgemeine Staatsgesetze</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Anweisungen eine/r Staatsdiener/in sind Folge zu leisten.</li>
            <li>Der Polizei ist es erlaubt, Personen zu kontrollieren.</li>
            <li>Bei Gefahr im Verzug kann auf Anordnung einer Polizeiführungskraft eine Hausdurchsuchung durchgeführt werden.</li>
            <li>Als Gefahr im Verzug zählt:</li>
            <li>  • Gefahr um Leben und/oder Eigentum</li>
            <li>  • Zerstörung von Beweismitteln</li>
            <li>  • Planung/Durchsetzung einer Verbrecherischen Aktion</li>
            <li>Haftstrafen gelten ab dem Moment, wenn der/die Straftäter/in die Zelle betritt.</li>
            <li>Bei Verstoß von Bewährungsauflagen wird ein Haftbefehl erlassen.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🔫 Waffenrecht & Sicherheit</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Jeder Bürger hat das Recht, eine legale Waffe zur Selbstverteidigung zu besitzen (mit Lizenz).</li>
            <li>Illegale Waffen sind:</li>
            <li>  • Minigun</li>
            <li>  • Zielsuchender Raketenwerfer</li>
            <li>Das Platzieren von Fallen, Minen oder Selbstschussanlagen ist auf allen öffentlich zugänglichen Bereichen verboten.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🧠 Persönlichkeitsrechte</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Jede/r Inselbewohner/in hat das Recht auf körperliche und seelische Unversehrtheit.</li>
            <li>Psychische Druckausübung ist strafbar und wird als Körperverletzung geahndet.</li>
            <li>Mutwillige Beschädigung fremden Eigentums ist strafbar.</li>
            <li>Das Festsetzen oder Entführen einer Person ist strafbar.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">💼 Betrug & Urkundenfälschung</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Betrug und Betrugsabsicht ist strafbar.</li>
            <li>Falschaussagen vor einem/r Justizvertreter/in sind strafbar.</li>
            <li>Das Ausnutzen und Vortäuschen von Notfällen ist strafbar.</li>
            <li>Das Vortäuschen einer falschen Identität ist strafbar.</li>
            <li>Das Verändern offizieller Dokumente durch Dritte oder einen selbst ist strafbar.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">⚖ Strafverfolgung</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Jegliche Straftat wird nach dem aktuellsten Strafenkatalog bestraft. Strafkatalog ist online abrufbar (InfoPanel).</li>
            <li>Der Besitz und Verkauf von illegalen Gegenständen ist strafbar. Diese Gegenstände werden konfisziert.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🚗 Verkehrsregeln</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Derzeit herrscht weder Rechts- noch Linksverkehr.</li>
            <li>Im Stadtgebiet gilt ein Tempolimit von 50 km/h für Autos und Pferde.</li>
            <li>Schneemobile dürfen im Stadtgebiet nicht auf der Straße fahren.</li>
            <li>Führerscheine sind Pflicht (Auto, Flugschein).</li>
            <li>Das Parken in Parkverbotszonen ist nicht zulässig.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">⛔ Allgemeine Strafbestimmungen</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Mitführen eines Ausweis ist Pflicht: 250€ – 500€</li>
            <li>Nichtbefolgen von Anweisungen eines/r Staatsdiener/in: 250€ – 500€</li>
            <li>Verweigerung einer Polizeikontrolle: 500€ – 1000€</li>
            <li>Widerstand gegen Maßnahmen bei Gefahr im Verzug: 10 – 20 Min Haft</li>
            <li>Falschaussage vor einem/r Justizvertreter/in: 1000€ oder 15 Min Haft</li>
            <li>Verstoß gegen Bewährungsauflagen: Haftbefehl + 10 Min Haft</li>
            <li>Vortäuschen eines Notfalls: 500€ – 1500€ oder 5 – 10 Min Haft</li>
            <li>Vortäuschung einer falschen Identität: 10 – 15 Min Haft</li>
            <li>Veränderung offizieller Dokumente: 15 – 30 Min Haft</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🔫 Waffen- & Sicherheitsvergehen</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Besitz illegaler Waffen (z. B. Minigun, Raketenwerfer): 20 – 40 Min Haft + Konfiszierung</li>
            <li>Verkauf illegaler Gegenstände: 20 Min Haft + Geldstrafe je nach Menge</li>
            <li>Besitz legaler Waffe ohne Lizenz: 1000€ oder Lizenzentzug</li>
            <li>Platzieren von Fallen, Minen oder Selbstschussanlagen: 1000€ – 3000€ oder 10 Min Haft</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🧠 Körperliche & Psychische Gewalt</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Körperverletzung (auch psychische Gewalt): 15 – 30 Min Haft</li>
            <li>Psychische Druckausübung ist strafbar und wird als Körperverletzung geahndet.</li>
            <li>Entführung oder Festsetzen einer Person: 30 – 60 Min Haft</li>
            <li>Mutwillige Sachbeschädigung: 1000€ – 3000€ oder 10 Min Haft</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">💼 Wirtschaftskriminalität</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Betrug oder Betrugsabsicht ist strafbar.</li>
            <li>Falschaussagen vor einem/r Justizvertreter/in sind strafbar.</li>
            <li>Das Ausnutzen und Vortäuschen von Notfällen ist strafbar.</li>
            <li>Das Vortäuschen einer falschen Identität ist strafbar.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">🚗 Verkehrsdelikte</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Verstoß gegen das Tempolimit: 200€ – 500€</li>
            <li>Verstoß gegen das Parken in Parkverbotszonen: 250€</li>
            <li>Verstoß gegen das Fahren ohne Führerschein: 1000€ + Fahrzeugbeschlagnahmung</li>
            <li>Verstoß gegen das Fliegen ohne Flugschein: 1000€ + Flugzeugbeschlagnahmung</li>
            <li>Verstoß gegen das Fahren mit Alkohol im Blut: 500€</li>
            <li>Verstoß gegen das Fahren mit Drogen im Blut: 500€</li>
            <li>Fahren mit Schneemobil im Stadtgebiet: 300€ oder Fahrzeugbeschlagnahmung</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Shop/Spenden</h2>
          <p className="text-lg font-bold mb-1">Shop/Spenden</p>
          <p className="text-sm">https://rust.shop.gamingbaeren.de</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Commands</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>/sb oder /skinbox – Öffnet die Skinbox, um Kleidung oder Gegenstände zu skinnen.</li>
            <li>/sd – Öffnet die Skinbox für bereits platzierte Gegenstände.</li>
            <li>/rename "Neuer Name"– Ändert euren Namen im Spiel – ideal fürs Rollenspiel.</li>
            <li>/kit – Zeigt eine Liste aller verfügbaren Kits an.</li>
            <li>/remove – Öffnet das Remover-Tool, um platzierte Gegenstände zu entfernen.</li>
            <li>/sre status – Zeigt die verbleibende Zeit bis zum nächsten Serverneustart an.</li>
            <li>/bskin – Öffnet eine grafische Benutzeroberfläche zum Einstellen des Standard-Bau-Skins.</li>
            <li>/bskin build – Aktualisiert den Skin des betrachteten Bauwerks und angrenzender Teile.</li>
            <li>/bskin all – Aktualisiert alle Gebäude-Skins im Besitz des Spielers.</li>
            <li>/sr workshopid – Um einen Skin aus dem Steam Workshop zu requesten.</li>
            <li>/sil Internetadresse des Bildes – Zum Kopieren von Bildern auf ein Schild (aktuell frei für alle).</li>
            <li>/info – Öffnet das Info-Panel mit nützlichen Serverinfos.</li>
            <li>/dance 1/2/3 – Nutzt die Dance-Emotes aus dem Voice Props DLC (DLC nicht erforderlich).</li>
            <li>/shop - Zum öffnen des naturemarket dort kanb man ausgewählte prefabs kaufen</li>
            <li>Sprachreichweiten – Enter drücken und unter der Ausrüstungsleiste die gewünschte Reichweite wählen.</li>
            <li>Ausweis ansehen – Ausrüsten und Taste "E" drücken.</li>
            <li>Ausweis nicht mehr ansehen – Ausrüsten und Taste "R" drücken.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Discord</h2>
          <p className="text-center text-blue-500 text-xl font-bold">
            https://discord.gamingbaeren.de
          </p>
        </section>
      </div>
    </>
  );
}

