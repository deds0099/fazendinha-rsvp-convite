
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LogOut, Users, Calendar, Clock, Download } from 'lucide-react';

interface Confirmacao {
  id: number;
  nome: string;
  quantidadePessoas: number;
  dataConfirmacao: string;
  horarioConfirmacao: string;
}

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel = ({ onLogout }: AdminPanelProps) => {
  const [confirmacoes, setConfirmacoes] = useState<Confirmacao[]>([]);

  useEffect(() => {
    // Simula dados de confirmações (em um app real, viria de uma API)
    const dadosSimulados: Confirmacao[] = [
      {
        id: 1,
        nome: "Maria Silva Santos",
        quantidadePessoas: 3,
        dataConfirmacao: "2025-07-01",
        horarioConfirmacao: "14:30"
      },
      {
        id: 2,
        nome: "João Pedro Oliveira",
        quantidadePessoas: 2,
        dataConfirmacao: "2025-07-02",
        horarioConfirmacao: "09:15"
      },
      {
        id: 3,
        nome: "Ana Carolina Ferreira",
        quantidadePessoas: 4,
        dataConfirmacao: "2025-07-02",
        horarioConfirmacao: "16:45"
      },
      {
        id: 4,
        nome: "Carlos Eduardo Lima",
        quantidadePessoas: 1,
        dataConfirmacao: "2025-07-03",
        horarioConfirmacao: "11:20"
      }
    ];
    
    setConfirmacoes(dadosSimulados);
  }, []);

  const totalPessoas = confirmacoes.reduce((total, conf) => total + conf.quantidadePessoas, 0);

  const exportarDados = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Nome,Quantidade de Pessoas,Data de Confirmação,Horário\n" +
      confirmacoes.map(conf => 
        `"${conf.nome}",${conf.quantidadePessoas},"${conf.dataConfirmacao}","${conf.horarioConfirmacao}"`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "confirmacoes_fazendinha.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Painel Administrativo</h1>
            <p className="text-muted-foreground mt-1">Fazendinha do José Emídio - Confirmações de Presença</p>
          </div>
          <Button onClick={onLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Confirmações</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{confirmacoes.length}</div>
              <p className="text-xs text-muted-foreground">famílias confirmadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Pessoas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPessoas}</div>
              <p className="text-xs text-muted-foreground">pessoas confirmadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data do Evento</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">26/07</div>
              <p className="text-xs text-muted-foreground">a partir das 17h30</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Lista de Confirmações</CardTitle>
                <CardDescription>
                  Todas as confirmações de presença recebidas
                </CardDescription>
              </div>
              <Button onClick={exportarDados} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exportar CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Quantidade de Pessoas</TableHead>
                  <TableHead>Data da Confirmação</TableHead>
                  <TableHead>Horário</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {confirmacoes.map((confirmacao) => (
                  <TableRow key={confirmacao.id}>
                    <TableCell className="font-medium">{confirmacao.nome}</TableCell>
                    <TableCell>{confirmacao.quantidadePessoas}</TableCell>
                    <TableCell>{new Date(confirmacao.dataConfirmacao).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>{confirmacao.horarioConfirmacao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
