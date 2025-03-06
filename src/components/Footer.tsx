import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aishwarya College Pali</h3>
            <p className="text-gray-200">
              Empowering learners with quality education and innovative learning solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-200 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-200 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="text-gray-200 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Email: info@eduplatform.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education St, Learning City, 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Aishwarya College Pali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 