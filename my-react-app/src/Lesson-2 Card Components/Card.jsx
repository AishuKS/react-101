import './index.css'

import photo from '../assets/photo.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={photo} alt="Profile Picture"/>
            <h2 className='card-title'>Aishwarya Kandasamy</h2>
            <p className='card-text'>Lead Software Developer with 5 years of experience. Happy Coding!!!</p>
        </div>
    )
}

export default Card