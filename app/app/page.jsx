// NEXT.JS / REACT PORTFOLIO – PREMIUM VERSION
// Tech: Next.js + Tailwind + Framer Motion
// File: app/page.jsx

'use client'

import { motion } from 'framer-motion'
import { Download, Sun, Moon, GraduationCap, Award, BarChart } from 'lucide-react'
import { useState } from 'react'

export default function Portfolio() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-all">

        {/* NAVBAR */}
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-8 py-3 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-lg">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
            <img src="/profile.jpg" className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-blue-500" />
            <h1 className="text-5xl font-bold">Prabal <span className="text-blue-600">Sharma</span></h1>
            <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
              MBA (Business Analytics) | Business & Data Analyst
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="/Prabal_Sharma_Resume.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">
                <Download size={18}/> Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About Me">
          ATS-optimized Business Analytics professional with strong expertise in SQL, Python, Excel, Power BI, and Tableau.
          Proven ability to perform data cleaning, exploratory data analysis, dashboard development, KPI tracking,
          and business intelligence reporting. Adept at translating business requirements into actionable insights
          to support strategic and operational decision-making.
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Core Skills">
          <div className="grid md:grid-cols-3 gap-6">
            {['SQL & MySQL','Python (Pandas, NumPy)','Power BI & Tableau','Excel Automation','Dashboard Development','KPI Tracking','EDA & Data Cleaning','Stakeholder Communication'].map(skill=> (
              <div key={skill} className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow flex items-center gap-3">
                <BarChart className="text-blue-600"/> {skill}
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <Timeline
            title="Data Analyst Intern – Softvyom Consulting"
            period="Jan 2024 – Aug 2024"
            desc="Analyzed operational datasets using SQL and Excel, built BI dashboards, automated reporting workflows, and improved decision-making efficiency." />
          <Timeline
            title="Excel & Dashboard Developer – Digital Marketing Lab"
            period="Sep 2024 – Dec 2024"
            desc="Designed KPI dashboards, automated Excel reports, and delivered data-backed marketing insights." />
          <Timeline
            title="Implementation Consultant – Edunext Technologies"
            period="Mar 2025 – Jul 2025"
            desc="Gathered client requirements, analyzed system data, supported implementations, and improved user adoption." />
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            <Project
              title="Amazon Sales Performance Dashboard"
              embed="https://app.powerbi.com/view?r=YOUR_POWERBI_LINK"
              desc="Analyzed 12 months of sales data (5,000+ records). Built interactive Power BI dashboards tracking revenue, orders, and growth, reducing manual reporting time by 40%." />
            <Project
              title="Zomato Restaurant Analytics"
              embed="https://public.tableau.com/views/YOUR_TABLEAU_LINK"
              desc="Processed multi-city restaurant data, performed transformations, and built dashboards for demand and pricing insights." />
          </div>
        </Section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <Section id="education" title="Education & Achievements">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
              <GraduationCap className="mb-2 text-blue-600" />
              <p><strong>MBA – Business Analytics</strong><br/>Sri Balaji University, Pune</p>
              <p className="mt-2"><strong>B.Tech – Computer Science</strong><br/>SVVV, Indore</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
              <Award className="mb-2 text-blue-600" />
              <ul className="list-disc ml-5">
                <li>President – Amogh Photography Club</li>
                <li>Core Team – Spandan Techno-Cultural Fest</li>
                <li>Head of Photography – Team Leadership</li>
              </ul>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-center text-slate-500">© 2026 Prabal Sharma</footer>
      </main>
    </div>
  )
}

function Section({id,title,children}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
      {children}
    </section>
  )
}

function Timeline({title,period,desc}) {
  return (
    <div className="mb-6 p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-500">{period}</p>
      <p className="mt-2">{desc}</p>
    </div>
  )
}

function Project({title,embed,desc}) {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <iframe src={embed} className="w-full h-64 rounded mb-3" loading="lazy"></iframe>
      <p>{desc}</p>
    </div>
  )
}
