import PageTransition from '@/components/PageTransitions'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageTransition>
        <Header />
        <Hero />
      </PageTransition>
    </div>
  )
}
