import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-start">
        <Hero />
        <Technologies />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
