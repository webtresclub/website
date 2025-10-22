import Link from 'next/link';

export function FooterNew() {
  return (
    <footer className="py-16 px-4 border-t border-primary/30">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">WebtrES Club</div>
            <div className="text-sm text-muted-foreground">$ blockchain hackers community</div>
          </div>

          <div className="flex justify-center gap-6 text-sm">
            <a href="https://discord.gg/eegRCDmwbM" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              discord
            </a>
            <a href="https://github.com/webtresclub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github
            </a>
            <a href="https://twitter.com/webtresclub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              twitter
            </a>
            <a href="https://t.me/webtresclub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

