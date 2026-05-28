import React, { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Activity, Users, Eye, ArrowUp, DollarSign, RefreshCw, Trash2, Plus } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const MOCK_DATA = [
  { name: 'Jan', traffic: 1200 },
  { name: 'Feb', traffic: 2100 },
  { name: 'Mar', traffic: 3800 },
  { name: 'Apr', traffic: 5400 },
  { name: 'May', traffic: 8900 },
  { name: 'Jun', traffic: 12500 }
];

export function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [serviceCategories, setServiceCategories] = useState([
    {
      id: 'cat1',
      name: 'Video Editing',
      items: [
        { id: '1', name: '1 Minute Reel', price: '₹299 - ₹499' },
        { id: '2', name: '5 Minutes Video', price: '₹699 - ₹1,199' },
        { id: '3', name: '10 Minutes Video', price: '₹1,499 - ₹2,499' }
      ]
    },
    {
      id: 'cat2',
      name: 'AI Video Creation',
      items: [
        { id: '4', name: 'AI Video (1 Minute)', price: '₹499 - ₹999' }
      ]
    },
    {
      id: 'cat3',
      name: 'Website Development',
      items: [
        { id: '5', name: 'Landing Page', price: '₹1,999 - ₹3,999' },
        { id: '6', name: 'Business Website', price: '₹4,999 - ₹8,999' },
        { id: '7', name: 'eCommerce Hub', price: '₹9,999 - ₹17,999' },
        { id: '8', name: 'Custom Web App', price: '₹9,999 - ₹25,999+' }
      ]
    },
    {
      id: 'cat4',
      name: 'Graphic Design',
      items: [
        { id: '9', name: 'Logo Design', price: '₹699 - ₹1,999' },
        { id: '10', name: 'Ad Creative', price: '₹199 - ₹499' },
        { id: '11', name: 'Instagram Post', price: '₹99 - ₹199' },
        { id: '12', name: 'Custom Poster', price: '₹199 - ₹499' }
      ]
    },
    {
      id: 'cat5',
      name: 'Complete Digital Marketing',
      items: [
        { id: '13', name: 'Growth Package', price: '₹55,000 - ₹85,000 / month' },
        { id: '14', name: 'Premium Scale', price: '₹90,000 - 1.5L+ / month' }
      ]
    }
  ]);
  const [isSaving, setIsSaving] = useState(false);

  const fetchServices = async () => {
    try {
      const docRef = doc(db, 'settings', 'pricing');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        setServiceCategories(snap.data().categories);
      }
    } catch (err) {
      console.error('Failed to fetch pricing:', err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleCancelPrices = () => {
    fetchServices();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim().toUpperCase();
    const cleanPass = password.trim();

    if (cleanUser === 'DUBAI CHALO' && (cleanPass === 'DOLLER$$$' || cleanPass === 'DOLLER$' || cleanPass === 'DOLLER')) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSavePrices = async () => {
    setIsSaving(true);
    try {
      const docRef = doc(db, 'settings', 'pricing');
      await setDoc(docRef, { categories: serviceCategories });
      alert('Pricing published successfully to live site!');
    } catch (err) {
      console.error(err);
      alert('Failed to save. Check permissions.');
    } finally {
      setIsSaving(false);
    }
  };

  const addItemToCategory = (categoryId: string) => {
    setServiceCategories(serviceCategories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, items: [...cat.items, { id: Math.random().toString(), name: '', price: '' }] }
        : cat
    ));
  };

  const updateItem = (categoryId: string, itemId: string, field: 'name' | 'price', value: string) => {
    setServiceCategories(serviceCategories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, items: cat.items.map(item => item.id === itemId ? { ...item, [field]: value } : item) }
        : cat
    ));
  };

  const removeItem = (categoryId: string, itemId: string) => {
    setServiceCategories(serviceCategories.map(cat => 
      cat.id === categoryId 
        ? { ...cat, items: cat.items.filter(item => item.id !== itemId) }
        : cat
    ));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center relative w-full overflow-hidden bg-mesh">
        <GlassCard className="p-8 md:p-12 w-full max-w-md">
           <h2 className="text-3xl font-display font-bold text-white mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Admin Access</h2>
           
           <form onSubmit={handleLogin} className="space-y-6">
             {error && <div className="text-red-400 text-sm font-medium text-center">{error}</div>}
             <div className="space-y-2">
                <label className="text-sm text-text-soft font-medium">Username</label>
                <input 
                  type="text" 
                  value={username} onChange={e => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple"
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm text-text-soft font-medium">Password</label>
                <input 
                  type="password" 
                  value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple"
                />
             </div>
             <Button className="w-full h-12" type="submit">Login to Dashboard</Button>
           </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 px-4 md:px-12 relative w-full max-w-7xl mx-auto space-y-12">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-white">Analytics <span className="text-brand-purple">Overview</span></h1>
            <p className="text-text-soft mt-1">Real-time traffic and performance tracking.</p>
          </div>
          <Button variant="outline" icon={<RefreshCw className="w-4 h-4" />}>Refresh Data</Button>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Traffic', val: '12,504', change: '+24%', icon: <Users /> },
            { label: 'Page Views', val: '45,200', change: '+12%', icon: <Eye /> },
            { label: 'Conversion Rate', val: '4.8%', change: '+1.2%', icon: <Activity /> },
            { label: 'WhatsApp Leads', val: '142', change: '+34%', icon: <ArrowUp /> },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-6">
               <div className="flex justify-between items-start mb-4">
                 <div className="p-3 bg-white/5 rounded-xl text-brand-blue">{stat.icon}</div>
                 <div className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded-md">{stat.change}</div>
               </div>
               <div className="text-3xl font-display font-bold text-white mb-1">{stat.val}</div>
               <div className="text-sm text-text-soft">{stat.label}</div>
            </GlassCard>
          ))}
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
          <GlassCard className="p-6 lg:col-span-2">
             <h3 className="text-xl font-bold text-white mb-6">Traffic Over Time</h3>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_DATA}>
                    <defs>
                      <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9D4EDD" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#9D4EDD" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" stroke="#B8BCC7" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#B8BCC7" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0512', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="traffic" stroke="#9D4EDD" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col max-h-[600px] lg:col-span-1">
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold text-white flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-400" /> Pricing Management</h3>
             </div>
             
             <div className="space-y-6 flex-grow overflow-y-auto no-scrollbar pr-2 mb-4">
               {serviceCategories.map((category) => (
                 <div key={category.id} className="space-y-3">
                   <div className="flex items-center justify-between border-b border-white/10 pb-2">
                     <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest">{category.name}</h4>
                     <button onClick={() => addItemToCategory(category.id)} className="bg-white/5 hover:bg-white/10 p-1.5 rounded-md transition-colors">
                       <Plus className="w-3 h-3 text-white" />
                     </button>
                   </div>
                   {category.items.map((item) => (
                     <div key={item.id} className="flex flex-col gap-2 p-3 bg-white/5 border border-white/5 rounded-lg group relative">
                        <button onClick={() => removeItem(category.id, item.id)} className="absolute top-2 right-2 text-white/40 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 z-10">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="space-y-1">
                          <input 
                            type="text" 
                            value={item.name} onChange={e => updateItem(category.id, item.id, 'name', e.target.value)}
                            placeholder="Service Name"
                            className="w-full bg-transparent border-b border-white/10 px-1 py-1 text-sm text-white focus:outline-none focus:border-brand-purple"
                          />
                        </div>
                        <div className="space-y-1">
                          <input 
                            type="text" 
                            value={item.price} onChange={e => updateItem(category.id, item.id, 'price', e.target.value)}
                            placeholder="Price (e.g. ₹499 - ₹999)"
                            className="w-full bg-transparent border-b border-white/10 px-1 py-1 text-sm text-white focus:outline-none focus:border-brand-purple"
                          />
                        </div>
                     </div>
                   ))}
                   {category.items.length === 0 && (
                     <div className="text-xs text-text-soft pb-2">No items in this category.</div>
                   )}
                 </div>
               ))}
             </div>
             <div className="flex gap-4 mt-4 shrink-0">
               <Button onClick={handleCancelPrices} variant="outline" className="w-full" disabled={isSaving}>
                 Cancel
               </Button>
               <Button onClick={handleSavePrices} className="w-full" disabled={isSaving}>
                 {isSaving ? 'Saving...' : 'Save Pricing Menu'}
               </Button>
             </div>
          </GlassCard>
       </div>
    </div>
  );
}
