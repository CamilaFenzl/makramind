import { Sql } from "postgres";
import { Pattern } from "./1689339298-createPatternsTable";

export const patterns: Pattern[] = [
  {
    id: 1,
    title: "Small Diamond",
    subtitle: "Small Diamond Using Double Half Hitch Knots!",
    category: "",
    description:
      "This pattern uses 4 strands to create a small diamond. We need to tie one DHHK with the two middle cords before using them as filler cords to create the middle section of the diamond. One middle cord will be using at the filler cord and one will be used as the working cord. I will use the middle cord on the LHS as my filler cord and the other as my working cord.",
    imageUrl: "images/patterns/small-diamond.jpg",
    videoUrl: "bRBnX-fbYH8",
    author: "Lots of Knots Canada",
    authorUrl: "https://www.youtube.com/@LotsofKnotsCanada/about",
  },
  {
    id: 2,
    title: "Diagonal Pattern",
    subtitle:
      "Incorporating Colour Into Your Work Using Double Half Hitch Knots!",
    category: "",
    description:
      "Lets add color to a diagonal pattern which is created using double half hitch knots. We start with the colored rope on the outside of this pattern but as we tie the knots, the colored rope will be used as our filler cords and as a result will work it's way to the middle of the work.",
    imageUrl: "images/patterns/diagonal-pattern.jpg",
    videoUrl: "yobQGCseqk8",
    author: "Lots of Knots Canada",
    authorUrl: "https://www.youtube.com/@LotsofKnotsCanada/about",
  },
  {
    id: 3,
    title: "Intermediate Pattern #2",
    subtitle: "Intermediate Pattern #2 Using Double Half Hitch Knots!",
    category: "",
    description: "",
    imageUrl: "images/patterns/intermediate-pattern2.jpg",
    videoUrl: "QSE7SgtD43w&t=0s",
    author: "Lots of Knots Canada",
    authorUrl: "https://www.youtube.com/@LotsofKnotsCanada/about",
  },
  {
    id: 4,
    title: "Geometric Pattern #2",
    subtitle: "Geometric Pattern to incorporate into your wall hanging.",
    category: "",
    description:
      "This tutorial focuses on the pattern not the double half hitch knot.",
    imageUrl: "images/patterns/geometric-pattern2.jpg",
    videoUrl: "D_MJArUhFEM",
    author: "Lots of Knots Canada",
    authorUrl: "https://www.youtube.com/@LotsofKnotsCanada/about",
  },
];

export async function up(sql: Sql) {
  for (const pattern of patterns) {
    await sql`
    INSERT INTO patterns
      (title, subtitle, category, description, image_url, video_url, author, author_url)
    VALUES
      (${pattern.title}, ${pattern.subtitle}, ${pattern.category}, ${pattern.description}, ${pattern.imageUrl}, ${pattern.videoUrl}, ${pattern.author}, ${pattern.authorUrl})
  `;
  }
}

export async function down(sql: Sql) {
  for (const pattern of patterns) {
    await sql`
      DELETE FROM patterns WHERE id = ${pattern.id}
  `;
  }
}
