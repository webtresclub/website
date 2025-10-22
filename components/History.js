import Link from 'next/link';

export function History() {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ cat historia.txt</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{'>'} Origen</h2>
          <p className="text-foreground leading-relaxed">
            Agosto 2021.{' '}
            <a href="https://twitter.com/martriay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              @martriay
            </a>{' '}
            lanza serie de streams sobre blockchain dev. Nace nuestro{' '}
            <a href="https://discord.gg/eegRCDmwbM" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Discord
            </a>
            . La comunidad crece.
          </p>
        </div>
      </div>
    </section>
  );
}

