import React from "react";
import { motion } from "framer-motion";

const PROFILE_PIC = "/profile.jpg"; // put your profile image in public/profile.jpg
const EMAIL = "ankitsenapati155@gmail.com";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 text-gray-900 antialiased">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white font-bold">
            AA
          </div>
          <div>
            <h1 className="text-xl font-semibold">ANKIT ANURAG SENAPATI</h1>
            <p className="text-sm text-gray-700">Full Stack Developer | AI Enthusiast | Cloud Learner</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Hi, I’m <span className="text-blue-500">Ankit</span> — a Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-4 text-gray-700 max-w-xl"
            >
              I build web apps, design REST APIs, and work with ML models for impactful projects.
            </motion.p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full shadow hover:translate-y-[-2px] transition"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-full hover:bg-blue-100 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="CGPA" value="8.23" />
              <Stat label="IEEE Paper" value="Crime Prediction" />
              <Stat label="Internships" value="Tech Mahindra" />
              <Stat label="Repos" value="GitHub: Antheron23" />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
              <img src={PROFILE_PIC} alt="Ankit" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-gray-700"
          >
            I am a Computer Science Engineer who builds full-stack web applications and enjoys working with AI and cloud technologies.
            My projects include a Cloud Expense Tracker (React, Node.js, MongoDB Atlas), an ML-based Crime Type and Occurrence Predictor, an Invoice Processing System integrating Spring Boot and Hibernate, a GenAI-powered Knowledge Chatbot for private document Q&A, and a Flipkart Clone built with React, Node.js, Express.js, and MongoDB. I have also interned at Tech Mahindra, where I worked on SQL automation and reporting applications for an Automobile Manufacturing client. Additionally, I published an IEEE research paper on Crime Type and Occurrence Prediction.
          </motion.p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900">Core Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['C++','Python','Java','JavaScript','React','Node.js','Express','MongoDB','MySQL','Tailwind','Bootstrap','MUI','Git','VSCode','IntelliJ'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-full text-sm shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            Projects
          </motion.h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ProjectCard
              title="GenAI Assistant"
              desc="A generative AI project capable of answering user queries, summarizing documents, and automating content generation using LLMs and Python."
              tech={["Python","Streamlit","OpenAI API","LangChain"]}
              link="https://github.com/Antheron23/GenAi-knowledge-chatbot"
            />
            <ProjectCard
              title="Cloud Expense Tracker"
              desc="Full-stack expense management system with CRUD, real-time updates, and insights dashboard."
              tech={["React","Node.js","Express","MongoDB"]}
              link="https://github.com/Antheron23/cloud-expense-tracker"
            />
            <ProjectCard
              title="Crime Type and Occurrence Predictor"
              desc="Optimized ML models (Random Forest, Decision Tree, TensorFlow, KNN) achieving high accuracy with PCA and feature engineering."
              tech={["Python","TensorFlow","sklearn","PCA"]}
              link="#"
            />
            <ProjectCard
              title="Invoice Processing System"
              desc="Backend-focused system using React, Node.js, Spring Boot, Hibernate, and MySQL for efficient invoice processing."
              tech={["Spring Boot","Hibernate","MySQL","Node.js"]}
              link="https://github.com/Antheron23/invoice-processing-system"
            />
            <ProjectCard
              title="Flipkart Clone"
              desc="Dynamic e-commerce platform replicating Flipkart with user authentication, shopping cart, and payment integration."
              tech={["React","Node.js","Express","MongoDB","Redux","Bootstrap"]}
              link="https://github.com/Antheron23/flipkart-clone"
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-16">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            Experience
          </motion.h3>
          <div className="mt-6 space-y-4">
            <Card>
              <div>
                <h4 className="font-semibold">Tech Mahindra — Intern</h4>
                <p className="text-sm text-gray-600">May 2024 – July 2024 · Bhubaneswar, Odisha</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>Worked on Automobile Manufacturing client project under Data Analysis team.</li>
                  <li>Developed QlikSense dashboards and SQL report generation from ERP sources.</li>
                  <li>Wrote SQL queries to extract and transform data, improving reporting efficiency.</li>
                  <li>Assisted in data validation and cleansing for large datasets.</li>
                  <li>Collaborated with senior analysts to automate recurring reports.</li>
                  <li>Learned best practices in data governance, visualization, and reporting automation.</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-16">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            Education
          </motion.h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <h4 className="font-semibold">KIIT University</h4>
              <p className="text-sm text-gray-600">B.Tech, Computer Science Engineering · Oct 2021 – Present</p>
              <p className="mt-2 text-gray-700">CGPA: 8.23</p>
            </Card>
            <Card>
              <h4 className="font-semibold">Kendriya Vidyalaya Bhubaneswar</h4>
              <p className="text-sm text-gray-600">Class XII (CBSE) · May 2021</p>
              <p className="mt-2 text-gray-700">Percentage: 88.0</p>
            </Card>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            Contact
          </motion.h3>

          <div className="mt-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Left Info */}
            <div className="flex-1 max-w-md">
              <p className="text-gray-700">Email: {EMAIL}</p>
              <p className="text-gray-700 mt-2">Location: Bhubaneswar</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://github.com/Antheron23" target="_blank" rel="noreferrer" className="px-3 py-2 border border-gray-300 rounded-full hover:bg-blue-100 transition">GitHub</a>
                <a href="https://www.linkedin.com/in/ankit-anurag-senapati/" target="_blank" rel="noreferrer" className="px-3 py-2 border border-gray-300 rounded-full hover:bg-blue-100 transition">LinkedIn</a>
                <a href="https://leetcode.com/u/Ankit-2004/" target="_blank" rel="noreferrer" className="px-3 py-2 border border-gray-300 rounded-full hover:bg-blue-100 transition">LeetCode</a>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 w-full">
              <form
                onSubmit={(e) => { e.preventDefault(); alert('Replace with real form handler or add email to enable.'); }}
                className="p-6 rounded-2xl shadow w-full bg-gradient-to-br from-white/90 to-blue-50"
              >
                <label className="text-sm font-medium">Message</label>
                <textarea
                  placeholder="Hi Ankit — I liked your work..."
                  className="w-full mt-2 p-3 border rounded-2xl resize-none"
                  rows={3}
                />
                <div className="mt-3 flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full hover:translate-y-[-1px] transition">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-20 pb-12 text-center text-sm text-gray-500">
          Built with ❤️ by Ankit Anurag Senapati — {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}

/* COMPONENTS */

function Stat({ label, value }) {
  return (
    <div className="p-3 rounded-2xl text-center shadow-sm border border-gray-200 bg-gradient-to-br from-white/90 to-blue-50">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="p-4 rounded-2xl shadow-sm border border-gray-200 bg-gradient-to-br from-white/90 to-blue-50">
      {children}
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-4 rounded-2xl shadow-sm border border-gray-200 bg-gradient-to-br from-white/90 to-blue-50"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="mt-2 text-gray-700 text-sm">{desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 border rounded-full text-gray-600 bg-white/50 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4">
          <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">View</a>
        </div>
      </div>
    </motion.div>
  );
}
