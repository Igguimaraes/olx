import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Página não encontrada Error 404</h1>
      <Link to="/">Volta para Início</Link>
    </div>
  );
};
export default NotFound;
