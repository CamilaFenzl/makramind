import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pattern } from "migrations/1689339298-createPatternsTable";
import Link from "next/link";

type Props = { data?: Pattern };

export default function Thumbnail(props: Props) {
  const { data } = props;
  return (
    <Link href={`/patterns/${data?.id}`}>
      <Card
        sx={{
          borderRadius: 2,
        }}
      >
        <CardMedia component="img" image={data?.imageUrl} />
        <CardContent
          sx={{
            minHeight: {
              xs: "140px",
              sm: "170px",
            },
          }}
        >
          <Typography variant="h6">{data?.title}</Typography>
          <Typography variant="body2">{data?.subtitle}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
