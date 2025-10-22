export function FeaturedProjects() {
  const projects = [
    {
      title: 'Buttpluggy',
      description: 'Primer proyecto NFT escrito en Huff',
      url: 'https://buttpluggy.com/',
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-3xl font-mono">
        <div className="space-y-4 border border-primary/30 p-8 bg-card/50">
          <div className="text-muted-foreground text-sm">$ cat proyectos.txt</div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">{'>'} Proyectos de la comunidad</h2>

          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.title} className="flex items-start gap-3 text-sm">
                <span className="text-primary">→</span>
                <div className="flex-1">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {project.title}
                  </a>
                  <span className="text-muted-foreground"> - {project.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

