import { Button } from './ui/button';
import Link from 'next/link';

export function HallOfFameSection() {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ ls hall-of-fame/</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{'>'} Hall of Fame</h2>
          <p className="text-foreground leading-relaxed">Miembros destacados de la comunidad.</p>
          <div className="pt-4">
            <Link href="/halloffame">
              <a>
                <Button
                  variant="outline"
                  className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  $ view
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

