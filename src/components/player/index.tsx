"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = { id: string };

export default function Player(props: Props) {
  return (
    <div>
      <LiteYouTubeEmbed
        aspectWidth={16}
        aspectHeight={9}
        id={props.id}
        title=""
      />
    </div>
  );
}
