import React from 'react';
import { Facebook, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">IDM Codes</h3>
            <p className="text-gray-400">
              Empowering businesses through innovative IT solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Solutions', 'Careers', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@idmcodes.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-white transition-colors"
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2024 IDM Codes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}