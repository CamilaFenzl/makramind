import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { deleteUserById } from "../../../../../database/users";
import { secureCookieOptions } from "util/cookies";

type Error = {
  error: string;
};

export type DeleteResponseBodyPost = { success: string } | Error;

export async function DELETE(
  request: NextRequest
): Promise<NextResponse<DeleteResponseBodyPost>> {
  const body = await request.json();

  // 3. verify if the user credentials
  const deletedUser = await deleteUserById(body);

  if (!deletedUser) {
    return NextResponse.json(
      {
        error: "User could not be deleted.",
      },
      { status: 500 }
    );
  }

  // 6. Send new cookie in the headders
  cookies().set({
    name: "sessionToken",
    value: "",
    ...secureCookieOptions,
  });

  return NextResponse.json(
    {
      success: "User deleted",
    },
    {
      status: 200,
    }
  );
}
