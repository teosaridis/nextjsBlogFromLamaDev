import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

// GET SINGLE POST

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { id: slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        { message: "Something went wrong fetching the post!" },
        { status: 500 }
      )
    );
  }
};
