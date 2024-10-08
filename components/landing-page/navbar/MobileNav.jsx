import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Image from 'next/image'

const MobileNav = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center lg:hidden">
      <Sheet>
        <div>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>
        <div className="md:hidden w-full flex-1 justify-center items-center text-center">
          <div className="flex items-center justify-center gap-1">
            <Image src="/favicon.ico" height="32" width="32" />
            <p className="text-xl font-semibold leading-3">Mumair</p>
          </div>
        </div>

        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src="/favicon.ico" height="32" width="32" />
              <span className="sr-only">Mumair Portfolio</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              About Me
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              Services
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              Projects
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              Testimonials
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-hovered">
              Contacts
            </Link>
            <Button href="#" className="">
              Download CV
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
