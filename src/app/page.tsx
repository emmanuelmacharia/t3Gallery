import Link from "next/link";
import Image from 'next/image'
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getUserImages } from "~/server/queries";
export const dynamic = "force-dynamic";


async function Images () {
  const images = await getUserImages()
  return(
    <div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div className="w-48 p-4" key={image.id}>
        <Image src={image.url} alt="image" width={480} height={480} />
        <div className="text-light">{image.name}</div>
      </div>
    ))
    }
  </div>
  )
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
