# React + TypeScript + Vite + TypeORM + Typescript
- Front End do meu projeto full stack

# Comandos para instalção e configuração
1. se for começar um projeto do incio executar o comando npx create-vite@lates CADASTRO-CLIENTES-FRONT --template react-ts vai criar um projeto do inicio em react, typescript, vite com o nome do projeto CADASTRO-CLIENTES-FRONT
2. executar o comando npx tsc --init para gerar seu tsconfig.json que permite personalizar como o TypeScript compila e trata o código do seu projeto.
3. Em seguida, gere o arquivo tsconfig.json para personalizar como o TypeScript compila e trata o código do seu projeto. Execute o comando
npx tsc --init
4 . O arquivo tsconfig.json será gerado e incluirá algumas configurações padrão. Mais configurações adicionais tem que ser feitas neste arquivo.
5 . aqui está abaixo todas configurações que fiz do ts config, isso é opcional, eu escolhi fazer dessa forma
"target": "ES2020": Compilar para ECMAScript 2020.
"useDefineForClassFields": true: Usar define para campos de classe.
"lib": ["ES2020", "DOM", "DOM.Iterable"]: Incluir bibliotecas ES2020, DOM e DOM.Iterable.
"module": "ESNext": Formato de módulo é ESNext (moderno).
"skipLibCheck": true: Pular verificação de tipos em bibliotecas.
"moduleResolution": "bundler": Resolução de módulo através do "bundler".
"allowImportingTsExtensions": true: Permitir importar arquivos TypeScript usando .ts.
"resolveJsonModule": true: Permitir importar arquivos JSON como módulos.
"isolatedModules": true: Cada arquivo é um módulo independente.
"noEmit": true: Não gerar arquivos JavaScript na compilação.
"strict": true: Ativar verificações estritas.
"noUnusedLocals": true: Identificar variáveis locais não utilizadas.
"noUnusedParameters": true: Identificar parâmetros não utilizados.
"noFallthroughCasesInSwitch": true: Verificar casos switch sem break.
"include": ["src"]: Incluir arquivos da pasta "src" na compilação.
"references": [{ "path": "./tsconfig.node.json" }]: Referenciar tsconfig.node.json.
6. faça outro arquivo ts config.node.json e nele coloque essas configurações
"compilerOptions": Opções do compilador TypeScript.
"composite": true: Habilita o recurso "composite" do TypeScript.
"skipLibCheck": true: Ignora a verificação de tipos em arquivos de biblioteca.
"module": "ESNext": Utiliza o formato de módulo ESNext (moderno).
"moduleResolution": "bundler": Resolução de módulo através de um "bundler" (empacotador de módulos).
"allowSyntheticDefaultImports": true: Permite importações sintéticas padrão.
"include": ["vite.config.ts"]: Inclui o arquivo vite.config.ts na compilação.
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
8. comando para iniciar o servidor npm run dev.

   
