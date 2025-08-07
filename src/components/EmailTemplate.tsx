import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Calendar, Mail, Linkedin, Twitter } from 'lucide-react';
import heroImage from '@/assets/hero-fintech.jpg';

const EmailTemplate = () => {
  return (
    <div className="bg-background font-sans">
      {/* Email Container */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl">
        
        {/* Header */}
        <div className="bg-email-hero text-email-hero-foreground px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Capital Solutions Bancorp</h1>
              <p className="text-sm opacity-90 mt-1">Funding Complex B2B Deals</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="text-lg font-bold">CSB</div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Professional fintech background" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-email-hero/80 to-email-hero/60 flex items-center">
            <div className="px-8 text-white">
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Deals Worth<br />Texting About
              </h2>
              <div className="w-20 h-1 bg-accent rounded"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-12">
          <div className="space-y-8">
            
            {/* Body Copy */}
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold text-email-text mb-4">
                Stay Ahead of the Market
              </h3>
              <p className="text-lg text-email-text-light leading-relaxed mb-8">
                We send out flash commission bonuses and deal alerts—<span className="font-semibold text-email-text">via SMS only</span>. 
                Don't miss opportunities in medical financing, second-position deals, and tough-to-place transactions.
              </p>
              
              {/* Primary CTA */}
              <Button variant="email-cta" size="lg" className="px-12 py-4 text-lg">
                Opt Into SMS Updates
              </Button>
              
              <p className="text-sm text-email-text-light mt-4">
                Instant alerts • Exclusive bonuses • No spam, just opportunities
              </p>
            </div>

            {/* Video Section */}
            <Card className="p-6 bg-email-section border-0">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-email-text mb-4">
                  See How We Fund Complex Deals
                </h4>
                <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-email-hero to-email-cta">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                    Complex B2B Financing Solutions
                  </div>
                </div>
              </div>
            </Card>

            {/* Support Section */}
            <Card className="p-8 bg-gradient-to-r from-email-section to-white border border-gray-100">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-email-text mb-2">
                  Need to Discuss a Deal?
                </h4>
                <p className="text-email-text-light mb-6">
                  Talk directly with Kevin about your complex financing needs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="email-secondary" size="lg" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Kevin Now
                  </Button>
                  <Button variant="email-cta" size="lg" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book a Meeting
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-email-hero text-email-hero-foreground px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">CSB</span>
                </div>
                <span className="font-semibold text-lg">Capital Solutions Bancorp</span>
              </div>
              
              <div className="space-y-2 text-sm opacity-90">
                <p>123 Financial District</p>
                <p>New York, NY 10004</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: deals@capitalsolutions.com</p>
              </div>
            </div>

            {/* Social & Links */}
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-3">Connect With Us</h5>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-xs opacity-75 pt-4 border-t border-white/20">
                <p>© 2024 Capital Solutions Bancorp. All rights reserved.</p>
                <p className="mt-1">
                  <a href="#" className="hover:underline">Unsubscribe</a> | 
                  <a href="#" className="hover:underline ml-1">Privacy Policy</a>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EmailTemplate;