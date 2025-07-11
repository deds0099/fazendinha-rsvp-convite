// Configuração para integração com Google Sheets
// Você precisará configurar as credenciais do Google

export const GOOGLE_SHEETS_CONFIG = {
  // ID da sua planilha
  SPREADSHEET_ID: '1u93KeYVdXinJhnWJNHuLKoUvpfkydkKHYwrosJmq6Dg',
  
  // Nome da aba onde salvar os dados (Página1)
  SHEET_NAME: 'Página1',
  
  // Colunas onde salvar os dados
  COLUMNS: {
    NOME: 'A',
    QUANTIDADE_PESSOAS: 'B',
    DATA_ENVIO: 'C',
    HORA_ENVIO: 'D'
  }
};

// Função para salvar dados na planilha usando Google Apps Script
export const saveToGoogleSheets = async (data: {
  nome: string;
  quantidadePessoas: string;
}) => {
  try {
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const timeStr = now.toLocaleTimeString('pt-BR');
    
    // URL do Google Apps Script
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwA50MzO69Zd3-zBLdmdqPryc7cEz8xRfoyuh-JYzHNawTth-6S_q4HlZ3KVXWt_ov4jA/exec';
    
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('quantidadePessoas', data.quantidadePessoas);
    formData.append('dataEnvio', dateStr);
    formData.append('horaEnvio', timeStr);
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Necessário para CORS
    });
    
    console.log('Dados enviados:', {
      nome: data.nome,
      quantidadePessoas: data.quantidadePessoas,
      dataEnvio: dateStr,
      horaEnvio: timeStr
    });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    return { success: false, error };
  }
}; 