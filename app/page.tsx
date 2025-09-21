"use client"
import React from 'react'
import Hero from '../componets/pages/home/hero'
import FeaturedProducts from '../componets/pages/home/featured-products'
import WhyElectric from '../componets/pages/home/why-electric'
import CustomerTestimonials from '../componets/pages/home/customer-testimonials'
import ContactLocation from '../componets/pages/home/contact'

export default function page() {
  return (
    <section>
      <Hero/>
      <FeaturedProducts/>
      <WhyElectric/>
      <CustomerTestimonials/>
      <ContactLocation/>
    </section>
  )
}
