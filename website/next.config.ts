// Enable MDX support using the official @next/mdx plugin.
// Docs: https://nextjs.org/docs/pages/building-your-application/configuring/mdx

import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

// Configure the MDX plugin to recognise .mdx files and GitHub-flavoured markdown tables/checkboxes, etc.
const withMdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

// Other base Next.js options live here.
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
} as const satisfies import("next").NextConfig;

// Export the wrapped configuration.
export default withMdx(nextConfig);
