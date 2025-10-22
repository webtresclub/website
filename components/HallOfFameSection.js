import { Button } from './ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function HallOfFameSection() {
  // All achievements data
  const allAchievements = [
    {
      date: '2023-09-06',
      title: '🥈 Lens Protocol Competitive Audit',
      members: '@0xJuancito',
      link: 'https://twitter.com/code4rena/status/1699549855310598540',
    },
    {
      date: '2023-08-16',
      title: '🥇 Buildathon de Ethereum Argentina - Track: DEFI',
      members: '@eugeclrc, @rotcivegaf, @nicobevi_eth',
      link: 'https://twitter.com/EtherArgentina/status/1696275501009035721',
    },
    {
      date: '2023-08-16',
      title: '🥇 Buildathon de Ethereum Argentina - Track: Public Goods',
      members: '@MartinPefaur, @MageHernan, @LuchoSca +3',
      link: 'https://twitter.com/EtherArgentina/status/1696275498760802514',
    },
    {
      date: '2023-08-07',
      title: 'Bug en Solmate',
      members: '@magnetto90',
      link: 'https://twitter.com/transmissions11/status/1688601302371389440',
    },
    {
      date: '2023-05-27',
      title: 'Colaboración en repositorio Solady',
      members: '@eugenioclrc',
      link: 'https://github.com/Vectorized/solady/pull/436#event-9358898407',
    },
    {
      date: '2023-05-26',
      title: '100 estrellas en repositorio multichain-auditor',
      members: '@0xJuancito',
      link: 'https://twitter.com/0xJuancito/status/1662264278617927680',
    },
    {
      date: '2023-04-30',
      title: 'Code4rena 60-day leaderboard',
      members: '@adrianromero',
      link: 'https://twitter.com/code4rena/status/1652774944185683968',
    },
    {
      date: '2023-04-23',
      title: '🥇 Hackathon #KingOfDevs',
      members: '@eugenioclrc, @nicobevi_eth, @rotcivegaf',
      link: 'https://twitter.com/thinkanddev/status/1650271127493550080',
    },
    {
      date: '2023-04-21',
      title: '🥈 Code4rena @CantoNamespace competition',
      members: '@adrianromero',
      link: 'https://twitter.com/code4rena/status/1649279929534775296',
    },
    {
      date: '2023-04-04',
      title: '🥇 Code4rena @NeoTokyoCode competition',
      members: '@adrianromero',
      link: 'https://twitter.com/code4rena/status/1643440655044341762',
    },
    {
      date: '2023-04-03',
      title: '🏅 Scaling Ethereum Hackathon - Great xApp Winner',
      members: '@chiin_eth',
      link: 'https://twitter.com/ConnextNetwork/status/1642889253913763841',
    },
    {
      date: '2023-03-29',
      title: '🥇 Code4rena @AragonProject competition',
      members: '@adrianromero, @carlitox477',
      link: 'https://twitter.com/code4rena/status/1641197035025203201',
    },
    {
      date: '2023-03-22',
      title: '🏅 Code4rena @wenwincom competition',
      members: '@adrianromero',
      link: 'https://twitter.com/code4rena/status/1638618032259076096',
    },
    {
      date: '2023-03-18',
      title: '🥉 #ETHPorto hackathon',
      members: '@Deivitto, @Cryptonicle1',
      link: 'https://twitter.com/eth_porto/status/1637157159682097152',
    },
    {
      date: '2023-03-17',
      title: '🥈 SolidityScan #FindTheBug',
      members: '@devnet0x',
      link: 'https://twitter.com/SolidityScan/status/1636599244634345472',
    },
    {
      date: '2023-03-14',
      title: '🥇 SolidityScan #FindTheBug',
      members: '@devnet0x',
      link: 'https://twitter.com/SolidityScan/status/1635623487313264641',
    },
    {
      date: '2023-03-02',
      title: '🥉 #ETHDenver hackathon',
      members: '@nicobevi_eth',
      link: 'https://twitter.com/reserveprotocol/status/1631423398357393408',
    },
    {
      date: '2023-03-02',
      title: '🏅 #ETHDenver hackathon',
      members: '@eugenioclrc, @rotcivegaf',
      link: 'https://twitter.com/reserveprotocol/status/1631423403365404672',
    },
    {
      date: '2023-02-27',
      title: '🥈 Secureum RACE-15',
      members: '@adrianromero',
      link: 'https://twitter.com/TheSecureum/status/1630164347585708032',
    },
    {
      date: '2023-02-08',
      title: '🏅 Code4rena @OndoFinance competition',
      members: '@adrianromero',
      link: 'https://twitter.com/code4rena/status/1623391984827404288',
    },
    {
      date: '2022-10-09',
      title: '🥇 @InfiniteHackETH',
      members: '@gseba_lujan',
      link: 'https://twitter.com/gseba_lujan/status/1579250179785359360',
    },
    {
      date: '2022-08-31',
      title: '🥇 #WEBOWCHALLENGE',
      members: '@MartinPefaur',
      link: 'https://twitter.com/Webowlatam/status/1565081114137460737',
    },
    {
      date: '2022-08-13',
      title: '🥇 CTF Defi Wonderland - Connext',
      members: '@nicobevi_eth, @0xJuancito, @eugenioclrc +3',
      link: 'https://twitter.com/DeFi_Wonderland/status/1558453144387985410',
    },
  ];

  const totalAchievements = allAchievements.length;

  // State for featured achievements - starts with first 3 sorted by date
  const [featuredAchievements, setFeaturedAchievements] = useState(() => {
    return [...allAchievements].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  });

  // Get 3 random achievements on client side only
  useEffect(() => {
    const shuffled = [...allAchievements].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    setFeaturedAchievements(selected.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const formatDate = (dateString) => {
    const [year, month] = dateString.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="py-6 px-4" data-section="Hall of Fame Preview">
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
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-2 border-primary/50 pl-3 py-1 hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="text-sm text-foreground font-medium hover:text-primary/70 transition-colors">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {achievement.members} • {formatDate(achievement.date)}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <Link href="/hall-of-fame">
              <a data-track-label="View All Achievements">
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

