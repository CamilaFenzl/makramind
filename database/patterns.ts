import { cache } from 'react';
import { sql } from './connect';
import { Pattern } from 'migrations/1689339298-createPatternsTable';

export const getPatternById = cache(async (id: number) => {
  const [pattern] = await sql<Pattern[]>`
    SELECT
      *
    FROM
      patterns
    WHERE
      patterns.id = ${id}
 `;

  return pattern;
});

export const getLatestPatterns = cache(async () => {
  const patterns = await sql<Pattern[]>`
  SELECT
    *
  FROM
    patterns
  ORDER BY
    id DESC
  LIMIT
    4;
  `;

  return patterns;
});

export const getAllPatterns = cache(async () => {
  const patterns = await sql<Pattern[]>`
  SELECT
    *
  FROM
    patterns
  `;

  return patterns;
});

export const deletePatternById = cache(async (id: number) => {
  const [pattern] = await sql<Pattern[]>`
    DELETE FROM
      patterns
    WHERE
      id = ${id}
    RETURNING *
  `;
  return pattern;
});
