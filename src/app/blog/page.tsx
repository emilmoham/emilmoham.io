import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { getMultipleBlogPostsMetadata } from '@/utils/BlogPosts';
import BlogCard from '@/components/BlogCard';

export default function ArchivePage() {
    const postMetadata = getMultipleBlogPostsMetadata();

    return (
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
        <Typography variant="body2">Proof of change</Typography>
      </Grid>
    );
}