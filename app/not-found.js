import Image from "next/image";
import Link from "next/link";
import bomb from "@/public/assets/bomb.png";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[120px] sm:text-[220px] 2xl:text-[400px] leading-none font-bold flex gap-2 justify-center">
        <span>4</span>
        <Image
          className="max-w-[80px] sm:max-w-[140px] 2xl:max-w-[280px] h-auto object-contain"
          src={bomb}
          alt="404 Page not found"
        />
        <span className="sr-only">0</span>
        <span>4</span>
      </h1>

      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold my-3">
          Oops! Page not found.
        </h2>
        <Link href="/">
          <ButtonPrimary>Go Home</ButtonPrimary>
        </Link>
      </div>
    </main>
  );
}
