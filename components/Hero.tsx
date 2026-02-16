import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header className="relative z-10">
      <nav className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <span className="text-xl font-semibold tracking-tight text-sole-dark">
          SoleMate
        </span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="#login">Log in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#signup">Sign up</a>
          </Button>
        </div>
      </nav>

      <section className="px-4 pb-16 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <h1 className="text-4xl font-bold tracking-tight text-sole-dark sm:text-5xl lg:text-6xl">
          Find your Sole-Mate
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-sole-muted">
          Match by size, side, and style — then coordinate a split pair.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#signup">Get started</a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#match-preview" className="text-sole-muted">
              How it works
            </a>
          </Button>
        </div>
      </section>
    </header>
  );
}
