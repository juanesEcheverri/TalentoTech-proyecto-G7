import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-purple-950 shadow-lg">
      <div className="container mx-auto mt-0 px-4 py-6">
        <div className="flex items-center justify-between">
          
          
          <div className="flex items-center">
            <img 
              src="public\logo.svg" // Cambia esta ruta por la de tu logo
              alt="Logo" 
              className="h-12 w-12 mr-3" // Ajusta el tamaño del logo
            />
            <h1 className="text-2xl text-white hover:text-blue-200 font-bold">
              Transición Energética Justa
            </h1>
          </div>

          {/* Navegación */}
          <nav>
            <ul className="flex space-x-6 text-xl text-slate-50 font-bold">
              
              <li className="hover:text-blue-200">
                <Link to="/overview">Descripción general</Link>
              </li>
              <li className="hover:text-blue-100">
                <Link to="/table">Tabla</Link>
              </li>
              <li className="hover:text-[#43e6bd]">
                <Link to="/calculator">Calculadora</Link>
              </li>
              <li className="hover:text-cyan-600">
                <Link to="/dashboard">Panel</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
