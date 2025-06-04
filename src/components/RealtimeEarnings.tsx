
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Play, Music, Video, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RealtimeEarningsProps {
  earnings: number;
}

const RealtimeEarnings = ({ earnings }: RealtimeEarningsProps) => {
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: 'music', amount: 2.50, source: 'Spotify Stream', time: '2 min ago' },
    { id: 2, type: 'video', amount: 15.75, source: 'YouTube Revenue', time: '5 min ago' },
    { id: 3, type: 'ebook', amount: 8.99, source: 'eBook Purchase', time: '12 min ago' },
    { id: 4, type: 'music', amount: 1.25, source: 'Apple Music', time: '18 min ago' },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'music': return <Music className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'ebook': return <FileText className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'music': return 'bg-green-600';
      case 'video': return 'bg-red-600';
      case 'ebook': return 'bg-blue-600';
      default: return 'bg-purple-600';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Real-time Earnings</CardTitle>
          <Badge variant="outline" className="text-green-400 border-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/20">
          <div className="text-4xl font-bold text-white mb-2">
            ${earnings.toFixed(2)}
          </div>
          <p className="text-slate-300">Current Earnings</p>
          <div className="flex items-center justify-center mt-2 text-green-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+$3.75 today</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300">Recent Revenue</h4>
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full ${getTypeColor(transaction.type)} flex items-center justify-center text-white`}>
                  {getIcon(transaction.type)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{transaction.source}</p>
                  <p className="text-xs text-slate-400">{transaction.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-400">+${transaction.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealtimeEarnings;
