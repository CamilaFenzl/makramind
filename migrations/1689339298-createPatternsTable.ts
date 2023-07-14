import { Sql } from "postgres";

export type Pattern = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  author: string;
  authorUrl: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE patterns (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title varchar(30) NOT NULL,
      subtitle varchar(500) NOT NULL,
      category varchar(30) NOT NULL,
      description varchar(500) NOT NULL,
      image_url varchar(500) NOT NULL,
      video_url varchar(500) NOT NULL,
      author varchar(500) NOT NULL,
      author_url varchar(500) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE patterns
  `;
}
