"use client";

import { useEffect, useState } from "react";
import { 
  LayoutDashboard, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter,
  MapPin,
  MoreVertical
} from "lucide-react";

interface Report {
  id: string;
  type: string;
  location: string;
  description: string;
  status: string;
  timestamp: string;
  severity: string;
}

export default function Dashboard() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await fetch("/api/reports");
      const data = await res.json();
      setReports(data);
    } catch (error) {
      console.error("Failed to fetch reports");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "investigating": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "resolved": return "text-green-400 bg-green-400/10 border-green-400/20";
      default: return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "security": return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case "cleanliness": return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
      default: return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-slate-900 border-r border-slate-800 p-6 z-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white tracking-tight">SafeTraveler</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Admin</p>
          </div>
        </div>

        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Tableau de bord</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Incidents</span>
          </a>
          {/* Add more links */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Aperçu des Signalements</h2>
            <p className="text-slate-400">Bienvenue, Administrateur.</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
               <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  className="bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 w-64 transition-all"
               />
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff" alt="Admin" />
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Signalements Total", value: reports.length, color: "blue" },
            { label: "En Investigation", value: reports.filter(r => r.status === 'investigating').length, color: "orange" },
            { label: "Résolus (24h)", value: reports.filter(r => r.status === 'resolved').length, color: "green" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm font-medium mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Reports Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white">Signalements Récents</h3>
            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              Filtrer
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold">Lieu</th>
                  <th className="px-6 py-4 font-semibold">Statut</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-slate-800 ${report.severity === 'high' ? 'ring-1 ring-red-500/50' : ''}`}>
                          {getTypeIcon(report.type)}
                        </div>
                        <span className="font-medium text-slate-200 capitalize">{report.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-300 line-clamp-1 max-w-xs">{report.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {report.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(report.status)} capitalize`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(report.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {reports.length === 0 && !loading && (
                   <tr>
                     <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                       Aucun signalement trouvé.
                     </td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
