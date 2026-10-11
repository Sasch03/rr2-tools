import { Calculator, Castle, Menu, Swords } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export function NavigationMenu() {
  return (
    <Sheet>
      <SheetTrigger
        className="group relative flex size-11 cursor-pointer items-center justify-center rounded-md border border-[#8d7549] bg-gradient-to-br from-[#5b5b54] via-[#30302d] to-[#171715] text-[#e8cf8a] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_8px_rgba(0,0,0,0.6)] transition-all duration-200 hover:border-[#c4a45e] hover:text-[#ffe6a3] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_12px_rgba(196,164,94,0.25)]"
        aria-label="Navigation öffnen"
      >
        <span className="absolute top-1 left-1 size-1 rounded-full bg-[#b8a16b] shadow-inner" />
        <span className="absolute top-1 right-1 size-1 rounded-full bg-[#b8a16b] shadow-inner" />
        <span className="absolute bottom-1 left-1 size-1 rounded-full bg-[#b8a16b] shadow-inner" />
        <span className="absolute right-1 bottom-1 size-1 rounded-full bg-[#b8a16b] shadow-inner" />

        <Menu className="size-6 drop-shadow-md" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-80 border-r border-[#a88845] bg-[#15130f] text-[#eee1bd] shadow-[10px_0_35px_rgba(0,0,0,0.65)]"
      >
        <SheetHeader className="border-b border-[#66552f] pb-5">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md border border-[#997b3e] bg-[#211d14] text-[#d8b967]">
              <Castle className="size-5" />
            </div>

            <div>
              <SheetTitle className="font-serif text-xl tracking-wide text-[#e1c16e]">
                Royal Revolt 2
              </SheetTitle>

              <SheetDescription className="text-[#8f836a]">
                Rechner & Simulator
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex items-center gap-3 px-4 text-[#76633a]">
          <span className="h-px flex-1 bg-[#66552f]" />
          <span className="text-xs">◆</span>
          <span className="h-px flex-1 bg-[#66552f]" />
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <button className="flex cursor-pointer items-center gap-3 rounded-md border border-[#725d31] bg-[#292317] px-4 py-3 text-left text-sm font-medium text-[#e1c16e] transition-colors hover:bg-[#332a1a]">
            <Castle className="size-4" />
            Startseite
          </button>

          <button className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent px-4 py-3 text-left text-sm text-[#bdb196] transition-colors hover:border-[#554728] hover:bg-[#211d15] hover:text-[#e1c16e]">
            <Calculator className="size-4" />
            Rechner
          </button>

          <button className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent px-4 py-3 text-left text-sm text-[#bdb196] transition-colors hover:border-[#554728] hover:bg-[#211d15] hover:text-[#e1c16e]">
            <Swords className="size-4" />
            Simulator
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
