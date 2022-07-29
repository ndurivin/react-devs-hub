import React, { useState } from 'react'

const Profile = () => {


    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [tech, setTech] = useState("")
    const [experience, setExperience] = useState("")
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")



  return (
    <div>
        <center>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={} className="img-fluid rounded-start" alt={}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <h5 className="card-text">Technology Stack</h5>
                        <h5 className="card-text">Years of Experieince</h5>
                        <h6 className="card-text"><small className="text-muted">Followers</small></h6>
                        <h6 className="card-text"><small className="text-muted">Following</small></h6>
                    </div>
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Profile;
