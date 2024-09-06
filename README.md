# media-UFRN
Calculadora de média

# Descrição do Código HTML para Cálculo da Média das Notas

Este código HTML define uma página web projetada para calcular a média de três notas. A página inclui uma tabela para a entrada das notas, um botão para realizar o cálculo e um campo para exibir a média calculada. Além disso, o código interage com um arquivo JavaScript para realizar o cálculo da média.

## Estrutura do Código

### Cabeçalho (`<head>`)

- **Meta Tags**:
  - `charset="UTF-8"`: Define a codificação de caracteres para UTF-8.
  - `name="viewport"`: Configura a viewport para dispositivos móveis, garantindo que a página se ajuste corretamente em diferentes tamanhos de tela.

- **Título**:
  - Define o título da página como "Média das notas".

- **Folha de Estilo**:
  - Inclui um arquivo CSS externo (`style.css`) para estilizar a página.

### Corpo (`<body>`)

- **Conteúdo Principal (`<main>`)**:
  - **Tabela de Notas**:
    - **Unidade 1, Unidade 2, Unidade 3**: Campos de entrada numérica para o usuário inserir suas três notas. Estes campos possuem limites (`min`, `max`, `step`) para restringir os valores inseridos.
    - **Botão Calcular**: Um botão que aciona a função `calcular()` definida no arquivo JavaScript `script.js`. Este botão realiza o cálculo da média das notas.
    - **Média**: Campo de saída que mostra a média das três notas. Este campo é somente leitura e é preenchido após o cálculo.

### Rodapé (`<footer>`)

- **Informações de Copyright**:
  - Inclui o nome do autor (Felipe Cordeiro), a data (Agosto de 2024) e a versão do código (v 1.0).

### Scripts

- **JavaScript**:
  - O arquivo `script.js` é incluído ao final da página e é responsável por realizar o cálculo da média das notas quando o botão "Calcular" é pressionado.

## Observações

- Os campos de entrada para as notas (`input type="number"`) permitem valores entre 0 e 10, com um incremento de 0.1.
- O campo "Média" é desativado (`disabled`), o que evita que o usuário edite o valor diretamente.
- A página oferece uma interface simples para cálculo da média das notas, ideal para uso acadêmico ou em sistemas de avaliação.

Este código fornece uma funcionalidade básica para calcular a média de três notas e exibir o resultado, podendo ser facilmente ajustado para incluir mais funcionalidades ou validações conforme necessário.
