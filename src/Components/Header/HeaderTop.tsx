import "./HeaderTop.css";
import help from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/help.png";
import contact from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/contact.png";
import fr from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/drapeauFR.png";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

function HeaderTop() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const bottom = document.getElementsByClassName("bottomNav")[0];
    const hr = document.getElementsByClassName("sepTop")[0];
    if (latest > previous && latest > 30) {
      setHidden(true);
      hr.style.display = "none";
      bottom.style.transform = "translateY(-70%)";
    } else if (latest < 20) {
      setHidden(false);
      hr.style.display = "block";
      bottom.style.transform = "translateY(0%)";
    }
  });

  return (
    <>
      <header>
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.05 }}
        >
          <div className="contact">
            <img src={contact} height={20} />
            &nbsp;Contact
          </div>
          <div className="aide">
            <img src={help} height={20} />
            &nbsp;Aide
          </div>
          <div className="langue">
            <img className="drapeau" src={fr}></img>
          </div>
        </motion.nav>
        <hr className="sepTop"></hr>
        <div className="bottomNav" id="bottom">
          <div className="logo">LOGO</div>
          <div className="soldes">SOLDES</div>
          <div className="produits">PRODUITS</div>
          <div className="compte">COMPTE</div>
          <div className="panier">PANIER</div>
        </div>
      </header>
    </>
  );
}

export default HeaderTop;
