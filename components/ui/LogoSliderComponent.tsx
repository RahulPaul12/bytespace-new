import Image from "next/image";

const LOGOS = [
    "/images/client/client-1.png",
    "/images/client/client-2.png",
    "/images/client/client-3.png",
    "/images/client/client-4.png",
];

const LogoSliderComponent = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-slider hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[0, 2].map((n) => (
                <div key={n} aria-hidden={n === 1} className="flex shrink-0 items-center justify-around gap-18 px-9">
                  {LOGOS.map((src, index) => (
                    <div className="flex w-auto h-10 shrink-0 items-center justify-center" key={index}>
                      <Image src={src} alt="partner logo" width={400} height={400} className="h-full w-full" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
    )
}

export default LogoSliderComponent