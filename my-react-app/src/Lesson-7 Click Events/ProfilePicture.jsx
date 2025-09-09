import './index.css'
function ProfilePicture(){
    const imageUrl = "./src/assets/photo.jpg"

    // this event handler property will hide the image when clicked
    const handleClick =(e) => e.target.style.display = "none"

    return(
        <img className="image" src={imageUrl}
             onClick={(e) => handleClick(e)}
        >
        </img>
    )
}

export default ProfilePicture