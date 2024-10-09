import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex items-center pl-12">
      {/* Content */}
      <div className=" font-bold flex flex-col  flex-1 pr-5">
        <h6>Hi I am</h6>
        <h3 className="text-hovered text-2xl">Muhammad Umair</h3>
        <h1 className="text-left text-8xl">UI & UX</h1>
        <h1 className="text-right text-8xl">Designer</h1>
        <p className="font-normal mb-4  pt-8 ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <Button className="w-1/4">Hire Me</Button>
      </div>
      {/* Image */}
      <div className="  flex-1 flex flex-col items-center justify-between gap-6 ">
        <Image
          src="/images/hero-image.png"
          height={600}
          width={400}
          alt="Hero Image"
          className=" "
        />

        {/* Icons */}
        <div className="flex gap-4 px-3">
          <Image
            src="/icons/facebook.png"
            height={32}
            width={32}
            alt="Facebook Icon"
          />
          <Image
            src="/icons/twitter.png"
            height="32"
            width="32"
            alt="Twitter Icon"
          />
          <Image
            src="/icons/instagram.png"
            height="32"
            width="32"
            alt="Instagram Icon"
          />
          <Image
            src="/icons/linkedin.png"
            height="32"
            width="32"
            alt="LinkedIn Icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
