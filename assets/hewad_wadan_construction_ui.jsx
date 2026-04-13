export default function HewadWadanConstructionUI() {
  const services = [
    {
      title: "Building Construction",
      desc: "Residential, commercial, and public-sector construction delivered with quality and discipline.",
    },
    {
      title: "Road & Infrastructure",
      desc: "Reliable execution for roads, drainage, utility works, and site development projects.",
    },
    {
      title: "Renovation & Finishing",
      desc: "Modern upgrades, structural improvements, interior finishing, and maintenance support.",
    },
  ];

  const stats = [
    { value: "120+", label: "Completed Projects" },
    { value: "45+", label: "Skilled Team Members" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Project Support" },
  ];

  const projects = [
    {
      name: "City Commercial Plaza",
      category: "Commercial",
      summary: "A multi-floor commercial facility with strong structural planning and modern façade finishing.",
    },
    {
      name: "Highway Service Block",
      category: "Infrastructure",
      summary: "Civil works package including concrete structures, site preparation, and service access roads.",
    },
    {
      name: "Luxury Villa Compound",
      category: "Residential",
      summary: "Elegant residential construction with premium detailing, landscaping, and utility integration.",
    },
  ];

  const Logo = () => (
    <div className="flex items-center gap-3">
      <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-yellow-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-700 opacity-95" />
        <div className="absolute inset-0 flex items-center justify-center text-black font-black text-xl tracking-tight">
          HW
        </div>
        <div className="absolute bottom-1 left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-sm border-x-2 border-t-4 border-black/80" />
      </div>
      <div>
        <div className="text-lg font-extrabold tracking-[0.18em] text-white">HEWAD WADAN</div>
        <div className="text-xs uppercase tracking-[0.35em] text-yellow-400">Construction Company</div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.13),_transparent_24%),radial-gradient(circle_at_left,_rgba(255,255,255,0.05),_transparent_20%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
            <Logo />
            <nav className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
              <a href="#services" className="rounded-full px-4 py-2 transition hover:bg-white/10">Services</a>
              <a href="#projects" className="rounded-full px-4 py-2 transition hover:bg-white/10">Projects</a>
              <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-white/10">About</a>
              <a href="#contact" className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-yellow-300 transition hover:bg-yellow-500/20">Contact Us</a>
            </nav>
          </header>

          <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                Trusted Construction & Engineering Solutions
              </div>
              <h1 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
                Building the future with strength, precision, and trust.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
                Hewad Wadan Construction Company delivers modern construction, infrastructure, and finishing solutions for public and private projects with a strong focus on quality, safety, and timely delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Get a Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-28 w-28 rounded-full bg-yellow-500/20 blur-3xl" />
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="mb-3 text-sm text-yellow-400">Project Excellence</div>
                    <div className="text-3xl font-bold">Premium</div>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">
                      Smart planning, durable materials, and disciplined site execution.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-yellow-500 p-5 text-black">
                    <div className="mb-3 text-sm font-semibold">Safety First</div>
                    <div className="text-3xl font-black">100%</div>
                    <p className="mt-3 text-sm leading-7 text-black/80">
                      Quality control and safety standards built into every stage.
                    </p>
                  </div>
                  <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-neutral-300">Construction Workflow</span>
                      <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">Active</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Planning & Design",
                        "Material Procurement",
                        "Execution & Supervision",
                        "Inspection & Handover",
                      ].map((item, idx) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/30 px-4 py-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">{idx + 1}</div>
                          <span className="text-sm text-neutral-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-black/30 p-6">
              <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
              <div className="mt-2 text-sm text-neutral-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Our Services</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Construction services built for real results</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-xl font-black text-black">
                {service.title.split(" ")[0][0]}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-8 text-neutral-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Recent Work</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Featured projects</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="h-52 bg-gradient-to-br from-neutral-700 via-neutral-800 to-black p-6">
                <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300">
                  {project.category}
                </div>
                <div className="mt-10 flex h-24 items-end justify-between">
                  <div className="text-6xl font-black text-white/10">0{index + 1}</div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-xs text-neutral-300">
                    Project Showcase
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-4 leading-8 text-neutral-300">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">About Company</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">A trusted partner in construction excellence</h2>
            <p className="mt-6 max-w-2xl leading-8 text-neutral-300">
              Hewad Wadan Construction Company is dedicated to delivering dependable engineering and construction services with integrity, professionalism, and long-term value. We combine practical field experience with modern project coordination to complete work safely and efficiently.
            </p>
          </div>
          <div className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/10 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-200">Why Choose Us</div>
            <ul className="mt-6 space-y-4 text-neutral-100">
              {[
                "Experienced management and field supervision",
                "Strong focus on quality and material standards",
                "Clear communication and on-time delivery",
                "Professional support for public and private projects",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-black/15 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-yellow-500 to-amber-600 p-[1px] shadow-2xl">
          <div className="grid gap-8 rounded-[2rem] bg-neutral-950 p-8 lg:grid-cols-[1fr,0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Contact Us</div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Let’s build your next project together</h2>
              <p className="mt-5 max-w-xl leading-8 text-neutral-300">
                Share your project requirements and our team will help you with planning, budgeting, and construction execution.
              </p>
            </div>
            <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-neutral-500" placeholder="Your Name" />
              <input className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-neutral-500" placeholder="Phone / Email" />
              <textarea className="min-h-[120px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-neutral-500" placeholder="Project Details" />
              <button type="button" className="rounded-2xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
