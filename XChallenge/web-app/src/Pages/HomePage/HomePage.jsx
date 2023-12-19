import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./HomePage.css";

//images
import wstowers from "../../Assets/Images/img1.png";

//components
import Title from "../../Components/Title/Title";
import CardNoticias from "../../Components/Card-Noticias/CardNoticias";
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { theme, useTheme } = useContext(ThemeContext);

  return (
    <main className="home-flex">
      <section className="background-home">
        <img src={wstowers} alt="" />
      </section>

      <section
        className="ultimas-noticias"
        style={
          theme === "dark"
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Container>
          <Title
            textTitle={"ULTIMAS NOTÍCIAS"}
            colorTitle={theme === "dark" ? "white " : "black"}
          />

          <Link
            style={theme === "dark" ? { color: "#FFC737" } : { color: "black" }}
            className="ver-noticias"
          >
            Veja Mais..
          </Link>

          <div className="noticias-box">
            <CardNoticias
              backColor={theme === "dark" ? "#FFC737" : "black"}
              color={theme === "dark" ? "black" : "white"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ullamcorper libero. "
              }
              date={"12-12-2023"}
            />

            <CardNoticias
              backColor={theme === "dark" ? "#FFC737" : "black"}
              color={theme === "dark" ? "black" : "white"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ullamcorper libero. "
              }
              date={"12-12-2023"}
            />

            <CardNoticias
              backColor={theme === "dark" ? "#FFC737" : "black"}
              color={theme === "dark" ? "black" : "white"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ullamcorper libero. "
              }
              date={"12-12-2023"}
            />

            <CardNoticias
              backColor={theme === "dark" ? "#FFC737" : "black"}
              color={theme === "dark" ? "black" : "white"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ullamcorper libero. "
              }
              date={"12-12-2023"}
            />
          </div>
        </Container>
      </section>

      <section className="nossos-parceiros">
        <Container>
          <Title 
            textTitle={"Nossos Parceiros"}
            colorTitle={"black"}
          />

          <div className="parceiros-box">
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
            <p>Parceiro</p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
