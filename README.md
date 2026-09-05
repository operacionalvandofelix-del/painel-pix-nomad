# Painel Pix Nomad

Aplicativo de painel automático com integração Pix para Nomad - Caçador de produtos

## 🚀 Funcionalidades

- ✅ Painel de controle automático on/off
- 💰 Exibição de saldo em USD
- 📤 Autorização segura de Pix para Nomad
- 🔒 Chave Pix não é armazenada (digitada a cada vez)
- ⚡ Integração com Wise/Nomad

## 📋 Requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/operacionalvandofelix-del/painel-pix-nomad.git
cd painel-pix-nomad

# Instale as dependências
npm install
# ou
yarn install
```

## 🚀 Executar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
painel-pix-nomad/
├── app/
│   ├── layout.tsx       # Layout raiz
│   └── page.tsx         # Página inicial
├── components/
│   └── PainelFinal.tsx  # Componente principal
├── package.json
├── tsconfig.json
└── README.md
```

## 🔒 Segurança

- Chave Pix não é persistida no localStorage
- Cada transação requer digitação manual da chave
- Validação de saldo antes de autorizar
- Feedback claro ao usuário

## 📝 Licença

MIT

## 🤝 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.