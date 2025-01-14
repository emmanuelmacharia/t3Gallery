// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className=""> {photoId} </div>
    // <Modal>
    //   <FullPageImageView photoId={photoId} />
    // </Modal>
  );
}