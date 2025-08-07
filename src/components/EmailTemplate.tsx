import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Calendar, Mail, Linkedin, Twitter, TrendingUp, Shield, Zap, CheckCircle, Star, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-deal-notification.jpg';
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
                src="/lovable-uploads/3095ec13-b9d6-404d-9cd1-fe66af9185db.png" 
                alt="Capital Solutions Bancorp Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-13a1 1 0 011-1h4a1 1 0 011 1v13z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l.01 0M12 12l.01 0M16 12l.01 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Professional fintech background" 
            className="w-full h-64 object-cover"
            style={{ filter: 'brightness(0.8)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-email-hero/90 via-email-hero/70 to-transparent flex items-center">
            <div className="px-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">Broker-Only Flash Bonuses</span>
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
              <h3 className="text-3xl font-bold text-email-text mb-4">
                SMS = First Dibs
              </h3>
              <p className="text-lg text-email-text-light leading-relaxed mb-8">
                We send SMS-only bonuses & alerts to our broker list. Get notified first—before deals disappear.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">Real-Time Alerts</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">Bonus Windows</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-email-text-light">No Spam Ever</span>
                </div>
              </div>
              
              {/* Primary CTA */}
              <div className="relative">
                <a 
                  href="https://d47a4ef0.sibforms.com/serve/MUIFAE75bAVqwSGDlFKSfLQV9weYBNcNu5OLBtu4lOLROQYlCFzpLUBwJYnHK28VLMm3jQpSm1PBtJQKzRU-98DYW34FPPiS77klaqxsghCFqT0YMxdqSXysRlMlZxD-EEjbxO7fJhbM_pXL2QhufpPCWi7k6rMKTC4juBtU_C7mARbMyVr6mV0tbYFs5UzUlzfpwd7sgbIlJ-7Z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="email-cta" size="lg" className="px-12 py-4 text-lg relative z-10" style={{ boxShadow: 'var(--shadow-button)' }}>
                    Join the SMS List
                  </Button>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-lg transform scale-110"></div>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-email-text-light">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  Real-time alerts
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  Exclusive bonuses
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  No spam ever
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
                    Why Brokers Join Our List
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
                
                <p className="text-email-text-light mt-4 text-sm">
                  Watch the 54-second video. Then join the list.
                </p>
              </div>
            </Card>

            {/* Contact Section */}
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
                    Want to Move Faster?
                  </h4>
                </div>
                <p className="text-email-text-light mb-6 max-w-md mx-auto">
                  Call Kevin today to discuss your deal and see if it qualifies for our latest commission bonuses.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-email-text">(561) 436-5883</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-email-text">kevin@capitalsolutionsbancorp.com</span>
                  </div>
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
                  <a href="#linkedin-placeholder" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#linkedin-placeholder" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#email-placeholder" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
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