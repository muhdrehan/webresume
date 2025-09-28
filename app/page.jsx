"use client";
// top of file
import Projects from "./components/Projects";

 

import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 antialiased font-sans">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Muhammad Rehan
            </h1>
            <h2 className="text-xl md:text-2xl mt-2 text-gray-400">
              Designing the future of AI, VAS & Digital &amp; Web3
            </h2>
          </div>

          <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/edison-protus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/muhdrehan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.5a5.11 5.11 0 0 0-5.61 0C8.27.65 7.09 1 7.09 1A5.07 5.07 0 0 0 7 4.77a5.44 5.44 0 0 0 1.5 3.78c0 5.42-3.3 6.61-6.44 7A3.37 3.37 0 0 0 2 16.13V20"></path>
              </svg>
            </a>

            {/* Portfolio Icon (if applicable) */}
            
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Image (using a placeholder) */}
            <div className="md:col-span-1 rounded-full overflow-hidden w-48 h-48 mx-auto md:w-full md:h-auto md:rounded-lg">
              {/* Ensure your image file is in the 'public' directory and the path matches the filename exactly. */}
              <img
                src="/muhammad-rehan.jpg"
                alt="Edison Protus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                As a seasoned Product Manager and Solution Architect with over 7 years of experience in AI, Web3, IoT, and telecom, I bridge the gap between business needs and technical execution. My journey has taken me from leading product strategies for startups to designing enterprise solutions for telecom giants. I thrive on building high-impact products that solve real-world problems and drive growth.
              </p>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm md:text-base">
                <span className="bg-gray-800 rounded-full px-4 py-1">LangChain, LLM & Crew AI</span>
                <span className="bg-gray-800 rounded-full px-4 py-1">Blockchain & Solidity</span>
                <span className="bg-gray-800 rounded-full px-4 py-1">Kubernetes & OpenShift</span>
                <span className="bg-gray-800 rounded-full px-4 py-1">IoT & Connected Cars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Experience</h3>
          <div className="space-y-12">
            {/* Job 1: Astra Network */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-gray-300">Lead Product Architect - AI & Web3</h4>
                <p className="text-sm text-gray-500">Astra Network Pvt Ltd</p>
                <p className="text-sm text-gray-500">Mar '25 - Jun '25</p>
              </div>
              <div className="md:w-3/4">
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Led the development of a Web3 compliance platform, shaping product strategy and managing agile cycles.</li>
                  <li>Translated business requirements into detailed technical specifications (BRD, FRS, SRS, HLD & LLD).</li>
                  <li>Drove product roadmap execution and provided solution architecture guidance.</li>
                  <li>Drive the development and execution of product strategy and roadmap</li>
                  <li>Coordinate between AI, blockchain, and full-stack development teams and business stakeholders</li>
                  <li>Provide support in solution architecture, including technical assessments and design decisions </li>
                  <li>Support integration of complex systems through solution architecture guidance</li>
                  <li>Ensure blockchain-based identity verification systems comply with regulatory and market requirements</li>
                </ul>
              </div>
            </div>

            {/* Job 2: STC */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-gray-300">Lead Solution Architect</h4>
                <p className="text-sm text-gray-500">STC</p>
                <p className="text-sm text-gray-500">Mar '24 - Mar '25</p>
              </div>
              <div className="md:w-3/4">
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Designed end-to-end IoT solutions for a Connected Cars project.</li>
                  <li>Created proof-of-concept models and handled billing integrations for IoT devices.</li>
                  <li>Managed customer onboarding for wholesale business units.</li>
                  <li>Handled the Integrations and onboarding from CRM to Billing</li>
                  <li>Responsible for the Migration of IoT Business Units</li>
                </ul>
              </div>
            </div>

            {/* Job 3: Telenor */}
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-gray-300">Systems Analyst</h4>
                <p className="text-sm text-gray-500">Telenor</p>
                <p className="text-sm text-gray-500">Apr '20 - Mar '24</p>
              </div>
              <div className="md:w-3/4">
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Member of the O-hour team, where in-house requirements were discussed and implemented.</li>
                  <li>Responsible for requirement gathering, scoping, delivery, and monetization of end-to-end solutions for VAS, IoTs and Digital applications and their change related services.</li>
                  <li>Locking all kind of WO for Ops, Ip core, Regulatory, CBS, Cloud Team & detailed discussion with Architecture Forum,
                      coordinating with Product development & Business Teams. </li>
                  <li>Collaborating with Different teams in Telenor for execution of different category Projects. </li>
                  <li>Delivered Project Galaxy, providing vendors with access via NIAM instead of traditional VPN services.</li>
                  <li>Collaborated with different teams for the execution of various projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span className="bg-gray-800 rounded-full px-4 py-1">Linux/Unix</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Windows Server</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">TCP/IP & Networking</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Diameter Protocol & SMPP </span>
            <span className="bg-gray-800 rounded-full px-4 py-1">OpenShift</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Kubernetes</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Amazon Web Services</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Git & GitHub</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Agile & Scrum</span>
            <span className="bg-gray-800 rounded-full px-4 py-1">Product Management</span>
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Awards</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>High Flyer Award - Quarter 3, 2022 (Telenor Pakistan)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Go Getter Award - Quarter 3, 2024 (Telenor Pakistan)</span>
            </div>
          </div>
        </section>
  <Projects />

      </main>
    </div>
  );
}
