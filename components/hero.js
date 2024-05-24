import Image from "next/image"
import { Button } from "./ui/button"
import { Icons } from "./icons"

export function Hero() {
  return (
    <section className="bg-lila-slate-100 relative pt-[200px] md:pt-[30vw] pb-[108px] px-[5vw] md:px-[10vw] overflow-hidden">
      <Image
        src="/images/img-red-blob.png"
        alt="red-blob"
        width={1740}
        height={1707}
        className="absolute top-0 left-0 w-[40vw]"
      />
      <Image
        src="/images/img-green-blob.png"
        alt="green-blob"
        width={830}
        height={639}
        className="absolute top-0 right-0 w-[20vw]"
      />
      <Image
        src="/images/img-large-blob.png"
        alt="large-blob"
        width={2166}
        height={2100}
        className="absolute bottom-[-12.5vw] right-0 w-[50vw]"
      />

      <div className="relative z-10">
        <h1 className="text-lila-gray-100 text-5xl md:text-[90px] font-medium tracking-wider text-balance">
          Turning expectations into certainty
        </h1>
        <p className="text-lila-gray-300 mt-8 text-base md:text-xl max-w-[690px] text-balance leading-normal">
          We help on-chain businesses reduce their treasury&apos;s volatility by
          providing liquid, fixed-income solutions and customized offerings for
          client needs.
        </p>

        <Button className="mt-6 md:mt-12" icon={<Icons.solarArrowDown />}>
          Learn More
        </Button>
      </div>
    </section>
  )
}
