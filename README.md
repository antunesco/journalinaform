# Journal in a Form
Código que uso para minhas próprias entradas de diário digitais

🏗️🔨 Em construção

# Introdução

Modelo que utilizo para abrir apenas uma aba e preencher o meu diário sem precisar chegar ao fim do documento ou fazer qualquer coisa que não seja digitar.
Se você está aqui, no GitHub, muito provavelmente sabe o que está fazendo em termos de programação.
Se você é absolutamente leigo em programação e quer fazer esse Journal/Diário funcionar, entre em contato comigo (comentando no Multitude Mental ou mandando uma mensagem no Instagram ou Twitter).

---
# Preparando tudo

1. Documento Google Docs;
Crie um Documento Google Docs (pode usar o https://docs.new) e dê o nome do ano a ele (no caso atual, vou chamá-lo de "2026" - é para datar o texto mesmo).

2. Forms;
Crie um Formulário Google (também pode usar o https://forms.new) e dê o nome que quer que apareça na aba que vai ficar nos seus favoritos e será aberta no seu navegador.
Recomendo colocar um campo de data e um campo de texto longo. No meu, fiz uma página com mais itens (Gratidão, Jogos que joguei no dia, Grande acontecimento, etc), mas é totalmente opcional.

3. Planilha do Forms;
O Forms, por si, vai gerar uma planilha com as respostas do formulário. É nessa planilha que você vai adicionar o Google Apps Script (Menu Extensões > Apps Script). 

4. Google Apps Script
No arquivo aberto você pode colar o código que está nesse repositório e fazer as configurações descritas pelos comentários.
As configurações se resumem a alterar a ID do documento (associando ao Google Docs que você criou)

5. Acionadores / Triggers
Acionadores são o elemento somático para que a magia aconteça. É tipo girar e sacodir a varinha, sacou?
É só entrar no menu de Acionadores no Google Apps Script (ícone de relógio/alarme) e clicar no botão azul "Adicionar acionador".
Na janela que abrir selecione:
- A função: no caso do código vai ser `adicionarEntradaAoDiario`
- Origem do evento: "Da planilha"
- Tipo de evento: "Ao enviar o formulário"

Depois disso é só preencher o formulário uma vez para garantir que deu tudo certo. E não deixe de preencher esse documento o máximo de vezes que conseguir.
Lembre-se, quanto mais entradas, mais material bruto pode ser analisado.

---
