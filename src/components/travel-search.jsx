'use client'

import { useState } from 'react'
import { Search, ChevronRight } from 'lucide-react'

export function TravelSearchComponent() {
  const [productType, setProductType] = useState('Tour')
  const [tripDuration, setTripDuration] = useState('')
  const [priceRange, setPriceRange] = useState(500000)
  const [includeFlights, setIncludeFlights] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      <div className="relative mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Search for destinations.."
          className="w-full pl-10 pr-4 py-2 sm:py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base" />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Product Type</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {['Tour', 'Activity'].map((type) => (
            <button
              key={type}
              onClick={() => setProductType(type)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base ${
                productType === type
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Trip Duration</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {['Upto 1 Day', '2 to 3 days', '3 to 5 days', '5 to 7 days', '7+ Days'].map((duration) => (
            <button
              key={duration}
              onClick={() => setTripDuration(duration)}
              className={`px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm lg:text-base rounded-full ${
                tripDuration === duration
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
              {duration}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Price Range</h3>
        <input
          type="range"
          min="0"
          max="500000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-3">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-2 sm:mb-0">
            <label className="block text-sm font-medium text-gray-700">Min</label>
            <input
              type="text"
              value="INR 0"
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none" />
          </div>
          <div className="w-full sm:w-1/2 pl-0 sm:pl-2">
            <label className="block text-sm font-medium text-gray-700">Max</label>
            <input
              type="text"
              value={`INR ${priceRange}`}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none" />
          </div>
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeFlights}
            onChange={(e) => setIncludeFlights(e.target.checked)}
            className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
          <span className="ml-2 text-gray-700 text-sm sm:text-base">I want Flights to be included</span>
        </label>
      </div>
      <button
        className="w-full bg-orange-500 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center text-sm sm:text-base">
        Search For Products
        <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}