import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Eranga" />
            <label>Email</label>
            <input type="text" placeholder="eranga@example.com" />
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
          <Sidebar />
    </div>
  )
}
