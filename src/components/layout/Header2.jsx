import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-purple-950 shadow-lg">
      <div className="container  mx-auto mt-0 px-4 py-6">
        <div className="flex items-center mx-auto justify-between ">
          {/* <Link to="/" className="flex items-center space-x-3 "> */}
          {/* <!-- Icono o Logo --> */}
          


          {/* Título del sitio */}
          {/* <h1 className="text-2xl font-bold"> EcoEnergy Insights</h1> */}
          {/* </Link> */}
          <h1 className="text-2xl text-white  hover:text-blue-200 font-bold">
            {" "}
            Transición Energética Justa
            
          </h1>
          {/* Botón de inicio de sesión */}
          {/* ``          <Link to="/login" className="text-white hover:text-gray-300">
            Iniciar Sesión
          </Link>`` */}

          {/* Navegación */}
          <nav >
            <ul className="flex space-x-6 text-xl text-slate-50 font-bold ">
              <li className="hover:text-blue-200 ">
                {/* Opcion 1 : Overview */}
                <Link
                 to="/overview"
                >
                Descripción general
                </Link>
                {/* Overview */}
              </li>

              {/* PAsamos los colores en formato hex */}
              <li className="hover:text-[#43e6bd]">
                {/* Opcion 2 : Calculator */}
                <Link
                 to="/calculator"
                >
                Calculadora
                </Link>
                {/* Calculator */}
              </li>

              <li className="hover:text-cyan-600 ">
                {/* Opcion 3 : Dashboard */}
                <Link
                 to="/dashboard"
                >
                 Panel
                </Link>
                {/* Dashboard */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
