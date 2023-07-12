import { Sql } from "postgres";

export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(80) NOT NULL UNIQUE,
      price integer NOT NULL,
      description varchar(500) NOT NULL,
      image varchar(100) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
