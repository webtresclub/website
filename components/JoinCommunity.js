import { Button } from './ui/button';
import Link from 'next/link';

export function JoinCommunity() {
  const members = [
    { name: '@AlanX', url: 'https://twitter.com/alandooz' },
    { name: '@Magnetto', url: 'https://twitter.com/magnetto_eth' },
    { name: '@tqts', url: 'https://twitter.com/tqtsar' },
    { name: '@0x4non', url: 'https://twitter.com/eugenioclrc' },
    { name: '@P4 Troy', url: 'https://twitter.com/MartinPefaur' },
    { name: '@bengalaQ', url: 'https://twitter.com/AugustitoQ' },
    { name: '@AgusDuha', url: 'https://twitter.com/AgusDuha' },
    { name: '@mmolinari.eth', url: 'https://twitter.com/mateomolinari__' },
    { name: '@tnch', url: 'https://twitter.com/tinchoabbate' },
  ];

  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ cat members.txt</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{'>'} Únete</h2>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Aprende desarrollo y seguridad en Web3. Comunidad sin esquemas, con ganas de aprender juntos.
            </p>
            <p className="text-foreground leading-relaxed">
              Miembros:{' '}
              {members.map((member, index) => (
                <span key={member.name}>
                  <a href={member.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {member.name}
                  </a>
                  {index < members.length - 1 && ', '}
                </span>
              ))}{' '}
              y muchos más.
            </p>
          </div>

          <div className="pt-4">
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

