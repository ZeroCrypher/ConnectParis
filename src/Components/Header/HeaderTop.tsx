import "./HeaderTop.css";
import help from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/help.png";
import contact from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/contact.png";
import fr from "C:/Users/gaeta/Documents/ConnectParis/src/Components/images/drapeauFR.png";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

function HeaderTop() {
  const bottom = document.getElementById("bottom");
  const hr = document.getElementById("sepTop");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 30) {
      setHidden(true);
      hr.style.display = "none";
      bottom.style.transform = "translateY(-54%)";
    } else {
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
        <hr id="sepTop"></hr>
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
