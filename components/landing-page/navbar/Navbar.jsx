import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <header className="sticky top-0 md:justify-center w-full flex h-16 items-center gap-4  bg-background px-4 md:px-10 lg:py-12">
      {/* Navbar for desktop devices */}
      <DesktopNav />
      {/* Navbar for mobile devices */}
      <MobileNav />
    </header>
  )
}

export default Navbar
