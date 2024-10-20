'use client'

import { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { LoginModalComponent } from './login-modal'
import { CurrencyPicker } from './currency-picker'
import { TravelSearchComponent } from './travel-search'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Link from 'next/link'

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isCurrencyPickerOpen, setIsCurrencyPickerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currency, setCurrency] = useState('INR')

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-500">Travello</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer w-64">
                  <input
                    type="text"
                    placeholder="Search for Dubai"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    readOnly
                    onClick={() => setIsSearchOpen(true)}
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <TravelSearchComponent />
              </DialogContent>
            </Dialog>
            
            <Dialog open={isCurrencyPickerOpen} onOpenChange={setIsCurrencyPickerOpen}>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <span>{currency}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <CurrencyPicker onSelect={(newCurrency) => {
                  setCurrency(newCurrency)
                  setIsCurrencyPickerOpen(false)
                }} />
              </DialogContent>
            </Dialog>

            <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Login
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <LoginModalComponent />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Sidebar navigation */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={toggleSidebar}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer w-full">
                  <input
                    type="text"
                    placeholder="Search for Dubai"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    readOnly
                    onClick={() => setIsSearchOpen(true)}
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <TravelSearchComponent />
              </DialogContent>
            </Dialog>
            
            <Dialog open={isCurrencyPickerOpen} onOpenChange={setIsCurrencyPickerOpen}>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <span>{currency}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <CurrencyPicker onSelect={(newCurrency) => {
                  setCurrency(newCurrency)
                  setIsCurrencyPickerOpen(false)
                }} />
              </DialogContent>
            </Dialog>

            <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 w-full"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Login
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <LoginModalComponent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}
