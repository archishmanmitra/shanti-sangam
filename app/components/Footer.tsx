"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Footer() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription Successful",
      description:
        "Thanks for subscribing ! We'll keep you notified with our latest updates !",
    });
  };
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/yoga" className="hover:text-primary">
                  Yoga
                </Link>
              </li>
              <li>
                <Link href="/services/meditation" className="hover:text-primary">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href="/services/ayurveda" className="hover:text-primary">
                  Ayurveda
                </Link>
              </li>
              <li>
                <Link href="/services/counselling" className="hover:text-primary">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/services/retreats" className="hover:text-primary">
                  Retreats
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest offers and wellness tips.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit"  className="rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Shanti Sangam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

