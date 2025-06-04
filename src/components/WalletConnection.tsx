
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Shield, Zap, Users } from 'lucide-react';

interface WalletConnectionProps {
  onConnect: () => void;
}

const WalletConnection = ({ onConnect }: WalletConnectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
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
    </div>
  );
};

export default WalletConnection;
