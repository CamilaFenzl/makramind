import Thumbnail from '@/components/thumbnail';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { getAllPatterns } from 'database/patterns';

export default async function Page() {
  const patterns = await getAllPatterns();

  return (
    <Box>
      <Typography component={'h2'} variant="h4">
        All Patterns
      </Typography>
      <Grid container spacing={2}>
        {patterns.map((pattern, i) => {
          return (
            <Grid key={i} xs={12} sm={6} md={4} lg={3}>
              <Thumbnail data={pattern} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
