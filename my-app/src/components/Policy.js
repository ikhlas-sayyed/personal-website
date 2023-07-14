import React from 'react'
import { useParams } from 'react-router-dom'
import Privacy from './policys-components/Privacy';
import PageNotFound from '../PageNotFound.js';
import Terms from './policys-components/Terms';

export default function Policy() {
    let policyname=useParams();
    switch (policyname.policyname) {
        case 'privacy':
            return (<Privacy/>)
        case 'terms':
            return (<Terms/>)
        default:
            return (<PageNotFound/>)
    
    }

}
