import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { notFound } from "next/navigation"

const blogPosts = {
  "benefits-of-daily-meditation": {
    title: "The Benefits of Daily Meditation",
    content:
      "Meditation is a simple yet profound practice that has been used for centuries to cultivate inner peace, clarity, and emotional resilience. In todays fast-paced world, where stress and distractions are commonplace, meditation offers a sanctuary for the mind, allowing you to pause, breathe, and reconnect with yourself. Even just 10 minutes of daily meditation can have a transformative impact on your mental health and overall well-being, making it an accessible and practical tool for anyone looking to enhance their quality of life.",
    date: "2023-05-15",
  },
  "yoga-for-beginners": {
    title: "Yoga for Beginners: Getting Started",
    content:
      "Yoga is a timeless practice that originated in ancient India, offering a holistic approach to health and well-being by uniting the body, mind, and spirit. At its core, yoga is much more than just physical exercise— it is a transformative discipline that combines physical postures (asanas), controlled breathing techniques (pranayama), and meditation to promote balance, inner peace, and self-awareness. Whether you are looking to improve flexibility, build strength, reduce stress, or enhance mental clarity, yoga provides a versatile and accessible path to achieving your wellness goals.",
    date: "2023-05-10",
  },
  "understanding-ayurvedic-principles": {
    title: "Understanding Ayurvedic Principles",
    content:
      "Ayurveda, often referred to as the science of life, is a holistic healing system that originated in India over 5,000 years ago. Rooted in ancient wisdom, Ayurveda emphasizes the interconnectedness of the body, mind, and spirit, viewing health as a state of balance between these elements. According to Ayurvedic philosophy, every individual is unique, with a distinct constitution or dosha—Vata, Pitta, or Kapha—that governs their physical, mental, and emotional tendencies. By understanding your dosha and aligning your lifestyle with its needs, you can achieve optimal health and well-being.",
    date: "2023-05-05",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.date}</p>
          <div className="prose lg:prose-xl">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

