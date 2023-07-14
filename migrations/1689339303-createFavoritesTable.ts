import { Sql } from "postgres";

export type Favorite = {
  id: number;
  userId: number | null;
  patternId: number | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE favorites (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE CASCADE,
      pattern_id integer REFERENCES patterns (id) ON DELETE CASCADE
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE favorites
  `;
}
