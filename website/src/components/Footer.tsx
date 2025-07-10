export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 mt-16 py-6 text-center text-sm text-muted-foreground">
      <p>
        Built with ❤️ using Next.js & Tailwind CSS. Contribute on{' '}
        <a href="https://github.com/tiagovilasboas/awesome-front-end-architecture" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}