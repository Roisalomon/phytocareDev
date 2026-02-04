import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

interface NotFoundPageProps {
  customMessage?: string;
  showHomeButton?: boolean;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  customMessage,
  showHomeButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-poppins font-bold text-sky-blue mb-4">404</h1>
        <p className="text-2xl text-black mb-6">
          {customMessage || 'Oops! Page not found.'}
        </p>
        <p className="text-sm text-purple-accent mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        {showHomeButton && (
          <button
            onClick={() => navigate('/')}
            className="bg-sky-blue text-white px-6 py-3 rounded-lg hover:bg-purple-accent transition-colors"
          >
            <Home className="inline mr-2" size={18} />
            Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;