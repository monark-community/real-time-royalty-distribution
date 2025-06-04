
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Plus, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

const SplitConfiguration = () => {
  const [splits, setSplits] = useState([
    { id: 1, name: 'Main Creator', wallet: '0x1234...5678', percentage: 60, role: 'Creator' },
    { id: 2, name: 'Producer', wallet: '0x8765...4321', percentage: 25, role: 'Producer' },
    { id: 3, name: 'Marketing', wallet: '0x9876...1234', percentage: 10, role: 'Marketing' },
    { id: 4, name: 'Platform Fee', wallet: '0xabcd...efgh', percentage: 5, role: 'Platform' },
  ]);

  const totalPercentage = splits.reduce((sum, split) => sum + split.percentage, 0);

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Revenue Split Configuration</CardTitle>
              <p className="text-slate-300 text-sm mt-2">
                Configure how revenue is distributed among contributors
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Recipient
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">{splits.length}</div>
              <p className="text-sm text-slate-300">Total Recipients</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">{totalPercentage}%</div>
              <p className="text-sm text-slate-300">Total Allocation</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">Active</div>
              <p className="text-sm text-slate-300">Split Status</p>
            </div>
          </div>

          <div className="space-y-4">
            {splits.map((split) => (
              <div key={split.id} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{split.name}</h4>
                      <p className="text-sm text-slate-400">{split.wallet}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{split.role}</Badge>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Revenue Share</span>
                    <span className="text-white font-medium">{split.percentage}%</span>
                  </div>
                  <Progress value={split.percentage} className="h-2" />
                  <p className="text-xs text-slate-400">
                    Estimated monthly: ${((split.percentage / 100) * 2450).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {totalPercentage !== 100 && (
            <div className="p-4 bg-yellow-900/20 border border-yellow-600/20 rounded-lg">
              <p className="text-yellow-400 text-sm">
                ⚠️ Total percentage must equal 100%. Current total: {totalPercentage}%
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SplitConfiguration;
