import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const locations = [
  {
    name: "Rishikesh Retreat",
    description:
      "Nestled in the foothills of the Himalayas, our Rishikesh center offers a serene environment for yoga and meditation.",
    address: "123 Ganga Path, Rishikesh, Uttarakhand, India",
  },
  {
    name: "Goa Wellness Center",
    description:
      "Located near the beautiful beaches of Goa, this center combines traditional practices with a relaxing coastal atmosphere.",
    address: "456 Beach Road, Anjuna, Goa, India",
  },
  {
    name: "Kerala Ayurveda Center",
    description: "Immerse yourself in authentic Ayurvedic treatments amidst the lush greenery of Kerala.",
    address: "789 Backwater Lane, Alleppey, Kerala, India",
  },
]

export default function Locations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
                <CardDescription>{location.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{location.address}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/book-now">Book a Visit</Link>
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

