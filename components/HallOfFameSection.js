import { Button } from './ui/button';
import Link from 'next/link';

export function HallOfFameSection() {
  const totalAchievements = 23; // Total number of achievements
  const featuredAchievements = [
    {
      emoji: '🥈',
      title: 'Lens Protocol Competitive Audit',
      members: '@0xJuancito',
      date: 'Sep 2023',
    },
    {
      emoji: '🥇',
      title: 'Buildathon Ethereum Argentina - DEFI',
      members: '@eugeclrc, @rotcivegaf, @nicobevi_eth',
      date: 'Ago 2023',
    },
    {
      emoji: '🥇',
      title: 'CTF Defi Wonderland - Connext',
      members: '@nicobevi_eth, @0xJuancito, @eugenioclrc +3',
      date: 'Ago 2022',
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ ls hall-of-fame/</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">🏆 Hall of Fame 🏆</h2>
          <p className="text-foreground leading-relaxed">
            Logros y victorias de la comunidad. Hackatones, competencias, y más.
          </p>

          {/* Featured achievements */}
          <div className="space-y-3 pt-4">
            {featuredAchievements.map((achievement, index) => (
              <div key={index} className="border-l-2 border-primary/50 pl-3 py-1">
                <div className="flex items-start gap-2">
                  <span className="text-base">{achievement.emoji}</span>
                  <div className="flex-1">
                    <div className="text-sm text-foreground font-medium">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {achievement.members} • {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link href="/halloffame">
              <a>
                <Button
                  variant="outline"
                  className="font-mono border-primary text-primary hover:!bg-primary/20 hover:!text-primary bg-transparent"
                >
                  $ ver todos los logros
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

