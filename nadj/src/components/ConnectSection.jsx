import { Facebook, Instagram } from "lucide-react";

function ConnectSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest listings and rental tips by following
            us on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Facebook size={32} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
