import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Benefits of Daily Meditation",
    description: "Discover how just 10 minutes of meditation a day can transform your life.",
    date: "2023-05-15",
    slug: "benefits-of-daily-meditation",
  },
  {
    title: "Yoga for Beginners: Getting Started",
    description: "A comprehensive guide to starting your yoga journey for beginners.",
    date: "2023-05-10",
    slug: "yoga-for-beginners",
  },
  {
    title: "Understanding Ayurvedic Principles",
    description: "Learn about the basic principles of Ayurveda and how they can improve your well-being.",
    date: "2023-05-05",
    slug: "understanding-ayurvedic-principles",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
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

