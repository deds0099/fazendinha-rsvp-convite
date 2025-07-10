
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
          <Heart className="w-6 h-6 text-red-500" />
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        
        <p className="text-lg font-medium text-muted-foreground mb-2">
          Feito com muito carinho para a fazendinha do José Emídio
        </p>
        
        <div className="text-4xl mb-4">
          🐄 🌾 🎪 🌻 🎵
        </div>
        
        <p className="text-sm text-muted-foreground">
          Nos vemos em 26 de julho de 2025 - Será uma festa inesquecível!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
