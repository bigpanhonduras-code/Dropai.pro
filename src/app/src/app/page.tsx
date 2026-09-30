"use client";

import { useState } from "react";
import { LayoutDashboard, Package, Users, TrendingUp, Megaphone, Settings, LogOut, DollarSign, Star, Mail, Phone } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("resumen");

  const menuItems = [
    { id: "resumen", name: "Resumen General", icon: LayoutDashboard },
    { id: "catalogo", name: "Catálogo", icon: Package },
    { id: "proveedores", name: "Proveedores", icon: Users },
    { id: "inversion", name: "Inversiones", icon: TrendingUp },
    { id: "marketing", name: "Marketing", icon: Megaphone },
    { id: "configuracion", name: "Configuración", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">DropAI Pro</h1>
          <p className="text-xs text-gray-500 mt-1">Centro de Comando</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm text-gray-700 hover:bg-gray-100">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {menuItems.find((m) => m.id === activeTab)?.name}
            </h2>
            <p className="text-gray-600 mt-1">Bienvenido de vuelta, aquí está lo que sucede hoy.</p>
          </div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">U</div>
        </header>

        {/* VISTA: RESUMEN */}
        {activeTab === "resumen" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Ventas Hoy", value: "$2,450", change: "↑ 12% vs ayer", color: "text-green-600", icon: DollarSign },
                { title: "Productos Activos", value: "127", change: "En catálogo", color: "text-blue-600", icon: Package },
                { title: "Proveedores", value: "24", change: "Conectados", color: "text-purple-600", icon: Users },
                { title: "Oportunidades", value: "8", change: "Alertas hoy", color: "text-orange-600", icon: TrendingUp },
              ].map((kpi, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{kpi.title}</span>
                    <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{kpi.value}</div>
                  <p className={`text-xs mt-2 ${kpi.color}`}>{kpi.change}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">🚀 Próximo paso</h3>
              <p className="text-blue-800 text-sm">Tu dashboard está listo. Ahora vamos a conectarlo a Vercel para que esté en internet.</p>
            </div>
          </div>
        )}

        {/* VISTA: CATÁLOGO */}
        {activeTab === "catalogo" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Producto</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Categoría</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Costo</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Venta</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Margen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: "Auriculares Bluetooth Pro", cat: "Tecnología", cost: 8.50, price: 29.99 },
                  { name: "Lámpara LED Inteligente", cat: "Hogar", cost: 12.00, price: 39.99 },
                  { name: "Cama Ortopédica Perros", cat: "Mascotas", cost: 18.00, price: 59.99 },
                ].map((prod, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{prod.name}</td>
                    <td className="px-6 py-4 text-gray-600">{prod.cat}</td>
                    <td className="px-6 py-4 text-gray-600">${prod.cost.toFixed(2)}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">${prod.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{(((prod.price - prod.cost) / prod.price) * 100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* VISTA: PROVEEDORES */}
        {activeTab === "proveedores" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Shenzhen TechPro Electronics", sector: "Tecnología", rating: 4.8, email: "contact@techpro.cn" },
              { name: "Yiwu HomeGoods Manufacturing", sector: "Hogar", rating: 4.5, email: "sales@homegoods.cn" },
              { name: "Guangzhou PetCare Factory", sector: "Mascotas", rating: 4.7, email: "info@petcare.cn" },
            ].map((sup, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900">{sup.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-yellow-700">{sup.rating}</span>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded mb-4">{sup.sector}</span>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {sup.email}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +86 138 0000 0000</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VISTA: INVERSIONES */}
        {activeTab === "inversion" && (
          <div className="space-y-4">
            {[
              { symbol: "BTC", name: "Bitcoin", type: "Comprar", confidence: 78, risk: "Medio", price: "$43,250", target: "$48,000" },
              { symbol: "NVDA", name: "NVIDIA", type: "Mantener", confidence: 82, risk: "Bajo", price: "$485", target: "$520" },
              { symbol: "GOLD", name: "Oro", type: "Comprar", confidence: 71, risk: "Bajo", price: "$2,025", target: "$2,150" },
            ].map((inv, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-bold text-gray-900">{inv.symbol}</span>
                    <span className="text-gray-500">{inv.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${inv.type === "Comprar" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                      {inv.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700">
                      Riesgo {inv.risk}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Actual</div>
                    <div className="font-bold">{inv.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Objetivo</div>
                    <div className="font-bold text-green-600">{inv.target}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Confianza IA</div>
                    <div className="text-2xl font-bold text-blue-600">{inv.confidence}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VISTA: MARKETING / CONFIGURACIÓN */}
        {(activeTab === "marketing" || activeTab === "configuracion") && (
          <div className="bg-white p-12 rounded-xl border border-gray-200 shadow-sm text-center">
            <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Módulo en construcción</h3>
            <p className="text-gray-500 mt-2">Esta sección se activará cuando conectemos las APIs de publicidad y configuración.</p>
          </div>
        )}
      </main>
    </div>
  );
}
