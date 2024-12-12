import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function EnergyBarChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Renewable Energy Production by Source</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="wind" fill="#3b82f6" name="Wind" />
            <Bar dataKey="solar" fill="#f59e0b" name="Solar" />
            <Bar dataKey="hydro" fill="#06b6d4" name="Hydro" />
            <Bar dataKey="biofuel" fill="#84cc16" name="Biofuel" />
            <Bar dataKey="geothermal" fill="#d946ef" name="Geothermal" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
