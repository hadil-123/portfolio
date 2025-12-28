import Image from "next/image";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SkillBox from "./components/SkillBox";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-8">
{/* ================= HOME ================= */}
<section
  id="home"
  className="pt-32 pb-32 flex flex-col md:flex-row md:items-center md:justify-between gap-16"
>
  {/* LEFT TEXT */}
  <div className="max-w-2xl">
    <p className="text-xs uppercase tracking-widest text-gray-500">
      Portfolio
    </p>

    <h1 className="mt-4 text-4xl font-semibold">
      Hadil Eltaif
    </h1>

    <p className="mt-6 text-gray-600 leading-relaxed">
      Master AI student & software engineer focused on applied machine learning,
      indoor perception, and reproducible research software.
    </p>

    <p className="mt-3 text-sm text-gray-500">
      AI · Machine Learning · LiDAR Perception · Tracking
    </p>

    <div className="mt-8 flex gap-6 text-sm">
      <a href="#projects" className="underline">Projects</a>
      <a href="/cv.pdf" target="_blank" className="underline">CV</a>
      <a
        href="https://github.com/YOUR_GITHUB"
        target="_blank"
        className="underline"
      >
        GitHub
      </a>
    </div>
  </div>

  {/* RIGHT PHOTO */}
  <div className="flex-shrink-0">
    <div className="relative h-40 w-40">
      <Image
        src="/me1.jpg"
        alt="Profile photo"
        fill
        className="rounded-full object-cover"
        priority
      />
    </div>
  </div>
</section>



          {/* ================= ABOUT ================= */}
          <section id="about" className="py-24 scroll-mt-24">
            <h2 className="text-2xl font-semibold">About</h2>

            <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">
              I am a Master’s research student in Computer Science at Université de Sherbrooke
              (DOMUS Lab). My research focuses on privacy-preserving indoor perception using
              LiDAR, including person detection and multi-target tracking. I enjoy building
              end-to-end ML pipelines and clean engineering systems.
            </p>
          </section>

          {/* ================= PROJECTS ================= */}
          <section id="projects" className="py-24 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Projects</h2>

            <div className="mt-12 space-y-12">
              <ProjectCard
                title="Indoor LiDAR Person Detection"
                desc="Geometric embeddings and positive-only learning for privacy-preserving
                      person detection in indoor LiDAR data."
                tags={["Python", "PyTorch", "Machine Learning"]}
                github="https://github.com/YOUR_GITHUB/REPO1"
              />

              <ProjectCard
                title="Multi-Target Tracking (KF / EKF / UKF)"
                desc="Tracking-by-detection pipeline with Kalman-based filters, gating,
                      and data association."
                tags={["Python", "Tracking", "Kalman Filters"]}
                github="https://github.com/YOUR_GITHUB/REPO2"
              />

              <ProjectCard
                title="Dataset Tools & Evaluation"
                desc="Python tools for dataset preprocessing, metrics computation,
                      and experimental evaluation."
                tags={["Python", "CLI", "Evaluation"]}
                github="https://github.com/YOUR_GITHUB/REPO3"
              />
            </div>
          </section>

          {/* ================= SKILLS ================= */}
          <section id="skills" className="py-24 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Skills</h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <SkillBox
                title="Languages"
                items={["Python", "C++", "TypeScript", "SQL"]}
              />
              <SkillBox
                title="AI / ML"
                items={[
                  "PyTorch",
                  "scikit-learn",
                  "Representation learning",
                  "Model evaluation",
                ]}
              />
              <SkillBox
                title="Tools"
                items={["Git", "Linux", "Docker", "Jupyter"]}
              />
              <SkillBox
                title="Focus"
                items={[
                  "Indoor perception",
                  "LiDAR sensing",
                  "Tracking-by-detection",
                ]}
              />
            </div>
          </section>

          {/* ================= CONTACT ================= */}
          <section id="contact" className="py-24 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Contact</h2>

            <p className="mt-6 text-gray-600">
              Email:&nbsp;
              <a className="underline" href="mailto:YOUR_EMAIL">
                YOUR_EMAIL
              </a>
            </p>

            <p className="mt-2 text-gray-600">
              GitHub:&nbsp;
              <a
                className="underline"
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
              >
                github.com/YOUR_GITHUB
              </a>
            </p>
          </section>

          <footer className="py-10 text-sm text-gray-400">
            © {new Date().getFullYear()} Hadil Eltaif
          </footer>
        </div>
      </main>
    </>
  );
}
