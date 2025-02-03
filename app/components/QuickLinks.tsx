import Link from "next/link"
import { MapPin, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QuickLinks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Centers</h3>
            <p className="mb-4">Discover our serene locations across India</p>
            <Button asChild variant="outline">
              <Link href="/locations">Explore Locations</Link>
            </Button>
          </div>
          <div className="text-center">
            <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Services</h3>
            <p className="mb-4">Experience wellness from the comfort of your home</p>
            <Button asChild variant="outline">
              <Link href="/services">View Online Services</Link>
            </Button>
          </div>
          <div className="text-center">
            <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
            <p className="mb-4">Start your wellness journey today</p>
            <Button asChild variant="outline">
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

