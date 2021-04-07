import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './evento-cadastro.css'
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';

function EventoCadastro(){
    return(
        <h1>Cadastro de Eventos</h1>
    )
}

export default EventoCadastro;