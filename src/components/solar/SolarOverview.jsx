import React from 'react';
import { Sun, Leaf, DollarSign } from 'lucide-react';

export function SolarOverview() {
  return (
    <section className="py-16 bg-trasparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 hover:text-purple-400 mb-8 text-center">
              Energía solar: impulsando un futuro sostenible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <Sun className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl hover:text-purple-400 font-semibold mb-3">¿Cómo funciona?</h3>
            <p className="text-gray-600">
                Los paneles solares convierten la luz solar en electricidad a través de celdas fotovoltaicas,
                proporcionando energía limpia y renovable directamente del sol.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
            <Leaf className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl hover:text-purple-400 font-semibold mb-3">Impacto ambiental</h3>
            <p className="text-gray-600">
                La energía solar reduce las emisiones de carbono, requiere un uso mínimo de agua 
                y ayuda a combatir el cambio climático con cero contaminación durante su funcionamiento.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
            <DollarSign className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl hover:text-purple-400 font-semibold mb-3">Beneficios Económicos</h3>
            <p className="text-gray-600">
                Invertir en energía solar reduce las facturas de electricidad, proporciona independencia
               energética y, a menudo, viene acompañado de incentivos y descuentos fiscales.
            </p>
          </div>
        </div>

        <div className="bg-violet-100 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 hover:text-purple-400">Estadísticas clave</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-purple-500 hover:text-blue-300">1,000+ GW</p>
              <p className="text-gray-600">Capacidad solar global</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-purple-500 hover:text-blue-300">3%</p>
              <p className="text-gray-600">Participación global de la electricidad</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-purple-500 hover:text-blue-300">70%</p>
              <p className="text-gray-600">Reducción de costos desde 2010</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-purple-500 hover:text-blue-300">25+ Años</p>
              <p className="text-gray-600">Vida útil promedio del panel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
