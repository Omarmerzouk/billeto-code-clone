
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler une demande de réinitialisation (dans une vraie application, ceci serait remplacé par une vraie API)
    setTimeout(() => {
      if (email) {
        toast.success("Instructions de réinitialisation envoyées à votre adresse email !");
        setSubmitted(true);
      } else {
        toast.error("Veuillez saisir votre adresse email.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Réinitialiser votre mot de passe</CardTitle>
            <CardDescription>
              {!submitted 
                ? "Entrez votre email pour recevoir les instructions de réinitialisation" 
                : "Consultez votre boîte mail pour réinitialiser votre mot de passe"}
            </CardDescription>
          </CardHeader>
          {!submitted ? (
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="exemple@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
                </Button>
              </form>
            </CardContent>
          ) : (
            <CardContent className="text-center py-6">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-7.5" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <p className="mb-4">
                Nous avons envoyé un email à <strong>{email}</strong> avec des instructions pour réinitialiser votre mot de passe.
              </p>
              <p className="text-sm text-muted-foreground">
                N'oubliez pas de vérifier votre dossier spam si vous ne trouvez pas l'email dans votre boîte de réception.
              </p>
            </CardContent>
          )}
          <CardFooter>
            <div className="text-sm text-center w-full">
              <Link to="/login" className="text-primary hover:underline">
                Retour à la page de connexion
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPassword;
