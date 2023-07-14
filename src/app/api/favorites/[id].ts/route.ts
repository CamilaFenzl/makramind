import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Error } from "../route";
import { Favorite } from "migrations/1689339303-createFavoritesTable";
import { getUserBySessionToken } from "database/users";
import { deleteFavouriteById } from "database/favorites";

type FavoritesResponseBodyDelete = { favorite: Favorite } | Error;

export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> }
): Promise<NextResponse<FavoritesResponseBodyDelete>> {
  const token = cookies().get("sessionToken");
  const user = token && (await getUserBySessionToken(token.value));

  if (!user) {
    return NextResponse.json({ error: "Invalid Session Token" });
  }

  const favoriteId = Number(params.favoriteId);

  if (!favoriteId) {
    return NextResponse.json(
      {
        error: "Invalid Favorite Id",
      },
      { status: 400 }
    );
  }

  const favorite = await deleteFavouriteById(favoriteId);

  if (!favorite) {
    return NextResponse.json(
      {
        error: "Favorite not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ favorite });
}
