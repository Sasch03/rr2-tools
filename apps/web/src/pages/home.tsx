import { Calculator, Castle, ChevronRight, Shield, Swords } from "lucide-react"

export function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#9d7932]/5 blur-[120px]"
      />

      <section className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="mb-12 flex items-center justify-center gap-4 text-[#725e32]"
        >
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#725e32]" />
          <span className="text-xs">◆</span>
          <Shield className="size-5 text-[#a98a45]" />
          <span className="text-xs">◆</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#725e32]" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-7 flex size-16 items-center justify-center rounded-lg border border-[#957838] bg-gradient-to-br from-[#32291a] to-[#17140f] text-[#d6b45c] shadow-[0_8px_25px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,230,160,0.12)]">
            <Castle aria-hidden="true" className="size-8" />
          </div>

          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#a18245] uppercase">
            Royal Revolt 2 Tools
          </p>

          <h1 className="font-serif text-4xl font-bold tracking-wide text-[#ead9aa] sm:text-5xl lg:text-6xl">
            Willkommen, König
          </h1>

          <div
            aria-hidden="true"
            className="mx-auto my-6 flex max-w-md items-center gap-3 text-[#66552e]"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#66552e]" />
            <span className="text-xs">◆</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#66552e]" />
          </div>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#aaa087] sm:text-lg">
            Rechner und Simulatoren für Royal Revolt 2. Wähle ein Werkzeug und
            plane deine nächsten Schritte.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-lg border border-[#806a39] bg-gradient-to-br from-[#211d15] via-[#191713] to-[#12110e] p-[1px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#bb984b] hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="relative h-full rounded-[7px] border border-[#453a24] p-7">
              <span
                aria-hidden="true"
                className="absolute top-2 left-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute top-2 right-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 size-1.5 rotate-45 bg-[#7d6839]"
              />

              <div className="mb-6 flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-md border border-[#725d31] bg-[#292317] text-[#d1aa51]">
                  <Calculator aria-hidden="true" className="size-6" />
                </div>

                <ChevronRight
                  aria-hidden="true"
                  className="size-5 text-[#5f5134] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c4a054]"
                />
              </div>

              <h2 className="font-serif text-2xl font-semibold text-[#ddc78d]">
                Rechner
              </h2>

              <p className="mt-3 leading-6 text-[#aaa087]">
                Berechne Ressourcen, Kosten und weitere Werte für deine Planung.
              </p>

              <div className="mt-7 border-t border-[#403722] pt-4">
                <span className="text-xs tracking-[0.18em] text-[#a18d60] uppercase">
                  Demnächst verfügbar
                </span>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-lg border border-[#806a39] bg-gradient-to-br from-[#211d15] via-[#191713] to-[#12110e] p-[1px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#bb984b] hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="relative h-full rounded-[7px] border border-[#453a24] p-7">
              <span
                aria-hidden="true"
                className="absolute top-2 left-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute top-2 right-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-2 size-1.5 rotate-45 bg-[#7d6839]"
              />
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 size-1.5 rotate-45 bg-[#7d6839]"
              />

              <div className="mb-6 flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-md border border-[#725d31] bg-[#292317] text-[#d1aa51]">
                  <Swords aria-hidden="true" className="size-6" />
                </div>

                <ChevronRight
                  aria-hidden="true"
                  className="size-5 text-[#5f5134] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c4a054]"
                />
              </div>

              <h2 className="font-serif text-2xl font-semibold text-[#ddc78d]">
                Simulator
              </h2>

              <p className="mt-3 leading-6 text-[#aaa087]">
                Simuliere Spielsituationen und vergleiche verschiedene
                Konfigurationen.
              </p>

              <div className="mt-7 border-t border-[#403722] pt-4">
                <span className="text-xs tracking-[0.18em] text-[#a18d60] uppercase">
                  Demnächst verfügbar
                </span>
              </div>
            </div>
          </article>
        </div>

        <div
          aria-hidden="true"
          className="mt-20 flex items-center justify-center gap-3 text-[#594b2d]"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#594b2d]" />
          <span className="text-[9px]">◆</span>
          <span className="text-xs">◆</span>
          <span className="text-[9px]">◆</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#594b2d]" />
        </div>
      </section>
    </main>
  )
}

export default Home
