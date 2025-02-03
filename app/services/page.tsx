import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Yoga",
    description: "Experience tranquility through our carefully curated yoga sessions.",
    price: "₹750/session",
  },
  {
    title: "Meditation",
    description: "Find inner peace with our guided meditation practices.",
    price: "₹500/session",
  },
  {
    title: "Ayurvedic Treatments",
    description: "Rejuvenate your body with traditional Ayurvedic therapies.",
    price: "From ₹1,500/session",
  },
  {
    title: "Counselling",
    description: "Gain clarity and support through our counselling services.",
    price: "₹1,500/hour",
  },
  {
    title: "Wellness Retreats",
    description: "Immerse yourself in a transformative wellness journey.",
    price: "From ₹15,000/person",
  },
  {
    title: "Online Classes",
    description: "Access our wellness services from the comfort of your home.",
    price: "From ₹350/session",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/book-now">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

