/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
// import { Modal } from "./modal";
// import { FullPageImageView } from "~/common/full-page-image-view";

import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";


export default async function FullImagePageView( props: { id: number}) {
 
  try{
    const image = await getImage(props.id);

    // const userinfo  = await clerkClient.users.getUser(image.userId);
  
    return (
      <div className="flex flex-row w-full h-full min-w-0">
          <div className="flex-shrink flex items-center justify-center">
          <img src={image.url} alt={`image ${image.name}`} className=" object-contain" />
          </div>
          <div className="w-48 flex flex-col flex-shrink-0 border-l">
              <div className="text-xl font-bold border-b p-2 text-center text-white"> {image.name} </div>
              {/* <div className="p-2">Uploaded by: </div>
              <div className="">{userinfo?.fullName}</div> */}
              <div className="p-2 text-white">Created on: </div>
              <div className="p-2 text-white">{image.createdAt.toLocaleDateString()}</div>

              <div className="p-2">
                <form action={async () => {
                  "use server";
                  await deleteImage(props.id);
                }}>
                <Button variant="destructive" type="submit">Delete Image</Button>
                </form>
              </div>
  
          </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-row w-full h-full min-w-0">
        <div className="flex-shrink flex items-center justify-center">
          <p>Error loading image or user information.</p>
        </div>
      </div>
    );
  }
}