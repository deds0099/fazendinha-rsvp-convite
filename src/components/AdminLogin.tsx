
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Credenciais simples para demonstração
  const ADMIN_CREDENTIALS = {
    usuario: 'admin',
    senha: 'fazenda2025'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula verificação de login
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (formData.usuario === ADMIN_CREDENTIALS.usuario && 
        formData.senha === ADMIN_CREDENTIALS.senha) {
      toast({
        title: "Login realizado com sucesso! 🎉",
        description: "Bem-vindo ao painel administrativo.",
      });
      onLogin(true);
    } else {
      toast({
        title: "Credenciais inválidas",
        description: "Usuário ou senha incorretos. Tente novamente.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-primary">
            Painel Administrativo
          </CardTitle>
          <CardDescription>
            Acesse o painel para ver as confirmações de presença
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="usuario">Usuário</Label>
              <Input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="Digite seu usuário"
                value={formData.usuario}
                onChange={handleChange}
                className="h-11"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <div className="relative">
                <Input
                  id="senha"
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="h-11 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full h-11 font-semibold festa-gradient"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
            <p><strong>Credenciais de teste:</strong></p>
            <p>Usuário: admin</p>
            <p>Senha: fazenda2025</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
