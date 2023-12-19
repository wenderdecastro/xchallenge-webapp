import React, { useContext } from 'react';
import {ThemeContext} from "../../Context/ThemeContext"
import "./Modalidades.css"

import lupa from "../../Assets/Icons/Pesquisa.png"

import Title from "../../Components/Title/Title"

const Modalidades = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <section className='modalidades'>
            <Title
                textTitle={"Modalidades"}
                colorTitle={theme === "dark" ? "white" : "black"}
            />

            <div className="barra-pesquisa">
                <label htmlFor="barra">Modalidade: </label>
                <input  className='barra' name='barra' type="text" placeholder='Pesquisar modalidade'/>
                <img src={lupa} alt="" />
            </div>

            <table className='tabela-modalidade'>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Local</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nome da modalidade</td>
                        <td>Local da modalidade</td>
                        <td>d/mm/aaaa</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Modalidades;