
import { Calendar, Clock, MapPin, Users, Utensils, Music } from 'lucide-react';

const ConviteHeader = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 festa-gradient">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">🎉</h1>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Você está convidado para
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 drop-shadow-lg text-yellow-200">
          A fazendinha do José Emídio!
        </h2>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="font-bold text-xl text-gray-800">Data</h3>
                <p className="text-lg text-gray-600">26 de julho de 2025</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="font-bold text-xl text-gray-800">Horário</h3>
                <p className="text-lg text-gray-600">A partir das 17h30</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:col-span-2">
              <MapPin className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="font-bold text-xl text-gray-800">Local</h3>
                <p className="text-lg text-gray-600">Clube municipal - São João do Sabugi-RN</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Utensils className="w-6 h-6 text-orange-500" />
              <Music className="w-6 h-6 text-orange-500" />
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-xl font-semibold text-center text-gray-800">
              Vai ter muita comida boa, música e alegria!
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold mb-6 text-gray-800">
              Sua presença é muito especial pra gente.
            </p>
            <p className="text-lg text-orange-600">
              👉 Confirme sua presença no formulário abaixo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConviteHeader;
