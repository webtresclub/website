import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show dark mode logo by default during SSR
  const logoSrc = mounted && theme === 'light' ? '/UwUloscopio_big.gif' : '/darkmode/UwUloscopio_big.gif';

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full space-y-8 font-mono">
        <div className="space-y-6 border border-primary/30 p-8 bg-card/50">
          <div className="flex flex-col items-center gap-6">
            <Image src={logoSrc} alt="WebtrES Club Logo" width={200} height={167} className="pixelated" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary">WebtrES Club</h1>
          </div>

          <p className="text-lg md:text-xl text-foreground text-center">
            {'>'} comunidad de web3 hackers
          </p>

          <p className="text-foreground leading-relaxed text-center">
            Comunidad global e hispanohablante desarrollo y ciberseguridad de blockchain.
          </p>

          <div className="pt-4 flex justify-center">
            <a href="https://discord.gg/eegRCDmwbM" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="font-mono border-primary text-primary hover:!bg-primary/20 hover:!text-primary bg-transparent"
              >
                $ unirse a discord
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

