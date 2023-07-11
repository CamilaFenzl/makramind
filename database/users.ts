import { cache } from "react";
import { User } from "../migrations/createUsersTable";
import { sql } from "./connect";

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
    SELECT * FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

    return user;
  }
);

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username,
      email
    FROM
      users
    WHERE
      users.username = ${username.toLowerCase()}
 `;

  return user;
});

export const createUser = cache(
  async (username: string, passwordHash: string, email: string) => {
    const [user] = await sql<User[]>`
    INSERT INTO users
      (username, password_hash, email)
    VALUES
      (${username.toLowerCase()}, ${passwordHash}, ${email})
    RETURNING
      id,
      username,
      email
 `;

    return user;
  }
);

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
  SELECT
    users.id,
    users.username,
    email
  FROM
    users
  INNER JOIN
    sessions ON (
      sessions.token = ${token} AND
      sessions.user_id = users.id AND
      sessions.expiry_timestamp > now()
    )
  `;

  return user;
});

export const getUserByUserId = cache(async (userId: number) => {
  const [user] = await sql<User[]>`
    SELECT
      username,
      email
    FROM
      users
    WHERE
      users.id = ${userId}
 `;

  return user;
});

export const getAllUsers = cache(async () => {
  const users = await sql<User[]>`
  SELECT
    users.id,
    users.username,
    users.email
  FROM
    users
  `;

  return users;
});

export const updateUserById = cache(async (id: number, email: string) => {
  const [user] = await sql<User[]>`
      UPDATE users
      SET
        email = ${email},
      WHERE
        id = ${id}
        RETURNING *
    `;

  return user;
});

export const deleteUserById = cache(async (id: number) => {
  const [user] = await sql<User[]>`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING *
  `;
  return user;
});
