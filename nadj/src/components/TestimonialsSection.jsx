import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/placeholder.svg",
      review:
        "Zeko Rent made finding my dream apartment a breeze. Their virtual tours saved me so much time!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/placeholder.svg",
      review:
        "As a landlord, I appreciate how easy it is to manage my properties and screen tenants with Zeko Rent.",
      rating: 4,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "/placeholder.svg",
      review:
        "The maintenance request feature is fantastic. Issues get resolved quickly and efficiently.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      image: "/placeholder.svg",
      review:
        "I've used several rental platforms, but Zeko Rent stands out for its user-friendly interface and great customer service.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-8 sm:mb-12">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                              fill={
                                i < testimonial.rating ? "currentColor" : "none"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
