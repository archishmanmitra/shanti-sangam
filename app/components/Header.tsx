import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          <svg
            width="250"
            height="40"
            viewBox="0 0 150 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M10 30C15.5228 30 20 25.5228 20 20C20 14.4772 15.5228 10 10 10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M30 10C24.4772 10 20 14.4772 20 20C20 25.5228 24.4772 30 30 30"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M40 20H10" stroke="currentColor" strokeWidth="2" />
            <text
              x="50"
              y="25"
              fontSize="20"
              fontWeight="bold"
              fill="currentColor"
            >
              Shanti Sangam
            </text>
          </svg>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="/locations" className="text-gray-600 hover:text-primary">
            Locations
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
          <Link href="/book-now" className="text-gray-600 hover:text-primary">
            Book Now
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services">Services</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/locations">Locations</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/book-now">Book Now</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
