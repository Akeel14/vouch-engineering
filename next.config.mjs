import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const basePath = process.env.GITHUB_ACTIONS ? '/vouch-engineering' : '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default withMDX(config);