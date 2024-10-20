'use client'

import React from 'react'
import { Star, StarHalf } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const StarRating = ({
  rating
}) => {
  return (
    (<div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : star - 0.5 <= rating ? (
            <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>)
  );
}

export function TravelReviews() {
  const ratings = [
    { stars: 5, count: 439 },
    { stars: 4, count: 53 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ]

  const reviews = [
    {
      name: "Kumari Pothuvaal",
      date: "02 Feb 2024",
      tour: "USA Group Tour to California and Vegas",
      rating: 5,
      comment: "I chose this trip through Thrillophilia to cater to everyone's preferences within the family. It offered a diverse range of attractions that appealed to each member, and the overall experience was well-organized and comfortable. Thrillophilia was incredibly helpful and cooperative throughout the jou...",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Samantha Freeman",
      date: "14 Jan 2024",
      tour: "USA Group Tour to California and Vegas",
      rating: 5,
      comment: "Thanks to Thrillophilia, our USA trip was a huge success. From exploring the iconic landmarks of California to indulging in the thrilling activities in Vegas, every day was filled with excitement and fun. Highly recommended!!",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0)
  const averageRating = ratings.reduce((sum, rating) => sum + rating.stars * rating.count, 0) / totalReviews

  return (
    (<div className="container mx-auto p-4 tgus">
      <h2 className="text-2xl font-bold mb-4">Reviews({totalReviews})</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="flex flex-col items-center justify-center bg-green-50 p-6 rounded-lg">
          <div className="text-6xl font-bold text-green-600">{averageRating.toFixed(1)}</div>
          <StarRating rating={averageRating} />
          <div className="text-sm text-green-600 mt-2">From 65+ countries</div>
        </div>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center">
              <span className="w-4 mr-2">{rating.stars}</span>
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <Progress value={(rating.count / totalReviews) * 100} className="h-2 flex-grow" />
              <span className="w-10 text-right ml-2">{rating.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Avatar className="w-12 h-12 mr-4">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">Reviewed: {review.date}</p>
              </div>
              <div className="ml-auto">
                <StarRating rating={review.rating} />
                <span className="text-sm ml-1">{review.rating.toFixed(1)}/5</span>
              </div>
            </div>
            <p className="text-sm mb-2">Booked: {review.tour}</p>
            <p className="text-sm text-gray-700">{review.comment}</p>
            {review.comment.endsWith('...') && (
              <button className="text-sm text-blue-600 mt-1">Read More</button>
            )}
          </div>
        ))}
      </div>
    </div>)
  );
}