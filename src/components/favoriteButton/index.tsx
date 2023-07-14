"use client";
import { CircularProgress, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  userId: number;
  patternId: number;
  favoriteId: number | undefined;
};

export default function FavoriteButton(props: Props) {
  const [active, setActive] = useState(!!props.favoriteId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const setFavorite = async () => {
    setLoading(true);
    const response = await fetch("/api/favorites", {
      method: "POST",
      body: JSON.stringify({
        userId: props.userId,
        patternId: props.patternId,
      }),
    });

    const data = await response.json();

    setLoading(false);

    if (data.error) {
      setError(data.error);
      return;
    }
    setActive(true);
  };

  const unsetFavorite = async () => {
    setLoading(true);
    console.log("props.favoriteId", props.favoriteId);
    const response = await fetch(`/api/favorites/${props.favoriteId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    setLoading(false);

    if (data.error) {
      setError(data.error);
      return;
    }

    setActive(false);
  };

  const toggleFavorite = () => {
    if (active) {
      unsetFavorite();
    } else {
      setFavorite();
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <IconButton aria-label="delete" onClick={toggleFavorite}>
          {active ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
    </>
  );
}
