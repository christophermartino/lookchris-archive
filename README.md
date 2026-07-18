# Christopher Martino — Artwork Archive

A professional Astro + Cloudinary portfolio based on a restrained gallery/archive concept.

## Start locally

```bash
npm install
cp .env.example .env
npm run dev
```

## Cloudinary

Edit `.env`:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=df2ebjhsp
PUBLIC_CLOUDINARY_FOLDER=darkfolio
```

Artwork records live in `src/data/artworks.ts`. Replace the sample `publicId` values with the actual IDs in your Cloudinary folder.

## Build

```bash
npm run build
```

## Netlify

Set the same two environment variables in Netlify, then redeploy. Update `site` in `astro.config.mjs` after connecting your custom domain.
