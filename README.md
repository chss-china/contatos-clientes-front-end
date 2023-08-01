# React + TypeScript + Vite + TypeORM + Typescript
- Front End do meu projeto full stack

# Comandos para instalção e configuraçoes
1. se for começar um projeto do incio executar o comando npx create-vite@lates CADASTRO-CLIENTES-FRONT --template react-ts vai criar um projeto do inicio em react, typescript, vite com o nome do projeto CADASTRO-CLIENTES-FRONT.
2. executar o comando npx tsc --init para gerar seu tsconfig.json que permite personalizar como o TypeScript compila e trata o código do seu projeto.
3. Em seguida, gere o arquivo tsconfig.json para personalizar como o TypeScript compila e trata o código do seu projeto. Execute o comando
npx tsc --init
3. O arquivo `tsconfig.json` sera gerado com configurações padrão. Mais configurações adicionais podem ser feitas neste arquivo. Veja abaixo todas as configurações que fiz no arquivo `tsconfig.json`. Lembre-se de que essas configurações são opcionais e foram escolhidas de acordo com minhas preferências:
4. "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
5 .Crie outro arquivo chamado tsconfig.node.json e inclua as seguintes configurações:
   {
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
6. faça um arquivo .gitignore com essas informações,
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
dist-ssr
*.local
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
7. por ulitmo npm install para instalar todas depedencias do projeto, para instalar todas dependencias até do typescript tem que estar no 
diretorio da raiz
9. entrar na pasta do projeto e executar npm install para instalar as outras dependencias
8. comando para iniciar o servidor npm run dev.

   
