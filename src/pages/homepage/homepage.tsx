import { Link } from "react-router-dom";
import imgClients from "../../assets/clientescontatosjpg.jpg";
import "./styled.scss";
function HomePage() {
  return (
    <header className="homepage">
      <div className="header">
        <strong>Clients and Contacts</strong>
        <nav>
          <Link to="/funcionamento">Funcionamento do site</Link>
          <Link to="/login">Cadastrar</Link>
          <Link to="/register">Logar</Link>
        </nav>
      </div>
      <div className="content">
        <div className="text-container">
          <div className="intro">
            <h1>Chegue mais longe em equipe</h1>
            <p>
              Este é um site compacto com a finalidade de avaliar um desafio
              técnico dentro de uma semana. Sua proposta é criar um breve
              registro de clientes, estabelecendo conexões de contato, seguido
              pela exibição tanto do cliente quanto de seus contatos associados.
            </p>
            <Link to="/login" className="cta-button">
              Logar
            </Link>
          </div>
          <div className="image-container">
            <img src={imgClients} alt="Minha Imagem Alt Text" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contact-info">
          <p className="aviso">
            Antes de realizar o cadastro, clique em "Funcionamento do site" para
            obter uma compreensão mais clara do processo.
          </p>
          <h2>Tenha o contato do cliente de forma mais fácil</h2>
          <h3>Centralize as informações</h3>
        </div>

        <p>
          Os clientes podem acessar facilmente os contatos, simplificando a
          busca por conexões.
        </p>
      </div>
    </header>
  );
}
export default HomePage;
