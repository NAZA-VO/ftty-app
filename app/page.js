// app/page.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturedAssets from '../components/FeaturedAssets';
import Chains from '@/components/Chains';
import Community from '../components/Community';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedAssets />
      <Chains />
      <Community />
      <Roadmap />
      <Footer />
    </main>
  );
}