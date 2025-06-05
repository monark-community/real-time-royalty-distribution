import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Shield, Zap, Users, Music, Music2, Music3, Music4, Github, Twitter, Globe } from 'lucide-react';

interface WalletConnectionProps {
  onConnect: () => void;
}

const WalletConnection = ({ onConnect }: WalletConnectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* Title Bar */}
      <div className="relative z-20 bg-slate-800/30 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Music2 className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">StreamRoyalties</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={onConnect}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Music Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Music Note Icons - More scattered */}
        <Music className="absolute top-20 left-20 text-purple-300 opacity-20 w-8 h-8 animate-bounce" style={{ animationDelay: '0s' }} />
        <Music2 className="absolute top-32 right-32 text-blue-300 opacity-30 w-6 h-6 animate-bounce" style={{ animationDelay: '1s' }} />
        <Music3 className="absolute bottom-40 left-40 text-pink-300 opacity-25 w-10 h-10 animate-bounce" style={{ animationDelay: '2s' }} />
        <Music4 className="absolute top-60 left-1/3 text-green-300 opacity-20 w-7 h-7 animate-bounce" style={{ animationDelay: '0.5s' }} />
        
        {/* Additional Music Notes */}
        <Music className="absolute bottom-20 right-20 text-yellow-300 opacity-15 w-9 h-9 animate-bounce" style={{ animationDelay: '3s' }} />
        <Music2 className="absolute top-16 left-1/2 text-cyan-300 opacity-25 w-5 h-5 animate-bounce" style={{ animationDelay: '1.5s' }} />
        <Music3 className="absolute bottom-60 right-1/3 text-red-300 opacity-20 w-8 h-8 animate-bounce" style={{ animationDelay: '2.5s' }} />
        <Music4 className="absolute top-40 right-16 text-indigo-300 opacity-30 w-6 h-6 animate-bounce" style={{ animationDelay: '0.8s' }} />
        <Music className="absolute bottom-32 left-1/4 text-emerald-300 opacity-18 w-7 h-7 animate-bounce" style={{ animationDelay: '3.2s' }} />
        
        {/* Larger, Rotated, Unique Musician Images - With center-based transparency */}
        <div className="absolute top-8 right-8" style={{ animation: 'float 8s ease-in-out infinite', transform: 'rotate(-8deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1619378778949-2af10f8c8c20?q=80&w=200&h=260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Musician with guitar"
            className="w-48 h-64 object-cover rounded-lg border-4 border-purple-400/60 shadow-2xl opacity-90"
          />
        </div>
        
        <div className="absolute top-24 right-96" style={{ animation: 'float 6s ease-in-out infinite 1.5s', transform: 'rotate(12deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1606405112653-809073e30efe?q=80&w=180&h=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="DJ with headphones"
            className="w-44 h-56 object-cover rounded-lg border-4 border-blue-400/60 shadow-2xl opacity-70"
          />
        </div>
        
        <div className="absolute top-4 left-4" style={{ animation: 'float 7s ease-in-out infinite 0.8s', transform: 'rotate(-15deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1593167751520-95a058b903c2?q=80&w=190&h=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Singer with microphone"
            className="w-46 h-60 object-cover rounded-lg border-4 border-pink-400/60 shadow-2xl opacity-90"
          />
        </div>
        
        <div className="absolute top-32 left-80" style={{ animation: 'float 9s ease-in-out infinite 0.3s', transform: 'rotate(18deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=170&h=220&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Keyboard player"
            className="w-42 h-54 object-cover rounded-lg border-4 border-yellow-400/60 shadow-xl opacity-60"
          />
        </div>
        
        <div className="absolute bottom-8 left-8" style={{ animation: 'float 7s ease-in-out infinite 1.2s', transform: 'rotate(22deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=180&h=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Drummer"
            className="w-44 h-56 object-cover rounded-lg border-4 border-cyan-400/60 shadow-xl opacity-90"
          />
        </div>
        
        <div className="absolute bottom-4 right-4" style={{ animation: 'float 6s ease-in-out infinite 2.5s', transform: 'rotate(-12deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=190&h=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Concert performer"
            className="w-46 h-60 object-cover rounded-lg border-4 border-red-400/60 shadow-xl opacity-90"
          />
        </div>
        
        {/* Abstract Music Wave Lines - More of them */}
        <svg className="absolute top-24 left-1/2 opacity-10" width="200" height="60">
          <path d="M0,30 Q50,10 100,30 T200,30" stroke="url(#gradient1)" strokeWidth="3" fill="none" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute bottom-20 left-1/4 opacity-15" width="150" height="40">
          <path d="M0,20 Q37.5,5 75,20 T150,20" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* New wave lines */}
        <svg className="absolute top-1/3 left-20 opacity-12" width="180" height="50">
          <path d="M0,25 Q45,8 90,25 T180,25" stroke="url(#gradient3)" strokeWidth="2.5" fill="none" />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute bottom-1/3 right-24 opacity-18" width="160" height="45">
          <path d="M0,22.5 Q40,7 80,22.5 T160,22.5" stroke="url(#gradient4)" strokeWidth="2" fill="none" />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Fun Vector Graphics - Circles and Dots */}
        <div className="absolute top-1/4 left-1/3">
          <div className="w-4 h-4 bg-purple-400/20 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-6 h-6 bg-blue-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-1/2 left-1/4">
          <div className="w-3 h-3 bg-pink-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <div className="w-5 h-5 bg-green-400/18 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-1/2 w-8 h-8 border-2 border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 border-2 border-yellow-400/25 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-10 h-10 border-2 border-purple-400/15 rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">StreamRoyalties</h1>
            <p className="text-2xl text-slate-300 mb-4">
              Revolutionizing Digital Creator Payouts
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Instant, transparent, and automatic revenue distribution powered by blockchain technology
            </p>
          </div>

          {/* Main Call to Action - Bigger and More Prominent */}
          <div className="mb-16">
            <Card className="bg-slate-800/60 border-slate-600 max-w-2xl mx-auto backdrop-blur-sm shadow-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-4xl mb-4 font-bold">Ready to Get Started?</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Connect your Web3 wallet to revolutionize how you receive royalties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  onClick={onConnect}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Wallet className="w-6 h-6 mr-3" />
                  Connect Your Wallet Now
                </Button>
                <p className="text-sm text-slate-400 text-center">
                  Supports MetaMask, WalletConnect, Coinbase Wallet, and other Web3 wallets
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Real-time Payouts</CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Receive earnings instantly as revenue is generated
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Transparent & Secure</CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  All transactions recorded on-chain for complete transparency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Collaborative Splits</CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Configure revenue splits among team members
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/40 border-slate-700 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">No Middlemen</CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Direct payments from consumers to creators
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-slate-800/40 backdrop-blur-sm border-t border-slate-700/50 mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music2 className="w-6 h-6 text-purple-400" />
                <h3 className="text-white font-bold text-lg">StreamRoyalties</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Revolutionizing how creators receive their earnings through blockchain technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 StreamRoyalties. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default WalletConnection;
