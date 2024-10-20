'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function LoginModalComponent() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    (<div className="bg-white rounded-lg shadow-xl max-w-md w-full">
      <div className="flex justify-between items-center p-6 border-b">
        <div className="flex space-x-4">
          <button
            className={`text-lg font-semibold ${activeTab === 'login' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('login')}>
            Login
          </button>
          <button
            className={`text-lg font-semibold ${activeTab === 'signup' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('signup')}>
            Sign Up
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Log into Your Account</h2>
        <form>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-2 rounded-md mt-6 hover:bg-orange-600 transition duration-300">
            Login & Continue
          </button>
        </form>
        <div className="mt-6">
          <button
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300">
            <img
              src="/placeholder.svg?height=24&width=24&text=G"
              alt="Google"
              className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-center text-gray-600 font-semibold mb-4">Book With Confidence</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'TRIP ADVISOR', rating: '4.5/5' },
              { name: 'TRUST PILOT', rating: '4.0/5' },
              { name: 'GOOGLE', rating: '4.4/5' },
              { name: 'REVIEWS.IO', rating: '4.3/5' }
            ].map((review, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{review.rating}</div>
                  <div className="text-xs text-gray-500">{review.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>)
  );
}