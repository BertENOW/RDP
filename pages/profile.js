import React, {Component} from 'react'

class Profile extends Component {

    componentDidMount(){
        getUserProfile()
    }

    render(){
        return(
            <div> Profile</div>
        )
    }
}

export default Profile;