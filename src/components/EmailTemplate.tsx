import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Calendar, Mail, Linkedin, Twitter, TrendingUp, Shield, Zap, CheckCircle, Star, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-fintech.jpg';
// Video thumbnail is now using uploaded image
import LogoProcessor from './LogoProcessor';

const EmailTemplate = () => {
  const [logoSrc, setLogoSrc] = useState('/lovable-uploads/3095ec13-b9d6-404d-9cd1-fe66af9185db.png');

  useEffect(() => {
    // Check for processed logo in localStorage
    const processedLogo = localStorage.getItem('processed-logo');
    if (processedLogo) {
      setLogoSrc(processedLogo);
    }
  }, []);

  return (
    <div className="bg-background font-sans">
      <LogoProcessor />
      {/* Email Container */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl" style={{ boxShadow: 'var(--shadow-hero)' }}>
        
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
        
        {/* Header */}
        <div className="bg-email-hero text-email-hero-foreground px-8 py-6 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute top-12 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-1/3 w-12 h-12 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <img 
                src={logoSrc} 
                alt="Capital Solutions Bancorp Logo" 
                className="h-8 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
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
          <div className="absolute inset-0 bg-gradient-to-r from-email-hero/90 via-email-hero/70 to-transparent flex items-center">
            <div className="px-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">Exclusive Opportunities</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Deals Worth<br />Texting About
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-12">
          <div className="space-y-8">
            
            {/* Body Copy */}
            <div className="text-center max-w-lg mx-auto">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full border border-accent/20">
                  <Star className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-email-text">Premium Deal Alerts</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-email-text mb-4">
                Stay Ahead of the Market
              </h3>
              <p className="text-lg text-email-text-light leading-relaxed mb-8">
                We send out flash commission bonuses and deal alerts—<span className="font-semibold text-email-text">via SMS only</span>. 
                Don't miss opportunities in working capital lines, asset-based loans, and PO financing deals.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">Instant Alerts</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">Flash Bonuses</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">No Spam</span>
                </div>
              </div>
              
              {/* Primary CTA */}
              <div className="relative">
                <Button variant="email-cta" size="lg" className="px-12 py-4 text-lg relative z-10" style={{ boxShadow: 'var(--shadow-button)' }}>
                  Opt Into SMS Updates
                </Button>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-lg transform scale-110"></div>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-email-text-light">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  Instant alerts
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  Exclusive bonuses
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  No spam
                </span>
              </div>
            </div>

            {/* Video Section */}
            <Card className="p-6 bg-gradient-to-br from-email-section to-white border border-gray-100 relative overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"></div>
              
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-email-text">
                    See How We Provide Flexible Working Capital
                  </h4>
                </div>
                
                <a 
                  href="https://youtu.be/OrWAVW2lB84" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden aspect-video max-w-md mx-auto border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <img 
                    src="/lovable-uploads/964210a2-b9db-4105-8d42-47795d435b0c.png" 
                    alt="New SMS List: Unlock Exclusive Broker Offers - Video Thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <div className="w-0 h-0 border-l-[16px] border-l-gray-800 border-y-[12px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow-lg">
                    Why Brokers Are Joining Our SMS List
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    0:54
                  </div>
                </a>
              </div>
            </Card>

            {/* Support Section */}
            <Card className="p-8 bg-gradient-to-r from-email-section via-white to-email-section border border-gray-100 relative overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
              {/* Background elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full"></div>
              
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-email-text">
                    Need to Discuss a Deal?
                  </h4>
                </div>
                <p className="text-email-text-light mb-6">
                  Talk directly with our team about your working capital needs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="email-secondary" size="lg" className="flex items-center gap-2" style={{ boxShadow: 'var(--shadow-button)' }}>
                    <Phone className="h-4 w-4" />
                    Call (800) 499-6179
                  </Button>
                  <Button variant="email-cta" size="lg" className="flex items-center gap-2" style={{ boxShadow: 'var(--shadow-button)' }}>
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
                <img 
                  src={logoSrc} 
                  alt="Capital Solutions Bancorp Logo" 
                  className="h-8 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              
              <div className="space-y-2 text-sm opacity-90">
                <p>www.capitalsolutionsbancorp.com</p>
                <p>Phone: (800) 499-6179</p>
                <p>Email: info@capitalsolutionsbancorp.com</p>
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