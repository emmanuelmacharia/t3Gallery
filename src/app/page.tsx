import Link from "next/link";
import Image from "next"
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany(
    {
      orderBy: (model, { desc}) => desc(model.id)
    }
  );
  
  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} alt="image" />
            <div className="text-light">{image.name}</div>
          </div>
        ))
        }
      </div>
    </main>
  );
}
