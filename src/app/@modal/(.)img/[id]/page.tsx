// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import { Modal } from "./modal";
import FullImagePageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const imgIdAsNumber = Number(photoId);
  if (Number.isNaN(imgIdAsNumber)) throw Error("Image Id is a number");

  return (
    <Modal>
      <FullImagePageView id={imgIdAsNumber}/>
    </Modal>
  );
}