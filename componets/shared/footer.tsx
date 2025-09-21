"use client"
import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Shield,
  Truck,
  Headphones,
  CreditCard,
  CheckCircle,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface NewsletterForm {
  email: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function Footer(){
  const [newsletterForm, setNewsletterForm] = useState<NewsletterForm>({ email: '' });
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const footerSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { title: 'Electric Bikes', href: '/bikes' },
        { title: 'Commuter Bikes', href: '/bikes/commuter' },
        { title: 'Mountain Bikes', href: '/bikes/mountain' },
        { title: 'Urban Bikes', href: '/bikes/urban' },
        { title: 'Sport Bikes', href: '/bikes/sport' },
        { title: 'Accessories', href: '/accessories' },
        { title: 'Spare Parts', href: '/parts' }
      ]
    },
    {
      title: 'Services',
      links: [
        { title: 'Maintenance', href: '/services/maintenance' },
        { title: 'Repairs', href: '/services/repairs' },
        { title: 'Warranty', href: '/services/warranty' },
        { title: 'Test Rides', href: '/services/test-rides' },
        { title: 'Custom Builds', href: '/services/custom' },
        { title: 'Fleet Solutions', href: '/services/fleet' },
        { title: 'Training', href: '/services/training' }
      ]
    },
    // {
    //   title: 'Support',
    //   links: [
    //     { title: 'Help Center', href: '/support' },
    //     { title: 'Contact Us', href: '/contact' },
    //     { title: 'Live Chat', href: '/chat' },
    //     { title: 'User Manual', href: '/manuals' },
    //     { title: 'Video Guides', href: '/guides' },
    //     { title: 'FAQ', href: '/faq' },
    //     { title: 'Returns', href: '/returns' }
    //   ]
    // },
    {
      title: 'Company',
      links: [
        { title: 'About Us', href: '/about' },
        { title: 'Our Story', href: '/story' },
        { title: 'Careers', href: '/careers' },
        { title: 'Press', href: '/press' },
        { title: 'Blog', href: '/blog' },
        { title: 'Sustainability', href: '/sustainability' },
        { title: 'Partnerships', href: '/partners' }
      ]
    }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: 'https://facebook.com/leumasbike', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/leumasbike', icon: Instagram, color: 'hover:text-pink-600' },
    { name: 'Twitter', href: 'https://twitter.com/leumasbike', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/leumasbike', icon: Youtube, color: 'hover:text-red-600' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/leumasbike', icon: Linkedin, color: 'hover:text-blue-700' }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus('success');
      setNewsletterForm({ email: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }, 1500);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewsletterForm({ email: e.target.value });
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 rounded-full p-3 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">LeumasBike</h3>
                <p className="text-green-300 text-sm font-medium">Electric Bikes & More</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md">
              Leading the electric revolution with premium e-bikes designed for every journey. 
              Sustainable, powerful, and built to transform your daily ride.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">123 Electric Avenue, San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">1-800-LEUMAS-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">support@leumasbike.com</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Truck className="w-4 h-4 text-green-400" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Headphones className="w-4 h-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <CreditCard className="w-4 h-4 text-green-400" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section: FooterSection) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link: FooterLink) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center text-sm"
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.title}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-green-800/50 to-green-700/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-green-600/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-green-100">
                Get the latest news, product updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            
            <div className="space-y-4">
              {subscribeStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500 text-green-200 px-4 py-2 rounded-xl flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Successfully subscribed! Check your email for confirmation.</span>
                </div>
              )}
              
              <div className="flex">
                <input
                  type="email"
                  value={newsletterForm.email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-green-500/30 rounded-l-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  onClick={handleNewsletterSubmit}
                  disabled={isSubscribing || !newsletterForm.email}
                  className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-6 py-3 rounded-r-xl transition-colors duration-200 flex items-center"
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from LeumasBike.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-medium">Follow us:</span>
              {socialLinks.map((social: SocialLink) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-white/10 rounded-full`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} LeumasBike. All rights reserved. Designed with ⚡ for the electric future.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}