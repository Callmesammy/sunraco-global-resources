"use client";

import React, { useState } from "react";
import { Globe, MapPin, Radio, ShieldAlert } from "lucide-react";

interface Hub {
  id: string;
  city: string;
  country: string;
  role: string;
  coordinates: string;
  lat: number;
  lng: number;
  status: "ACTIVE" | "HIGH-CAPACITY";
  capacity: string;
}

const HUBS: Hub[] = [
  {
    id: "hub-1",
    city: "LONDON",
    country: "UNITED KINGDOM",
    role: "Global Executive HQ & Structured Finance",
    coordinates: "51.5074° N, 0.1278° W",
    lat: 51.5074,
    lng: -0.1278,
    status: "ACTIVE",
    capacity: "$2.4B Financial Vault",
  },
  {
    id: "hub-2",
    city: "DUBAI",
    country: "UNITED ARAB EMIRATES",
    role: "Middle East Energy Dispatch & LNG Operations",
    coordinates: "25.2048° N, 55.2708° E",
    lat: 25.2048,
    lng: 55.2708,
    status: "HIGH-CAPACITY",
    capacity: "1.2M BBL/Day Capacity",
  },
  {
    id: "hub-3",
    city: "SINGAPORE",
    country: "SINGAPORE",
    role: "Asia-Pacific Maritime Hub & Bunkering",
    coordinates: "1.3521° N, 103.8198° E",
    lat: 1.3521,
    lng: 103.8198,
    status: "ACTIVE",
    capacity: "28 VLCC Berths",
  },
  {
    id: "hub-4",
    city: "HOUSTON",
    country: "UNITED STATES",
    role: "Americas Hydrocarbon Trading & Refined Fuel",
    coordinates: "29.7604° N, 95.3698° W",
    lat: 29.7604,
    lng: -95.3698,
    status: "HIGH-CAPACITY",
    capacity: "850k BBL Reserve",
  },
  {
    id: "hub-5",
    city: "LAGOS",
    country: "NIGERIA",
    role: "West Africa Maritime Logistics & Strategic Minerals",
    coordinates: "6.5244° N, 3.3792° E",
    lat: 6.5244,
    lng: 3.3792,
    status: "ACTIVE",
    capacity: "Deepwater Terminal 4",
  },
];

export default function MapboxInteractive() {
  const [selectedHub, setSelectedHub] = useState<Hub>(HUBS[0]);

  return (
    <section
      id="operations"
      className="relative min-h-[90vh] w-full bg-[#0A0A0A] py-24 px-6 md:px-16 border-t border-white/10 flex flex-col justify-between"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF5500] uppercase tracking-widest mb-2">
            <Radio className="w-4 h-4 text-[#FF5500] animate-pulse" />
            <span>03. GLOBAL OPERATIONS & COMMAND MAP</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tighter uppercase">
            STRATEGIC NODE NETWORK
          </h2>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>ALL NODES OPERATIONAL (5/5)</span>
        </div>
      </div>

      {/* Interactive Operations Canvas & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1">
        {/* Dark Tactical Map Simulation Canvas */}
        <div className="lg:col-span-8 relative min-h-[450px] md:min-h-[550px] rounded-3xl bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between p-8 bg-grid-pattern shadow-2xl">
          {/* Subtle World Map Vector Background Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#141414]/90 to-[#141414] pointer-events-none" />

          {/* Map Top Status Overlay */}
          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#FF5500]" />
              <span>DARK MONOCHROME TACTICAL HUD</span>
            </div>
            <span className="text-[#FF5500]">ACTIVE HUB: {selectedHub.city}</span>
          </div>

          {/* Tactical Node Pins Grid */}
          <div className="relative z-10 my-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`group relative p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-[#FF5500] border-[#FF5500] text-black shadow-[0_0_25px_rgba(255,85,0,0.4)] scale-105"
                      : "bg-black/60 border-white/10 text-white hover:border-[#FF5500]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-black" : "text-[#FF5500]"
                      }`}
                    >
                      {hub.city}
                    </span>
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <p
                    className={`text-[10px] font-mono line-clamp-1 ${
                      isSelected ? "text-black/80" : "text-zinc-400"
                    }`}
                  >
                    {hub.country}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Map Bottom Coordinates HUD */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs text-zinc-400">
            <div>
              <span className="text-zinc-500">COORDINATES:</span>{" "}
              <span className="text-white font-bold">{selectedHub.coordinates}</span>
            </div>
            <div>
              <span className="text-zinc-500">THROUGHPUT:</span>{" "}
              <span className="text-[#FF5500] font-bold">{selectedHub.capacity}</span>
            </div>
          </div>
        </div>

        {/* Selected Hub Details Panel */}
        <div className="lg:col-span-4 rounded-3xl bg-[#141414] border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 font-mono text-[10px] text-[#FF5500] uppercase font-bold tracking-wider">
                {selectedHub.status}
              </span>
              <span className="font-mono text-xs text-zinc-500">ID: {selectedHub.id}</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-2">
              {selectedHub.city}
            </h3>
            <p className="font-mono text-xs text-[#FF5500] uppercase tracking-wider mb-6">
              {selectedHub.country}
            </p>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">
                  Primary Strategic Function
                </span>
                <p className="text-zinc-200 text-sm font-light leading-relaxed">
                  {selectedHub.role}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">
                  Active Asset Infrastructure
                </span>
                <p className="text-white font-mono text-sm font-bold">
                  {selectedHub.capacity}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-zinc-400">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>ENCRYPTED DIRECT DISPATCH AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
