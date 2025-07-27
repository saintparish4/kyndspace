import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-black">LUCID</span>
            </div>
            <nav className="flex items-center space-x-8">
              <Link href="/overview" className="text-black hover:text-gray-600 transition-colors">
                Overview
              </Link>
              <Link href="/plus" className="text-black hover:text-gray-600 transition-colors">
                Lucid Pro
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Wellness That{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
              Adapts
            </span>
            , Not Static
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The first truly intelligent wellness platform that adapts to your real-time state. Connect wearables, detect stress patterns, and get personalized AI recommendations for optimal wellness.
          </p>
          <Link
            href="/auth"
            className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Your Real-Time Wellness Optimization Platform
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="space-y-12">
              {/* Biometric Integration Feature */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Biometric Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with wearables (Fitbit, Apple Watch) to detect stress, heart rate variability, and sleep patterns. Our AI analyzes your biometric data in real-time to provide personalized wellness recommendations.
                  </p>
                </div>
              </div>

              {/* AI Wellness Coach Feature */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Wellness Coach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our machine learning model learns from your biometric data and behavior patterns to recommend personalized interventions. Get real-time stress prediction and proactive wellness suggestions.
                  </p>
                </div>
              </div>

              {/* Real-Time Mood Detection Feature */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Mood Detection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use webcam and microphone (with permission) for voice sentiment analysis and facial expression recognition. Our AI adapts meditation sessions based on your detected stress levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - UI Mockups */}
            <div className="space-y-6">
              {/* Biometric Dashboard Mockup */}
              <div className="bg-black rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/20 to-red-500/20"></div>
                <div className="relative z-10">
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">Stress Level</span>
                      <span className="text-green-400 text-sm">Low</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-white text-xs mb-1">Heart Rate</div>
                      <div className="text-green-400 text-lg font-bold">72 BPM</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-white text-xs mb-1">Sleep Score</div>
                      <div className="text-blue-400 text-lg font-bold">85%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recommendations Mockup */}
              <div className="bg-black rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-white text-sm font-medium mb-3">AI Recommendations</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3 border-l-4 border-green-400">
                    <div className="text-white text-sm font-medium">Stress Prediction</div>
                    <div className="text-gray-300 text-xs">High stress likely in 2 hours</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-3 border-l-4 border-blue-400">
                    <div className="text-white text-sm font-medium">Recommended Action</div>
                    <div className="text-gray-300 text-xs">5-minute breathing exercise</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-3 border-l-4 border-purple-400">
                    <div className="text-white text-sm font-medium">Adaptive Session</div>
                    <div className="text-gray-300 text-xs">Meditation adjusted to 8 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Lucid</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Powered by OrdinalScale</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
