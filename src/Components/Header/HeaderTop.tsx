import "./HeaderTop.css";
import help from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/help.png";
import contact from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/contact.png";

function HeaderTop() {
  return (
    <>
      <header>
        <nav>
          <div className="contact">
            <img src={contact} height={25} />
            &nbsp;Contact
          </div>
          <div className="aide">
            <img src={help} height={20} />
            &nbsp;Aide
          </div>
          <div className="langue">Langue(WIP)</div>
          <br></br>
        </nav>
      </header>
    </>
  );
}

export default HeaderTop;
