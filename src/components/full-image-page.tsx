/* eslint-disable @next/next/no-img-element */
// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImagePageView( props: { id: number}) {
 
  const image = await getImage(props.id);

  return (
    <div className="flex flex-row w-full h-full min-w-0">
        <div className="flex-shrink flex items-center justify-center">
        <img src={image.url} alt={`image ${image.name}`} className=" object-contain" />
        </div>
        <div className="w-48 flex flex-col flex-shrink-0 border-l">
            <div className="text-xl font-bold text-white"> {image.name} </div>
        </div>
    </div>
  );
}