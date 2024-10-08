import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex w-full   items-center">
      <div className="flex items-center   w-full justify-between">
        <div className=" ">
          <Link
            href="#"
            className="flex items-center gap-2 text-3xl font-semibold leading-4 "
          >
            <Image src="/favicon.ico" height="48" width="48" />
            <span className="font-secondary text-[#1E1E1E]  tracking-wide">
              M<span className="font-extralight text-[#545454]">umair</span>
            </span>
          </Link>
        </div>
        <div className="text-md text-black  flex-end space-x-4">
          <Link href="#" className="transition-colors hover:text-hovered">
            Home
          </Link>
          <Link href="#" className="transition-colors hover:text-hovered">
            About Me
          </Link>
          <Link href="#" className="transition-colors hover:text-hovered">
            Services
          </Link>
          <Link href="#" className="transition-colors hover:text-hovered">
            Projects
          </Link>
          <Link href="#" className="transition-colors hover:text-hovered">
            Testimonials
          </Link>
          <Link href="#" className="transition-colors hover:text-hovered">
            Contacts
          </Link>
          <Button href="#" className="">
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNav
