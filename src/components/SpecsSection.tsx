
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Atlas works with your team, not instead of it. By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps humans focus on what they do best: create, solve, and innovate.
            </span>
          </h2>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Height Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Height</h3>
                <p className="text-gray-600">Physical Dimensions</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">1.5m</div>
            <p className="text-gray-600 text-sm">Optimized for human-scale environments and interactions</p>
          </div>

          {/* Weight Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Weight</h3>
                <p className="text-gray-600">Total Mass</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">89kg</div>
            <p className="text-gray-600 text-sm">Lightweight design for safe human-robot collaboration</p>
          </div>

          {/* Battery Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded-lg"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Battery Life</h3>
                <p className="text-gray-600">Operation Time</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">8hrs</div>
            <p className="text-gray-600 text-sm">Extended operation for full work shifts</p>
          </div>

          {/* Speed Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded-sm"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Max Speed</h3>
                <p className="text-gray-600">Movement Velocity</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">2.5m/s</div>
            <p className="text-gray-600 text-sm">Human-like walking pace for natural interaction</p>
          </div>

          {/* Payload Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Payload</h3>
                <p className="text-gray-600">Carrying Capacity</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">11kg</div>
            <p className="text-gray-600 text-sm">Capable of handling various tools and materials</p>
          </div>

          {/* Sensors Spec */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-pulse-500 rounded-xl"></div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Sensors</h3>
                <p className="text-gray-600">Detection Systems</p>
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-pulse-600 mb-2">360°</div>
            <p className="text-gray-600 text-sm">Full environmental awareness and obstacle detection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
