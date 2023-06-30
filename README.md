<h1 align="center">Atividade Front-end</h1>

Teste executado como desafio de vaga para trabalhar na empresa Leadster a plataforma líder em  Marketing  Conversacional no Brasil.

🔗: <a href="https://docs.google.com/presentation/d/1nq7d1rpntpfQGOabVO0R7TZzf6_rfFTd/edit?pli=1#slide=id.g1e43248c0b5_0_15">Descrição do desafio</a>

🔗: <a href="https://test-leadster-nu.vercel.app">test-leadster-nu.vercel.app</a>

## 💻Tecnologias  usadas:

- NextJs
- Tailwind CSS
- Typescript
- Node.js
- Vercel

## 🧑‍💻 Experiência

Como desenvolvedor, minha experiência em realizar o teste foi desafiadora e gratificante. Ao longo do processo, tomei várias decisões importantes para garantir que o código fosse organizado, legível e fácil de manter. Uma das principais decisões importantes que tomei ao longo do desenvolvimento do projeto foi decidi usar a biblioteca react-query para gerenciar o estado do servidor e facilitar a busca de dados da API. React-query oferece recursos avançados, como cache, invalidação de dados e refetching automático, que ajudam a garantir que os dados exibidos na interface do usuário estejam sempre atualizados. Outra decisão importante que tomei foi usar zustand para gerenciar o estado global do aplicativo. Escolhi zustand por sua simplicidade e flexibilidade, permitindo criar stores personalizadas para armazenar e gerenciar o estado global de maneira eficiente. Também decidi usar componentes funcionais e hooks em vez de componentes de classe ao longo do projeto. Isso permitiu escrever código mais conciso e legível, além de aproveitar os recursos avançados dos hooks para encapsular a lógica de estado e efeitos colaterais. Para organizar o código, criei uma estrutura de diretórios clara e intuitiva, com diretórios separados para componentes, hooks, modelos, provedores, serviços e utilitários. Dentro de cada diretório, organizei os arquivos de maneira lógica e usei nomes descritivos para facilitar a localização do código. Ao escrever o código, me esforcei para seguir as melhores práticas e padrões de codificação. No geral, minha experiência em realizar o teste foi muito positiva. Aprendi muito ao longo do processo e estou satisfeito com o resultado final.

## 🛠️Instalação:

Para instalar as dependências, execute um dos seguinte comandos:

```
npm install or yarn install or pnpm install
```

## 🧑‍💻Uso:

Para iniciar o projeto, execute um dos seguintes comandos:

```
npm start or yarn start or pnpm dev
```

Isso iniciará o projeto em`http://localhost:3000`.

## 🗃️Estrutura dos arquivos:

```
test-leadster/
├── .next/
│    └── ...
├── .vscode/
│	└── ...
├── .public/
│	└── ...]
└── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── Buttons/
│   │   │   ├── DownloadButtons.tsx
│   │   │   ├── LinkButton.tsx
│   │   ├── sections/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── LeadsGeneration.tsx
│   │   ├── webinar/
│   │   │   ├── WebinarsCard.tsx
│   │   │   ├── WebinarsList.tsx
│   │   │   ├── WebinarsModal.tsx
│   │   ├── Filter.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── Pagination.ts
│   │   ├── SelectOrder.tsx
│   │   ├── Video.tsx
│   ├── hooks/
│   │   ├── useModal.ts
│   │   ├── useWebinars.ts
│   ├── models/
│   │   ├── webinars.ts
│   ├── providers/
│   │   ├── reactQueryProvider.tsx
│   ├── service/
│   │   ├── mainApi/
│   │   │   ├── config/
│   │   │   │   ├── index.ts
│   │   │   ├── webinars.ts
│   ├── styles/
│   │   ├── global.css
│   ├── utils/
│   │   ├── webinarsUtils.ts
│	└──
├──.env
├──.eslintrc.json
├──.gitignore
├──db.json
├──next-env.d.ts
├──next.config.js
├──package.json
├──postcss.config.js
├──README.md
├──tailwind.config.js
├──tsconfig.json
```

## 🔑Descrição de alguns diretórios importantes:

- `.next/`: Onde contém todos os recursos compilados e otimizados, como as páginas HTML, pacotes JavaScript, imagens e outros arquivos estáticos necessários para executar o aplicativo no modo de produção.
- `src/`: Diretório usado para armazenar o código-fonte. Contém todos os arquivos Typescript, componentes React e outros recursos usados para criar a interface do usuário e implementar a lógica de negócios do aplicativo.
- `src/app/`: Novo diretório introduzido para fornecer um local centralizado para configurar e inicializar o aplicativo. Responsável por configurar o layout, manipular a renderização do lado do cliente e fornecer outras opções de personalização.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/models`: Contém arquivos estáticos como imagens, fontes etc.
- `src/styles`: Arquivos CSS e relacionados ao estilo do projeto.
- `src/utils`: Funções utilitárias usadas em todo o aplicativo.

## 🧰Detalhes e funções de alguns arquivos:

- `src/componentes/webinar/WebinarsCard.tsx`: Componente que  renderiza o card para os webinars. O componente recebe os dados vindos da props e os usa para renderizar o contéudo do card. 

- `src/components/webinar/WebinarsLis.tsx`: O componente WebinarsList mantém o estado para a categoria atual, a ordem atual e a página atual. Ele usa os hooks useWebinars e useAllWebinars para buscar dados de webinars. O componente renderiza uma lista de webinars usando o componente WebinarsCard, além de componentes para filtrar, ordenar e paginar os resultados.

- `src/components/webinar/WebinarsModal.tsx`: O componente WebinarsModal recebe propriedades para controlar sua visibilidade e uma função para fechar o modal. Ele usa o hook useWebinarsId para buscar dados de um webinar específico com base no ID armazenado pelo hook useModal. O componente renderiza um modal com informações sobre o webinar, incluindo um vídeo e botões para download.

- `src/components/Filter.tsx`: O componente Filter é um componente de apresentação que permite ao usuário filtrar webinars por categoria. Ele recebe uma lista de categorias disponíveis, a categoria atualmente selecionada e uma função para lidar com cliques nos botões de filtro. O componente mapeia a lista de categorias para criar um botão para cada categoria, usando classes CSS condicionais para destacar o botão da categoria atualmente selecionada. Quando um botão é clicado, a função onClick é chamada com o nome da categoria como argumento, permitindo que o componente pai atualize o estado e refiltre os resultados.

- `src/components/Layout.tsx`: O componente Layout recebe como propriedade os filhos que serão renderizados dentro do layout. Ele usa o hook useModal para controlar a visibilidade do modal de webinars. O componente renderiza um layout com cabeçalho, rodapé e um modal para webinars, além dos filhos passados como propriedade.

- `src/components/Pagination.tsx`: Ele recebe propriedades para a página atual, o número total de páginas e uma função para lidar com mudanças de página. O componente cria um array de números de página e renderiza um botão para cada página, com o botão da página atual destacado. Quando um botão é clicado, a função onPageChange é chamada com o número da página como argumento. 

- `src/components/SelectOrder.tsx`: Esse componente recebe propriedades para as opções disponíveis, uma função para lidar com mudanças de ordem e um rótulo opcional. O componente mantém o estado para controlar se o menu de opções está aberto ou fechado. Ele renderiza um elemento select com as opções disponíveis e um ícone para indicar se o menu está aberto ou fechado. Quando uma opção é selecionada, a função onOrderChange é chamada com o valor da opção como argumento.

- `src/components/Video.tsx`: O componente Video recebe propriedades para a URL do vídeo, uma miniatura opcional, largura e altura. Ele mantém o estado para controlar se o vídeo está sendo reproduzido ou não. O componente renderiza um player de vídeo usando o componente ReactPlayer e, se o vídeo não estiver sendo reproduzido, também renderiza uma miniatura e um botão de reprodução. Quando o botão de reprodução é clicado, o estado é atualizado para iniciar a reprodução do vídeo.

- `src/hooks/useModal.ts`: hook personalizado chamado useModal usando a biblioteca zustand. Ele exporta uma interface ModalStoreInterface que define o formato do estado armazenado pelo hook. O hook useModal cria um estado com propriedades para o ID do webinar, se o modal está aberto ou fechado e funções para abrir e fechar o modal. As funções openModal e closeModal atualizam o estado para abrir e fechar o modal, respectivamente, e a função openModal também armazena o ID do webinar.

- `src/hooks/useWebinars.ts`: Este trecho de código define três hooks personalizados: useWebinars, useAllWebinars e useWebinarsId. Eles usam a biblioteca react-query para buscar dados de webinars de uma API. O hook useWebinars recebe como argumentos a categoria e a ordem desejadas e mantém o estado para a página atual. Ele usa a função getWebinars para buscar dados de webinars com base nos argumentos e na página atual. O hook useAllWebinars usa a função getAllWebinars para buscar todos os webinars disponíveis. O hook useWebinarsId recebe como argumento o ID do webinar desejado e usa a função getWebinarsId para buscar dados de um webinar específico.

- `src/providers/ReactQueryProvider`: Ele importa o componente QueryClientProvider e a classe QueryClient da biblioteca react-query. O componente ReactQueryProvider recebe como propriedade os filhos que serão renderizados dentro do provedor. Ele cria uma instância do QueryClient e a passa para o componente QueryClientProvider, que é usado para fornecer o cliente de consulta para os componentes filhos.

- `src/service/mainApi/config`: Instância do cliente HTTP axios com uma URL base definida a partir de uma variável de ambiente. A instância do axios é exportada como o valor padrão do módulo, permitindo que outros módulos importem e usem a instância para fazer requisições HTTP para a API com a URL base pré-configurada.

- `src/service/mainApi/webinars.ts`: Este trecho de código define três funções para buscar dados de webinars de uma API: getWebinars, getAllWebinars e getWebinarsId. Ele importa a instância do axios criada anteriormente e vários tipos e constantes relacionados aos webinars. A função getWebinars recebe como argumentos a página, a categoria e a ordem desejadas e usa a instância do axios para fazer uma requisição GET para o endpoint `/webinars` com os parâmetros apropriados. A função getAllWebinars usa a instância do axios para fazer uma requisição GET para o endpoint `/webinars` sem parâmetros. A função getWebinarsId recebe como argumento o ID do webinar desejado e usa a instância do axios para fazer uma requisição GET para o endpoint `/webinars/${webinarsId}`

- `src/utils/webinarsUtils.ts`: Este trecho de código define uma constante WEBINARS_PER_PAGE e uma função chamada getCategoryFrom. A constante WEBINARS_PER_PAGE define o número de webinars exibidos por página. A função getCategoryFrom recebe como argumento uma lista opcional de webinars e retorna um array de objetos com o nome e a contagem de cada categoria de webinars. A função usa um objeto para contar o número de webinars em cada categoria e, em seguida, mapeia as chaves do objeto para criar um array de objetos com o nome e a contagem de cada categoria. O array resultante é ordenado em ordem decrescente pelo número de webinars em cada categoria.

  
