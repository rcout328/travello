'use client'

import React from 'react'
import { Calendar, Clock, Heart, MessageSquareStar, Phone, Users } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const InfoCard = ({
  icon: Icon,
  title,
  description
}) => {
  if (!Icon) {
    console.error("Icon component is not defined");
    return null;
  }
  
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
      <div className="bg-orange-100 p-3 rounded-full mb-4">
        <Icon className="w-6 h-6 text-orange-500" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function TravelInfo() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <InfoCard
            icon={Users}
            title="10 Million+"
            description="Happy customers from 65+ countries all around." />
          <InfoCard
            icon={MessageSquareStar}
            title="4.6 / 5.0"
            description="Cumulative ratings of our trips across platforms." />
          <InfoCard
            icon={Heart}
            title="Curated with love"
            description="Expert-guided trips with meticulous planning." />
          <InfoCard
            icon={Phone}
            title="24*7 Support"
            description="We are always there to help you pre, post and on the trip." />
          <InfoCard
            icon={Calendar}
            title="Flexible Bookings"
            description="Easy rescheduling and cancellation options available." />
               <InfoCard
            icon={Clock}
            title="24/7 Availability"
            description="Book your dream vacation anytime, day or night." />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">More On USA Tourism</h2>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-blue-600 hover:underline">USA Tour Packages</a>
            <a href="#" className="text-blue-600 hover:underline">Things to do in USA</a>
            <a href="#" className="text-blue-600 hover:underline">Places to visit in USA</a>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="confirmation">
            <AccordionTrigger className="text-xl font-semibold">Confirmation Policy</AccordionTrigger>
            <AccordionContent>
              <p>Details about the confirmation policy will be displayed here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="refund">
            <AccordionTrigger className="text-xl font-semibold">Refund Policy</AccordionTrigger>
            <AccordionContent>
              <p>Information regarding the refund policy will be shown in this section.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancellation">
            <AccordionTrigger className="text-xl font-semibold">Cancellation Policy</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>If cancellation is made 30 days before the date of travel, 25.0% of total booking cost will be charged as cancellation fees.</li>
                <li>If cancellation is made 15 days to 30 days before the date of travel, 50.0% of total booking cost will be charged as cancellation fees.</li>
                <li>If cancellation is made within 15 days before the date of travel, total booking cost will be charged as cancellation fees.</li>
                <li>In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger className="text-xl font-semibold">Payment Term Policy</AccordionTrigger>
            <AccordionContent>
              <p>Details about the payment term policy will be displayed in this section.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}