import React , {useEffect} from 'react'
import './ServiceCard.css';
import documentaryImage from '../../Assets/services/documentaries.png'
// import aos from 'aos';

const ServiceCard = ({backgroundColor, slideSection, justifyContent, padding, flexDirection, serviceBanner, serviceHeading, serviceHeadingTwo, paraOne, paraTwo}) => {
    
    return (
    <div 
        className='service-name'  
        data-aos={slideSection}
        style={{
            backgroundColor: backgroundColor, 
            flexDirection: flexDirection
        }}
    >
        <div className='service-poster' style={{justifyContent: justifyContent, padding: padding}}>
            <div className='service-poster-borders' >
                <img src={serviceBanner} alt='documentary image' />
            </div>
        </div>
        <div className='service-details'>
            <span>
                <h3>{serviceHeading}</h3>
                <h3>{serviceHeadingTwo}</h3>
            </span>
            <p>{paraOne}</p>
            <p>{paraTwo}</p>
        </div>
    </div>
  )
}

export default ServiceCard
