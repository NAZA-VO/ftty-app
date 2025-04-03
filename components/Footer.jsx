// components/Footer.jsx
import { 
    FaTwitter, 
    FaDiscord, 
    FaTelegram, 
    FaGithub, 
    FaMedium, 
    FaReddit 
  } from 'react-icons/fa';
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-ftty-purple-darker pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="#" className="text-ftty-orange text-3xl font-bold glow mb-6 inline-block">
                FTTY
              </a>
              <p className="text-gray-300 mb-6">
                The future of gaming asset transactions. Buy, sell and trade gaming items with crypto.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/FattyC35481" className="text-gray-400 hover:text-ftty-orange transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-ftty-orange transition-colors">
                  <FaDiscord size={20} />
                </a>
                <a href="https://t.me/FattyPattyCoin" className="text-gray-400 hover:text-ftty-orange transition-colors">
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-ftty-orange transition-colors">Features</a></li>
                <li><a href="#community" className="text-gray-300 hover:text-ftty-orange transition-colors">Community</a></li>
                <li><a href="#roadmap" className="text-gray-300 hover:text-ftty-orange transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-ftty-orange transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ftty-purple-light pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} FTTY. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Designed for the gaming community, built on blockchain.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;