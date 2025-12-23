import { useEffect, useMemo, useState } from "react";
import "./App.css";

const projectImages = {
  rag: new URL("../rag-billing.png", import.meta.url).href,
  entropy: new URL("../entropy-biomarkers.png", import.meta.url).href,
  jewelry: new URL("../src/jewellery.jpeg", import.meta.url).href,
  stroke: new URL("../stroke-pipeline.png", import.meta.url).href,
  energy: new URL("../energy-consumption.png", import.meta.url).href,
  timeseries: new URL("../timeseries-forecast.png", import.meta.url).href,
  alzheimer: new URL("../alzheimer-cnn.png", import.meta.url).href,
  global: new URL("../global-disease-burden.png", import.meta.url).href,
  hackathon: new URL("../src/hackathon.jpeg", import.meta.url).href,
};

const projects = [
  {
    id: "epilepsy",
    title: "Healthcare AI: Epilepsy Seizure Prediction",
    summary:
      "Built an LSTM-based prediction pipeline reaching 95% accuracy and earned research funding for clinical impact.",
    tags: ["LSTM", "Healthcare", "Time Series"],
    image: projectImages.hackathon,
    imageFit: "contain",
    imagePosition: "center",
    details: [
      "LSTM model for seizure prediction with 95% accuracy.",
      "Secured $5,100 funding for clinical impact potential.",
      "Focused on healthcare-ready validation and reporting.",
    ],
  },
  {
    id: "stroke",
    title: "Stroke Risk Prediction on AWS",
    summary:
      "Deployed an XGBoost pipeline for stroke prediction with 94.7% accuracy using scalable AWS workflows.",
    tags: ["XGBoost", "AWS", "MLOps"],
    image: projectImages.stroke,
    link: "https://github.com/Sharmidas201/AMAZON_AWS_PIPELINE-strokeprediction",
    details: [
      "AWS pipeline with S3/EC2/SageMaker.",
      "Model monitoring + interpretability workflow.",
      "94.7% accuracy on validation.",
    ],
  },
  {
    id: "alzheimer",
    title: "Alzheimer's Stage Classification",
    summary:
      "Trained a ResNet-based CNN to classify MRI stages with 86% accuracy for early detection support.",
    tags: ["PyTorch", "Computer Vision", "Healthcare"],
    image: projectImages.alzheimer,
    link: "https://github.com/Sharmidas201/Alzheimer-Stage-Detection",
    details: [
      "ResNet CNN for MRI classification.",
      "86% accuracy across multiple stages.",
      "Supports early detection workflows.",
    ],
  },
  {
    id: "rag",
    title: "RAG Scientific QA Assistant",
    summary:
      "Built a retrieval-augmented chatbot with LangChain, Pinecone, and Llama 2 to improve domain QA.",
    tags: ["RAG", "LLMs", "LangChain"],
    image: projectImages.rag,
    link: "https://github.com/Sharmidas201/RagChatbot",
    details: [
      "LangChain + Pinecone + Llama 2 stack.",
      "Improved retrieval accuracy for scientific QA.",
      "Reduced irrelevant responses with grounding.",
    ],
  },
  {
    id: "energy",
    title: "Energy Analytics Pipeline",
    summary:
      "Designed a Hadoop-PySpark-Hive-Kibana pipeline analyzing 22k+ energy records to surface policy insights.",
    tags: ["PySpark", "Big Data", "Analytics"],
    image: projectImages.energy,
    link: "https://github.com/Sharmidas201/BigdataProjects",
    details: [
      "22k+ records across 129 features.",
      "GDP-linked energy transition insights.",
      "Hadoop + PySpark + Hive + Kibana.",
    ],
  },
  {
    id: "jewelry",
    title: "Generative Design Prototyping",
    summary:
      "Built GAN/VAE/diffusion prototypes to reduce jewelry design iteration time by ~40%.",
    tags: ["Generative AI", "Diffusion", "Creative Tools"],
    image: projectImages.jewelry,
    imageFit: "cover",
    imagePosition: "center",
    link:
      "https://github.com/Sharmidas201/GenAI-Fashion-ring-design/blob/main/Spherica_stablediffusion.ipynb",
    details: [
      "GANs, VAEs, and diffusion pipelines.",
      "Cut manual iteration time by ~40%.",
      "Integrated into creative workflows.",
    ],
  },
  {
    id: "entropy",
    title: "Entropy Biomarkers in Cancer",
    summary:
      "Analyzed 7,900+ TCGA records to identify prognostic pathways using entropy-derived metrics.",
    tags: ["Survival Analysis", "Biomarkers", "Research"],
    image: projectImages.entropy,
    link: "https://github.com/Sharmidas201/MRP-PROGRESS",
    details: [
      "Entropy-derived pathway metrics for survival.",
      "7,900+ TCGA patient records.",
      "Prognostic insights for adaptive therapy.",
    ],
  },
  {
    id: "document-ai",
    title: "Document & Knowledge AI",
    summary:
      "Implemented a LangChain-based RAG system for document understanding and grounded responses.",
    tags: ["NLP", "RAG", "Information Extraction"],
    image: projectImages.rag,
    details: [
      "Document QA with grounded outputs.",
      "Vector search + LLM orchestration.",
      "Built for real-world data quality.",
    ],
  },
  {
    id: "global",
    title: "Global Disease Burden Analyzer",
    summary:
      "Built a PyQt5 analytics app to explore DALYs vs socioeconomic indicators with 15+ visualizations.",
    tags: ["PyQt5", "Matplotlib", "Analytics"],
    image: projectImages.global,
    link: "https://github.com/Sharmidas201/-Global-Disease-Burden-Analyzer",
    details: [
      "GUI app + CLI tool for analytics.",
      "Regression/correlation reporting.",
      "15+ visualizations for public health.",
    ],
  },
  {
    id: "forecasting",
    title: "Sales & Profit Forecasting",
    summary:
      "Created regression and RNN forecasting models with strong predictive performance metrics.",
    tags: ["RNN", "Forecasting", "Python"],
    image: projectImages.timeseries,
    link: "https://github.com/Sharmidas201/RNN_timeseries",
    details: [
      "RNN + regression ensemble models.",
      "Strong accuracy across profit + sales.",
      "Actionable forecasting dashboards.",
    ],
  },
];

const experiences = [
  {
    role: "Graduate Researcher / AI Engineer (Healthcare)",
    company: "Toronto Metropolitan University",
    period: "Sep 2024 - Aug 2025",
    details: [
      "Built end-to-end AI pipelines on 7,900+ patient records, blending structured and unstructured clinical data.",
      "Developed predictive and survival models with robust validation, interpretability, and reliability focus.",
      "Designed production-grade Python workflows for ingestion, feature engineering, training, and evaluation.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Spherica Jewelry LLC (Remote)",
    period: "Jan 2024 - May 2024",
    details: [
      "Delivered production-style generative AI pipelines to accelerate content creation by ~40%.",
      "Built inference and evaluation workflows that bridged experimentation to deployment-ready systems.",
    ],
  },
  {
    role: "Graduate Assistant (Technical Systems Support)",
    company: "Toronto Metropolitan University",
    period: "Jan 2025 - Aug 2025",
    details: [
      "Supported ML pipeline debugging, validation, and failure analysis under time constraints.",
      "Provided technical support for student labs and system-level troubleshooting.",
    ],
  },
  {
    role: "Quality Engineering & Assurance Intern",
    company: "Cognizant",
    period: "Feb 2023 - Jul 2023",
    details: [
      "Automated QA testing with Selenium-Java, reducing manual effort and improving site performance.",
      "Collaborated with cross-functional teams to improve test coverage and defect detection.",
    ],
  },
];

const skills = [
  {
    group: "Applied AI",
    items: [
      "Document Understanding",
      "NLP + Entity Extraction",
      "RAG + LLM Workflows",
      "Predictive Modeling",
      "Model Validation",
    ],
  },
  {
    group: "Engineering & MLOps",
    items: [
      "Python",
      "REST Inference Pipelines",
      "Model Deployment",
      "Monitoring + Iteration",
      "Git + CI/CD Concepts",
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      "AWS (EC2, S3, SageMaker)",
      "Azure (OpenAI, Notebooks)",
      "GCP",
      "ETL + Data Validation",
      "SQL + PySpark",
    ],
  },
];

const education = [
  {
    degree: "MSc, Data Science & Analytics",
    school: "Toronto Metropolitan University",
    details: "Vector Scholarship in AI, Hack the World Hackathon Winner",
  },
  {
    degree: "Graduate Certificate, AI & Machine Learning",
    school: "Humber College",
    details: "Dean's Honour List",
  },
  {
    degree: "BTech, Computer Science & Engineering",
    school: "Future Institute of Technology",
    details: "Kolkata",
  },
];

const tools = [
  { name: "Python", accent: "#7cc7b6" },
  { name: "PyTorch", accent: "#f4a7a2" },
  { name: "TensorFlow", accent: "#f6c28b" },
  { name: "LangChain", accent: "#b7d7e8" },
  { name: "NLP", accent: "#f0c4a6" },
  { name: "Bayesian Stats", accent: "#d9c6f2" },
  { name: "SQL", accent: "#f2b5d4" },
  { name: "PySpark", accent: "#f7d694" },
  { name: "Hadoop", accent: "#d7e8b4" },
  { name: "HDFS", accent: "#f4d8a8" },
  { name: "Kibana", accent: "#b7d7e8" },
  { name: "Excel", accent: "#c9e6d8" },
  { name: "AWS", accent: "#f4b9a0" },
  { name: "GCP", accent: "#bfe3d0" },
  { name: "Azure", accent: "#b9d2f0" },
  { name: "Tableau", accent: "#e8c7f4" },
];

const testimonials = [
  {
    quote:
      "Sharmi explained core Java concepts with patience and clarity. Students left labs confident and prepared.",
    author: "Professor, Software Engineering",
  },
  {
    quote:
      "She broke down SQL queries step-by-step and helped me build a working analytics project quickly.",
    author: "Student, Data Analytics",
  },
  {
    quote:
      "Her support on computer science engineering coursework was practical and encouraging. She’s an excellent mentor.",
    author: "Student, Computer Science",
  },
];

const audienceCopy = {
  recruiter: {
    headline: "Recruiter",
    title: "Fast overview for hiring teams",
    body:
      "I'm open to AI Engineer, ML Engineer, and data analyst roles. I build production-minded ML systems, especially for healthcare workflows and NLP-driven applications.",
    cta: "Download Resume",
  },
  student: {
    headline: "Student",
    title: "Looking for tutoring or project support",
    body:
      "I help with ML foundations, Python workflows, and project debugging. If you're stuck, I can guide your next steps and review your approach.",
    cta: "Ask About Tutoring",
  },
};

export default function App() {
  const [audience, setAudience] = useState("recruiter");
  const [introOpen, setIntroOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentAudience = useMemo(() => audienceCopy[audience], [audience]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {introOpen && (
        <div className="intro-screen">
          <div className="intro-card">
            <p className="intro-kicker">Welcome</p>
            <h1>Before we dive in, who are you?</h1>
            <p className="intro-subtitle">
              I tailor this portfolio for recruiters or students seeking ML
              support. Pick your path to personalize the experience.
            </p>
            <div className="intro-options">
              <button
                type="button"
                className={audience === "recruiter" ? "active" : ""}
                onClick={() => setAudience("recruiter")}
              >
                Recruiter
              </button>
              <button
                type="button"
                className={audience === "student" ? "active" : ""}
                onClick={() => setAudience("student")}
              >
                Student
              </button>
            </div>
            <button
              type="button"
              className="primary intro-cta"
              onClick={() => setIntroOpen(false)}
            >
              Enter Portfolio
            </button>
          </div>
        </div>
      )}
      <aside className={`tools-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>Tools Stack</h3>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close tools drawer"
          >
            ×
          </button>
        </div>
        <p className="drawer-subtitle">
          The core tools I use to build ML systems and analytics workflows.
        </p>
        <div className="drawer-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-chip">
              <span
                className="tool-dot"
                style={{ background: tool.accent }}
              />
              {tool.name}
            </div>
          ))}
        </div>
      </aside>
      <header className="site-header">
        <div className="logo">SD</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-cta"
            onClick={() => setDrawerOpen(true)}
          >
            Tools Stack
          </button>
          <a className="nav-cta ghost" href="#contact">
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero" data-reveal>
          <div className="hero-content">
            <p className="eyebrow">
              AI Engineer + Data Analyst · Healthcare AI · Toronto, ON · Open to
              roles
            </p>
            <h1>
              Sharmi Das builds{" "}
              <span className="hero-dynamic">adaptive AI systems</span> for
              healthcare, analytics, and language intelligence.
            </h1>
            <p className="hero-subtitle">
              Machine learning, data science, and analytics builder with hands-on
              experience in NLP, RAG, and predictive modeling. Comfortable taking
              models from idea to deployment-ready pipelines.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">
                View Projects
              </a>
              <button
                type="button"
                className="ghost"
                onClick={() => setDrawerOpen(true)}
              >
                View Tools
              </button>
              <a className="ghost" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <div>
                  <span className="meta-label">Location</span>
                  <span>Toronto, ON (Remote Canada)</span>
                </div>
              </div>
              <div>
                <span className="meta-label">Focus</span>
                <span>Healthcare AI, NLP, RAG, MLOps</span>
              </div>
              <div>
                <span className="meta-label">Availability</span>
                <span>Open to new roles</span>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card audience-card">
              <div className="panel-title">Who&apos;s visiting?</div>
              <div className="audience-header">
                <img
                  className="audience-headshot"
                  src={new URL("../headshot.jpg", import.meta.url).href}
                  alt="Sharmi Das headshot"
                  loading="lazy"
                />
                <div className="audience-meta">
                  <p className="audience-name">Sharmi Das</p>
                  <p className="audience-role">AI Engineer · Data Analyst</p>
                </div>
              </div>
              <div className="segmented">
                <button
                  className={audience === "recruiter" ? "active" : ""}
                  onClick={() => setAudience("recruiter")}
                >
                  Recruiter
                </button>
                <button
                  className={audience === "student" ? "active" : ""}
                  onClick={() => setAudience("student")}
                >
                  Student
                </button>
              </div>
              <div className="panel-copy">
                <p className="panel-flag">{currentAudience.headline}</p>
                <h3>{currentAudience.title}</h3>
                <p>{currentAudience.body}</p>
                <a className="panel-link" href="#contact">
                  {currentAudience.cta}
                </a>
              </div>
            </div>
            <div className="panel-card stats">
              <div>
                <h4>7,900+</h4>
                <p>Healthcare records modeled</p>
              </div>
              <div>
                <h4>95%</h4>
                <p>Epilepsy prediction accuracy</p>
              </div>
              <div>
                <h4>40%</h4>
                <p>Design iteration time reduced</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" data-reveal>
          <div className="section-head">
            <h2>Applied AI Highlights</h2>
            <p>
              Applied AI and analytics work across healthcare, NLP, and scalable
              data systems.
            </p>
          </div>
          <div className="grid">
            {projects.map((project, index) => (
              <details
                key={project.title}
                className="card project-placard"
                data-reveal
                data-direction={index % 2 === 0 ? "left" : "right"}
              >
                <summary className="placard-trigger">
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        objectFit: project.imageFit || "cover",
                        objectPosition: project.imagePosition || "center",
                      }}
                    />
                  </div>
                  <div className="placard-title">
                    <h3>{project.title}</h3>
                    <span className="placard-hint">
                      <span className="hint-closed">Show more</span>
                      <span className="hint-open">Show less</span>
                    </span>
                  </div>
                  <p>{project.summary}</p>
                </summary>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul className="project-preview">
                  {project.details.slice(0, 2).map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="project-details">
                  {project.details.length > 2 && (
                    <ul>
                      {project.details.slice(2).map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  {project.link && (
                    <a className="project-link" href={project.link}>
                      View on GitHub
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="experience" className="section" data-reveal>
          <div className="section-head">
            <h2>Experience</h2>
            <p>
              Highlights from AI engineering, research, and applied ML delivery.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((role) => (
              <div key={role.role} className="timeline-item" data-reveal>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-title">
                    <h3>{role.role}</h3>
                    <span>{role.period}</span>
                  </div>
                  <p className="timeline-company">{role.company}</p>
                  <ul>
                    {role.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section" data-reveal>
          <div className="section-head">
            <h2>Skills</h2>
            <p>Tools and workflows for production-minded AI delivery.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.group}
                className="skill-card"
                data-reveal
                data-direction={index % 2 === 0 ? "left" : "right"}
              >
                <h3>{skill.group}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section" data-reveal>
          <div className="section-head">
            <h2>Education</h2>
            <p>Academic foundations and recognitions.</p>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="card"
                data-reveal
                data-direction={index % 2 === 0 ? "right" : "left"}
              >
                <h3>{edu.degree}</h3>
                <p className="timeline-company">{edu.school}</p>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section" data-reveal>
          <div className="section-head">
            <h2>Mentor Notes</h2>
            <p>Feedback from teaching and mentoring moments.</p>
          </div>
          <div className="grid">
            {testimonials.map((note) => (
              <article key={note.author} className="card note-card" data-reveal>
                <p className="note-quote">“{note.quote}”</p>
                <p className="note-author">— {note.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" data-reveal>
          <div className="section-head">
            <h2>Let&apos;s connect</h2>
            <p>
              Open to AI Engineer, ML Engineer, and data analyst roles. Available
              for tutoring support on ML projects.
            </p>
          </div>
          <div className="contact-card">
            <div>
              <h3>Contact</h3>
              <p>
                Email: <a href="mailto:dassharmi6@gmail.com">dassharmi6@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+14376625715">+1 437 662 5715</a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/sharmidas0402">
                  linkedin.com/in/sharmidas0402
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/Sharmidas201">
                  github.com/Sharmidas201
                </a>
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary" href="mailto:dassharmi6@gmail.com">
                Email me
              </a>
              <a className="ghost" href="https://linkedin.com/in/sharmidas0402">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Sharmi Das - AI Engineer and Data Analyst</p>
      </footer>
    </div>
  );
}
