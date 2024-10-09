

function ProfileCard(props){
    return(<div>
        <h1>{props.name}</h1>
        <img src={props.img} alt="image"></img>
        <p>{props.bio}</p>

    </div>)
}


export default ProfileCard