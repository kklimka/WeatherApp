import d01 from '../../assets/icons/01d.svg';
import n01 from '../../assets/icons/01n.svg';
import d02 from '../../assets/icons/02d.svg';
import n02 from '../../assets/icons/02n.svg';
import d03 from '../../assets/icons/03d.svg';
import n03 from '../../assets/icons/03n.svg';
import d04 from '../../assets/icons/04d.svg';
import n04 from '../../assets/icons/04n.svg';
import d09 from '../../assets/icons/09d.svg';
import n09 from '../../assets/icons/09n.svg';
import d10 from '../../assets/icons/10d.svg';
import n10 from '../../assets/icons/10n.svg';
import d11 from '../../assets/icons/11d.svg';
import n11 from '../../assets/icons/11n.svg';
import d13 from '../../assets/icons/13d.svg';
import n13 from '../../assets/icons/13n.svg';
import d50 from '../../assets/icons/50d.svg';
import n50 from '../../assets/icons/50n.svg';


function Icon({icon}){
   if(icon === '01d'){
    return (<img alt="weather icon" src={d01} height="64px" />)
   }
   else if(icon === '01n'){
    return (<img alt="weather icon" src={n01} height="64px" />)
   }
   else if(icon === '02d'){
    return (<img alt="weather icon" src={d02} height="64px" />)
   }
   else if(icon === '02n'){
    return (<img alt="weather icon" src={n02} height="64px" />)
   }
   else if(icon === '03d'){
    return (<img alt="weather icon" src={d03} height="64px" />)
   }
   else if(icon === '03n'){
    return (<img alt="weather icon" src={n03} height="64px" />)
   }
   else if(icon === '04d'){
    return (<img alt="weather icon" src={d04} height="64px" />)
   }
   else if(icon === '04n'){
    return (<img alt="weather icon" src={n04} height="64px" />)
   }
   else if(icon === '09d'){
    return (<img alt="weather icon" src={d09} height="64px" />)
   }
   else if(icon === '09n'){
    return (<img alt="weather icon" src={n09} height="64px" />)
   }
   else if(icon === '10d'){
    return (<img alt="weather icon" src={d10} height="64px" />)
   }
   else if(icon === '10n'){
    return (<img alt="weather icon" src={n10} height="64px" />)
   }
   else if(icon === '11d'){
    return (<img alt="weather icon" src={d11} height="64px" />)
   }
   else if(icon === '11n'){
    return (<img alt="weather icon" src={n11} height="64px" />)
   }
   else if(icon === '13d'){
    return (<img alt="weather icon" src={d13} height="64px" />)
   }
   else if(icon === '13n'){
    return (<img alt="weather icon" src={n13} height="64px" />)
   }
   else if(icon === '50d'){
    return (<img alt="weather icon" src={d50} height="64px" />)
   }
   else if(icon === '50n'){
    return (<img alt="weather icon" src={n50} height="64px" />)
   }

}
export default Icon;