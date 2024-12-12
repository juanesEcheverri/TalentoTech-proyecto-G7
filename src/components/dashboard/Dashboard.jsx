import React, { useState } from "react";
import LineChart  from "lucide-react";
import EnergyBarChart from "./charts/BarChart";
import EnergyPieChart from "./charts/PieChart";
import CapacityLineChart from "./charts/LineChart";
import ConsumptionAreaChart from "./charts/AreaChart";
import YearRangeSelector from "./YearRangeSelector";
import {
  getProductionData,
  getShareData,
  getCapacityTrends,
  getConsumptionComparison,
  getYearRange,
} from "../../services/energyData";

export default function Dashboard() {
  const { minYear, maxYear } = getYearRange();
  const [startYear, setStartYear] = useState(minYear);
  const [endYear, setEndYear] = useState(maxYear);

  const productionData = getProductionData(startYear, endYear);
  const shares = getShareData(endYear);
  const shareData = [
    { name: "Wind", value: shares.wind, color: "#3b82f6" },
    { name: "Solar", value: shares.solar, color: "#f59e0b" },
    { name: "Hydro", value: shares.hydro, color: "#06b6d4" },
  ];
  const capacityData = getCapacityTrends(startYear, endYear);
  const consumptionData = getConsumptionComparison(startYear, endYear);

  const capacitySeries = [
    { name: "Wind", dataKey: "wind", color: "#3b82f6" },
    { name: "Solar", dataKey: "solar", color: "#f59e0b" },
    { name: "Geothermal", dataKey: "geothermal", color: "#d946ef" },
  ];

  const handleStartYearChange = (year) => {
    setStartYear(year);
  };

  const handleEndYearChange = (year) => {
    setEndYear(year);
  };

  return (
    <section className="py-16 bg-gray-100" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <LineChart className="h-8 w-8 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-800">Energy Dashboard</h2>
        </div>

        <YearRangeSelector
          startYear={startYear}
          endYear={endYear}
          minYear={minYear}
          maxYear={maxYear}
          onStartYearChange={handleStartYearChange}
          onEndYearChange={handleEndYearChange}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <EnergyBarChart data={productionData} />
          <EnergyPieChart data={shareData} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <CapacityLineChart data={capacityData} series={capacitySeries} />
          <ConsumptionAreaChart data={consumptionData} />
        </div>
      </div>
    </section>
  );
}
