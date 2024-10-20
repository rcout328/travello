'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, LightbulbIcon, Building2, Car } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function LasVegasItinerary() {
  return (
    (<div className="container mx-auto p-4">
      <Tabs defaultValue="itinerary" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg">
          <TabsTrigger
            value="itinerary"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 ease-in-out hover:bg-orange-100">
            Itinerary
          </TabsTrigger>
          <TabsTrigger 
            value="summary" 
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-orange-100">
            Summarised View
          </TabsTrigger>
          <TabsTrigger 
            value="activities" 
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-orange-100">
            <LightbulbIcon className="w-4 h-4 mr-2" />
            Activities
          </TabsTrigger>
          <TabsTrigger 
            value="stay" 
            className="sm:flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-orange-100 hidden">
            <Building2 className="w-4 h-4 mr-2" />
            Stay
          </TabsTrigger>
          <TabsTrigger 
            value="transfers" 
            className="lg:flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-orange-100 hidden">
            <Car className="w-4 h-4 mr-2" />
            Transfers
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="relative rounded-lg overflow-hidden mb-6">
        <Image
          src="https://media1.thrillophilia.com/filestore/rn0vanc4z96b104lm8n4j0sac1w2_shutterstock_1853029780.jpg?ar=16%3A9&w=700&dpr=2"
          alt="Dubai Cityscape"
          width={700}
          height={394}
          className="w-full h-48 sm:h-64 lg:h-96 object-cover" />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/80 rounded-full">
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/80 rounded-full">
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">4N</h2>
          <p className="text-base sm:text-lg lg:text-xl">Days in<br />Dubai</p>
        </div>
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1 sm:space-x-2">
          <div className="flex -space-x-2 sm:-space-x-4">
            {[1, 2, 3, 4].map((_, index) => (
              <Image
                key={index}
                src={`/placeholder.svg?height=50&width=50&text=${index + 1}`}
                alt={`Thumbnail ${index + 1}`}
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
            ))}
          </div>
          <span className="bg-white/80 text-black px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">+8</span>
        </div>
        <div
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === 1 ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="day1">
          <AccordionTrigger>
            <div className="flex items-center flex-wrap">
              <span className="bg-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mr-2 sm:mr-4 text-sm sm:text-base">DAY 1</span>
              <span className="text-base sm:text-lg font-semibold">Arrival in Dubai | Dhow Marina Dinner Cruise</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base">Welcome to Dubai! After arriving at the airport, transfer to your hotel and check-in. In the evening, enjoy a memorable Dhow Marina Dinner Cruise, experiencing the city&apos;s stunning skyline from the water.</p>
            <div className="mt-4 flex space-x-2">
              <Image src="/itinerary-banner-img" alt="Gallery 1" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
              <Image src="/itinerary-banner-img" alt="Gallery 2" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
              <Image src="/itinerary-banner-img" alt="Gallery 3" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="day2">
          <AccordionTrigger>
            <div className="flex items-center flex-wrap">
              <span className="bg-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mr-2 sm:mr-4 text-sm sm:text-base">DAY 2</span>
              <span className="text-base sm:text-lg font-semibold">Visit to Burj Khalifa 124th & 125th Floor | Desert Safari with BBQ Dinner</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base">Start your day with a visit to the iconic Burj Khalifa, ascending to the 124th and 125th floors for breathtaking views. In the afternoon, embark on an exhilarating Desert Safari, culminating in a traditional BBQ dinner under the stars.</p>
            <div className="mt-4 flex space-x-2">
              <Image src="/itinerary-banner-img" alt="Gallery 1" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
              <Image src="/itinerary-banner-img" alt="Gallery 2" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
              <Image src="/itinerary-banner-img" alt="Gallery 3" width={200} height={80} className="w-1/3 h-16 sm:h-20 object-cover rounded" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="day3">
          <AccordionTrigger>
            <div className="flex items-center flex-wrap">
              <span className="bg-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mr-2 sm:mr-4 text-sm sm:text-base">DAY 3</span>
              <span className="text-base sm:text-lg font-semibold">Departure</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm sm:text-base">Enjoy your last morning in Dubai at leisure. Check out from the hotel and transfer to the airport for your departure flight. We hope you had a memorable stay in Dubai!</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>)
  );
} 