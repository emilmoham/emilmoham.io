import fs from 'fs';
import matter from 'gray-matter';

const basePath = 'content/blogs/'

export function getMultipleBlogPostsMetadata(limit?: number): BlogMetadata[] {
  const files = fs.readdirSync(basePath);
  let markdownPosts = files.filter(file => file.endsWith('.md'));
  markdownPosts.sort();
  markdownPosts.reverse();
  
  if (limit != null && limit != undefined && limit > 0)
    markdownPosts = markdownPosts.slice(0, limit);

  const posts: BlogMetadata[] = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}${filename}`, 'utf-8');
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      cover_image: matterResult.data.cover_image,
      author: matterResult.data.author,
      description: matterResult.data.description,
      date: matterResult.data.date,
      publishOn: matterResult.data.publishOn,
      tags: matterResult.data.tags,
      slug: filename.replace('.md', '')
    }
  })

  return posts;
}

export function getBlogPostContent(slug: string) {
  const file =`${basePath}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');

  const matterResult = matter(content);
  return matterResult;
}