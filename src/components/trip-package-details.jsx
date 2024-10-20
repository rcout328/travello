'use client'

import React from 'react'
import { Check, X } from 'lucide-react'

const inclusions = [
  "3 nights stay in Dubai with breakfast",
  "Burj Khalifa Tickets At the Top 124th 125th Floor - At the Top (Level 124 & 125)",
  "Dhow Cruise Dubai Marina - Marina Dinner Cruise",
  "Dubai Desert Safari with BBQ Dinner - Desert Safari with Shared Transfers",
  "Airport transfer from Dubai International Airport to Standard Hotel",
  "Airport transfer from Dubai International Airport",
  "Daily Breakfast"
]

const exclusions = [
  "Expenses of a personal nature.",
  "Meals not mentioned in the itinerary or inclusions",
  "Travel Insurance"
]

export function TripPackageDetails() {
  return (
    (<div className="container mx-auto p-4 tgus">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">End Of Trip</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold p-6 bg-gray-50">What's inside the package?</h2>
        <div className="md:flex">
          <div className="md:w-1/2 p-6 border-r border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Inclusions</h3>
            <ul className="space-y-2">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
            <ul className="space-y-2">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>)
  );
}