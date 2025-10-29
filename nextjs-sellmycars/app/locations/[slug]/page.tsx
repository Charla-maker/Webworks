import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Clock, DollarSign, Truck, Star, ArrowLeft, Navigation } from 'lucide-react'
import { locationsData } from '@/lib/data/locations'
import { ContactForm } from '@/components/ContactForm'
import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernFooter } from '@/components/sections/ModernFooter'

type Props = {
  params: Promise<{ slug: string }>
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locationsData.find((loc) => loc.id === slug)

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: `Cash For Cars ${location.name} | Instant Cash Up To $30,000 | SellMyCars`,
    description: `Get instant cash for your car in ${location.name}. We buy all vehicles - running or not. Same-day pickup, free towing, top prices. Servicing ${location.suburbs.slice(0, 5).join(', ')} and more. Call 0420 587 575!`,
    keywords: [
      `cash for cars ${location.name}`,
      `sell my car ${location.name}`,
      `car removal ${location.name}`,
      `scrap car ${location.name}`,
      ...location.suburbs.map(suburb => `cash for cars ${suburb}`),
    ],
    openGraph: {
      title: `Cash For Cars ${location.name} - Instant Cash Payment`,
      description: `Top cash paid for all vehicles in ${location.name}. Free towing, same-day service. Trusted by 5000+ customers.`,
      images: [location.image],
      type: 'website',
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locationsData.find((loc) => loc.id === slug)

  if (!location) {
    notFound()
  }

  const services = [
    'Cash for Cars',
    'Cash for Trucks',
    'Cash for Utes',
    'Cash for 4x4s',
    'Cash for Vans',
    'Scrap Car Removal',
    'Unwanted Car Removal',
    'Old Car Removal',
    'Damaged Car Removal',
    'Accident Car Removal',
  ]

  const benefits = [
    { icon: DollarSign, title: 'Top Cash Offers', desc: 'Up to $30,000 paid instantly' },
    { icon: Truck, title: 'Free Towing', desc: 'Complimentary pickup service' },
    { icon: Clock, title: 'Same Day Service', desc: 'Quick 2-hour response time' },
    { icon: Star, title: '5-Star Rated', desc: 'Trusted by 5000+ customers' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-orange-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#locations"
            className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Locations</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cash For Cars in {location.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Sydney's #1 car buying service in {location.name}. Fast, fair, and hassle-free.
            Get cash for your vehicle today!
          </p>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-secondary text-white py-4 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold">Servicing {location.name} & Surrounding Areas</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:0420587575"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">0420 587 575</span>
            </a>
            <a
              href="#contact-form"
              className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg font-semibold transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-100 p-4 flex items-center justify-between">
                <h2 className="font-bold text-lg text-secondary">Service Area Map</h2>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm font-semibold">Open in Google Maps</span>
                </a>
              </div>
              <iframe
                src={location.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`Map of ${location.name}`}
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                About Our {location.name} Service
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>{location.description}</p>
                <p>
                  Our {location.name} team specializes in buying all types of vehicles including
                  cars, trucks, utes, vans, and 4x4s. Whether your vehicle is in excellent
                  condition or not running at all, we'll make you a fair cash offer and arrange
                  free towing at your convenience.
                </p>
                <p>
                  We understand the local {location.name} market and provide competitive prices
                  that reflect the true value of your vehicle. Our process is simple: call us
                  for a quote, accept our offer, and we'll come to you with cash in hand.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Services in {location.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suburbs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Suburbs We Service in {location.name}
              </h2>
              <p className="text-gray-600 mb-6">
                We provide cash for cars services throughout {location.name} and all surrounding
                suburbs. Our team covers the entire region with free towing and same-day service.
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {location.suburbs.map((suburb, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 group"
                  >
                    <MapPin className="w-4 h-4 text-primary group-hover:text-white flex-shrink-0" />
                    <span className="font-medium text-sm">{suburb}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Near Popular {location.name} Landmarks
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {location.landmarks.map((landmark, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Content */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Why Choose SellMyCars in {location.name}?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Local Expertise:</strong> Our team has extensive knowledge of the
                  {location.name} area and understands the local vehicle market. We've been
                  serving {location.name} residents for years, building a reputation for
                  honesty, reliability, and fair pricing.
                </p>
                <p>
                  <strong>Fast Service:</strong> We know your time is valuable. That's why we
                  offer same-day service throughout {location.name}. From your initial call to
                  cash in hand, the entire process typically takes just 2 hours.
                </p>
                <p>
                  <strong>Top Dollar Paid:</strong> We pay competitive prices for all vehicles
                  in {location.name}. Our quotes are based on current market values, and we
                  never lowball our customers. Get up to $30,000 for your vehicle.
                </p>
                <p>
                  <strong>Free Towing:</strong> No matter where you are in {location.name} or
                  surrounding suburbs, we provide complimentary towing services. Our tow trucks
                  are equipped to handle any vehicle type.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-secondary mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="tel:0420587575"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 0420 587 575</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16" id="contact-form">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-secondary mb-4">
                  Get Your Cash Offer for {location.name}
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll contact you within 2 hours with a cash offer
                </p>
              </div>
              <ContactForm locationPage={location.name} />
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Suburb?</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            We service over 700 locations across Greater Sydney. Even if your suburb isn't
            listed, we likely cover your area. Give us a call to confirm!
          </p>
          <a
            href="tel:0420587575"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call: 0420 587 575
          </a>
        </div>
      </div>

      <ModernFooter />
    </div>
  )
}
