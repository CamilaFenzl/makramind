"use client";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Button, FormGroup, TextField, Typography } from "@mui/material";

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentProduct = products[+params.id];

  const textFieldStyles = {
    root: {
      background: "red",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      maxWidth: "4rem",
    },
  };

  const buttonStyles = {
    root: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      textTransform: "lowercase",
    },
  };

  return (
    <Grid container>
      <Grid md={4}>Photo</Grid>
      <Grid md={8}>
        <Typography variant="h1">{currentProduct.name}</Typography>
        <p>{currentProduct.description}</p>
        <FormGroup row>
          <Button variant="contained" disableElevation sx={buttonStyles}>
            -
          </Button>
          <TextField variant="outlined" placeholder="1" sx={textFieldStyles} />
          <Button variant="contained" disableElevation sx={buttonStyles}>
            +
          </Button>
        </FormGroup>
      </Grid>
    </Grid>
  );
}
