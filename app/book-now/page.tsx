"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function BookNow() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted",
      description:
        "We've received your booking request and will contact you soon to confirm.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Book Your Session</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Select Your Service</CardTitle>
              <CardDescription>
                Choose from our range of wellness services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select onValueChange={setService} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yoga">Yoga</SelectItem>
                  <SelectItem value="meditation">Meditation</SelectItem>
                  <SelectItem value="ayurveda">Ayurvedic Treatment</SelectItem>
                  <SelectItem value="counselling">Counselling</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setLocation} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rishikesh">Rishikesh Center</SelectItem>
                  <SelectItem value="goa">Goa Retreat</SelectItem>
                  <SelectItem value="kerala">Kerala Ayurveda Center</SelectItem>
                  <SelectItem value="online">Online Session</SelectItem>
                </SelectContent>
              </Select>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
              <CardDescription>Please provide your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Input
                placeholder="Special Requests (Optional)"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </form>
      </main>
      <Footer />
    </div>
  );
}
