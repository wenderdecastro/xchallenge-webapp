import React from "react";

//Components
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

//Pages
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/LoginPage/Login";
import Resultados from "../Pages/ResultadosPage/Resultados";
import MeuPerfil from "../Pages/MeuPerfilPage/MeuPerfil";
import Modalidades from "../Pages/ModalidadesPage/Modalidades";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Testes from "../Pages/TestesPage/TestesPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Resultados />} path="/resultados" />
        <Route element={<Modalidades />} path="/modalidades" />
        <Route element={<MeuPerfil />} path="/meu-perfil" />

        <Route element={<NotFoundPage />} path="/not-found" />

        <Route element={<Testes/>} path="/testes"/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default routes;
