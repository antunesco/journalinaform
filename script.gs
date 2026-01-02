function adicionarEntradaAoDiario() {
  // --- CONFIGURAÇÕES ---
  // 1. Substitua 'ID_DO_SEU_DOCUMENTO_DO_DIARIO' pelo ID do seu documento do Google Docs.
  //    O ID é a parte da URL do seu documento que vem depois de /d/ e antes de /edit.
  //    Ex: https://docs.google.com/document/d/1ABCDEF12345/edit -> ID é 1ABCDEF12345
  var idDocumentoDiario = 'ID_DO_SEU_DOCUMENTO_DO_DIARIO';

  // 2. Substitua 'NOME_DA_SUA_ABA_DE_RESPOSTAS' pelo nome da aba na sua planilha onde as respostas do formulário estão.
  //    Geralmente é 'Respostas do formulário 1'.
  var nomeAbaRespostas = 'Respostas ao formulário 1';
  // --- FIM DAS CONFIGURAÇÕES ---

  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var abaRespostas = planilha.getSheetByName(nomeAbaRespostas);

  // Obtém a última linha de dados na aba de respostas
  var ultimaLinha = abaRespostas.getLastRow();
  var dadosEntrada = abaRespostas.getRange(ultimaLinha, 1, 1, abaRespostas.getLastColumn()).getValues()[0];

  

  // Mapeia os dados da linha para variáveis legíveis
  // Ajuste os índices [0], [1], [2] etc., de acordo com a ordem das suas colunas na planilha.
  // A coluna 0 é o carimbo de data/hora (timestamp), a coluna 1 é a primeira pergunta do formulário, e assim por diante.
  var timestamp = dadosEntrada[0]; // Carimbo de data/hora da submissão do formulário
  var dataDiario = dadosEntrada[1]; // Sua pergunta "Data" (índice 1 se for a 2ª coluna)
  var textoDiario = dadosEntrada[2]; // Sua pergunta "O que quero escrever?" (índice 2 se for a 3ª coluna)
  
  // Adicione mais variáveis aqui se tiver mais perguntas no formulário, ex:
  var gratidao = dadosEntrada[3];
  var evento = dadosEntrada[4];


  var documentoDiario = DocumentApp.openById(idDocumentoDiario);
  var corpoDocumento = documentoDiario.getBody();

  // Variáveis para capturar e tratar o nome do mês da última entrada e da entrada anterior a ela
  try {
    var ultimaEntrada = abaRespostas.getRange(ultimaLinha - 1, 1, 1, abaRespostas.getLastColumn()).getValues()[0]
    var mesUltimaEntrada = ultimaEntrada[1].toLocaleString('pt-BR', {month: 'long'})
  } catch (err) {
    console.log('É sua primeira entrada, não é? Tudo bem.')
  }
  
  var mesEntrada = dadosEntrada[1].toLocaleString('pt-BR', {month: 'long'})

  // Testa se a última entrada foi no mesmo mês da entrada atual
  // Se não foi, insere o nome do mês no
  if (mesUltimaEntrada != mesEntrada) {
    var nomeMes = corpoDocumento.appendParagraph(mesEntrada.charAt(0).toUpperCase() + mesEntrada.slice(1)).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  }

  // Formata a data para o diário
  var dataFormatada = new Date(dataDiario).toLocaleDateString('pt-BR');

  // Adiciona um título para a entrada do diário
  var titulo = corpoDocumento.appendParagraph(dataFormatada).setHeading(DocumentApp.ParagraphHeading.HEADING3);
  //titulo.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  

  // Adiciona o texto principal do diário
  corpoDocumento.appendParagraph(textoDiario);
  

  // Se você tiver mais campos, pode adicioná-los aqui. Ex:
  // if (humor) {
  //   corpoDocumento.appendParagraph('Humor: ' + humor).setBold(true);
  // }

  if (gratidao || evento) {
    corpoDocumento.appendParagraph('');
  }

  if (gratidao) {
    var gratiBloco = corpoDocumento.appendParagraph('Gratidão: ').setBold(true);
    gratiBloco.appendText(gratidao).setBold(false);
  }

  if (evento) {
    var eventoBloco = corpoDocumento.appendParagraph('Grande acontecimento: ').setBold(true);
    eventoBloco.appendText(evento).setBold(false);
  }

  // Salva e fecha o documento (não é estritamente necessário, mas boa prática)
  documentoDiario.saveAndClose();
}
