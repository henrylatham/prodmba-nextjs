import Image from "next/image";
import ProdMBAHero from "@/public/ProdMBAWebsite-min.png"
import config from "@/config";
import ButtonExternal from './ButtonExternal'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center text-center lg:text-left lg:items-start">

      <p className="text-sm text-base-content text-opacity-50">
          COMING SOON
        </p>
        <h1 className="text-white font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-2">
          Prod MBA 2.0
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          I&apos;m taking a break from running Prod MBA to build 12 startups in 12 months.<br /><br/> I&apos;ll be sharing what I learn in a new playbook to help you build & launch successful AI & SaaS products in under 30 days.
          <br /><br />Want to get a weekly, actionable email on how to build product in 2024?
        </p>
        <ButtonExternal 
        href="https://hlatham.substack.com"
        buttonText={`Get Weekly Tips`}
      />

      </div>
      <div className="lg:w-full">
        <Image
          src={ProdMBAHero}
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
