import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image
        src="/uberuserbanner.jpg"
        width={900}
        height={1000}
        className="object-contain h-full w-full"
        alt="Uber user banner"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}
