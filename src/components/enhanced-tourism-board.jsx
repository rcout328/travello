
'use client'

import { Star, Clock, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tourismBoards = [
  { name: 'France', logo: 'https://media1.thrillophilia.com/filestore/France_review_page.png?w=300&dpr=2' },
  { name: 'Abu Dhabi', logo: 'https://media1.thrillophilia.com/filestore/Dubai_review_page.png?w=300&dpr=2' },
  { name: 'Jordan', logo: 'https://media1.thrillophilia.com/filestore/Jordan_review_page.png?w=300&dpr=2' },
  { name: 'Saudi', logo: 'https://media1.thrillophilia.com/filestore/saudi_review_page.png?w=300&dpr=2' },
  { name: 'Dubai', logo: 'https://media1.thrillophilia.com/filestore/visit-sweden-removebg-preview.png?w=300&dpr=2' },
  { name: 'Singapore', logo: 'https://media1.thrillophilia.com/filestore/visit-sweden-removebg-preview.png?w=300&dpr=2' },
]

const activities = [
  {
    name: 'Museum Of The Future',
    image: 'https://media1.thrillophilia.com/filestore/6o8cgiiftp8bj4cr99ovkl6sdppi_1624943967_shutterstock_1600886326.jpg?w=300&dpr=1.6',
    description: 'The Museum of the Future is a unique architectural marvel that showcases innovative and futuristic concepts. It offers immersive experiences and exhibitions that explore the future of technology and humanity.',
    tags: ['Futuristic', 'Innovation'],
    rating: 4.8,
    reviews: 200,
    duration: '2 Hours',
    ticketName: 'Entry Ticket To Museum Of The Future',
    price: 150,
    originalPrice: 180,
  },
  {
    name: 'Burj Khalifa',
    image: 'https://media1.thrillophilia.com/filestore/knr7sm4vqohe3lkmoiq7boe7dr6f_shutterstock-779374966.jpg?w=300&dpr=1.6',
    description: 'Burj Khalifa is the tallest building in the world, offering breathtaking views of Dubai from its observation decks. It is an iconic symbol of modern architecture and engineering.',
    tags: ['Iconic', 'Architecture'],
    rating: 4.9,
    reviews: 300,
    duration: '1 Hour',
    ticketName: 'Entry Ticket To Burj Khalifa',
    price: 200,
    originalPrice: 220,
  },
  {
    name: 'Dubai Frame',
    image: 'https://media1.thrillophilia.com/filestore/e6q43pqjilggx0kjawp6aw5umezs_shutterstock_1174981432.jpg?w=600&dpr=1.8',
    description: 'The Dubai Frame is a spectacular architectural landmark offering panoramic views of old and new Dubai. It provides a unique perspective on the city\'s past, present, and future.',
    tags: ['Landmark', 'Panoramic Views'],
    rating: 4.7,
    reviews: 250,
    duration: '1.5 Hours',
    ticketName: 'Dubai Frame Tickets',
    price: 100,
    originalPrice: 120,
  },
  {
    name: 'Dolphin Show Dubai',
    image: 'https://media1.thrillophilia.com/filestore/b631xjkgta5bp8lnp944jsz68e71_Dolphin%20Show%206.jpg?w=auto&h=600',
    description: 'Experience the magic of dolphins up close with an entertaining and educational show. Watch these intelligent creatures perform amazing tricks and stunts.',
    tags: ['Entertainment', 'Marine Life'],
    rating: 4.6,
    reviews: 180,
    duration: '45 Minutes',
    ticketName: 'Dolphin Show Dubai Tickets',
    price: 120,
    originalPrice: 140,
  },
  {
    name: 'Global Village Dubai',
    image: 'https://media1.thrillophilia.com/filestore/ilsyhdcg5pd6ixq3x1mz4o5gozj8_Global%20Village%202.jpg',
    description: 'Global Village is Dubai\'s leading multicultural festival park and the region\'s first family destination for culture, shopping, and entertainment.',
    tags: ['Cultural', 'Entertainment'],
    rating: 4.5,
    reviews: 400,
    duration: '4-5 Hours',
    ticketName: 'Global Village Dubai Tickets',
    price: 80,
    originalPrice: 95,
  },
  {
    name: 'The Lost Chambers Aquarium',
    image: 'https://media1.thrillophilia.com/filestore/ptly35tpzh3zti41y356bhrrhq5x_shutterstock_1806693025.jpg',
    description: 'Explore the underwater world of The Lost Chambers Aquarium, inspired by the myth of Atlantis. Home to over 65,000 marine animals, it offers a magical journey through ancient ruins and mazes.',
    tags: ['Aquarium', 'Marine Life'],
    rating: 4.7,
    reviews: 320,
    duration: '2-3 Hours',
    ticketName: 'The Lost Chambers Aquarium Tickets',
    price: 130,
    originalPrice: 150,
  },
]

export function EnhancedTourismBoardComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://media1.thrillophilia.com/filestore/Dubai_review_page.png?w=300&dpr=2',
    'https://media1.thrillophilia.com/filestore/France_review_page.png?w=300&dpr=2',
    'https://media1.thrillophilia.com/filestore/Jordan_review_page.png?w=300&dpr=2',
    'https://media1.thrillophilia.com/filestore/saudi_review_page.png?w=300&dpr=2',
    'https://media1.thrillophilia.com/filestore/visit-sweden-removebg-preview.png?w=300&dpr=2',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Tourism Board Alliances</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
        {tourismBoards.map((board) => (
          <Image
            key={board.name}
            src={board.logo}
            alt={`${board.name} Tourism Board`}
            width={100}
            height={60}
            className="h-12 md:h-14 lg:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-800">Activities In Dubai</h2>
      <div className="space-y-6 md:space-y-8">
        {activities.map((activity) => (
          <Card
            key={activity.name}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 lg:w-1/4 relative">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-xs md:text-sm font-semibold rounded-br-lg">
                    Featured
                  </div>
                </div>
                <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between w-full md:w-2/3 lg:w-3/4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-0">{activity.name}</h3>
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                        <span className="ml-1 text-base md:text-lg font-medium text-gray-700">{activity.rating}</span>
                        <span className="ml-1 text-xs md:text-sm text-gray-500">({activity.reviews})</span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activity.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-sm md:text-base text-gray-600 line-clamp-3">{activity.description}</p>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      <span className="text-xs md:text-sm font-medium">{activity.duration}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <p className="text-xs md:text-sm font-medium text-gray-500">{activity.ticketName}</p>
                        <div className="mt-1 flex items-baseline">
                          <span className="text-xl md:text-2xl font-bold text-orange-600">₹{activity.price}</span>
                          {activity.originalPrice && (
                            <span className="ml-2 text-xs md:text-sm line-through text-gray-400">₹{activity.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <Link href="/travelbooking">
                        <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">
                          Book Now
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}