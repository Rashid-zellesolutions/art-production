import React from 'react'
import './Portfolio.css';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import portfolioThumb from '../../Assets/portfolio/project-thumb.png'
import ContactForm from '../../Components/ContactForm/ContactForm';

const Portfolio = () => {
    const categoriesData = [
        'Documentaries', 
        'Commercials',
        'TV Shows',
        'Short Films',
        'Creative Interviews',
        'Photography',
        'Corporate Videos',
        'Animations',
        'Markeeting'
    ]
    const singleProject = [
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: portfolioThumb, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
    ]
  return (
    <div className='project-main-container'>
        
      <div className='project-categories-section'>
        {categoriesData.map((item, index) => (
            <PrimeryButton text={item} width={'auto'} height={'30px'} padding={'5px 10px'}/>
        ))}
      </div>
      <div className='projects-display'>
        {singleProject.map((items, index) => (
            <div className='single-project'>
            <div className='single-project-image'>
                <span className='single-project-tag'><p>{items.tag}</p></span>
                <img src={items.img} alt='project' />
            </div>
            <p className='chanel-name'>{items.chanel}</p>
            <h3 className='project-title'>{items.projectTitle}</h3>
        </div>
        ))}
      </div>
      <div className='see-all-project-btn-div'>
        <PrimeryButton text={'See All Projects'} width={'auto'} height={'30px'} padding={'4px 15px'}  />
      </div>
      <ContactForm />

    </div>
  )
}

export default Portfolio
