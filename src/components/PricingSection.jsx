import React from 'react';
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="py-24 bg-base-200/30 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
           Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="group/all grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center mt-8">
          
          {/* ================= CARD 1: FREE ================= */}
          <div className="group/c1 relative bg-base-100 text-base-content shadow-xl scale-100  rounded-2xl hover:bg-primary! hover:text-primary-content! hover:scale-105! hover:shadow-2xl! hover:z-10! rounded-2rem p-8 lg:p-10 transition-all duration-300 ease-in-out cursor-pointer z-0">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <h1 className="text-base-content/70 leading-relaxed text-sm group-hover/c1:text-primary-content!">Perfect for getting started</h1>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-lg font-medium mb-1 text-base-content/60 group-hover/c1:text-primary-content/80!">/Month</span>
            </div>
            
            <hr className="my-8 border-t-2 border-base-200 group-hover/c1:border-primary-content/20!" />
            
            <ul className="space-y-5 mb-10 min-h-45">
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-base-content/80 group-hover/c1:text-primary-content!">Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-base-content/80 group-hover/c1:text-primary-content">Basic templates</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-base-content/80 group-hover/c1:text-primary-content">Community support</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-base-content/80 group-hover/c1:text-primary-content!">1 project per month</span>
              </li>
            </ul>

            <button className="w-full py-2 rounded-full font-semibold text-md transition-colors duration-300 bg-primary/10 text-primary group-hover/c1:bg-primary-content! group-hover/c1:text-primary!">
              Get Started Free
            </button>
          </div>

         
          <div className="group/c2 relative bg-primary text-primary-content shadow-2xl scale-105 z-10 group-hover/all:bg-base-100 group-hover/all:text-base-content group-hover/all:scale-100 group-hover/all:shadow-xl group-hover/all:z-0 hover:bg-primary hover:!text-primary-content hover:!scale-105 hover:!shadow-2xl hover:!z-10 rounded-[2rem] p-8 lg:p-10 transition-all duration-300 ease-in-out cursor-pointer">
            
          
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6]  px-3 py-1 rounded-full text-xs text-[#BB4D00] font-semibold shadow-md whitespace-nowrap ">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <h1 className="font-light text-sm text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content!">Perfect for growing teams</h1>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-lg font-medium mb-1 text-primary-content/80 group-hover/all:text-base-content/60 group-hover/c2:text-primary-content/80">/Month</span>
            </div>
            
            <hr className="my-8 border-t-2 border-primary-content/20 group-hover/all:border-base-200 group-hover/c2:border-primary-content!/20" />
            
            <ul className="space-y-5 mb-10 min-h-45">
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content!">Access to all premium tools</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content!">Unlimited templates</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content!">Priority support</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content">Cloud sync</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /><span className="font-semibold text-[15px] text-primary-content group-hover/all:text-base-content/80 group-hover/c2:text-primary-content">Advanced analytics</span>
              </li>
            </ul>

            <button className="w-full py-2 rounded-full font-semibold text-md transition-colors duration-300 bg-primary-content text-primary group-hover/all:bg-primary/10 group-hover/all:text-primary group-hover/c2:bg-primary-content! group-hover/c2:text-primary!">
            Start Pro Trial
            </button>
          </div>

          {/* ================= CARD 3: ENTERPRISE ================= */}
          <div className="group/c3 relative bg-base-100 text-base-content shadow-xl scale-100 hover:bg-primary hover:text-primary-content! hover:scale-105! hover:shadow-2xl! hover:z-10 rounded-4xl p-8 lg:p-10 transition-all duration-300 ease-in-out cursor-pointer z-0">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <h1 className="text-base-content/70 leading-relaxed text-sm group-hover/c3:text-primary-content!">For teams and businesses</h1>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-5xl font-extrabold">$99</span>
              <span className="text-lg font-medium mb-1 text-base-content/60 group-hover/c3:text-primary-content/80!">/Month</span>
            </div>
            
            <hr className="my-8 border-t-2 border-base-200 group-hover/c3:border-primary-content/20!" />
            
            <ul className="space-y-5 mb-10 min-h-45">
              <li className="flex items-center gap-4">
               <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">Everything in Pro</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">Team collaboration</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">Custom integrations</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">Dedicated support</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">SLA guarantee</span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheck className='text-green-500' /> <span className="font-semibold text-[15px] text-base-content/80 group-hover/c3:text-primary-content">Custom branding</span>
              </li>
            </ul>

            <button className="w-full py-2 rounded-full font-semibold text-md transition-colors duration-300 bg-primary/10 text-primary group-hover/c3:bg-primary-content! group-hover/c3:text-primary!">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;