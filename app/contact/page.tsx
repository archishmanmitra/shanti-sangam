"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, email, subject, message })
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    // Clear the form
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We're here to answer any questions you may have about our services, locations, or how we can help you on
              your wellness journey.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> info@shantisangam.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Address:</strong> 123 Wellness Street, New Delhi, India
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

