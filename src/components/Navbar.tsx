
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-md p-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5 text-primary-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
                <path d="M6 15h1" />
                <path d="M11 15h1" />
                <path d="M16 15h1" />
              </svg>
            </div>
            <span className="hidden font-bold text-lg sm:inline-block">Billeto</span>
          </a>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <a href="/" className="text-sm font-medium hover:text-primary">Accueil</a>
            <a href="/events" className="text-sm font-medium hover:text-primary">Événements</a>
            <a href="/about" className="text-sm font-medium hover:text-primary">À propos</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
              Connexion
            </Button>
            <Button size="sm" onClick={() => navigate("/register")}>
              S'inscrire
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
