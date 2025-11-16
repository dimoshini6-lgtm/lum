import React from 'react';

// Lumora Solutions - Single-file React component (TailwindCSS)
// Usage: paste into a React project (Vite/Create React App) with Tailwind set up.

export default function LumoraWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold">L</div>
            <div>
              <h1 className="text-lg font-semibold">Lumora Solutions</h1>
              <p className="text-xs text-gray-500">Software Development & Digital Transformation</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#team" className="hover:text-indigo-600">Team</a>
            <a href="#careers" className="hover:text-indigo-600">Careers</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="ml-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">Get Started</a>
          </nav>

          <button className="md:hidden p-2 rounded bg-gray-100">Menu</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">We build software that illuminates the future.</h2>
            <p className="mt-4 text-gray-600">Lumora Solutions helps businesses transform with custom software, cloud migration, and data-driven products — enabling measurable impact and long-term growth.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 bg-indigo-600 text-white rounded-lg font-medium">Talk to Sales</a>
              <a href="#services" className="px-5 py-3 border border-gray-200 rounded-lg">Our Services</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-semibold">300+</div>
                <div className="text-xs">Employees</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="font-semibold">Hybrid</div>
                <div className="text-xs">Work Model</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-sm text-gray-500">Request a demo</div>
            <h3 className="mt-2 font-semibold">Schedule a free discovery call</h3>
            <form className="mt-4 space-y-3">
              <input className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Full name" />
              <input className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Company email" />
              <input className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Company" />
              <div className="flex gap-2">
                <input className="flex-1 border border-gray-200 rounded px-3 py-2" placeholder="Preferred date" />
                <input className="w-1/3 border border-gray-200 rounded px-3 py-2" placeholder="Timezone" />
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded font-medium">Book a Call</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">By submitting you agree to our privacy policy.</p>
          </div>
        </section>

        <section id="about" className="mt-16">
          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-semibold">About Lumora</h3>
            <p className="mt-3 text-gray-600">Lumora Solutions is a specialist software development and digital transformation partner. We design, build, and scale products — from MVPs to enterprise systems. Our teams combine product thinking, engineering excellence, and a human-centered approach to deliver measurable results.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded">
                <div className="font-semibold">Product Engineering</div>
                <div className="text-sm text-gray-500 mt-2">End-to-end product development and architecture.</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-semibold">Cloud & DevOps</div>
                <div className="text-sm text-gray-500 mt-2">Cloud migrations, CI/CD, and infra automation.</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-semibold">Data & AI</div>
                <div className="text-sm text-gray-500 mt-2">Analytics, machine learning, and data platforms.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Custom Software</h4>
            <p className="mt-2 text-sm text-gray-500">From concept to production — product strategy, UI/UX, and full-stack engineering.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Cloud & Infrastructure</h4>
            <p className="mt-2 text-sm text-gray-500">Cloud-native platforms, microservices, and cost optimization.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Analytics & AI</h4>
            <p className="mt-2 text-sm text-gray-500">Data engineering, ML models, and business intelligence solutions.</p>
          </div>
        </section>

        <section id="team" className="mt-12">
          <h3 className="text-2xl font-semibold">Our Team</h3>
          <p className="mt-2 text-gray-600">A diverse team of engineers, designers, and product specialists committed to quality.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Aisha','Kamal','Nimanya','Dimoshini'].map((name)=> (
              <div key={name} className="p-4 bg-white rounded shadow text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold">{name.charAt(0)}</div>
                <div className="mt-3 font-semibold">{name}</div>
                <div className="text-sm text-gray-500">Software Engineer</div>
              </div>
            ))}
          </div>
        </section>

        <section id="careers" className="mt-12 bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">Careers</h3>
          <p className="mt-2 text-gray-600">We’re growing — join us. Explore open roles and apply online. Lumora values learning, diversity, and flexible work.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <div className="font-semibold">Frontend Engineer</div>
              <div className="text-sm text-gray-500 mt-2">Experience with React, TypeScript, and modern frontend tooling.</div>
              <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded">Apply</button>
            </div>
            <div className="p-4 border rounded">
              <div className="font-semibold">DevOps Engineer</div>
              <div className="text-sm text-gray-500 mt-2">Experience with AWS/GCP, Terraform, and CI/CD.</div>
              <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded">Apply</button>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-600">Email: hello@lumora.com | Phone: +94 11 000 0000</p>
            <p className="mt-1 text-gray-500">Office: Colombo 15, Sri Lanka</p>

            <div className="mt-6">
              <h4 className="font-semibold">Orientation Registration</h4>
              <p className="text-sm text-gray-600 mt-2">New hires can register for orientation directly here. (This form can be linked to your HRIS or Google Form.)</p>
              <a href="#" className="inline-block mt-3 px-4 py-2 bg-cyan-600 text-white rounded">Register for Orientation</a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Download HR Handbook</h4>
              <p className="text-sm text-gray-600 mt-2">Get the full HR handbook for policies and procedures.</p>
              <a href="/downloads/Lumora_Solutions_HR_Handbook.docx" className="inline-block mt-3 px-4 py-2 border border-gray-300 rounded">Download Handbook</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Send a message</h4>
            <form className="mt-4 space-y-3">
              <input className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Your name" />
              <input className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Your email" />
              <textarea className="w-full border border-gray-200 rounded px-3 py-2" placeholder="How can we help?" rows={4}></textarea>
              <button className="w-full bg-indigo-600 text-white py-2 rounded">Send Message</button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <p>Lumie — our onboarding chatbot — is available 24/7 for FAQs and registration help.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Lumora Solutions (Pvt) Ltd.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
