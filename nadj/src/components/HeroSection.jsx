import { Link } from "react-scroll";

function HeroSection() {
  return (
    <section id="hero" className="relative bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Rent with ease</span>
              <span className="block text-primary">with Zeko Rent</span>
            </h1>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Find your perfect rental property with our easy-to-use platform.
              Browse listings, schedule viewings, and apply online - all in one
              place.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-8 cursor-pointer"
              >
                View Listings
              </Link>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
            <img
              src="/placeholder.svg"
              alt="Modern apartment interior"
              className="rounded-lg object-cover object-center shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
