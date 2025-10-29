import Link from 'next/link'
import { MapPin, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8">
          <MapPin className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-5xl font-bold text-secondary mb-4">
          Location Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the location you're looking for. We service over 700 suburbs
          across Sydney - let us know where you are and we'll be there!
        </p>

        <div className="space-y-4">
          <Link
            href="/#locations"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>View All Locations</span>
          </Link>

          <div className="text-gray-600">
            <p>or call us directly:</p>
            <a
              href="tel:0420587575"
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              0420 587 575
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
