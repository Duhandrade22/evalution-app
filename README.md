# 📱 Evaluation App

Um aplicativo móvel desenvolvido com React Native e Expo para gerenciamento de avaliações de usuários. O app permite que usuários autenticados criem e visualizem suas avaliações com sistema de rating por estrelas e comentários.

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Login e registro com Firebase Auth
- **Sistema de Avaliações**: Criação de avaliações com rating de 1-5 estrelas
- **Comentários**: Campo de texto obrigatório para feedback detalhado
- **Histórico**: Visualização de todas as avaliações do usuário
- **Interface Moderna**: Design limpo e intuitivo com navegação por abas

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **Firebase** - Backend como serviço (Auth + Firestore)
- **React Navigation** - Navegação entre telas
- **TypeScript** - Tipagem estática
- **React Native Ratings** - Componente de avaliação por estrelas

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

## 🔧 Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd evaluation-app
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis do Firebase:

   ```env
   FIREBASE_API_KEY=sua_api_key
   FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
   FIREBASE_PROJECT_ID=seu_projeto_id
   FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
   FIREBASE_APP_ID=seu_app_id
   FIREBASE_MEASUREMENT_ID=seu_measurement_id
   ```

4. **Configure o Firebase**

   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative a autenticação por email/senha
   - Crie um banco de dados Firestore
   - Configure as regras de segurança do Firestore

## 🚀 Como Executar

### Desenvolvimento

1. **Inicie o servidor de desenvolvimento**

   ```bash
   npm start
   # ou
   yarn start
   ```

2. **Escaneie o QR Code**
   - Instale o app **Expo Go** no seu dispositivo móvel
   - Escaneie o QR code que aparece no terminal ou navegador

### Plataformas Específicas

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📱 Como Usar

### 1. Registro/Login

- Abra o app e faça login com email e senha
- Se não tiver conta, clique em "Cadastre-se" para criar uma

### 2. Criar Avaliação

- Na aba "Avaliar", selecione uma nota de 1 a 5 estrelas
- Digite um comentário com pelo menos 10 caracteres
- Clique em "Enviar Avaliação"

### 3. Visualizar Avaliações

- Na aba "Minhas Avaliações", veja todas as suas avaliações anteriores
- As avaliações são organizadas por data de criação

## 🏗️ Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── components/       # Componentes reutilizáveis
│   ├── Button/      # Botão customizado
│   ├── Header/      # Cabeçalho das telas
│   ├── Input/       # Campo de entrada
│   └── StarRating/  # Componente de avaliação
├── hooks/           # Hooks customizados
│   ├── useAuth.ts   # Gerenciamento de autenticação
│   └── useEvaluation.ts # Gerenciamento de avaliações
├── routes/          # Configuração de navegação
├── screens/         # Telas do aplicativo
│   ├── Login/       # Tela de login
│   ├── Register/    # Tela de registro
│   ├── Evaluation/  # Tela de criação de avaliação
│   └── MyEvaluations/ # Tela de histórico
└── firebase.ts      # Configuração do Firebase
```

## 🔐 Configuração do Firebase

### 1. Criar Projeto

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Siga os passos de configuração

### 2. Configurar Autenticação

1. No console do Firebase, vá para "Authentication"
2. Clique em "Get started"
3. Em "Sign-in method", habilite "Email/Password"

### 3. Configurar Firestore

1. No console do Firebase, vá para "Firestore Database"
2. Clique em "Create database"
3. Escolha "Start in test mode" para desenvolvimento
4. Configure as regras de segurança conforme necessário

### 4. Obter Configurações

1. No console do Firebase, vá para "Project settings"
2. Role até "Your apps" e clique no ícone da web
3. Copie as configurações para o arquivo `.env`

## 🧪 Scripts Disponíveis

```bash
# Iniciar em modo de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web

# Executar linting
npm run lint

# Resetar projeto (criar novo projeto limpo)
npm run reset-project
```

## 🐛 Solução de Problemas

### Erro de Conexão com Firebase

- Verifique se as variáveis de ambiente estão configuradas corretamente
- Confirme se o projeto Firebase está ativo
- Verifique as regras de segurança do Firestore

### Erro de Build

- Limpe o cache: `expo r -c`
- Delete a pasta `node_modules` e reinstale: `npm install`
- Verifique se todas as dependências estão instaladas

### Problemas de Navegação

- Certifique-se de que o React Navigation está configurado corretamente
- Verifique se os tipos de navegação estão definidos em `@types/navigation.ts`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma [issue](https://github.com/seu-usuario/evaluation-app/issues) no repositório.

---

**Desenvolvido por Eduardo Andrade**
