export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  publicId: string;
  alt: string;
  description?: string;
  collection: 'paintings' | 'drawings' | 'works-on-paper';
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: 'pool',
    title: 'Pool',
    year: 2025,
    medium: 'Oil on linen',
    dimensions: '30 × 40 in.',
    publicId: 'painting/12',
    alt: 'Painting of a quiet rooftop pool surrounded by pale city buildings',
    description: 'A quiet afternoon in the city. Light, stillness, and the geometry of water.',
    collection: 'paintings',
    featured: true
  },
  {
    slug: 'interior-green',
    title: 'Interior (Green)',
    year: 2025,
    medium: 'Oil and acrylic on canvas',
    dimensions: '24 × 18 in.',
    publicId: 'darkfolio/drawing/50',
    alt: 'Green interior painting with a window and table',
    collection: 'paintings'
  },
  {
    slug: 'house-by-the-dunes',
    title: 'House by the Dunes',
    year: 2024,
    medium: 'Oil on canvas',
    dimensions: '20 × 24 in.',
    publicId: '12',
    alt: 'Small house in a muted coastal landscape',
    collection: 'paintings'
  },
  {
    slug: 'evening-window',
    title: 'Evening Window',
    year: 2024,
    medium: 'Oil on panel',
    dimensions: '16 × 20 in.',
    publicId: '16',
    alt: 'Dark interior with warm window light',
    collection: 'paintings'
  },
  {
    slug: 'figure-by-window',
    title: 'Figure by Window',
    year: 2024,
    medium: 'Oil on canvas',
    dimensions: '30 × 24 in.',
    publicId: '21',
    alt: 'Figure seated in front of a window',
    collection: 'paintings'
  },
  {
    slug: 'untitled-landscape',
    title: 'Untitled',
    year: 2023,
    medium: 'Oil on linen',
    dimensions: '18 × 24 in.',
    publicId: '27',
    alt: 'Muted landscape painting',
    collection: 'paintings'
  },
  {
    slug: 'still-life',
    title: 'Still Life',
    year: 2023,
    medium: 'Oil on panel',
    dimensions: '16 × 12 in.',
    publicId: '31',
    alt: 'Flowers in a glass vase',
    collection: 'paintings'
  },
  {
    slug: 'railing',
    title: 'Railing',
    year: 2023,
    medium: 'Oil on canvas',
    dimensions: '20 × 20 in.',
    publicId: '35',
    alt: 'Architectural railing and pale walls',
    collection: 'paintings'
  }
];

export const collections = [
  { slug: 'paintings', label: 'Paintings' },
  { slug: 'drawings', label: 'Drawings' },
  { slug: 'works-on-paper', label: 'Works on Paper' }
] as const;

export function getCollection(slug: string) {
  return artworks.filter((artwork) => artwork.collection === slug);
}
