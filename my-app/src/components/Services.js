import React from 'react'
import { useParams } from 'react-router-dom'
import Web_development from './services-components/web_development';
import Business_analytics from './services-components/business_analytics';
import Social_media_marketing from './services-components/social_media_marketing';
import PageNotFound from '../PageNotFound';

export default function Services() {
 let servicename=useParams();
 switch (servicename.servicename) {
    case 'web_development':
        return (<Web_development/>)
        break;
    case 'business_analytics':
        return (<Business_analytics/>)
        break;
    case 'social_media_marketing':
        return (<Social_media_marketing/>)
        break;
    default:
        return (<PageNotFound/>)
        break;

}
}
