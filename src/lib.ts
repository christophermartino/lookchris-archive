export type CloudinaryOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'limit' | 'scale';
  gravity?: string;
  quality?: string;
  format?: string;
};

const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
const folder = import.meta.env.PUBLIC_CLOUDINARY_FOLDER;

if (!cloudName) {
  throw new Error(
    'Missing PUBLIC_CLOUDINARY_CLOUD_NAME environment variable.'
  );
}

if (!folder) {
  throw new Error(
    'Missing PUBLIC_CLOUDINARY_FOLDER environment variable.'
  );
}
export function cloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
) {
  const parts = [
    `f_${options.format ?? 'auto'}`,
    `q_${options.quality ?? 'auto'}`
  ];

  if (options.width) {
    parts.push(`w_${options.width}`);
  }

  if (options.height) {
    parts.push(`h_${options.height}`);
  }

  if (options.crop) {
    parts.push(`c_${options.crop}`);
  }

  if (options.crop === 'fill' && options.gravity) {
    parts.push(`g_${options.gravity}`);
  }

  const cleanId = publicId.replace(/^\/+/, '');
  const cleanFolder = folder.replace(/^\/+|\/+$/g, '');

  const path =
    cleanFolder && !cleanId.startsWith(`${cleanFolder}/`)
      ? `${cleanFolder}/${cleanId}`
      : cleanId;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${parts.join(',')}/${path}`;
}