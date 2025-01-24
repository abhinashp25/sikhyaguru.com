import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-600 mt-2">Sorry, the page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-gradient-to-br from-blue-700  via-blue-950 to-blue-700 text-white rounded hover:bg-orange-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;