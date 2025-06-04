
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

interface RoyaltyOverviewProps {
  totalEarnings: number;
  pendingPayouts: number;
}

const RoyaltyOverview = ({ totalEarnings, pendingPayouts }: RoyaltyOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Total Earnings</CardTitle>
          <DollarSign className="h-4 w-4 text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">${totalEarnings.toFixed(2)}</div>
          <p className="text-xs text-green-400 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5% from last month
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Pending Payouts</CardTitle>
          <Clock className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">${pendingPayouts.toFixed(2)}</div>
          <p className="text-xs text-slate-400 mt-1">
            Next payout in 2h 15m
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Active Streams</CardTitle>
          <TrendingUp className="h-4 w-4 text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">7</div>
          <p className="text-xs text-blue-400 mt-1">
            3 generating revenue now
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-300">Contributors</CardTitle>
          <Users className="h-4 w-4 text-purple-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">12</div>
          <p className="text-xs text-slate-400 mt-1">
            Across all projects
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoyaltyOverview;
