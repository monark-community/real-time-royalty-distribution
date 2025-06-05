
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Wallet, TrendingUp, Users, Settings, Clock, DollarSign, Music2 } from 'lucide-react';
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
    </div>
  );
};

export default Index;
