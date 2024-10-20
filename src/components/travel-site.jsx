'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight, Star, Phone, Calendar, MapPin, Users } from 'lucide-react'
import { EnhancedTourismBoardComponent } from './enhanced-tourism-board'
import Link from 'next/link'
import Header from './Header'
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TravelSite() {
  const [currency, setCurrency] = useState('INR')
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)
  
  const destinations = [
    { name: 'Abu Dhabi', icon: '🕌' },
    { name: 'Norway', icon: '🏔️' },
    { name: 'Kerala', icon: '🌴' },
    { name: 'Bali', icon: '🏝️' },
    { name: 'Rajasthan', icon: '🏰' },
    { name: 'Vietnam', icon: '🍜' },
    { name: 'Ladakh', icon: '🏍️' },
    { name: 'South Africa', icon: '🦁' },
    { name: 'Spiti Valley', icon: '⛰️' },
    { name: 'Turkey', icon: '🧆' },
  ]

  const tours = [
    {
      id: 1,
      title: 'Dubai Highlights | Skyline and Sandscapes',
      image: 'https://cdn.leonardo.ai/users/326f8494-f765-49cb-a889-d303538d931e/generations/e93d0d48-44d0-4e6d-ba44-81486182b951/Leonardo_Phoenix_Create_a_vibrant_and_stunning_cityscape_image_2.jpg',
      duration: '9 days & 8 nights',
      rating: 4.3,
      reviews: 2900,
      price: 23990,
      category: 'Dubai',
      originalPrice: 39983,
      itinerary: ['1D Chandigarh', '6D Narkanda', '1D Manali', '1D Chandigarh'],
      groupSize: '10-15',
      startLocation: 'Chandigarh',
    },
    {
      id: 2,
      title: 'Escape to Dubai | Flights Inclusive Deal',
      image: 'https://media1.thrillophilia.com/filestore/3olu266q85xcvi788yawu7fji10c_dl.beatsnoop.com-3000-HSMA1tjOPa.jpg?w=580&dpr=2',
      duration: '7 days & 6 nights',
      rating: 4.4,
      reviews: 1500,
      price: 19250,
      category: 'Dubai',
      originalPrice: 29615,
      itinerary: ['1D Delhi', '1D Manali', '4D Spiti Valley', '1D Manali'],
      groupSize: '8-12',
      startLocation: 'Delhi',
    },
    {
      id: 3,
      title: 'Discovering Dubai | A Journey to the Golden Emirates',
      image: 'https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=580&dpr=2',
      duration: '7 days & 6 nights',
      rating: 4.8,
      reviews: 268,
      price: 24490,
      category: 'Dubai',
      originalPrice: 32400,
      itinerary: ['1D Dubai City Tour', '2D Desert Safari', '2D Abu Dhabi', '1D Burj Khalifa', '1D Dubai Mall'],
      groupSize: '6-10',
      startLocation: 'Dubai International Airport',
    },
    {
      id: 4,
      title: 'Dubai Kids Special with FREE Tickets To Aquaventure Waterpark',
      image: 'https://media1.thrillophilia.com/filestore/bcouye8teeznrzitmgpvnmfvrywh_Aquaventure-Lifestyle-WaterparkHeroFamilyRideOverlookingResort.webp?w=auto&h=600',
      duration: '5 days & 4 nights',
      rating: 4.6,
      reviews: 1200,
      price: 28990,
      category: 'Dubai',
      originalPrice: 45000,
      itinerary: ['1D Dubai City Tour', '1D Aquaventure Waterpark', '1D Desert Safari', '1D Dubai Mall & Burj Khalifa', '1D Free Day'],
      groupSize: '4-8',
      startLocation: 'Dubai International Airport',
    },
    {
      id: 5,
      title: 'Romantic Escape to Dubai | Love Amidst the Dunes',
      image: 'https://media1.thrillophilia.com/filestore/m3tx8cohgbcqlaetwo4gbctlv7bt_shutterstock_1653984538.jpg?w=580&dpr=2',
      duration: '6 days & 5 nights',
      rating: 4.9,
      reviews: 850,
      price: 35990,
      category: 'Dubai',
      originalPrice: 52000,
      itinerary: ['1D Arrival & Dhow Cruise', '1D Dubai City Tour', '1D Desert Glamping', '1D Couples Spa & Dinner in the Sky', '1D Hot Air Balloon Ride', '1D Departure'],
      groupSize: '2',
      startLocation: 'Dubai International Airport',
    },
    {
      id: 6,
      title: 'Dubai Luxurious Retreat | Sky-High Views and Desert Dunes',
      image: 'https://media1.thrillophilia.com/filestore/bpq0dm40ymb5a40vwpxiyhxflbp2_shutterstock_2344193611-min.jpg?w=580&dpr=2',
      duration: '7 days & 6 nights',
      rating: 4.7,
      reviews: 620,
      price: 42990,
      category: 'Dubai',
      originalPrice: 65000,
      itinerary: ['1D Arrival & Burj Al Arab Tour', '1D Dubai City Tour', '2D Luxury Desert Resort Stay', '1D Dubai Mall & Burj Khalifa', '1D Yacht Cruise', '1D Departure'],
      groupSize: '2-4',
      startLocation: 'Dubai International Airport',
    },
  ]

  const handleCallbackRequest = (tour) => {
    setSelectedTour(tour);
    setIsCallbackFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
     <Header/>
      <nav className="bg-white shadow-md py-4 mb-8 overflow-x-auto bg-white">
        <div className="container mx-auto px-4 relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <ul className="flex space-x-8 justify-start sm:justify-center">
            {destinations.map((dest) => (
              <li key={dest.name} className="flex-shrink-0">
                <Link href="/travelbooking" className="flex flex-col items-center group">
                  <span
                    className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">{dest.icon}</span>
                  <span
                    className="text-sm font-medium text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                    {dest.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                <div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-br-lg">
                  Best Seller
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{tour.title}</h3>
                  <div className="flex items-center text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{tour.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  <Link href="/travelbooking" className="text-orange-500 hover:underline">
                    View Details
                  </Link>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Starts from: {tour.startLocation}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">Group size: {tour.groupSize}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.itinerary.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">₹{tour.price.toLocaleString()}</span>
                    <span className="ml-2 text-sm line-through text-gray-400">₹{tour.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium">
                    Save ₹{(tour.originalPrice - tour.price).toLocaleString()}
                  </span>
                </div>
                <Dialog open={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen}>
                  <DialogTrigger asChild>
                    <button 
                      onClick={() => handleCallbackRequest(tour)}
                      className="w-full bg-orange-500 text-white px-4 py-3 rounded-full hover:bg-orange-600 transition duration-300 flex items-center justify-center text-lg font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Request Callback
                    </button>
                  </DialogTrigger>
                  <DialogOverlay className="bg-black bg-opacity-50 fixed inset-0" />
                  <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                    <h3 className="text-lg font-semibold mb-4">Request Callback for {selectedTour?.title}</h3>
                    <form className="space-y-4">
                      <Input placeholder="Full Name" />
                      <Input placeholder="Email" type="email" />
                      <Input placeholder="Phone Number" type="tel" />
                      <Input placeholder="Preferred Date" type="date" />
                      <textarea 
                        className="w-full p-2 border rounded" 
                        rows={4} 
                        placeholder="Any specific requirements..."
                      ></textarea>
                      <Button type="submit" className="w-full bg-orange-500 text-white">
                        Submit Request
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
        <EnhancedTourismBoardComponent />
      </main>
    </div>
  );
}
