import { Link } from "react-router-dom";

const projects = [
  {
    title: "Project One",
    description: "A minimalist web application built with React and TypeScript.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An open-source CLI tool for automating workflows.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with modern UX.",
    link: "#",
  },
];

const experiences = [
  {
    role: "Senior Developer",
    company: "Tech Company",
    period: "2022 — Present",
    description: "Leading frontend architecture and design system development.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2020 — 2022",
    description: "Built and scaled web applications from zero to production.",
  },
  {
    role: "Junior Developer",
    company: "Agency Co",
    period: "2018 — 2020",
    description: "Developed client websites and internal tools.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-medium tracking-wide">Portfolio</span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <Link to="/timer" className="hover:text-foreground transition-colors">Timer</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <section className="mb-32">
          <h1 className="text-4xl font-light tracking-tight mb-4">Your Name</h1>
          <p className="text-muted-foreground text-lg">Developer & Designer</p>
        </section>

        {/* About */}
        <section id="about" className="mb-32 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">About</h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a developer passionate about creating minimal, functional, and beautiful digital experiences. 
            With a focus on clean code and thoughtful design, I build products that prioritize user experience 
            and performance.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block group p-6 -mx-6 rounded-lg hover:bg-card transition-colors"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                <p className="text-sm text-foreground/70">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
