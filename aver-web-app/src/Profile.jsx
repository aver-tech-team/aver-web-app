import "./Profile.css"

const Video = ({ video }) => {
    return(
      <></>
    )
  }
  
  const Profile = ({ photo, name, email, videos}) => {
    videos = ["video 1", "video 2"]
    return(
      <>
      <div className="header">
        <div className="header_left">
          <h2>American Veterans for Equal Rights</h2>
        </div>
        <div className="header_right">
            <button>Submit Videos</button>
            <button>View Videos</button>
            <button>Logout</button>
        </div>
      </div>
      
      <div class="mainbody">
        <div class='flex-container'>
        <div class="personal_info">
            <img src={photo} alt='Profile Photo' height='260' width='260'/>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
          
          <div class="video_section">
            <h2>Videos Submitted: </h2>
            <div class="video_box">
              <ul>
                {videos.map(video =>
                  <Video video = {video} class='video_item'></Video>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      <div class="footer">
          <p>footer text</p>
      </div>

      
      </>
      )
  }
  
  export default Profile