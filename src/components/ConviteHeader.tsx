
import { Calendar, Clock, MapPin, Users, Utensils, Music } from 'lucide-react';

const ConviteHeader = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 festa-gradient">
      <div className="text-center text-white max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">🎉</h1>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Você está convidado para
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-lg text-yellow-200">
          A fazendinha do José Emídio!
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-yellow-200" />
              <div>
                <h3 className="font-bold text-xl">Data</h3>
                <p className="text-lg">26 de julho de 2025</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-yellow-200" />
              <div>
                <h3 className="font-bold text-xl">Horário</h3>
                <p className="text-lg">A partir das 17h30</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:col-span-2">
              <MapPin className="w-8 h-8 text-yellow-200" />
              <div>
                <h3 className="font-bold text-xl">Local</h3>
                <p className="text-lg">Clube municipal - São João do Sabugi-RN</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 rounded-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Utensils className="w-6 h-6 text-yellow-200" />
              <Music className="w-6 h-6 text-yellow-200" />
              <Users className="w-6 h-6 text-yellow-200" />
            </div>
            <p className="text-xl font-semibold text-center">
              Vai ter muita comida boa, música e alegria!
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold mb-6">
              Sua presença é muito especial pra gente.
            </p>
            <p className="text-lg text-yellow-200">
              👉 Confirme sua presença no formulário abaixo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConviteHeader;
