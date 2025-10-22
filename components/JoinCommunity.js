import { Button } from './ui/button';
import Link from 'next/link';

export function JoinCommunity() {
  return (
    <section className="py-6 px-4" data-section="Join Community">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ cat miembros.txt</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{'>'} Unite</h2>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Hoy ya somos 1000+ expertos y novatos contibuyendo a que el aprendizaje sea más ameno y divertido.
              Somos una comunidad abierta, flexible, y con ganas de compartir.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a href="https://discord.gg/eegRCDmwbM" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:!bg-primary/20 hover:!text-primary bg-transparent"
              >
                $ discord
              </Button>
            </a>
            <a href="https://t.me/webtresclub" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:!bg-primary/20 hover:!text-primary bg-transparent"
              >
                $ telegram
              </Button>
            </a>
            <a href="https://twitter.com/webtresclub" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:!bg-primary/20 hover:!text-primary bg-transparent"
              >
                $ twitter
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

