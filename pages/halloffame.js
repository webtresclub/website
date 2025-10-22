import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(month) - 1]} ${day}, ${year}`;
}

const achievements = [
  {
    date: '2023-09-06',
    title: '🥈 Lens Protocol Competitive Audit',
    description: 'Segundo puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@0xJuancito'],
    link: 'https://twitter.com/code4rena/status/1699549855310598540',
  },
  {
    date: '2023-08-16',
    title: '🥇 Buildathon de Ethereum Argentina - Track: DEFI',
    description: 'Primer puesto en Buildathon de Ethereum Argentina con NoirCash.',
    members: ['@eugeclrc', '@rotcivegaf', '@nicobevi_eth'],
    link: 'https://twitter.com/EtherArgentina/status/1696275501009035721',
  },
  {
    date: '2023-08-16',
    title: '🥇 Buildathon de Ethereum Argentina - Track: Public Goods',
    description: 'Primer puesto en Buildathon de Ethereum Argentina con Veritrust Protocol.',
    members: ['@MartinPefaur', '@MageHernan', '@LuchoSca', '@TechRebelWorld', '@tomasdm_eth', '@tomasfrancizco'],
    link: 'https://twitter.com/EtherArgentina/status/1696275498760802514',
  },
  {
    date: '2023-08-07',
    title: 'Bug en Solmate',
    description: 'magnetto encuentra y reporta un bug en la función SignedWadMath:wadMul de la librería Solmate',
    members: ['@magnetto90'],
    link: 'https://twitter.com/transmissions11/status/1688601302371389440',
  },
  {
    date: '2023-05-27',
    title: 'Colaboración en repositorio Solady',
    description: 'Añadir función toInt256(uint256 x) Convierte un uint256 sin signo en un int256 con signo.',
    members: ['@eugenioclrc'],
    link: 'https://github.com/Vectorized/solady/pull/436#event-9358898407',
  },
  {
    date: '2023-05-26',
    title: '100 estrellas en repositorio multichain-auditor',
    description: 'Juancito llego a las 100 estrellas en su repo multichain-auditor',
    members: ['@0xJuancito'],
    link: 'https://twitter.com/0xJuancito/status/1662264278617927680',
  },
  {
    date: '2023-04-30',
    title: 'Code4rena 60-day leaderboard',
    description: 'Segundo puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero'],
    link: 'https://twitter.com/code4rena/status/1652774944185683968',
  },
  {
    date: '2023-04-23',
    title: '🥇 Hackathon #KingOfDevs',
    description: 'Primer puesto en hackathon #KingOfDevs.',
    members: ['@eugenioclrc', '@nicobevi_eth', '@rotcivegaf'],
    link: 'https://twitter.com/thinkanddev/status/1650271127493550080',
  },
  {
    date: '2023-04-21',
    title: '🥈 Code4rena @CantoNamespace competition',
    description: 'Segundo puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero'],
    link: 'https://twitter.com/code4rena/status/1649279929534775296',
  },
  {
    date: '2023-04-04',
    title: '🥇 Code4rena @NeoTokyoCode competition',
    description: 'Primer puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero'],
    link: 'https://twitter.com/code4rena/status/1643440655044341762',
  },
  {
    date: '2023-04-03',
    title: '🏅 Scaling Ethereum Hackathon - Great xApp Winner',
    description: 'Great xApp Winner by @ETHGlobal',
    members: ['@chiin_eth'],
    link: 'https://twitter.com/ConnextNetwork/status/1642889253913763841',
  },
  {
    date: '2023-03-29',
    title: '🥇 Code4rena @AragonProject competition',
    description: 'Primer puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero', '@carlitox477'],
    link: 'https://twitter.com/code4rena/status/1641197035025203201',
  },
  {
    date: '2023-03-22',
    title: '🏅 Code4rena @wenwincom competition',
    description: 'Cuarto puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero'],
    link: 'https://twitter.com/code4rena/status/1638618032259076096',
  },
  {
    date: '2023-03-18',
    title: '🥉 #ETHPorto hackathon',
    description: 'Tercer puesto en #ETHPorto hackathon.',
    members: ['@Deivitto', '@Cryptonicle1'],
    link: 'https://twitter.com/eth_porto/status/1637157159682097152',
  },
  {
    date: '2023-03-17',
    title: '🥈 SolidityScan #FindTheBug',
    description: 'Segundo puesto en el 2do #FindTheBug.',
    members: ['@devnet0x'],
    link: 'https://twitter.com/SolidityScan/status/1636599244634345472',
  },
  {
    date: '2023-03-14',
    title: '🥇 SolidityScan #FindTheBug',
    description: 'Primer puesto en el 1er #FindTheBug.',
    members: ['@devnet0x'],
    link: 'https://twitter.com/SolidityScan/status/1635623487313264641',
  },
  {
    date: '2023-03-02',
    title: '🥉 #ETHDenver hackathon',
    description: 'Tercer puesto en #ETHDenver hackathon.',
    members: ['@nicobevi_eth'],
    link: 'https://twitter.com/reserveprotocol/status/1631423398357393408',
  },
  {
    date: '2023-03-02',
    title: '🏅 #ETHDenver hackathon',
    description: 'Quinto puesto en #ETHDenver hackathon.',
    members: ['@eugenioclrc', '@rotcivegaf'],
    link: 'https://twitter.com/reserveprotocol/status/1631423403365404672',
  },
  {
    date: '2023-02-27',
    title: '🥈 Secureum RACE-15',
    description: 'Segundo puesto en competencia Secureum RACE-15.',
    members: ['@eugenioclrc', '@Cryptonicle1', '@adrianromero'],
    link: 'https://twitter.com/TheSecureum/status/1630164347585708032',
  },
  {
    date: '2023-02-08',
    title: '🏅 Code4rena @OndoFinance competition',
    description: 'Cuarto puesto en competencia de auditoria de contratos inteligentes.',
    members: ['@adrianromero'],
    link: 'https://twitter.com/code4rena/status/1623391984827404288',
  },
  {
    date: '2022-10-09',
    title: '🥇 @InfiniteHackETH',
    description: 'Primer puesto en @InfiniteHackETH Hackathon.',
    members: ['@gseba_lujan'],
    link: 'https://twitter.com/gseba_lujan/status/1579250179785359360',
  },
  {
    date: '2022-08-31',
    title: '🥇 #WEBOWCHALLENGE',
    description: 'Primer puesto en #WEBOWCHALLENGE.',
    members: ['@MartinPefaur'],
    link: 'https://twitter.com/Webowlatam/status/1565081114137460737',
  },
  {
    date: '2022-08-13',
    title: '🥇 CTF Defi Wonderland - Connext',
    description: 'Primer puesto en el CTF organizado por Defi Wonderland y Connext para la ETHLatam 2022.',
    members: ['@nicobevi_eth', '@0xJuancito', '@eugenioclrc', '@mateomolinari__', '@magnetto90', '@rotcivegaf'],
    link: 'https://twitter.com/DeFi_Wonderland/status/1558453144387985410',
  },
];

export default function HallOfFame() {
  return (
    <>
      <Head>
        <title>🏆 Hall of Fame - WebtrES 🏆</title>
        <meta name="description" content="Hall of Fame de la comunidad WebtrES" />
        <link rel="icon" href="favicon.gif" type="image/gif" />
      </Head>
      <div className="min-h-screen bg-background text-primary font-mono p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <a className="text-primary hover:text-primary/70 transition-colors">{'<'} back</a>
            </Link>
          </div>

          <div className="border border-primary/30 p-6 mb-12">
            <h1 className="text-2xl mb-2">🏆 Hall of Fame 🏆</h1>
            <p className="text-muted-foreground text-sm">Community achievements and wins</p>
          </div>

          <div className="relative pl-32">
            {/* Timeline line */}
            <div className="absolute left-[107px] top-0 bottom-0 w-[2px] bg-primary/30" />

            {achievements.map((achievement, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="absolute left-[-128px] flex items-center gap-2">
                  <span className="text-muted-foreground text-sm w-24 text-right whitespace-nowrap">
                    {formatDate(achievement.date)}
                  </span>
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background flex-shrink-0" />
                </div>

                <div className="border border-primary/30 p-4 hover:border-primary/50 transition-colors ml-6">
                  <h3 className="text-base mb-2">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary/70 transition-colors"
                    >
                      {achievement.title}
                    </a>
                  </h3>
                  <p className="text-foreground/80 text-sm mb-3">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.members.map((member, idx) => (
                      <span key={idx} className="text-muted-foreground text-xs">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-muted-foreground text-sm">
            <Link href="/">
              <a className="hover:text-primary transition-colors">return to home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
