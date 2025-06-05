
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Wallet, TrendingUp, Users, Settings, Clock, DollarSign, Music, Music2, Music3, Music4 } from 'lucide-react';
import EarningsChart from '@/components/EarningsChart';
import PaymentHistory from '@/components/PaymentHistory';
import SplitConfiguration from '@/components/SplitConfiguration';
import WalletConnection from '@/components/WalletConnection';
import RealtimeEarnings from '@/components/RealtimeEarnings';
import RoyaltyOverview from '@/components/RoyaltyOverview';

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [totalEarnings, setTotalEarnings] = useState(1250.75);
  const [pendingPayouts, setPendingPayouts] = useState(89.25);

  // Simulate real-time earnings updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEarnings(prev => prev + Math.random() * 0.5);
      if (Math.random() > 0.7) {
        setPendingPayouts(prev => Math.max(0, prev + Math.random() * 2 - 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isWalletConnected) {
    return <WalletConnection onConnect={() => setIsWalletConnected(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating Music Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Music Note Icons */}
        <Music className="absolute top-20 left-20 text-purple-300 opacity-20 w-8 h-8 animate-bounce" style={{ animationDelay: '0s' }} />
        <Music2 className="absolute top-32 right-32 text-blue-300 opacity-30 w-6 h-6 animate-bounce" style={{ animationDelay: '1s' }} />
        <Music3 className="absolute bottom-40 left-40 text-pink-300 opacity-25 w-10 h-10 animate-bounce" style={{ animationDelay: '2s' }} />
        <Music4 className="absolute top-60 left-1/3 text-green-300 opacity-20 w-7 h-7 animate-bounce" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating Musician Images */}
        <div className="absolute top-16 right-20 animate-float">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop&crop=face" 
            alt="Musician with guitar"
            className="w-20 h-20 rounded-full border-4 border-purple-400/30 shadow-lg opacity-80"
          />
        </div>
        
        <div className="absolute top-40 left-16 animate-float" style={{ animationDelay: '1s' }}>
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop&crop=face" 
            alt="DJ with headphones"
            className="w-16 h-16 rounded-full border-4 border-blue-400/30 shadow-lg opacity-75"
          />
        </div>
        
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=110&h=110&fit=crop&crop=face" 
            alt="Singer with microphone"
            className="w-18 h-18 rounded-full border-4 border-pink-400/30 shadow-lg opacity-70"
          />
        </div>
        
        <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=90&h=90&fit=crop&crop=face" 
            alt="Drummer"
            className="w-14 h-14 rounded-full border-4 border-green-400/30 shadow-lg opacity-65"
          />
        </div>
        
        {/* Abstract Music Wave Lines */}
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
      </div>

      <div className="container mx-auto p-6 space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Music2 className="w-10 h-10 text-purple-400" />
              StreamRoyalties
            </h1>
            <p className="text-slate-300">Real-time revenue distribution platform</p>
            
            {/* Decorative elements around title */}
            <div className="absolute -top-2 -left-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -bottom-1 right-10">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-green-400 border-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live
            </Badge>
            <Button variant="outline" className="text-white border-white/20">
              <Wallet className="w-4 h-4 mr-2" />
              0x1234...5678
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <RoyaltyOverview 
          totalEarnings={totalEarnings}
          pendingPayouts={pendingPayouts}
        />

        {/* Main Dashboard */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-slate-700">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-purple-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="splits" className="text-white data-[state=active]:bg-purple-600">
              <Users className="w-4 h-4 mr-2" />
              Splits
            </TabsTrigger>
            <TabsTrigger value="history" className="text-white data-[state=active]:bg-purple-600">
              <Clock className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-purple-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealtimeEarnings earnings={totalEarnings} />
              <EarningsChart />
            </div>
          </TabsContent>

          <TabsContent value="splits" className="space-y-6">
            <SplitConfiguration />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <PaymentHistory />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Platform Settings</CardTitle>
                <CardDescription className="text-slate-300">
                  Configure your royalty distribution preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300">Payout Threshold</label>
                    <div className="mt-1">
                      <Badge variant="secondary">$10.00</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Auto-Payout</label>
                    <div className="mt-1">
                      <Badge variant="secondary">Enabled</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
