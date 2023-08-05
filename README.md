# React + TypeScript + Vite + TypeORM + Typescript
- Front End do meu projeto Full Stack. o Objetivo do projeto foi desenvolver um front para um serviço responsavel por simular agenda podendo adicionar e remover contatos e clientes. Prazo do projeto full stack foi de 5 dias

# Tecnoclogias e bibliotecas
- React
- Typescript
- react hook form
- react-router-dom
- styled-components
- @hookform/resolvers
- React Icons
- React Toastify
- zod
 # Instalação de dependencias e pacotes
1. npm install para instalar todas depedencias do projeto, para instalar todas dependencias até do typescript tem que estar no 
diretorio da raiz
2. entrar na pasta do projeto e executar npm install para instalar as outras dependencias

# Rodar o servidor
3. comando para iniciar o servidor npm run dev.

# Documentação e explicação do projeto
# EU AINDA NÃO TERMINEI O PROJETO
Descrição do projeto
Você deverá criar um cadastro de clientes que poderá conter muitos contatos associados. Depois deste processo deverá ter um relatório em tela, ou PDF que mostre dados do cliente e os contatos vinculados a este cliente.

Obs: nesse desafio utilize Javascript e/ou Typescript
Tanto os clientes quanto os contatos devem ter as operações básicas de um CRUD;
Um cliente poderá ter mais de um contato vinculado a ele;
Um relatório (podendo ser em tela ou exportado em pdf) que mostre o cliente e seus contatos.

É necessário implementar operações CRUD para ambos os clientes e contatos, o que significa que eu criei as listagem, atualizazaçãp e excluzão de registros tanto para cliente quanto para a de contato. Na parte de listagem quando terminar o projeto quero fazer requisições
de paginação

Necessário:
Autenticação e autorização
isso é autorização: Em programação, a autorizada refere-se ao processo de controlar o acesso a determinados recursos ou funcionalidades de um software com base na identidade e nos privilégios de um usuário ou entidade.

Quando um usuário tenta acessar uma parte restrita de um programa ou aplicativo, o sistema de autorização entra em ação para verificar se esse usuário possui as permissões necessárias para executar uma ação desejada
isso é Autenticação: um usuario logado por no nosso caso

eu criei uma pagina de cadastro de clientes que o usuario pode escolher se é admin ou não, como o projeto foi em uma semana eu fiz dessa
forma, mais como não terminei o projeto vou implementar o admin para apenas um usuario, essa parte do projeto faz parte da autorização 
que já fiz

depois de cadastrar redireciona para o login com o cliente sendo admin ou não realizado no cadastro
depois de fazeer o login é redirecionado para uma pagina de clientes onde administradores podem excluir,atualizar qualquer cliente exceto outros admimistradores, enquanto o usuario logado só pode alterar suas proprias informações, voce tem que procurar na listagem o usuario 
que voce logou para alterar apenas suas informações, eu poderia ter feito de outra forma essa listagem mais nesse pouco tempo não consegui, ainda vou arrumar essa parte já que o crud também inclui listagem, nessa listagem só possui nome e email do cliente

um cliente tem os seus contatos vinculados, porém o acesso a informações de contato é restrito e não pode ser concedido a qualquer pessoa indiscriminadamente. É necessário implementar medidas de segurança, como autorização, por isso o contato só é criado por um administrador,
somente um administrador tem acesso aos contatos, por isso na criação de contatos verifiquei se o usuario logado é adminitrador, clicando 
no botão do header escrito mais informações do cliente voce tem acesso a criar um contato do cliente  se for administrador
depois voce clica no botão do header que vai abrir um modal para criar um cadastro, como o prazo do projeto foi pequeno quero permitir que essa pagina que lista os contatos seja mostrada apenas por administradores e não só usuario sendo logado.
a pagina também tem proteção de rotas.
estilização está bem basica mais quando estiver tempo pretendo deixar bem bonito
O que eu fiz foi um exemplo do que eu entendi pela entrega, mais apenas um exemplo, não usarei o projeto sem terminar tudo que quero 



   
