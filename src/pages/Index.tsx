import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { Experience, experiences } from "@/data/experiences";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <section className="mb-32 mt-32">
          <h1 className="text-6xl font-light tracking-tight mb-4 mt-10">
            Thalhath Mohamed
          </h1>
          <p className="text-muted-foreground text-lg">
            Software Engineer and Entrepreneur
          </p>
        </section>

        {/* About */}
        <section id="about" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl uppercase tracking-widest text-foreground mb-6">
            About
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            I craft simple, elegant, and high-performing digital products. From
            mobile apps to modern web platforms, I combine development expertise
            with hands-on AI and data-driven engineering to create smarter, more
            intuitive user experiences. My work is guided by clarity, purpose,
            and a commitment to building technology that feels seamless,
            thoughtful, and beautifully functional.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl uppercase tracking-widest text-foreground mb-8">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/project/${project.id}`}
                className="block group p-6 -mx-6 rounded-lg hover:bg-card transition-colors border border-border"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-2xl uppercase tracking-widest text-foreground mb-8">
            Experiences
          </h2>
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="group p-6 -mx-6 rounded-lg hover:bg-card transition-colors border border-border">
                <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">{experience.role}</h3>
                <p className="text-sm text-muted-foreground mb-2">{experience.company}</p>
                <p className="text-sm text-foreground/70">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/*Connect*/}
        <section id="connect" className="scroll-mt-24 mt-32">
          <h2 className="text-2xl uppercase tracking-widest text-foreground mb-8">
            Connect
          </h2>
          <div className="space-y-6">
            <div>
              <a href="mailto:thalhath@gmail.com" className="text-lg text-foreground/70 hover:text-foreground transition-colors">
                thalhath@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://github.com/KillCode2301" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub" 
                className="hover:opacity-70 transition-opacity"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
              </a>
              <a 
                href="https://www.instagram.com/tholle233/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="hover:opacity-70 transition-opacity"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a 
                href="https://x.com/thollem233" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)" 
                className="hover:opacity-70 transition-opacity"
              >
                <img src="/icons/x.svg" alt="X (Twitter)" className="w-8 h-8" />
              </a>
              <a 
                href="https://web.facebook.com/tholhath.mohamed.77" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="hover:opacity-70 transition-opacity"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
