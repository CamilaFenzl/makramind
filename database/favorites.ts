import { cache } from "react";
import { sql } from "./connect";
import { Favorite } from "migrations/1689339303-createFavoritesTable";
import { Pattern } from "migrations/1689339298-createPatternsTable";

type FavoritedPattern = Pattern & {
  favoriteId: number;
  userId: number;
  patternId: number;
};

// get favorites from user
export const getFavourites = cache(async (userId: number) => {
  const favorites = await sql<Favorite[]>`
    SELECT
      *
    FROM
      favorites
    WHERE
      favorites.user_id = ${userId}
  `;
  return favorites;
});

// Add favorite pattern for the follow option
export const createFavorite = cache(
  async (userId: number, patternId: number) => {
    const [favorite] = await sql<Favorite[]>`
      INSERT INTO favorites
        (user_id, pattern_id)
      VALUES
        (${userId}, ${patternId})
      RETURNING
      id,
      user_id,
      pattern_id
    `;
    return favorite;
  }
);

// display favorited patterns on profile
export const getFavoritedByUserId = cache(async (userId: number) => {
  const favoritedPatterns = await sql<FavoritedPattern[]>`
  SELECT distinct
    favorites.id AS favorite_id,
    users.id AS user_id,
    patterns.id AS id,
    patterns.title AS title,
    patterns.subtitle AS subtitle,
    patterns.category AS category,
    patterns.description AS description,
    patterns.image_url AS image_url,
    patterns.video_url AS video_url,
    patterns.author AS author,
    patterns.author_url AS author_url
  FROM
    favorites
  INNER JOIN
    patterns ON favorites.pattern_id = patterns.id
  INNER JOIN
    users ON favorites.user_id = users.id
  WHERE
    favorites.user_id = ${userId}`;

  return favoritedPatterns;
});

// Delete favorited pattern from profile
export const deleteFavouriteById = cache(async (id: number) => {
  const [favorite] = await sql<Favorite[]>`
    DELETE FROM
      favorites
    WHERE
      id = ${id}
    RETURNING *
  `;
  return favorite;
});
