import { concepts } from "@/data/concepts";
import Link from "next/link";

export const metadata = {
  title: "Conceitos | Awesome Front-End Architecture",
};

export default function ConceptsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Conceitos</h1>
      <p className="text-muted-foreground max-w-2xl">Princípios e boas práticas fundamentais.</p>
      <ul className="grid sm:grid-cols-2 gap-6">
        {concepts.map((item) => (
          <li key={item.slug} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/concepts/${item.slug}`} className="hover:underline underline-offset-4">
                {item.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}