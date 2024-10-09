import Hero from '@/components/landing-page/hero/Hero'
import Navbar from '@/components/landing-page/navbar/Navbar'

export const description =
  'An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales.'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* 2. Hero Section */}
        <Hero />
        {/* 3. About Me Section */}
        {/* 4. Service  */}
        {/* 5. My Project Section */}
        {/* 6. Testimonial Section */}
        {/* 7. Contact Section */}
        {/* 8. Footer Section  */}
      </main>
    </div>
  )
}
