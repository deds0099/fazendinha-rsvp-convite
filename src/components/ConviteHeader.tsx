
import { Calendar, Clock, MapPin } from 'lucide-react';

const ConviteHeader = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="https://drive.google.com/uc?export=download&id=1vAkEZfheLptSErnU0NIVDM_bV0sTC2xq" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8 animate-bounce">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">🎉</h1>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-white">
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
            <p className="text-lg font-semibold text-center text-gray-800 leading-relaxed">
              Prepare-se pra uma tarde na minha fazendinha, cheio de magia e encanto, entre animais, alegria e muita diversão, sua presença tornará tudo ainda mais especial! Venha comemorar meu primeiro aninho.
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
