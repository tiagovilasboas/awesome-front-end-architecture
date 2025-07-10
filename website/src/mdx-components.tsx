import type { MDXComponents } from "mdx/types";

// This file lets us provide custom React components to all MDX files.
// For now we simply return the default mapping but it can be extended later.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Example: style headings globally
    h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
    h3: (props) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
    a: (props) => (
      <a
        className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
    ...components,
  };
}