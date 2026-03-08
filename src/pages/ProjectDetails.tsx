import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import { projects } from "@/data/projects";

// This would typically come from a shared data file or API

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Back to projects
        </Link>

        {/* Project Header */}
        <header className="mb-5">
          <h1 className="text-4xl font-light tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            {project.company && (
              <span className="flex items-center">
                <span className="mr-2">Company:</span>
                <span className="text-foreground/80">{project.company}</span>
              </span>
            )}
            {project.date && (
              <span className="flex items-center">
                <span className="mr-2">Date:</span>
                <span className="text-foreground/80">{project.date}</span>
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </header>
        {/* Website Link */}
        {project.website && (
          <section className="mb-12">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 border border-border rounded-md px-3 py-1"
            >
              Visit Website
            </a>
          </section>
        )}

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <ImageCarousel images={project.images} alt={project.title} />
          </section>
        )}

        {/* Long Description */}
        {project.longDescription && (
          <section className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              About This Project
            </h2>
            <p
              className="text-lg leading-relaxed text-foreground/90"
              style={{ whiteSpace: "pre-line" }}
            >
              {project.longDescription}
            </p>
          </section>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-card border border-border rounded-md text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Thalhath Mohamed . All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetails;
