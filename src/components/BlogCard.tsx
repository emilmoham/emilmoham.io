import { Box, Grid, Link, Paper, Typography } from "@mui/material";

interface Props {
  post: BlogMetadata;
}

export default function BlogCard(props: Props) {
  const { post } = props;
  return (
    <Grid
      item
      sm={12}
      md={4}
      margin={0}
    >
      <Paper
        sx={{
          height: '100%'
        }}
      >
        <Box
          component="img"
          src={post.cover_image}
          sx={{
            width: '100%',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
          }}
          />
          <Box padding={2}>
            <Typography 
              variant="body2"
            >
              {post.date}
            </Typography>
            <Typography 
              variant="h4"
              marginY={2}
            >
              <Link 
                href={`/blog/${post.slug}`}
                sx={{
                  textDecoration: 'none'
                }}
              >
                  {post.title}
                </Link>
            </Typography>
            <Typography 
              variant="body1"
              marginY={2}
            >
              {post.description.substring(0,150)}...
            </Typography>
          </Box>
      </Paper>
    </Grid>
  );
}