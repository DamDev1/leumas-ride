import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar,
  CheckCircle,
  Heart,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  bikeModel: string;
  title: string;
  content: string;
  verified: boolean;
  helpfulVotes: number;
  category: 'commuter' | 'recreational' | 'fitness' | 'delivery';
  beforeAfter?: {
    before: string;
    after: string;
  };
}

interface ReviewSummary {
  totalReviews: number;
  averageRating: number;
  ratingBreakdown: { stars: number; count: number; percentage: number }[];
  recommendationRate: number;
}

export default function CustomerTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      date: "2024-02-15",
      bikeModel: "LeumasSpeed Pro",
      title: "Life-changing commute upgrade!",
      content: "I've been commuting with my LeumasSpeed Pro for 6 months now, and it's completely transformed my daily routine. No more sitting in traffic for 2 hours - I get to work in 25 minutes feeling energized. The battery lasts all week, and the build quality is exceptional.",
      verified: true,
      helpfulVotes: 47,
      category: 'commuter',
      beforeAfter: {
        before: "2hr car commute",
        after: "25min bike ride"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      location: "Austin, TX",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      date: "2024-01-28",
      bikeModel: "LeumasTrail Max",
      title: "Adventure unleashed!",
      content: "The Trail Max handles everything I throw at it - steep hills, rocky paths, even some light off-roading. The motor assistance is perfect for those challenging climbs, and I love that I can still get a great workout. Customer service was amazing when I had questions.",
      verified: true,
      helpfulVotes: 32,
      category: 'recreational'
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Seattle, WA",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      date: "2024-03-02",
      bikeModel: "LeumasCity Lite",
      title: "Perfect urban companion",
      content: "As someone who lives in a small apartment, the foldable design is a game-changer. I can easily store it indoors and even take it on the bus when needed. The lightweight frame doesn't compromise on power - it handles Seattle's hills like a champ!",
      verified: true,
      helpfulVotes: 28,
      category: 'commuter'
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Denver, CO",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      date: "2024-02-20",
      bikeModel: "LeumasElite Sport",
      title: "Fitness goals achieved!",
      content: "I was skeptical about e-bikes and fitness, but this changed my mind. I'm riding 3x more than I ever did with my regular bike. The assist levels let me control the intensity, and I've lost 15 pounds in 3 months. The app integration is fantastic for tracking progress.",
      verified: true,
      helpfulVotes: 41,
      category: 'fitness',
      beforeAfter: {
        before: "2 rides/week",
        after: "6 rides/week"
      }
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "Portland, OR",
      avatar: "/api/placeholder/80/80",
      rating: 4,
      date: "2024-01-15",
      bikeModel: "LeumasSpeed Pro",
      title: "Sustainable delivery solution",
      content: "Running my local delivery service with electric bikes has been incredible for business. Lower operating costs, zero emissions, and customers love the eco-friendly approach. The bikes are reliable workhorses - averaging 80 miles per day with no issues.",
      verified: true,
      helpfulVotes: 23,
      category: 'delivery'
    },
    {
      id: 6,
      name: "Robert Kim",
      location: "Miami, FL",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      date: "2024-03-10",
      bikeModel: "LeumasCity Lite",
      title: "Beach cruising perfection",
      content: "Living near the beach, I wanted something fun for weekend rides. This bike exceeded expectations! The battery easily handles long coastal rides, and the build quality feels premium. Plus, the theft protection features give me peace of mind when parking.",
      verified: true,
      helpfulVotes: 19,
      category: 'recreational'
    }
  ];

  const reviewSummary: ReviewSummary = {
    totalReviews: 1247,
    averageRating: 4.8,
    recommendationRate: 96,
    ratingBreakdown: [
      { stars: 5, count: 982, percentage: 79 },
      { stars: 4, count: 186, percentage: 15 },
      { stars: 3, count: 47, percentage: 4 },
      { stars: 2, count: 19, percentage: 1 },
      { stars: 1, count: 13, percentage: 1 }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Reviews', icon: Star },
    { id: 'commuter', name: 'Commuting', icon: Zap },
    { id: 'recreational', name: 'Recreation', icon: Heart },
    { id: 'fitness', name: 'Fitness', icon: TrendingUp },
    { id: 'delivery', name: 'Delivery', icon: Award }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => 
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoPlay]);

  const handlePrevious = (): void => {
    setCurrentTestimonial(prev => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const handleNext = (): void => {
    setCurrentTestimonial(prev => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlay(false);
  };

  const handleCategoryChange = (categoryId: string): void => {
    setSelectedCategory(categoryId);
    setCurrentTestimonial(0);
    setIsAutoPlay(true);
  };

  const handleTestimonialSelect = (index: number): void => {
    setCurrentTestimonial(index);
    setIsAutoPlay(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const currentReview = filteredTestimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Customer Reviews
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Riders
            <span className="block text-green-600">Are Saying</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from real customers who&apos;ve transformed their daily rides with LeumasBike.
          </p>
        </div>

        {/* Review Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {reviewSummary.averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.floor(reviewSummary.averageRating))}
            </div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {reviewSummary.totalReviews.toLocaleString()}
            </div>
            <div className="text-gray-600 text-sm">Total Reviews</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {reviewSummary.recommendationRate}%
            </div>
            <div className="text-gray-600 text-sm">Would Recommend</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {reviewSummary.ratingBreakdown[0].percentage}%
            </div>
            <div className="text-gray-600 text-sm">5-Star Reviews</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Testimonial Display */}
        {currentReview && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              
              {/* Customer Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full text-white font-bold text-2xl mb-4">
                  {currentReview.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {currentReview.name}
                </h3>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{currentReview.location}</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(currentReview.date).toLocaleDateString()}</span>
                </div>

                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {currentReview.bikeModel}
                </div>

                {currentReview.verified && (
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified Purchase</span>
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {renderStars(currentReview.rating)}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {currentReview.helpfulVotes} found this helpful
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentReview.title}
                </h4>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                  <p className="text-lg text-gray-700 leading-relaxed pl-6">
                    {currentReview.content}
                  </p>
                </div>

                {currentReview.beforeAfter && (
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-red-600 font-semibold text-sm mb-1">Before</div>
                        <div className="text-gray-800">{currentReview.beforeAfter.before}</div>
                      </div>
                      <div>
                        <div className="text-green-600 font-semibold text-sm mb-1">After</div>
                        <div className="text-gray-800">{currentReview.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={handlePrevious}
            className="flex items-center space-x-2 bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {/* Testimonial Indicators */}
          <div className="flex space-x-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialSelect(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-green-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center space-x-2 bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Community of Happy Riders</h3>
          <p className="text-xl mb-8 text-green-100">
            Experience the LeumasBike difference and see why our customers love their electric bikes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              Shop Now
              <Zap className="ml-2 w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}