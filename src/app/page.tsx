import Link from "next/link";
import Image from "next"
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";


async function Images () {
  const images = await db.query.images.findMany(
    {
      orderBy: (model, { desc}) => desc(model.id)
    }
  );
  return(
    <div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div className="w-48 p-4" key={image.id}>
        <img src={image.url} alt="image" />
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
