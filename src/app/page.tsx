import BlogCard from "@/components/BlogCard";
import { getMultipleBlogPostsMetadata } from "@/utils/BlogPosts";

import { Box, Grid, Paper } from "@mui/material";

export default function Home() {
  const postMetadata = getMultipleBlogPostsMetadata(3);

  return (
    <Box>
      <Paper
          component="img"
          src='/images/skyline.jpg'
          sx={{
            marginY: 1,
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover'
          }}
      />
      <Grid
        container
        justifyContent='center'
      >
        <Grid
          item 
          maxWidth={1024}
          container 
          spacing={2}
          flexGrow={1}
        >
          {postMetadata.map((post, index) => {
            return <BlogCard key={index} post={post} />
          })}
        </Grid>
      </Grid>
    </Box>
  );
}