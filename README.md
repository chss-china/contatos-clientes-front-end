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

É necessário implementar operações CRUD para ambos os clientes e contatos, o que significa que eu criei as listagem, atualizazaçãp e excluzão de registros tanto para cliente quanto para a de contato. Na parte de listagem quando terminar o projeto quero fazer requisições
de paginação

Necessário:
Autenticação e autorização
- isso é autorização: Em programação, a autorizada refere-se ao processo de controlar o acesso a determinados recursos ou funcionalidades de um software com base na identidade e nos privilégios de um usuário ou entidade.

- Quando um usuário tenta acessar uma parte restrita de um programa ou aplicativo, o sistema de autorização entra em ação para verificar se esse usuário possui as permissões necessárias para executar uma ação desejada

- isso é Autenticação: um usuario logado por no nosso caso

- Quando um usuário tenta acessar o sistema, o mesmo é solicitado a fornecer suas credenciais de login. Se as credenciais forem válidas, o usuário é autenticado e recebe permissão para acessar o sistema.
- Autorização: Após o login, o sistema verifica se o usuário possui as permissões necessárias para acessar determinadas áreas restritas ou executar ações específicas. Caso o usuário não tenha as permissões adequadas, o acesso é negado.

- Criei uma página de cadastro de clientes que permite ao usuário escolher se ele é um administrador ou não. Essa escolha determinará as permissões concedidas ao usuário após o login.
Como o projeto tinha um prazo limitado, implementei o acesso de administração para apenas um usuário como exemplo.

 - Após o cadastro, o usuário é redirecionado para a página de login, levando em consideração a condição de ser um cliente administrador ou não.
   
 - Após o login, os usuários são redirecionados para a página de clientes.
Administradores têm permissão para excluir e atualizar qualquer cliente, exceto outros administradores.
Usuários logados comuns só podem alterar suas próprias informações, sendo necessário localizar seu próprio usuário na listagem.

 - Os contatos dos clientes são vinculados e acessados ​​através de botões na página de clientes.
O acesso às informações de contato é restrito e somente os administradores têm permissão para criar contatos. Ao clicar no botão "Mais informações do cliente", os administradores têm acesso para criar contatos associados a esse cliente.

- Implementei proteção nas rotas da aplicação para garantir que a página que lista os contatos seja acessível por usuarios logados ou administradores.

- A criação de contatos é restrita aos administradores. Ao criar um contato para um cliente, verifique se o usuário logado é um administrador antes de permitir a criação do contato.

- O que foi entregue até o momento é apenas um exemplo do que foi compreendido e implementado no prazo estipulado.
O projeto não será utilizado sem que todas as funcionalidades integradas estejam concluídas.

- Com base nessa abordagem, estou trabalhando para concluir todas as funcionalidades remanescentes, segurança aprimorada, usabilidade e estilização da aplicação, garantindo uma entrega completa e funcional. Meu objetivo é criar um sistema robusto e seguro, seguindo as melhores práticas de desenvolvimento web e segurança da informação.

- A estilização inicial da aplicação é básica, pois o projeto tinha um prazo curto de desenvolvimento.
Planejo melhorar a estilização futuramente, assim que tenha mais tempo disponível para dedicar ao projeto.


um cliente tem os seus contatos vinculados, porém o acesso a informações de contato é restrito e não pode ser concedido a qualquer pessoa indiscriminadamente. É necessário implementar medidas de segurança, como autorização, por isso o contato só é criado por um administrador,
somente um administrador tem acesso aos contatos, por isso na criação de contatos verifiquei se o usuario logado é adminitrador, clicando 
no botão do header escrito mais informações do cliente voce tem acesso a criar um contato do cliente  se for administrador
depois voce clica no botão do header que vai abrir um modal para criar um cadastro, como o prazo do projeto foi pequeno quero permitir que essa pagina que lista os contatos seja mostrada apenas por administradores e não só usuario sendo logado.
a pagina também tem proteção de rotas.
estilização está bem basica mais quando estiver tempo pretendo deixar bem bonito
O que eu fiz foi um exemplo do que eu entendi pela entrega, mais apenas um exemplo, não usarei o projeto sem terminar tudo que quero 



   
