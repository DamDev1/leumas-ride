import React, { useState } from 'react';
import { Battery, Zap, Star, Heart, ShoppingCart, ArrowRight, Clock, Shield, Truck } from 'lucide-react';

interface ProductSpecs {
  range: string;
  speed: string;
  battery: string;
  weight: string;
  motor: string;
}

interface Product {
  id: number;
  name: string;
  category: 'commuter' | 'mountain' | 'urban' | 'sport';
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  specs: ProductSpecs;
  features: string[];
  description: string;
}

interface Category {
  id: 'all' | 'commuter' | 'mountain' | 'urban' | 'sport';
  name: string;
  count: number;
}

type CategoryFilter = Category['id'];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const toggleFavorite = (productId: number): void => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const products: Product[] = [
    {
      id: 1,
      name: "LeumasSpeed Pro",
      category: "commuter",
      price: 2499,
      originalPrice: 2899,
      image: "/api/placeholder/400/300",
      rating: 4.9,
      reviews: 127,
      badge: "Best Seller",
      badgeColor: "bg-green-500",
      specs: {
        range: "120km",
        speed: "45km/h",
        battery: "48V 15Ah",
        weight: "22kg",
        motor: "750W"
      },
      features: ["GPS Tracking", "Anti-theft", "LED Display", "USB Charging"],
      description: "Perfect for daily commuting with premium features and extended range."
    },
    {
      id: 2,
      name: "LeumasTrail Max",
      category: "mountain",
      price: 3299,
      originalPrice: null,
      image: "/api/placeholder/400/300",
      rating: 4.8,
      reviews: 89,
      badge: "New",
      badgeColor: "bg-blue-500",
      specs: {
        range: "100km",
        speed: "50km/h",
        battery: "48V 17.5Ah",
        weight: "25kg",
        motor: "1000W"
      },
      features: ["All-Terrain", "Shock Absorption", "Waterproof", "Hill Climb"],
      description: "Rugged mountain e-bike built for off-road adventures and tough terrains."
    },
    {
      id: 3,
      name: "LeumasCity Lite",
      category: "urban",
      price: 1799,
      originalPrice: 2199,
      image: "/api/placeholder/400/300",
      rating: 4.7,
      reviews: 203,
      badge: "Sale",
      badgeColor: "bg-red-500",
      specs: {
        range: "80km",
        speed: "25km/h",
        battery: "36V 10Ah",
        weight: "18kg",
        motor: "500W"
      },
      features: ["Lightweight", "Foldable", "Quick Charge", "Compact"],
      description: "Lightweight urban e-bike perfect for city riding and easy storage."
    },
    {
      id: 4,
      name: "LeumasElite Sport",
      category: "sport",
      price: 4299,
      originalPrice: null,
      image: "/api/placeholder/400/300",
      rating: 5.0,
      reviews: 45,
      badge: "Premium",
      badgeColor: "bg-purple-500",
      specs: {
        range: "150km",
        speed: "60km/h",
        battery: "52V 20Ah",
        weight: "24kg",
        motor: "1200W"
      },
      features: ["Carbon Frame", "Smart App", "Fast Charging", "Premium Design"],
      description: "Top-tier performance e-bike with cutting-edge technology and design."
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Bikes', count: products.length },
    { id: 'commuter', name: 'Commuter', count: products.filter(p => p.category === 'commuter').length },
    { id: 'mountain', name: 'Mountain', count: products.filter(p => p.category === 'mountain').length },
    { id: 'urban', name: 'Urban', count: products.filter(p => p.category === 'urban').length },
    { id: 'sport', name: 'Sport', count: products.filter(p => p.category === 'sport').length }
  ];

  const filteredProducts: Product[] = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (categoryId: CategoryFilter): void => {
    setSelectedCategory(categoryId);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : ''}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Featured Collection
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Electric Bikes
            <span className="block text-green-600">Built for Every Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium electric bikes, engineered for performance, comfort, and sustainability.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: Category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 hover:-translate-y-2">
              
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-80">
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                  {product.badge}
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm border border-white/20 z-10 transition-all duration-300 ${
                    favorites.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                  }`}
                  aria-label={`${favorites.includes(product.id) ? 'Remove from' : 'Add to'} favorites`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Zap className="w-16 h-16 mx-auto mb-4 text-green-500" />
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm opacity-75">Product Image</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-8">
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Product Name & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Range: <strong>{product.specs.range}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Speed: <strong>{product.specs.speed}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Motor: <strong>{product.specs.motor}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Weight: <strong>{product.specs.weight}</strong></span>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 3).map((feature: string, index: number) => (
                    <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      +{product.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-green-500/25"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
          <p className="text-xl mb-8 text-green-100">
            Explore our complete collection of over 50 electric bike models
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              View All Bikes
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
              <Truck className="mr-2 w-5 h-5" />
              Free Test Ride
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}