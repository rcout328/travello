'use client';
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const commonCurrencies = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'USD', symbol: '$', name: 'United States Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'SGD', symbol: '$', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'AUD', symbol: '$', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
]

const allCurrencies = [
  { code: 'ALL', symbol: 'L', name: 'Albanian Lek', flag: '🇦🇱' },
  { code: 'AMD', symbol: '֏', name: 'Armenian Dram', flag: '🇦🇲' },
  { code: 'ARS', symbol: '$', name: 'Argentine Peso', flag: '🇦🇷' },
  { code: 'AWG', symbol: 'ƒ', name: 'Aruban Florin', flag: '🇦🇼' },
  { code: 'BBD', symbol: '$', name: 'Barbadian Dollar', flag: '🇧🇧' },
  { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka', flag: '🇧🇩' },
  { code: 'BMD', symbol: '$', name: 'Bermudian Dollar', flag: '🇧🇲' },
  { code: 'BND', symbol: '$', name: 'Brunei Dollar', flag: '🇧🇳' },
  { code: 'BOB', symbol: 'Bs.', name: 'Bolivian Boliviano', flag: '🇧🇴' },
  { code: 'BSD', symbol: '$', name: 'Bahamian Dollar', flag: '🇧🇸' },
  { code: 'BWP', symbol: 'P', name: 'Botswana Pula', flag: '🇧🇼' },
  { code: 'BZD', symbol: '$', name: 'Belize Dollar', flag: '🇧🇿' },
  { code: 'CAD', symbol: '$', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Renminbi Yuan', flag: '🇨🇳' },
  { code: 'COP', symbol: '$', name: 'Colombian Peso', flag: '🇨🇴' },
  { code: 'CRC', symbol: '₡', name: 'Costa Rican Colón', flag: '🇨🇷' },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', flag: '🇨🇿' },
  { code: 'DKK', symbol: 'kr.', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'DOP', symbol: '$', name: 'Dominican Peso', flag: '🇩🇴' },
]

const CurrencyItem = ({
  currency
}) => (
  <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
    <span className="text-2xl mr-2">{currency.flag}</span>
    <div>
      <div className="font-semibold">{currency.code} - {currency.symbol}</div>
      <div className="text-sm text-gray-500">{currency.name}</div>
    </div>
  </div>
)

export function CurrencyPicker({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCommonCurrencies = commonCurrencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredAllCurrencies = allCurrencies.filter(currency =>
    currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    (<Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Select Currency</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Currency Picker</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search currencies"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <ScrollArea className="mt-4 max-h-[60vh]">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Commonly Used Currencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredCommonCurrencies.map(currency => (
                  <div key={currency.code} onClick={() => onSelect(currency.code)}>
                    <CurrencyItem currency={currency} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">All Other Currencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredAllCurrencies.map(currency => (
                  <div key={currency.code} onClick={() => onSelect(currency.code)}>
                    <CurrencyItem currency={currency} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>)
  );
}
