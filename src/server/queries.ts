import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";


export async function getUser() {
    const user = await auth();
    if (!user.userId) throw new Error("Unauthorized");
    return user;
}

export async function getUserImages() {
    const user = await getUser()
      const images = await db.query.images.findMany(
        {
            where: (model, { eq } ) => eq(model.userId, user.userId),
            orderBy: (model, { desc}) => desc(model.id)
        });

        return images;
}

