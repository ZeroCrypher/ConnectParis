import "./HeaderTop.css";
import help from "https://github.com/ZeroCrypher/ConnectParis/blob/dfd41471982d65afcb4083fc3442282cd4b89fb3/src/Components/images/help.png";
import contact from "https://github.com/ZeroCrypher/ConnectParis/blob/dfd41471982d65afcb4083fc3442282cd4b89fb3/src/Components/images/contact.png";

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
