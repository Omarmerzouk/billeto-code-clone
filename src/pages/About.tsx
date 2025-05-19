
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="hero-gradient py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                À propos de Billeto
              </h1>
              <p className="max-w-[700px] mx-auto text-lg">
                Votre plateforme de billetterie en ligne pour tous vos événements
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
                <p className="text-lg mb-4">
                  Billeto a été créé avec l'ambition de simplifier l'organisation et la participation à des événements. 
                  Notre plateforme permet aux organisateurs de créer facilement des événements et aux participants de trouver et réserver 
                  leurs places en quelques clics.
                </p>
                <p className="text-lg">
                  Nous croyons que les événements sont essentiels pour créer des communautés et partager des expériences. 
                  C'est pourquoi nous mettons tout en œuvre pour rendre l'accès à ces événements aussi simple que possible.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Chiffres clés</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Événements</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">10 000+</div>
                    <div className="text-sm text-muted-foreground">Utilisateurs</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Villes</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Notre équipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Sophie Martin', role: 'Fondatrice & CEO' },
                { name: 'Thomas Dubois', role: 'CTO' },
                { name: 'Julie Lambert', role: 'Directrice Marketing' },
                { name: 'Alexandre Petit', role: 'Lead Developer' },
                { name: 'Marie Durand', role: 'UX Designer' },
                { name: 'Lucas Bernard', role: 'Support Client' },
              ].map((member, index) => (
                <div key={index} className="bg-background p-6 rounded-lg text-center shadow-sm">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Nous contacter</h2>
            <div className="max-w-md mx-auto bg-background p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border rounded-md"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
