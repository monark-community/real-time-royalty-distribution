import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Shield, Zap, Users, Music, Music2, Music3, Music4 } from 'lucide-react';

interface WalletConnectionProps {
  onConnect: () => void;
}

const WalletConnection = ({ onConnect }: WalletConnectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
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
        
        {/* Larger, Non-transparent, More Spread Out Musician Images */}
        <div className="absolute top-8 right-12" style={{ animation: 'float 8s ease-in-out infinite', transform: 'rotate(-8deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1619378778949-2af10f8c8c20?q=80&w=200&h=260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Musician with guitar"
            className="w-40 h-52 object-cover rounded-lg border-4 border-purple-400/60 shadow-2xl"
          />
        </div>
        
        <div className="absolute top-32 right-48" style={{ animation: 'float 6s ease-in-out infinite 1.5s', transform: 'rotate(12deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1606405112653-809073e30efe?q=80&w=180&h=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="DJ with headphones"
            className="w-36 h-48 object-cover rounded-lg border-4 border-blue-400/60 shadow-2xl"
          />
        </div>
        
        <div className="absolute top-4 right-80" style={{ animation: 'float 7s ease-in-out infinite 0.8s', transform: 'rotate(-15deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1593167751520-95a058b903c2?q=80&w=190&h=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Singer with microphone"
            className="w-38 h-50 object-cover rounded-lg border-4 border-pink-400/60 shadow-2xl"
          />
        </div>
        
        {/* Additional spread out images on the left side */}
        <div className="absolute top-16 left-8" style={{ animation: 'float 5s ease-in-out infinite 2s', transform: 'rotate(18deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1619378778949-2af10f8c8c20?q=80&w=160&h=210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Musician detail"
            className="w-32 h-42 object-cover rounded-lg border-4 border-green-400/60 shadow-xl"
          />
        </div>
        
        <div className="absolute top-48 left-32" style={{ animation: 'float 9s ease-in-out infinite 0.3s', transform: 'rotate(-25deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1606405112653-809073e30efe?q=80&w=170&h=220&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="DJ close-up"
            className="w-34 h-44 object-cover rounded-lg border-4 border-yellow-400/60 shadow-xl"
          />
        </div>
        
        {/* Bottom spread images */}
        <div className="absolute bottom-16 left-16" style={{ animation: 'float 7s ease-in-out infinite 1.2s', transform: 'rotate(22deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1593167751520-95a058b903c2?q=80&w=180&h=240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Singer performing"
            className="w-36 h-48 object-cover rounded-lg border-4 border-cyan-400/60 shadow-xl"
          />
        </div>
        
        <div className="absolute bottom-8 right-24" style={{ animation: 'float 6s ease-in-out infinite 2.5s', transform: 'rotate(-12deg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1619378778949-2af10f8c8c20?q=80&w=190&h=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Guitar player"
            className="w-38 h-50 object-cover rounded-lg border-4 border-red-400/60 shadow-xl"
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

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">StreamRoyalties</h1>
          <p className="text-xl text-slate-300 mb-2">
            Revolutionizing Digital Creator Payouts
          </p>
          <p className="text-slate-400">
            Instant, transparent, and automatic revenue distribution powered by blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Real-time Payouts</CardTitle>
              <CardDescription className="text-slate-300">
                Receive your earnings instantly as revenue is generated
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Transparent & Secure</CardTitle>
              <CardDescription className="text-slate-300">
                All transactions are recorded on-chain for complete transparency
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Collaborative Splits</CardTitle>
              <CardDescription className="text-slate-300">
                Configure revenue splits among team members and collaborators
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">No Middlemen</CardTitle>
              <CardDescription className="text-slate-300">
                Direct payments from consumers to creators without intermediaries
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Connect Your Wallet</CardTitle>
            <CardDescription className="text-slate-300">
              Connect your Web3 wallet to start managing your royalties
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={onConnect}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              size="lg"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
            <p className="text-xs text-slate-400 text-center">
              Supports MetaMask, WalletConnect, and other Web3 wallets
            </p>
          </CardContent>
        </Card>
      </div>

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
