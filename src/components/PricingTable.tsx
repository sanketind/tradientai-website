import React from 'react';

const PricingTable = () => {
  return (
    <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Flexible Pay-As-You-Go Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pay only for the minutes your AI voice agents are active. Transparent rates that scale with your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-6">
          {/* First Tier */}
          <div className="bg-white rounded-2xl shadow-sm transition-shadow duration-200 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-2 items-center">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">First 100 minutes</h3>
                <p className="text-gray-600 text-sm">Get started with our entry-level tier</p>
              </div>
              <div className="p-6 bg-gray-50 h-full flex items-center justify-center">
                <p className="text-2xl font-bold text-gray-900">$0.50<span className="text-base font-normal text-gray-600">/min</span></p>
              </div>
            </div>
          </div>

          {/* Second Tier */}
          <div className="bg-white rounded-2xl shadow-sm transition-shadow duration-200 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-2 items-center">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Next 900 minutes</h3>
                <p className="text-gray-600 text-sm">101-1,000 minutes of usage</p>
              </div>
              <div className="p-6 bg-gray-50 h-full flex items-center justify-center">
                <p className="text-2xl font-bold text-gray-900">$0.40<span className="text-base font-normal text-gray-600">/min</span></p>
              </div>
            </div>
          </div>

          {/* Third Tier */}
          <div className="bg-white rounded-2xl shadow-sm transition-shadow duration-200 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-2 items-center">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Beyond 1,000 minutes</h3>
                <p className="text-gray-600 text-sm">Best value for high volume usage</p>
              </div>
              <div className="p-6 bg-gray-50 h-full flex items-center justify-center">
                <p className="text-2xl font-bold text-gray-900">$0.30<span className="text-base font-normal text-gray-600">/min</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Rates apply to AI voice agent usage, billed monthly based on your total minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;