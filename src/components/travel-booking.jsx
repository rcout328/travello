'use client'

import React from 'react'
import Image from 'next/image'
import { Search, Star } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LasVegasItinerary } from './las-vegas-itinerary';
import { TravelReviews } from './travel-reviews';
import { TripPackageDetails } from './trip-package-details';
import { TravelInfo } from './travel-info';
import Header from './Header';

export function TravelBooking() {
  return (
    <div className="container mx-auto p-4">
      <Header/>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 space-y-4 sm:space-y-0 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
          <div className="md:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=580&dpr=2"
              alt="Dubai Mosque"
              width={580}
              height={387}
              className="w-full h-64 md:h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://media1.thrillophilia.com/filestore/plo8mfkpn40x6t8w3vzypnje6fnx_shutterstock_2042237531.jpg?w=1080&h=auto&dpr=2"
                alt="Dubai Cityscape"
                width={1080}
                height={720}
                className="w-full h-32 md:h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://media1.thrillophilia.com/filestore/6rk65fm7o2fy9kudpathwks0tei3_shutterstock_1682937292.jpg?h=465&w=auto&dpr=2"
                alt="Dubai Pool"
                width={697}
                height={465}
                className="w-full h-32 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">Escape to Dubai | Flights Inclusive Deal</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">5D/4N</span>
            <span>Days in Dubai</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>Transfer Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>Stay Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Breakfast Included</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4">Choose Trip Duration</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {[3, 4, 5, 6, 7].map(days => (
              <div
                key={days}
                className="border rounded-lg p-2 text-center cursor-pointer hover:bg-gray-100">
                <Image
                  src={days === 3 ? "https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=580&dpr=2" :
                      days === 4 ? "https://media1.thrillophilia.com/filestore/plo8mfkpn40x6t8w3vzypnje6fnx_shutterstock_2042237531.jpg?w=1080&h=auto&dpr=2" :
                      days === 5 ? "https://media1.thrillophilia.com/filestore/6rk65fm7o2fy9kudpathwks0tei3_shutterstock_1682937292.jpg?h=465&w=auto&dpr=2" :
                      days === 6 ? "https://media1.thrillophilia.com/filestore/knr7sm4vqohe3lkmoiq7boe7dr6f_shutterstock-779374966.jpg?w=300&dpr=1.6" :
                      days === 7 ? "https://media1.thrillophilia.com/filestore/6o8cgiiftp8bj4cr99ovkl6sdppi_1624943967_shutterstock_1600886326.jpg?w=300&dpr=1.6" :
                      "/placeholder.svg?height=100&width=100"}
                  alt={`${days} days`}
                  width={300}
                  height={200}
                  className="w-full h-24 object-cover rounded mb-2" />
                <div className="font-semibold">{days} days</div>
                <div className="text-sm text-gray-600">₹ {days * 10000}</div>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Destination Routes</h2>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                <SelectItem value="sharjah">Sharjah</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Stay Category</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">Standard</Button>
              <Button variant="outline">Deluxe</Button>
              <Button variant="outline">Luxury</Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Trip Highlights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dive into a world of luxury, from pristine beaches to towering skyscrapers, from thrilling desert safaris to world-class shopping in Dubai.</li>
              <li>Get a surreal experience as you stand on the 125th floor of the world&apos;s tallest building, Burj Khalifa, offering views of Dubai&apos;s cityscape and shimmering coastline.</li>
              <li>Feel the adrenaline rush as you go for a dune-bashing adventure in Dubai&apos;s expansive desert, creating a thrilling experience amidst the golden landscape.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-bold">INR 68,550</div>
                <div className="text-sm text-gray-500">Per Adult</div>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-semibold">4.7</span>
                <span className="ml-1 text-xs text-gray-500">(461K)</span>
              </div>
            </div>
            <Button className="w-full mb-4 bg-orange-500 text-white">Send Enquiry</Button>
            <div className="bg-orange-100 p-4 rounded-lg mb-4">
              <div className="font-semibold text-orange-800">THRILL FEST 2024</div>
              <div className="text-sm">Book A Trip And Get</div>
              <div className="font-semibold">Upto 3 International Trips Free</div>
              <div className="text-xs text-orange-800 underline cursor-pointer">Know more</div>
            </div>
            <form>
              <div className="space-y-4">
                <Input placeholder="Full Name*" />
                <Input placeholder="Email*" />
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="+91" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">+91</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Your Phone*" className="flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Travel Date*" />
                  <Input placeholder="Traveller Count*" />
                </div>
                <textarea className="w-full p-2 border rounded" rows={4} placeholder="Message..."></textarea>
                <Button className="w-full bg-orange-500 text-white">Send Enquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <LasVegasItinerary/>
      </div>
      <div className="mt-8">
        <TravelReviews/>
      </div>
      <div className="mt-8">
        <TripPackageDetails/>
      </div>
      <div className="mt-8">
        <TravelInfo/>
      </div>

    </div>
  );
}
