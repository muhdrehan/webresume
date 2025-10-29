"use client";


export default function Projects() {
  // Replace these example entries with your real project names, descriptions and repo links
  const projects = [
    {
      name: "AI Receptionist",
      description: "Voice assistant that books workshop slots (Twilio + Google Gemini).",
      repo: "https://github.com/muhdrehan/Automobile-ai-receptionist"
    },
    {
      name: "Custom GPT",
      description: "Portal for teachers and students with profiles & chat.",
      repo: "https://github.com/muhdrehan/Custom-GPT"
    },
    {
      name: "Job Bot Automations",
      description: "Automation bot that appy on linkedin jobs while you sleep.",
      repo: "https://github.com/muhdrehan/Jobsy"
    },
    {
      name: "AI ChatBot",
      description: "AI Chat bot with Gemani integration.",
      repo: "https://github.com/muhdrehan/GemaniChatbot"
    },
    {
      name: "Smart Meet",
      description: "Your Smartest Meeting Partner Ever!",
      repo: "https://github.com/muhdrehan/smartmeet"
    }
  ];
  
   return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.repo}
              className="p-4 border rounded-lg shadow-sm 
                         transform transition 
                         duration-300 ease-in-out
                         hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm mt-1">{p.description}</p>
              <div className="mt-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                >
                  View on GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}