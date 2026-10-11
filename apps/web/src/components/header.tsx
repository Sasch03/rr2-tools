import { NavigationMenu } from "./navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center border-b border-[#846c38] bg-[#12110e]/95 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.55)] backdrop-blur-md">
      <NavigationMenu />

      <div className="ml-4 h-9 w-px bg-gradient-to-b from-transparent via-[#806b3c] to-transparent" />

      <div className="ml-4">
        <p className="font-serif text-lg font-bold tracking-wide text-[#e1c16e]">
          Royal Revolt 2
        </p>

        <p className="text-xs tracking-[0.18em] text-[#82765e] uppercase">
          Calculator & Simulator
        </p>
      </div>

      <div className="ml-auto hidden items-center gap-3 text-[#6f5c32] sm:flex">
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#6f5c32]" />
        <span className="text-xs">◆</span>
        <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#6f5c32]" />
      </div>
    </header>
  )
}
