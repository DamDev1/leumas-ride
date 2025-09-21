import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Calendar,
  Users,
  Wrench,
  HelpCircle,
  CheckCircle,
  Star,
  Navigation
} from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: 'sales' | 'support' | 'service' | 'general';
}

interface StoreLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  features: string[];
  coordinates: { lat: number; lng: number };
  image: string;
  manager: string;
  rating: number;
  reviews: number;
}

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  contact: string;
  available: string;
  color: string;
  bgColor: string;
}

export default function ContactLocation() {
  const [activeTab, setActiveTab] = useState<string>('contact');
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const locations: StoreLocation[] = [
    {
      id: 1,
      name: "LeumasBike Downtown",
      address: "123 Electric Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      phone: "(415) 555-0123",
      email: "downtown@leumasbike.com",
      hours: {
        weekdays: "9:00 AM - 7:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "10:00 AM - 5:00 PM"
      },
      services: ["Sales", "Repairs", "Test Rides", "Accessories"],
      features: ["Parking Available", "Public Transit", "Bike Storage", "Charging Station"],
      coordinates: { lat: 37.7749, lng: -122.4194 },
      image: "/api/placeholder/400/300",
      manager: "Alex Chen",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "LeumasBike Tech Center",
      address: "456 Innovation Blvd",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      phone: "(512) 555-0456",
      email: "austin@leumasbike.com",
      hours: {
        weekdays: "8:00 AM - 8:00 PM",
        saturday: "8:00 AM - 7:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      services: ["Sales", "Custom Builds", "Corporate Fleet", "Training"],
      features: ["Large Parking", "Service Center", "Demo Track", "Café"],
      coordinates: { lat: 30.2672, lng: -97.7431 },
      image: "/api/placeholder/400/300",
      manager: "Maria Rodriguez",
      rating: 4.8,
      reviews: 93
    }
  ];

  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak with our friendly team',
      icon: Phone,
      contact: '1-800-LEUMAS-1',
      available: 'Mon-Fri 8AM-8PM PST',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'email',
      title: 'Email Us',
      description: 'Get help via email',
      icon: Mail,
      contact: 'support@leumasbike.com',
      available: 'Response within 2 hours',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Chat with us now',
      icon: MessageSquare,
      contact: 'Start Chat',
      available: 'Available 24/7',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const inquiryTypes = [
    { value: 'sales', label: 'Sales Inquiry', icon: Star },
    { value: 'support', label: 'Technical Support', icon: HelpCircle },
    { value: 'service', label: 'Service Request', icon: Wrench },
    { value: 'general', label: 'General Question', icon: MessageSquare }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = async (e: React.FormEvent): Promise<void> => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         inquiryType: 'general'
//       });
//     }, 2000);
//   };

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us &
            <span className="block text-green-600">Visit Our Stores</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? Need support? Want to test ride? We&apos;re here to help you find the perfect electric bike solution.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => handleTabChange('contact')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-white text-green-600 shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => handleTabChange('locations')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'locations'
                  ? 'bg-white text-green-600 shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Store Locations
            </button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method: ContactMethod) => {
            const IconComponent = method.icon;
            return (
              <div key={method.id} className={`${method.bgColor} rounded-2xl p-6 text-center border border-gray-100`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                  <IconComponent className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <div className={`text-lg font-semibold ${method.color} mb-2`}>
                  {method.contact}
                </div>
                <div className="text-sm text-gray-500">{method.available}</div>
              </div>
            );
          })}
        </div>

        {/* Content Tabs */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <label
                          key={type.value}
                          className={`cursor-pointer p-3 rounded-xl border-2 transition-all duration-200 ${
                            formData.inquiryType === type.value
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`w-4 h-4 ${
                              formData.inquiryType === type.value ? 'text-green-600' : 'text-gray-400'
                            }`} />
                            <span className={`text-sm ${
                              formData.inquiryType === type.value ? 'text-green-600 font-medium' : 'text-gray-600'
                            }`}>
                              {type.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Brief subject"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Response Promise</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Email responses within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Phone support during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24/7 live chat available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Free consultation and quotes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need immediate help?</h3>
                <p className="text-green-100 mb-6">
                  For urgent technical support or emergency service requests, call us directly.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">1-800-LEUMAS-1</div>
                      <div className="text-sm text-green-100">Emergency Hotline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">urgent@leumasbike.com</div>
                      <div className="text-sm text-green-100">Priority Email</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Store Locations */}
        {activeTab === 'locations' && (
          <div className="space-y-8">
            {locations.map((location: StoreLocation) => (
              <div key={location.id} className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                
                {/* Location Image */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-80 lg:h-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-green-500" />
                      <p className="text-lg font-semibold">{location.name}</p>
                      <p className="text-sm opacity-75">Store Image</p>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-2 shadow-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{location.rating}</span>
                    <span className="text-sm text-gray-600">({location.reviews})</span>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                      <div className="text-gray-600">
                        <div className="flex items-center space-x-2 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>{location.address}</span>
                        </div>
                        <div className="ml-6">
                          {location.city}, {location.state} {location.zipCode}
                        </div>
                      </div>
                    </div>
                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200 flex items-center space-x-2">
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{location.phone}</div>
                        <div className="text-sm text-gray-600">Call us</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{location.email}</div>
                        <div className="text-sm text-gray-600">Email store</div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">Store Hours</span>
                    </div>
                    <div className="ml-7 space-y-1 text-sm text-gray-600">
                      <div>Monday - Friday: {location.hours.weekdays}</div>
                      <div>Saturday: {location.hours.saturday}</div>
                      <div>Sunday: {location.hours.sunday}</div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Services Available</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service: string, index: number) => (
                        <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Store Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Store Manager */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <div>
                        <span className="text-sm text-gray-600">Store Manager: </span>
                        <span className="font-semibold text-gray-900">{location.manager}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience LeumasBike?</h3>
          <p className="text-xl mb-8 text-green-100">
            Visit our stores for expert advice, test rides, and personalized service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Test Ride
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
              <MapPin className="mr-2 w-5 h-5" />
              Find Nearest Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}