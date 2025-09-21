import React, { useState } from 'react';
import { 
  Leaf, 
  DollarSign, 
  Heart, 
  Zap, 
  Car, 
  TreePine, 
  Clock, 
  Users,
  Target
} from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  stats: {
    primary: string;
    secondary: string;
    detail: string;
  };
  color: string;
  bgColor: string;
}

interface ComparisonItem {
  category: string;
  traditional: string;
  electric: string;
  advantage: string;
}

export default function WhyElectric() {
  const [activeTab, setActiveTab] = useState<string>('environment');

  const benefits: Benefit[] = [
    {
      id: 'environment',
      title: 'Environmental Impact',
      subtitle: 'Ride Green, Live Clean',
      description: 'Electric bikes produce zero direct emissions and have a significantly lower carbon footprint compared to cars. Make a positive impact on the planet with every ride.',
      icon: Leaf,
      stats: {
        primary: '90%',
        secondary: 'Less CO₂',
        detail: 'compared to cars'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'cost',
      title: 'Cost Savings',
      subtitle: 'Smart Investment, Big Savings',
      description: 'Save thousands on fuel, parking, insurance, and maintenance. An electric bike pays for itself through reduced transportation costs.',
      icon: DollarSign,
      stats: {
        primary: '$2,400',
        secondary: 'Annual Savings',
        detail: 'vs car ownership'
      },
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'health',
      title: 'Health Benefits',
      subtitle: 'Fitness Made Easy',
      description: 'Get exercise without the strain. Electric assist helps you ride longer, tackle hills with ease, and arrive at your destination feeling fresh.',
      icon: Heart,
      stats: {
        primary: '45%',
        secondary: 'More Exercise',
        detail: 'than car commuters'
      },
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'convenience',
      title: 'Ultimate Convenience',
      subtitle: 'Fast, Flexible, Fun',
      description: 'Skip traffic jams, avoid parking hassles, and enjoy the freedom to take shortcuts. Arrive faster and stress-free every time.',
      icon: Zap,
      stats: {
        primary: '3x',
        secondary: 'Faster',
        detail: 'than city traffic'
      },
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const comparisons: ComparisonItem[] = [
    {
      category: 'Daily Cost',
      traditional: '$15-25',
      electric: '$0.50',
      advantage: '95% savings'
    },
    {
      category: 'Parking',
      traditional: '$200/month',
      electric: 'Free',
      advantage: '$2,400/year saved'
    },
    {
      category: 'Maintenance',
      traditional: '$1,200/year',
      electric: '$150/year',
      advantage: '87% less'
    },
    {
      category: 'Exercise',
      traditional: '0 calories',
      electric: '300+ calories',
      advantage: 'Great workout'
    },
    {
      category: 'Emissions',
      traditional: '4.6 tons CO₂',
      electric: '0 tons CO₂',
      advantage: '100% clean'
    }
  ];

  const handleTabChange = (tabId: string): void => {
    setActiveTab(tabId);
  };

  const activeBenefit = benefits.find(benefit => benefit.id === activeTab) || benefits[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <TreePine className="w-4 h-4 mr-2" />
            The Electric Advantage
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block text-green-600">Electric Bikes?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how electric bikes are revolutionizing transportation with unmatched benefits for you, your wallet, and the planet.
          </p>
        </div>

        {/* Interactive Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Benefit Tabs */}
          <div className="space-y-6">
            {benefits.map((benefit: Benefit) => {
              const IconComponent = benefit.icon;
              const isActive = activeTab === benefit.id;
              
              return (
                <div
                  key={benefit.id}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? `${benefit.bgColor} border-current ${benefit.color} shadow-lg scale-105` 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTabChange(benefit.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-white shadow-md' : 'bg-white'}`}>
                      <IconComponent className={`w-6 h-6 ${isActive ? benefit.color : 'text-gray-600'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${isActive ? benefit.color : 'text-gray-900'}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium mb-2">
                        {benefit.subtitle}
                      </p>
                      {isActive && (
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      )}
                    </div>
                    
                    {isActive && (
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${benefit.color}`}>
                          {benefit.stats.primary}
                        </div>
                        <div className="text-sm text-gray-600">
                          {benefit.stats.secondary}
                        </div>
                        <div className="text-xs text-gray-500">
                          {benefit.stats.detail}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Content */}
          <div className={`${activeBenefit.bgColor} rounded-3xl p-8 border border-gray-200`}>
            <div className="text-center">
              {/* Icon Display */}
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-6`}>
                <activeBenefit.icon className={`w-12 h-12 ${activeBenefit.color}`} />
              </div>
              
              {/* Stats Display */}
              <div className="mb-8">
                <div className={`text-6xl font-bold ${activeBenefit.color} mb-2`}>
                  {activeBenefit.stats.primary}
                </div>
                <div className="text-2xl font-semibold text-gray-700 mb-1">
                  {activeBenefit.stats.secondary}
                </div>
                <div className="text-gray-600">
                  {activeBenefit.stats.detail}
                </div>
              </div>
              
              {/* Placeholder for illustration */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <activeBenefit.icon className={`w-16 h-16 mx-auto mb-4 ${activeBenefit.color}`} />
                    <p className="font-semibold">{activeBenefit.title} Illustration</p>
                    <p className="text-sm opacity-75">Visual content placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Electric vs Traditional Transportation
            </h3>
            <p className="text-lg text-gray-600">
              See how electric bikes stack up against cars and traditional bikes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-lg font-semibold text-gray-900">Category</th>
                  <th className="text-center py-4 px-4 text-lg font-semibold text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Car className="w-5 h-5" />
                      <span>Traditional</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 text-lg font-semibold text-green-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Electric Bike</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 text-lg font-semibold text-blue-600">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item: ComparisonItem, index: number) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white/50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-gray-900">{item.category}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{item.traditional}</td>
                    <td className="py-4 px-4 text-center text-green-600 font-semibold">{item.electric}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.advantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-green-100">Happy Riders</div>
            </div>
            <div className="text-center">
              <TreePine className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">2.3M kg</div>
              <div className="text-green-100">CO₂ Saved</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-green-100">Satisfaction</div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h3>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of riders who&apos;ve already discovered the electric advantage. Your perfect e-bike is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              Explore E-Bikes
              <Zap className="ml-2 w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
              <Clock className="mr-2 w-5 h-5" />
              Book Test Ride
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}