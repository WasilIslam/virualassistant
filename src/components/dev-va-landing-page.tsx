import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Code, Mail, MessageCircle, Phone, PhoneCall, X } from "lucide-react";
import Link from "next/link";

export function DevVaLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f0] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#f0f0f0]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b-4 border-[#ff6b6b]">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-8 w-8 text-[#ff6b6b]" />
          <span className="ml-2 text-2xl font-bold">DevVA</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          {["Features", "Comparison", "Process", "Pricing", "Contact"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-[#ff6b6b] transition-colors" href={`#${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-[#4ecdc4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">Developer + VA: Ultimate Productivity</h1>
                <p className="mx-auto max-w-[700px] text-[#1a1a1a] text-xl md:text-2xl">Get the best of both worlds with a virtual assistant who codes and manages.</p>
              </div>
              <div className="space-x-4">
                <Link href={"#contact"}>
                  <Button className="bg-[#ff6b6b] text-white hover:bg-[#ff8787] text-lg px-8 py-3">Get Started</Button>
                </Link>
                <Link href={"#contact"}>
                  <Button variant="outline" className="text-[#1a1a1a] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#4ecdc4] text-lg px-8 py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">Why Choose a Dev VA?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: Code, title: "Technical Expertise", desc: "Understand and assist with coding tasks and technical projects." },
                { icon: MessageCircle, title: "Effective Communication", desc: "Bridge the gap between technical and non-technical team members." },
                { icon: CheckCircle, title: "Problem-Solving Skills", desc: "Apply logical thinking to both code and administrative tasks." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 text-center p-6 bg-white dark:bg-[#2a2a2a] shadow-lg">
                  <feature.icon className="h-12 w-12 text-[#ff6b6b]" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-[#4a4a4a] dark:text-[#b0b0b0]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-20 bg-[#1a1a1a] text-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">Dev VA Skillset</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Zapier Automation",
                "Make (Integromat)",
                "Selenium",
                "Go High Level",
                "Python Scripting",
                "Web Scraping",
                "API Integration",
                "Database Management",
                "Git Version Control",
                "Docker Containerization",
                "CI/CD Pipelines",
                "Cloud Services (AWS, GCP, Azure)",
                "React/Vue/Angular",
                "Node.js",
                "Express.js",
                "Django/Flask",
                "WordPress Development",
                "SEO Optimization",
                "Google Analytics",
                "A/B Testing",
                "Email Marketing",
                "Social Media Management",
                "Content Creation",
                "Graphic Design (Canva)",
                "Project Management",
                "Agile Methodologies",
                "Time Tracking",
                "Invoice Generation",
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 bg-[#2a2a2a] p-3 rounded">
                  <CheckCircle className="h-5 w-5 text-[#4ecdc4]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="comparison" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">Dev VA vs Traditional VA</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Skill / Capability</TableHead>
                  <TableHead>Dev VA</TableHead>
                  <TableHead>Traditional VA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Email Management", true, true],
                  ["Scheduling", true, true],
                  ["Data Entry", true, true],
                  ["Basic Research", true, true],
                  ["Code Debugging", true, false],
                  ["Version Control (Git)", true, false],
                  ["API Integration", true, false],
                  ["Database Management", true, false],
                  ["Automation (Zapier, Make)", true, false],
                  ["Web Scraping", true, false],
                  ["Cloud Services Management", true, false],
                  ["Technical Documentation", true, false],
                ].map(([skill, devVA, traditionalVA], index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{skill}</TableCell>
                    <TableCell>{devVA ? <CheckCircle className="h-5 w-5 text-[#4ecdc4]" /> : <X className="h-5 w-5 text-[#ff6b6b]" />}</TableCell>
                    <TableCell>{traditionalVA ? <CheckCircle className="h-5 w-5 text-[#4ecdc4]" /> : <X className="h-5 w-5 text-[#ff6b6b]" />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        <section id="process" className="w-full py-20 bg-[#ff6b6b] text-[#1a1a1a]">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">Our Process</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-6">
                We will match you with developers who have been trained to be the perfect virtual assistants. Our rigorous selection and training process ensures that you get a VA who understands both
                the technical and business aspects of your needs.
              </p>
              <p className="text-xl mb-6">
                While your VA will be dedicated to you full-time, we also have a team of senior developers on standby. If your Dev VA encounters a challenge they can't solve, our senior team is ready
                to step in and provide additional support.
              </p>
              <div className="mt-8 text-center">
                <Button className="bg-[#1a1a1a] text-[#ff6b6b] hover:bg-[#2a2a2a] text-lg px-8 py-3">Learn More About Our Process</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="max-w-sm mx-auto bg-white dark:bg-[#2a2a2a] border-4 border-[#1a1a1a] dark:border-[#f0f0f0]">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4">Full-Time Dev VA</h3>
                <div className="text-5xl font-bold text-center text-[#ff6b6b] mb-4">$509/month</div>
                <ul className="space-y-2 mb-6">
                  {["160 hours per month", "Dedicated developer + VA", "All skills and capabilities included", "24/7 availability", "Senior developer support"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#4ecdc4] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href={"#contact"}>
                <Button className="w-full bg-[#ff6b6b] hover:bg-[#ff8787] text-white text-lg py-3">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 bg-[#4ecdc4]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter">Ready to Boost Your Productivity?</h2>
                <p className="max-w-[600px] text-[#1a1a1a] text-xl">Get in touch with us to learn how a Dev VA can transform your workflow.</p>
              </div>
              <div className="w-full max-w-sm flex flex-col gap-4 items-center">
                <Link href="https://calendly.com/wasilislam" target="_blank">
                  <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#4ecdc4] text-lg px-8 py-3 flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" />
                    Schedule a Call
                  </Button>
                </Link>
                -or-
                <div className="flex gap-4">
                  <a href="mailto:wasilislam456@gmail.com">
                    <Button className="bg-[#abababef] hover:bg-[#ff8787] text-white flex items-center gap-2 px-6 py-3">
                      <Mail className="h-5 w-5" />
                      Email
                    </Button>
                  </a>
                  <a href="https://wa.me/923101457770" target="_blank">
                    <Button className="bg-[#25D366] hover:bg-[#28e070] text-white flex items-center gap-2 px-6 py-3">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+923101457770">
                    <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#4ecdc4] flex items-center gap-2 px-6 py-3">
                      <Phone className="h-5 w-5" />
                      Call
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t-4 border-[#ff6b6b]">
        <p className="text-xs">© 2024 DevVA Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
