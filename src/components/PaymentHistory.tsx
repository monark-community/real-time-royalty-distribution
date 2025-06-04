
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Download, ExternalLink, Check, Clock, X } from 'lucide-react';
import { useState } from 'react';

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const payments = [
    {
      id: 'txn_001',
      date: '2024-06-04 14:30:22',
      type: 'Stream Revenue',
      amount: 45.75,
      recipient: '0x1234...5678',
      status: 'completed',
      txHash: '0xabc123...',
      source: 'Spotify Streaming'
    },
    {
      id: 'txn_002',
      date: '2024-06-04 12:15:10',
      type: 'NFT Royalty',
      amount: 125.00,
      recipient: '0x8765...4321',
      status: 'completed',
      txHash: '0xdef456...',
      source: 'OpenSea Sale'
    },
    {
      id: 'txn_003',
      date: '2024-06-04 10:45:33',
      type: 'License Fee',
      amount: 250.00,
      recipient: '0x9876...1234',
      status: 'pending',
      txHash: '0x789abc...',
      source: 'Software License'
    },
    {
      id: 'txn_004',
      date: '2024-06-03 16:20:45',
      type: 'Stream Revenue',
      amount: 32.50,
      recipient: '0x1234...5678',
      status: 'completed',
      txHash: '0x456def...',
      source: 'YouTube Premium'
    },
    {
      id: 'txn_005',
      date: '2024-06-03 11:30:15',
      type: 'eBook Royalty',
      amount: 18.99,
      recipient: '0x5432...8765',
      status: 'failed',
      txHash: '0x123ghi...',
      source: 'Amazon Kindle'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed':
        return <X className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'failed':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const filteredPayments = payments.filter(payment =>
    payment.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.recipient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Payment History</CardTitle>
            <p className="text-slate-300 text-sm mt-2">
              Complete record of all royalty distributions
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-white border-slate-600">
              <Calendar className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="text-white border-slate-600">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          />
        </div>

        <div className="space-y-3">
          {filteredPayments.map((payment) => (
            <div key={payment.id} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(payment.status)}
                    <span className="font-medium text-white">{payment.type}</span>
                  </div>
                  <Badge className={getStatusColor(payment.status)}>
                    {payment.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">${payment.amount.toFixed(2)}</div>
                  <div className="text-xs text-slate-400">{payment.date}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Source</p>
                  <p className="text-white">{payment.source}</p>
                </div>
                <div>
                  <p className="text-slate-400">Recipient</p>
                  <p className="text-white font-mono">{payment.recipient}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400">Transaction</p>
                    <p className="text-white font-mono text-xs">{payment.txHash}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-400">No transactions found matching your search.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentHistory;
