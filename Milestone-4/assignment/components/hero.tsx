import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
      <a
  href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
  target="_blank"
  rel="noopener noreferrer"
>
  <SupabaseLogo />
  <span className="sr-only">Supabase</span>
</a>

<a
  href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
>
  <NextLogo />
  <span className="sr-only">Next.js</span>
</a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            Supabase
          </a>{" "}
        and{" "}
        <a
  href="https://nextjs.org/"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold hover:underline"
>
  Next.js
</a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
