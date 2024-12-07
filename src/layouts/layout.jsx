import { Link } from "react-router";
import { Toaster } from "sonner";
import { useAuth } from "@/hooks";

export const Layout = ({ children }) => {
  const { token, Logout } = useAuth();

  return (
    <div className="max-w-5xl mx-auto pt-4 pb-12 space-y-8 px-4 xl:px-0">
      <nav className="flex justify-center">
        <ul
          className="flex bg-neutral-800 font-semibold
            text-md py-2 rounded-full text-sm gap-4 px-6 xl:px-16 xl:gap-8 xl:text-md"
        >
          <li className="hover:text-neutral-400 transition-colors">
            <Link to="/">Inico</Link>
          </li>
          <li className="hover:text-neutral-400 transition-colors">
            <Link to="/home">Grupos</Link>
          </li>
          {token ? (
            <>
              <li className="hover:text-neutral-400 transition-colors">
                <Link to="/create">Crea un grupo</Link>
              </li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                <span onClick={Logout}>Salir</span>
              </li>
            </>
          ) : (
            <li className="hover:text-neutral-400 transition-colors">
              <Link to="/auth">Unéte</Link>
            </li>
          )}
        </ul>
      </nav>
      <header className="space-y-2">
        <h1 className="font-bold text-xl xl:text-2xl">Camina Seguro 🏃‍➡️</h1>
        <p className="text-neutral-500 w-full text-md xl:text-lg xl:w-1/2">
          Encuentra un grupo de estudiantes, acompañados por varios padres de
          familia, que van a la misma escuela que tu.
        </p>
      </header>
      {children}
      <Toaster theme="dark" />
    </div>
  );
};
