/* eslint-disable @next/next/no-img-element */
// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImagePageView( props: { id: number}) {
 
  const image = await getImage(props.id);

  return (
      <img src={image.url} alt={`image ${image.name}`} />
  );
}