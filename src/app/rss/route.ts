import { getAllPosts } from '@/service/posts';
import { SITE_NAME, SITE_URL } from '@/constants/constants';
import RSS from 'rss';

export async function GET() {
  const siteUrl = process.env.NODE_ENV === 'production' ? SITE_URL : 'http://localhost:3000';
  const posts = await getAllPosts();

  const feed = new RSS({
    title: `${SITE_NAME} | RSS Feed`,
    description: `Software Engineer Minjoo's blog`,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss`,
    image_url: `${siteUrl}/images/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/posts/${post.notionPageId}`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
