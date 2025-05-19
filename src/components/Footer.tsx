
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Billeto</h3>
            <p className="text-sm text-muted-foreground">
              La plateforme de billetterie en ligne pour tous vos événements
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary">Accueil</a></li>
              <li><a href="/events" className="hover:text-primary">Événements</a></li>
              <li><a href="/about" className="hover:text-primary">À propos</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Aide</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              <li><a href="/terms" className="hover:text-primary">Conditions générales</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Inscrivez-vous pour recevoir les dernières informations sur les événements
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm">
                Envoyer
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Billeto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
