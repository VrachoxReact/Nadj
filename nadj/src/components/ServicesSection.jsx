import { Link } from "react-router-dom";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Property Listings",
      description:
        "Browse our extensive list of available properties for rent.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Virtual Tours",
      description:
        "Take a virtual tour of properties from the comfort of your home.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Tenant Screening",
      description:
        "We provide comprehensive tenant screening services for landlords.",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Lease Management",
      description: "Efficiently manage your leases with our digital tools.",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Maintenance Requests",
      description:
        "Submit and track maintenance requests easily through our platform.",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Rent Collection",
      description:
        "Secure and convenient online rent collection for tenants and landlords.",
      image: "/placeholder.svg",
    },
    {
      id: 7,
      title: "Property Management",
      description:
        "Full-service property management solutions for property owners.",
      image: "/placeholder.svg",
    },
    {
      id: 8,
      title: "Legal Assistance",
      description:
        "Access to legal resources and assistance for rental-related matters.",
      image: "/placeholder.svg",
    },
    {
      id: 9,
      title: "Market Analysis",
      description:
        "Get insights on rental market trends and property valuations.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-8 sm:mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
