import { cache } from "react";
import { sql } from "./connect";
import { Product } from "migrations/1689111410-createProductsTable";

export const getProductById = cache(async (id: number) => {
  const [user] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      products.id = ${id}
 `;

  return user;
});

export const getAllProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT
    *
  FROM
    products
  `;

  return products;
});

export const deleteProductById = cache(async (id: number) => {
  const [user] = await sql<Product[]>`
    DELETE FROM
      products
    WHERE
      id = ${id}
    RETURNING *
  `;
  return user;
});
