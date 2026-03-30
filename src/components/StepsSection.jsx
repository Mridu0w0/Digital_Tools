import React from 'react';

// Import your logos here at the top:
import Step1Logo from '../assets/user.png';
import Step2Logo from '../assets/package.png';
import Step3Logo from '../assets/rocket.png';

const StepsSection = () => {
  return (
    <section className="py-24 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">

          {/* Main Title with Squiggly Underline */}
          <h2 className="text-2xl md:text-5xl font-bold text-base-content mb-4">
            Get Started in 3 Steps
          </h2>
          <h1 className="text-xl md:text-sm text-base-content/70 font-light">
            Start using premium digital tools in minutes, not hours.
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Dashed Connecting Line (Behind the cards, hidden on mobile) */}
          <div className="hidden md:block absolute top-32 left-[16%] right-[16%] border-t-2 border-dashed border-base-300 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            {/* STEP 1 */}
            <div className="card bg-base-100 shadow-xl relative z-10 transition-transform hover:-translate-y-2 duration-300 ">
              
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-purple-500 to-[#4F39F6] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  01
              </div>

              <div className="card-body items-center text-center p-10 md:p-12">
                {/* Logo Inside Card */}
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <img 
                    src={Step1Logo} 
                    alt="Step 1 Logo" 
                    className="w-12 h-12 object-contain text-primary"
                  />
                </div>

                <h3 className="card-title text-2xl font-bold text-base-content mb-4">
                  Create an Account
                </h3>
                <p className="text-base-content/70 leading-relaxed text-sm">
                  Sign up for free in seconds. No credit card required to get started.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="card bg-base-100 shadow-xl relative z-10 transition-transform hover:-translate-y-2 duration-300 ">
            
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-purple-500 to-[#4F39F6] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  02
              </div>

              <div className="card-body items-center text-center p-10 md:p-12">
                {/* Logo Inside Card */}
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <img 
                    src={Step2Logo}
                    alt="Step 2 Logo" 
                    className="w-12 h-12 object-contain text-primary"
                  />
                </div>

                <h3 className="card-title text-2xl font-bold text-base-content mb-4">
                  Connect Your Tools
                </h3>
                <p className="text-base-content/70 leading-relaxed text-sm">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="card bg-base-100 shadow-xl relative z-10 transition-transform hover:-translate-y-2 duration-300 ">
              
              <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-r from-purple-500 to-[#4F39F6] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                03
              </div>

              <div className="card-body items-center text-center p-10 md:p-12">
          
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <img 
                    src={Step3Logo}
                    alt="Step 3 Logo" 
                    className="w-12 h-12 object-contain text-primary "
                  />
                </div>

                <h3 className="card-title text-2xl font-bold text-base-content mb-4">
                  Start Building
                </h3>
                <p className="text-base-content/70 leading-relaxed text-sm">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;