// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const imgIdAsNumber = Number(photoId);

  if (Number.isNaN(imgIdAsNumber)) throw Error("Image Id is a number");
  const image = await getImage(imgIdAsNumber);

  return (
    <div className="">
      <Image src={image.url} width={600} height={600} alt={`image ${image.name}`} />
       </div>
    // <Modal>
    //   <FullPageImageView photoId={photoId} />
    // </Modal>
  );
}