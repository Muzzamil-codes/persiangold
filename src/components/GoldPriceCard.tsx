'use client';

import { useState, useEffect } from 'react';

interface GoldPrices {
  '22k': number;
  '24k': number;
}

interface CurrencyOption {
  label: string;
  value: string;
  symbol: string;
  rate: number;
}

const currencyOptions: CurrencyOption[] = [
  { label: 'QAR', value: 'QAR', symbol: 'QR', rate: 3.64 }, // 1 USD = 3.64 QAR
  { label: 'USD', value: 'USD', symbol: '$', rate: 1 },
  { label: 'AED', value: 'AED', symbol: 'AED', rate: 3.67 }, // 1 USD = 3.67 AED
];

const API_BASE_URL = 'https://api.metalpriceapi.com/v1';

export default function GoldPriceCard() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>(currencyOptions[0]);
  const [goldPrices, setGoldPrices] = useState<GoldPrices>({ '22k': 0, '24k': 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchGoldPrice = async () => {
    try {
      setLoading(true);
      setError('');

      if (!process.env.NEXT_PUBLIC_METALPRICE_API_KEY) {
        throw new Error('API key not configured');
      }

      const response = await fetch(
        `${API_BASE_URL}/latest?api_key=${process.env.NEXT_PUBLIC_METALPRICE_API_KEY}&base=USD&currencies=XAU`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (!data.rates || !data.rates.XAU) {
        console.error('Invalid API Response Format:', data);
        throw new Error('Invalid data format from API');
      }

      // Calculate prices
      const gramsPerOunce = 31.1035;
      const usdPerOunce = 1 / data.rates.XAU;
      const usdPerGram = usdPerOunce / gramsPerOunce;

      const prices = {
        '24k': usdPerGram * selectedCurrency.rate,
        '22k': (usdPerGram * 22/24) * selectedCurrency.rate,
      };

      console.log('Calculated Prices:', {
        xauRate: data.rates.XAU,
        usdPerOunce,
        usdPerGram,
        prices,
        selectedCurrency
      });

      setGoldPrices(prices);
      // Format the time in a consistent way
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    } catch (err) {
      console.error('Error details:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch gold prices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
  }, [selectedCurrency]);

  // Client-side only time display
  useEffect(() => {
    const now = new Date();
    setLastUpdated(now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    }));
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 max-w-sm w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[#D4AF37] text-xl font-semibold">Live Gold Price</h3>
        <select
          value={selectedCurrency.value}
          onChange={(e) => setSelectedCurrency(currencyOptions.find(c => c.value === e.target.value) || currencyOptions[0])}
          className="bg-black/60 text-[#D4AF37] border border-[#D4AF37]/20 rounded px-3 py-1 focus:outline-none focus:border-[#D4AF37]"
        >
          {currencyOptions.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37] mx-auto"></div>
        </div>
      ) : error ? (
        <div className="text-red-400 text-center py-4">
          {error}
          <button 
            onClick={fetchGoldPrice} 
            className="block mx-auto mt-2 text-sm text-[#D4AF37] hover:text-[#FFD700]"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">24K Gold (per gram)</span>
            <span className="text-[#D4AF37] font-semibold">
              {selectedCurrency.symbol} {goldPrices['24k'].toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">22K Gold (per gram)</span>
            <span className="text-[#D4AF37] font-semibold">
              {selectedCurrency.symbol} {goldPrices['22k'].toFixed(2)}
            </span>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-400 text-center">
        {lastUpdated && `Last updated: ${lastUpdated}`}
      </div>
    </div>
  );
} 