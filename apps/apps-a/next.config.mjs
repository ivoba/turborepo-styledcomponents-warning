/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: [],
      cssProp: true,
      namespace: undefined,
    },
  },
};

export default nextConfig;
