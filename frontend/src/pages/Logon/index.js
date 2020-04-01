import React from 'react';
import { FiLogIn} from 'react-icons/fi';

import '../../global.css';  
import './styles.css';


import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="logo"/>

                <form >
                    <h1> Faça seu logon </h1>

                    <input placeholder="Sua ID" />
                    <button className="button"> Entrar </button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />

                        Não tenho cadastro
                    </a>


                </form>

            </section>

            <img src={heroesImg} alt="heroes"/>

        </div>
    )
}
