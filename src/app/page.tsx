import Image from "next/image";
import Link from "next/link";
import bg from '@/images/backgrounds/bg1.webp';
import logo from '@/images/sportsgenph_Text_vector.png';

const LOGO = () => (
  <div className="relative h-10 w-auto" style={{ aspectRatio: 'auto 180/40' }}>
    <Image
      src={logo}
      alt="SportsGenPh logo"
      fill
      sizes="(max-width: 768px) 100vw, 180px"
      className="object-contain"
      priority
    />
  </div>
);


export default function Home() {
  return (
    <div className="canvass flex flex-col min-h-screen" style={{
      backgroundImage: `url(${bg.src})`,
    }}>
      
      {/* Navigation */}
      <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <LOGO/>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white/80 rounded-md hover:bg-white transition-colors">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="min-h-[calc(100vh-16rem)] flex flex-col justify-center items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Welcome to SportsGenPH</h1>
              <p className="text-xl">Your one-stop platform for sports events in the Philippines</p>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/events" 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Events</h3>
                <p>Find and join sports events near you</p>
              </Link>

              <Link 
                href="/leagues" 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Leagues</h3>
                <p>Join competitive sports leagues</p>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Link 
                href="/teams" 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Teams</h3>
                <p>Create or join a sports team</p>
              </Link>

              <Link 
                href="/venues" 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Venues</h3>
                <p>Find sports facilities near you</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200 mt-auto">
        <div className="w-full max-w-[1400px] mx-auto py-6 px-4 sm:px-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SportsGenPH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
