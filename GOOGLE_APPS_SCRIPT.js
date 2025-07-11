// Google Apps Script para salvar dados na planilha
// Copie este código e cole no Google Apps Script

function doPost(e) {
  try {
    // Obter os dados enviados
    const nome = e.parameter.nome;
    const quantidadePessoas = e.parameter.quantidadePessoas;
    const dataEnvio = e.parameter.dataEnvio;
    const horaEnvio = e.parameter.horaEnvio;
    
    // Abrir a planilha
    const spreadsheetId = '1u93KeYVdXinJhnWJNHuLKoUvpfkydkKHYwrosJmq6Dg';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Página1');
    
    // Adicionar nova linha com os dados
    sheet.appendRow([nome, quantidadePessoas, dataEnvio, horaEnvio]);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para testar se o script está funcionando
function doGet() {
  return ContentService
    .createTextOutput('Script funcionando!')
    .setMimeType(ContentService.MimeType.TEXT);
} 