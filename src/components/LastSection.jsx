import React from 'react';

const LastSection = () => {
    return (
        <div>
            <section className="bg-linear-to-br from-indigo-600 to-purple-500 py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>
        <p className="text-xs text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
        </div>
    );
};

export default LastSection;