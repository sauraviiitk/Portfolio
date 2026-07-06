import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ConnectSection from './components/ConnectSection'

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      <Hero />
      <ExperienceSection />
      <EducationSection />
      <ConnectSection />
    </div>
  )
}
