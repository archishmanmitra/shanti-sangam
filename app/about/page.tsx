import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Shanti Sangam</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              At Shanti Sangam, we blend ancient wisdom with modern wellness
              practices to create a transformative experience for mind, body,
              and soul. Nestled in serene natural surroundings, our retreats
              offer a peaceful escape from the demands of everyday life,
              providing the perfect environment for relaxation, reflection, and
              renewal.
            </p>
            <p className="mb-4">
              Our expert practitioners, including yoga and meditation
              instructors, Ayurvedic specialists, and energy healers, guide you
              on a personalized journey of self-discovery and holistic healing.
              Whether you seek inner peace through mindfulness, physical
              rejuvenation through yoga and therapies, or spiritual growth
              through ancient practices, our tailored programs address your
              unique needs.
            </p>
            <p className="mb-4">
              We offer immersive experiences such as sound healing, nature
              walks, detoxifying spa treatments, and workshops on stress
              management and conscious living. Each activity is designed to help
              you reconnect with yourself, restore balance, and cultivate a
              deeper sense of purpose.
            </p>
            <p className="">
              Shanti Sangam is more than a retreat—it is a sanctuary where
              ancient wisdom meets modern healing, empowering you to rediscover
              your inner strength and embrace a more mindful, fulfilling life.
              Whether you stay for a weekend or longer, you will leave feeling
              refreshed, inspired, and equipped to continue your wellness
              journey. Welcome to Shanti Sangam, where transformation begins.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Authenticity in our practices and teachings</li>
              <li>Respect for ancient traditions and modern science</li>
              <li>Commitment to sustainable and eco-friendly operations</li>
              <li>Inclusivity and accessibility in wellness</li>
              <li>Continuous learning and growth</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
