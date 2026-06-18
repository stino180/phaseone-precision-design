import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page not found — Inpoint Studio</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to the Inpoint Studio home page." />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="Page not found — Inpoint Studio" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta name="twitter:title" content="Page not found — Inpoint Studio" />
        <meta name="twitter:description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
