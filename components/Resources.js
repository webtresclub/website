import Link from 'next/link';

export function Resources() {
  const resources = [
    {
      title: 'Intro a Ethereum Development',
      description: 'Índice de contenido',
      url: 'https://intro-ethereum.marto.lol/',
    },
    {
      title: 'Video 1',
      description: 'Intro Eth Development',
      url: 'https://www.youtube.com/watch?v=zoJb3G8TQcE&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT',
    },
    {
      title: 'Video 2',
      description: 'Eth Development pt.2',
      url: 'https://www.youtube.com/watch?v=i1IW9lK4mQw&list=PLA0EjXXZSf4fWVXHH__NgZC8lFiJP-8cT&index=2',
    },
    {
      title: 'Video 3',
      description: 'Intro DeFi Development',
      url: 'https://www.youtube.com/watch?v=dnxfqmjNAtQ&t=5s',
    },
    {
      title: 'Video 4',
      description: 'DeFi Development pt.2',
      url: 'https://www.youtube.com/watch?v=H8sbS9V6gVY',
    },
    {
      title: 'Video 5',
      description: 'Intro a Rollups',
      url: 'https://www.youtube.com/watch?v=H8sbS9V6gVY',
    },
    {
      title: 'notonlyowner.com',
      description: 'Seguridad en Web3',
      url: 'https://www.notonlyowner.com/learn/intro-seguridad-hacking-ethereum',
    },
    {
      title: 'Video @tnch 1',
      description: 'Intro Seguridad eth',
      url: 'https://www.youtube.com/watch?v=sqjHodAj5Xc&t=582s',
    },
    {
      title: 'Video @tnch 2',
      description: 'Seguridad eth pt.2',
      url: 'https://www.youtube.com/watch?v=CEzERbkVAhk',
    },
  ];

  return (
    <section className="py-6 px-4" data-section="Resources">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ ls recursos/</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{'>'} Recursos</h2>

          <div className="space-y-3">
            {resources.map((resource) => (
              <div key={resource.title} className="flex items-start gap-3 text-sm">
                <span className="text-primary">→</span>
                <div className="flex-1">
                  {resource.url.startsWith('http') ? (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {resource.title}
                    </a>
                  ) : (
                    <Link href={resource.url}>
                      <a className="text-primary hover:underline">{resource.title}</a>
                    </Link>
                  )}
                  <span className="text-muted-foreground"> - {resource.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

