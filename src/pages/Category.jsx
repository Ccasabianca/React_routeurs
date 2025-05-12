import { useParams, useNavigate } from "react-router";

const Category = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Catégorie {id}</h1>
      <button className="btn btn-primary my-2" onClick={handleGoHome}>
        Retour à la page d'accueil
      </button>
    </div>
  );
};

export default Category;
