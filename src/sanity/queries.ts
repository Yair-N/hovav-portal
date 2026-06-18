import { client, urlFor } from './client'
import type {
  NewsItem,
  GameItem,
  ComicItem,
  OpinionPost,
  RecommendationItem,
  TextHighlight,
} from '@/types/content'

// ---------------------------------------------------------------------------
// Image helper — resolves a Sanity image ref to a CDN URL string, or undefined
// ---------------------------------------------------------------------------

function resolveImage(img: unknown, width = 800): string | undefined {
  if (!img) return undefined
  try {
    return urlFor(img as Parameters<typeof urlFor>[0]).width(width).auto('format').url()
  } catch {
    return undefined
  }
}

// ---------------------------------------------------------------------------
// News
// ---------------------------------------------------------------------------

const NEWS_QUERY = `*[_type == "newsItem"] | order(publishedAt desc) {
  _id, title, excerpt, image, publishedAt, author, isFeatured
}`

export async function getNewsItems(): Promise<NewsItem[]> {
  const items = await client.fetch(NEWS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    excerpt: item.excerpt as string,
    image: resolveImage(item.image, 400),
    publishedAt: item.publishedAt as string | undefined,
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Games
// ---------------------------------------------------------------------------

const GAMES_QUERY = `*[_type == "game"] | order(_createdAt desc) {
  _id, title, description, author, ageGroup, image, link
}`

export async function getGames(): Promise<GameItem[]> {
  const items = await client.fetch(GAMES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    author: item.author as string | undefined,
    ageGroup: item.ageGroup as string | undefined,
    image: resolveImage(item.image, 200),
    link: item.link as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Jokes (ComicItem shape)
// ---------------------------------------------------------------------------

const JOKES_QUERY = `*[_type == "joke"] | order(publishedAt desc) {
  _id, title, image, caption, author, publishedAt
}`

export async function getJokes(): Promise<ComicItem[]> {
  const items = await client.fetch(JOKES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    image: resolveImage(item.image, 500),
    caption: item.caption as string | undefined,
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Comics (ComicItem shape)
// ---------------------------------------------------------------------------

const COMICS_QUERY = `*[_type == "comic"] | order(publishedAt desc) {
  _id, title, image, caption, author, publishedAt
}`

export async function getComics(): Promise<ComicItem[]> {
  const items = await client.fetch(COMICS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    image: resolveImage(item.image, 500),
    caption: item.caption as string | undefined,
    author: item.author as string | undefined,
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Thoughts (OpinionPost shape)
// ---------------------------------------------------------------------------

const THOUGHTS_QUERY = `*[_type == "thought"] | order(publishedAt desc) {
  _id, title, body, author, image, publishedAt
}`

export async function getThoughts(): Promise<OpinionPost[]> {
  const items = await client.fetch(THOUGHTS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
    author: item.author as string | undefined,
    image: resolveImage(item.image, 200),
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Opinions (OpinionPost shape)
// ---------------------------------------------------------------------------

const OPINIONS_QUERY = `*[_type == "opinion"] | order(publishedAt desc) {
  _id, title, body, author, image, publishedAt
}`

export async function getOpinions(): Promise<OpinionPost[]> {
  const items = await client.fetch(OPINIONS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
    author: item.author as string | undefined,
    image: resolveImage(item.image, 200),
    publishedAt: item.publishedAt as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Recommendations
// ---------------------------------------------------------------------------

const RECOMMENDATIONS_QUERY = `*[_type == "recommendation"] | order(_createdAt desc) {
  _id, title, description, category, image, author
}`

export async function getRecommendations(): Promise<RecommendationItem[]> {
  const items = await client.fetch(RECOMMENDATIONS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    category: item.category as string | undefined,
    image: resolveImage(item.image, 300),
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Recipes (RecommendationItem shape)
// ---------------------------------------------------------------------------

const RECIPES_QUERY = `*[_type == "recipe"] | order(_createdAt desc) {
  _id, title, description, category, image, author
}`

export async function getRecipes(): Promise<RecommendationItem[]> {
  const items = await client.fetch(RECIPES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    description: item.description as string,
    category: item.category as string | undefined,
    image: resolveImage(item.image, 300),
    author: item.author as string | undefined,
  }))
}

// ---------------------------------------------------------------------------
// Sports Highlights (TextHighlight shape)
// ---------------------------------------------------------------------------

const SPORTS_HIGHLIGHTS_QUERY = `*[_type == "sportsHighlight"] | order(_createdAt desc) {
  _id, title, body
}`

export async function getSportsHighlights(): Promise<TextHighlight[]> {
  const items = await client.fetch(SPORTS_HIGHLIGHTS_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
  }))
}

// ---------------------------------------------------------------------------
// Behind the Scenes (TextHighlight shape)
// ---------------------------------------------------------------------------

const BEHIND_THE_SCENES_QUERY = `*[_type == "behindTheScenes"] | order(_createdAt desc) {
  _id, title, body
}`

export async function getBehindTheScenes(): Promise<TextHighlight[]> {
  const items = await client.fetch(BEHIND_THE_SCENES_QUERY)
  return items.map((item: Record<string, unknown>) => ({
    id: item._id as string,
    title: item.title as string,
    body: item.body as string,
  }))
}

