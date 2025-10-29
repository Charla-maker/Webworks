import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { locationsData } from '@/lib/data/locations'

export function ModernLocations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            We Service All of Sydney
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the CBD to the suburbs, we provide fast cash for cars services throughout
            Greater Sydney. Choose your location to learn more about our services in your area.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationsData.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Location Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={location.image}
                  alt={`Cash for cars in ${location.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{location.region}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{location.name}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {location.description}
                </p>

                {/* Suburbs Preview */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-secondary mb-2">
                    Suburbs we cover:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.suburbs.slice(0, 3).map((suburb, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {suburb}
                      </span>
                    ))}
                    {location.suburbs.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        +{location.suburbs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                    View Details
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Location?</h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              We service over 700+ suburbs across Greater Sydney. Call us now to confirm
              we cover your area and get an instant quote!
            </p>
            <a
              href="tel:0420587575"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call Now: 0420 587 575
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
