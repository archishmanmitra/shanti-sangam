export default function Introduction() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome to Shanti Sangam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              At Shanti Sangam, we blend ancient wisdom with modern wellness practices to offer you a unique and
              transformative experience. Our serene retreats and expert practitioners guide you on a journey of
              self-discovery and holistic healing.
            </p>
            <p className="text-lg">
              Whether you are seeking inner peace, physical rejuvenation, or spiritual growth, Shanti Sangam provides the
              perfect sanctuary for your wellness journey.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/side.jpg"
              alt="Peaceful yoga session at Shanti Sangam"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

