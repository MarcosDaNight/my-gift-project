
# My Gift Project

Este é um projeto de presente personalizado, criado para proporcionar uma experiência única e divertida para a Patrielly. O projeto inclui uma galeria de fotos, uma galeria de memes, uma seção de mensagens e uma página especial com uma interação engraçada.

## Funcionalidades

1. **Galeria de Fotos**: Exibe uma coleção de fotos com navegação para avançar e retornar entre as fotos.
2. **Galeria de Memes**: Exibe uma coleção de memes com navegação para avançar e retornar entre os memes.
3. **Mensagens**: Permite que os usuários deixem mensagens para Patrielly. As mensagens são salvas no Firebase Firestore.
4. **Página Especial**: Uma página interativa que pergunta "Você vai comer meu c*zinho?" com botões de resposta. O botão "Não" foge do cursor, e o botão "Sim" faz explodir confetes na tela.

## Tecnologias Utilizadas

- React
- Firebase Firestore
- CSS
- GitHub Pages para deploy

## Configuração do Projeto

1. Clone este repositório:

   ```sh
   git clone git@github.com:MarcosDaNight/my-gift-project.git
   cd my-gift-project
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (substitua com suas credenciais do Firebase):

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm start
   ```

## Deploy

Para fazer o deploy no GitHub Pages, execute o seguinte comando:

```sh
npm run deploy
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
