# Dashboard Blue

Esta aplicação faz parte do Desafio Técnico para a Healtech Blue. Os requisitos consistem:

- Implementar o design fornecido pelo figma fielmente.
- Desenvolver o design e codificar a versão para telas menores. 

## :hammer: Implementação complementar

- `Modal`: Os cards de atualizações possuem um modal responsivo. O modal pode ser fechado clicando em qualquer lugar da tela ou apertando a tecla ESC do teclado.

- `Carousel`: Todos os cards se adaptam no formato carousel para telas menores.

- `Novas páginas: Em construção e Not Found`: As rotas /planos e /vendas podem ser acessadas através dos links de navegação e irão renderizar páginas que seguem inteiramente o padrão original, incluindo estrutura e responsividade. Além destas, qualquer outra rota acessada irá renderizar uma página de "rota não encontrada".

- `Link ativo`: Os links da barra de navegação se destacam de acordo com a rota atual.

- `Efeitos`: Alguns componentes receberam estilos de efeito para tornar a página mais interaiva.

- `Pronto para receber da API`: A codificação foi feita pensando em uma futura integração a API's, recebendo os dados de arquivos JSON. Exemplos são a seção de atualizações, últimas propostas e os cards no topo da página.

- `Código limpo, reaproveitamento de código e fácil manutenção`:  Os diretórios são organizados por rota, dividindo componentes de uso específico de componentes para reuso em outras rotas. Através do styled components, os componentes de estilo foram feitos pensando no reaproveitamento. Pastas, arquivos, métodos e variáveis são nomeados de forma clara e objetiva. A estilização foi feita seguindo um tema, predefinindo cores, tamanhos de fonte, camada de elementos, sombras e outros, facilitando a manutenção.

## :white_check_mark: Frameworks e biblitotecas utilizadas

- Javascript
- React js
- Vite
- Styled Components
- React Icons
- Swiper
- EsLint
  
## :open_file_folder: Acesso ao projeto

Você pode acessar o código fonte do projeto original ou baixá-lo

## :checkered_flag: Abrir e rodar o projeto

- Baixe os arquivos .zip do projeto no botão "CODE"
- Instale as dependências do client com `yarn`
- Rode a aplicação com `yarn dev`

### :globe_with_meridians: URL do projeto em produção

https://blue-challenge.vercel.app/
