import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register() {
  const [name] = useState('');
  const [email] = useState('');
  const [whatsapp] = useState('');
  const [city] = useState('');
  const [uf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
      e.preventDefault();

      const data = {
          name,
          email,
          whatsapp,
          city,
          uf,
      };

      try {
            const response = await api.post('ongs', data);
        
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');

      } catch (error) {
          alert('Erro no cadastro, tente novamente!');
      }
  }

  return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero"/>]
                
                <h1> Cadastro </h1>
                <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>

            </section>
            <form onSubmit={handleRegister}>
                <input placeholder="Nome da ONG"/>
                <input placeholder="E-mail" type="email"/>
                <input placeholder="WhatsApp"/>

                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{ width: 80 }}/>
                </div>

                <button className="button" type="submit"> Cadastrar </button>
            </form>
        </div>
    </div>


  );
}
