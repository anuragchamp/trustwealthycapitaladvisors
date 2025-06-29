import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/download.svg';
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
const Footer = () => {
  return (
    <div className="relative">
      {/* SVG Curve */}
      <svg className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-40" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:1}}>
        <path fill="#1e293b" d="M0,0 C400,120 1040,0 1440,120 L1440,0 L0,0 Z" />
      </svg>
      <footer className="relative bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t-5 border-gray-700" style={{zIndex:2}}>
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <a href="mailto:premalrsstudy@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  cstushargoswami14@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <a href="tel:+917990408340" className="text-gray-300 hover:text-white transition-colors">
                  +91 9818091848
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <address className="text-gray-300 not-italic">
                  House no. 912, First Floor Sector 16
                  <br />
                  Faridabad, Haryana, 121002
                </address>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-300">© 2025 Trust Wealthy Capital Advisors</p>
              <p className="text-sm text-gray-300">All rights reserved.</p>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <p>SEBI Research Analyst No. : INH000019141</p>
              <p>BSE Enlistment No.: 6450</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
              <a href="/terms-of-use" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <span>|</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/investor-charter" className="hover:text-white transition-colors">
                Investor Charter of RA
              </a>
              <span>|</span>
              <a href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </a>
              <span>|</span>
              <a href="/grievance-redressal" className="hover:text-white transition-colors">
                Grievance Redressal
              </a>
              <span>|</span>
              <a href="/smart-odr" className="hover:text-white transition-colors">
                SMART ODR
              </a>
              <span>|</span>
              <a href="/scores" className="hover:text-white transition-colors">
                SCORES
              </a>
              <span>|</span>
              <a href="/terms-conditions" className="hover:text-white transition-colors">
                Most Important Terms & Conditions
              </a>
              <span>|</span>
              <a href="/complaints" className="hover:text-white transition-colors">
                Complaints Data
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex gap-3">
              <Button size="icon" className="bg-blue-500 hover:bg-blue-600 rounded-full" asChild>
                <a href="https://t.me/tushargoswamiRA" target="_blank" rel="noopener noreferrer">
                  {/* Telegram SVG Icon */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 2.5L2 10.5c-1.1.4-1.1 1.1-.2 1.4l5.2 1.6 2 6.2c.3.9.7 1.1 1.4.7l2.8-2.1 4.2 3.1c.8.6 1.4.3 1.6-.7l3-14c.2-.9-.3-1.3-1.3-1zM8.7 13.8l8.2-5.2c.4-.2.8 0 .5.3l-7 6.3-.3 2.7c-.1.4-.3.4-.5 0l-1.1-3.8z"/>
                  </svg>
                  <span className="sr-only">Telegram</span>
                </a>
              </Button>
              <Button size="icon" className="bg-black hover:bg-gray-800 rounded-full" asChild>
                <a href="https://x.com/trustwealthy_?s=21&t=sjW1vyMmRoSYzAX26f-WfA" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>
              <Button size="icon" className="bg-red-600 hover:bg-red-700 rounded-full" asChild>
                <a href="https://www.youtube.com/@TrustWealthyCapitalAdvisors" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
              </Button>
            
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />
        {/* Company Logo and Name */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/logo.svg"
                alt="Trust Wealthy Capital Advisors"
                width={200}
                height={60}
                className="h-12 w-auto"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Compliance Information */}
        <div className="text-center space-y-4 text-sm text-gray-400">
          <p>
            Compliance officer: Tushar Goswami. Telephone number: +91 9818091848 . E-mail address:
            cstushargoswami14@gmail.com.
          </p>
          <p>
            Grievance officer: Tushar Goswami. Telephone number: +91 9818091848 . E-mail address:
            cstushargoswami14@gmail.com.
          </p>

          <Separator className="bg-gray-700 my-6" />

          <p className="text-xs leading-relaxed">
            Registration granted by SEBI, membership of BSE and certification from NISM in no way guarantee performance
            of the intermediary or provide any assurance of returns to investors.
          </p>
          <p className="text-xs leading-relaxed">
            Investment in securities market are subject to market risks. Read all the related documents carefully before
            investing.
          </p>

          <div className="pt-4">
            <p className="text-xs text-gray-500">Managed By – Trust Wealthy Capital Advisors</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
