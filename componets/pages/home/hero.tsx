import React from 'react';
import { ArrowRight, Battery, Zap, Award, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-green-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 text-sm font-medium text-green-300">
              <Zap className="w-4 h-4 mr-2" />
              Revolutionary Electric Bikes
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Ride Into The
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Electric Future
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Experience the perfect blend of power, performance, and sustainability with our premium collection of electric bikes.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Battery className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">100km Range</div>
                  <div className="text-sm text-gray-400">Per charge</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Fast Charging</div>
                  <div className="text-sm text-gray-400">2-4 hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Premium Quality</div>
                  <div className="text-sm text-gray-400">Certified</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center">
                Shop Electric Bikes
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-400">Happy Riders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Bike Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Bike Image/Placeholder */}
          <div className="relative">
            {/* Main bike showcase */}
            <div className="relative">
              {/* Glow effect behind bike */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Bike placeholder - you can replace this with actual bike image */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm">
                <div className="aspect-w-16 aspect-h-12">
                  {/* Placeholder for bike image */}
                  <div className="w-full h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-green-400/30">
                    <div className="text-center text-green-400">
                      <Zap className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Electric Bike Image</p>
                      <p className="text-sm opacity-75">Replace with actual bike photo</p>
                    </div>
                  </div>
                </div>

                {/* Floating feature badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  New Arrival
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Eco-Friendly
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-6 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-white">
              <div className="text-2xl font-bold text-green-400">45km/h</div>
              <div className="text-xs">Max Speed</div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-white">
              <div className="text-2xl font-bold text-green-400">2.5kg</div>
              <div className="text-xs">Ultra Light</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-green-400 to-transparent"></div>
          <div className="text-sm text-gray-400">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}