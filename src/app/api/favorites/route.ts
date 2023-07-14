import { createFavorite } from "database/favorites";
import { getUserBySessionToken } from "database/users";
import { Favorite } from "migrations/1689339303-createFavoritesTable";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const favoritesSchema = z.object({
  userId: z.number(),
  patternId: z.number(),
});

export type Error = {
  error: string;
};

export type FavouriteResponseBodyPost = { favorite: Favorite } | Error;

export async function POST(
  request: NextRequest
): Promise<NextResponse<FavouriteResponseBodyPost>> {
  const cookieStore = cookies();
  const token = cookieStore.get("sessionToken");
  const user = token && (await getUserBySessionToken(token.value));

  if (!user) {
    return NextResponse.json({
      error: "Invalid session token",
    });
  }

  const body = await request.json();
  const result = favoritesSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }

  const newFavoritedPattern = await createFavorite(
    result.data.userId,
    result.data.patternId
  );

  if (!newFavoritedPattern) {
    return NextResponse.json(
      { error: "Favourite not created!" },
      { status: 500 }
    );
  }
  return NextResponse.json({ favorite: newFavoritedPattern });
}
