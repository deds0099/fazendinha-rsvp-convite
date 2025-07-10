
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, Users, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormularioRSVP = () => {
  const [formData, setFormData] = useState({
    nome: '',
    quantidadePessoas: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, digite seu nome completo.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.quantidadePessoas || parseInt(formData.quantidadePessoas) < 1) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe quantas pessoas vão participar.",
        variant: "destructive"
      });
      return;
    }

    setEnviando(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Confirmação de presença:', formData);
    
    setEnviado(true);
    setEnviando(false);
    
    toast({
      title: "Presença confirmada! 🎉",
      description: `Obrigado, ${formData.nome}! Esperamos você na fazendinha do José Emídio.`,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (enviado) {
    return (
      <section className="py-16 px-4 fazenda-pattern">
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-green-500 shadow-2xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Presença Confirmada!
              </h3>
              <p className="text-muted-foreground mb-4">
                Obrigado por confirmar! Estamos ansiosos para te ver na fazendinha.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Nome:</strong> {formData.nome}
                </p>
                <p className="text-sm text-green-700">
                  <strong>Pessoas:</strong> {formData.quantidadePessoas}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 fazenda-pattern">
      <div className="max-w-md mx-auto">
        <Card className="shadow-2xl border-2 border-primary/20">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <UserCheck className="w-8 h-8 text-primary" />
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Confirme sua presença aqui:
            </CardTitle>
            <CardDescription className="text-base">
              Preencha os dados abaixo para confirmar sua participação na festa
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-base font-semibold">
                  Nome completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantidadePessoas" className="text-base font-semibold">
                  Quantas pessoas vão com você (incluindo você)?
                </Label>
                <Input
                  id="quantidadePessoas"
                  name="quantidadePessoas"
                  type="number"
                  min="1"
                  placeholder="Ex: 3"
                  value={formData.quantidadePessoas}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full h-12 text-base font-bold festa-gradient hover:opacity-90 transition-opacity"
                disabled={enviando}
              >
                {enviando ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Confirmando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Confirmar Presença
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormularioRSVP;
