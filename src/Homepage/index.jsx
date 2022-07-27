import "./style.css";
function HomePage({ setHomePage }) {

  function change() {
   setHomePage((homePage) => !homePage);
  }

  return (
    <div className="homepage">
      <div className="informaçoes">
        <img src="./NuKenzie.png" alt="logo" className="logo"/>
        <h1 className="h1-homepage">Centralize o controle das suas finanças</h1>
        <p className="paragrafo-homepage">de forma rápida e segura</p>
        <button className="botao-homepage" onClick={change}>
          Iniciar
        </button>
      </div>
      <img src="./image.svg" alt="logo" className="imagem-grande" />
    </div>
  );
}

export default HomePage;
