# Configuração do Google Sheets

## ✅ Planilha já configurada!
Sua planilha já está pronta com as colunas corretas:
- **A:** NOME DO CONVIDADO
- **B:** TOTAL DE PESSOAS

## Passos para ativar a integração:

### 1. Criar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com/)
2. Clique em "Novo projeto"
3. Cole o código do arquivo `GOOGLE_APPS_SCRIPT.js`
4. Salve o projeto com um nome (ex: "Fazendinha RSVP")

### 2. Publicar o Script
1. Clique em "Deploy" → "New deployment"
2. Escolha "Web app"
3. Configure:
   - **Execute as:** Me (sua conta)
   - **Who has access:** Anyone
4. Clique em "Deploy"
5. **Copie a URL** gerada

### 3. Configurar o Código
1. Abra o arquivo `src/lib/googleSheets.ts`
2. Substitua `SEU_GOOGLE_APPS_SCRIPT_URL_AQUI` pela URL do script
3. Salve o arquivo

### 4. Testar
1. Faça commit e push das mudanças
2. Teste o formulário no site
3. Verifique se os dados aparecem na planilha

## Estrutura da Planilha
```
| NOME DO CONVIDADO | TOTAL DE PESSOAS | Data | Hora |
|-------------------|------------------|------|------|
| João Silva        | 3                | 15/01/2025 | 14:30 |
| Maria Santos      | 2                | 15/01/2025 | 14:35 |
```

## Próximos Passos
Após configurar o Google Apps Script, os dados do formulário serão salvos automaticamente na sua planilha!

## Suporte
Se precisar de ajuda, me avise que posso te ajudar com a configuração! 