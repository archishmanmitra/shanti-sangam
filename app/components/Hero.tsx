import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-[url('/main.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Revive Your Soul: Where Tradition Meets Tranquility</h1>
        <p className="text-xl mb-8">
          Experience wellness like never before in the heart of India&apos; most serene locations.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/book-now">Book Now</Link>
        </Button>
      </div>
    </section>
  )
}

