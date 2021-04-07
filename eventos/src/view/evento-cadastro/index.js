import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './evento-cadastro.css'
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';
import Navbar from '../../componentes/navbar';

function EventoCadastro(){

    


    return(
        <>
        <Navbar/>
        <div className="col-12">
            <div className="row">
                <h3 className="mx-auto font-height-bold text-center">Novo Evento</h3>
            </div>
            <form>
                <div className="form-group">
                    <label>Titulo:</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento:</label>
                    <select className="form-control">
                        <option disabled selected value>-- Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea type="text" className="form-control"rows="3"/>
                </div>

            </form>

        </div>
        
        
        
        </>
    
    )
}

export default EventoCadastro;