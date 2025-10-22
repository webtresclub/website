import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full space-y-8 font-mono">
        <div className="space-y-6 border border-primary/30 p-8 bg-card/50">
          <div className="flex flex-col items-center gap-6">
            <Image src="/logo.gif" alt="WebtrES Club Logo" width={200} height={167} className="pixelated" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary">WebtrES Club</h1>
          </div>

          <p className="text-lg md:text-xl text-foreground text-center">
            {'>'} La comunidad más grande y diversa sobre Web3
          </p>

          <p className="text-foreground leading-relaxed text-center">
            Comunidad hispanohablante de blockchain hackers. Devs de diferentes ámbitos aprendiendo juntos.
          </p>

          <div className="pt-4 flex justify-center">
            <a href="https://discord.gg/eegRCDmwbM" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                $ join discord
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

