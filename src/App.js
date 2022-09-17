import { useState } from "react";
import "./App.css";

// const [login,setLogin] = useState()
// const handleLogin = () => {
//     setLogin(() => {

//     })
// }

function App() {
  return (
    <div className="super_container">
    <div className="container">
      <div className="picture">
        <img
          className="box small_picture "
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
          alt=""
        />
        <img
        className="box big_picture"
        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png)"
        alt="" />
      </div>

      <div className="login_container">
        {/* login_firstpart */}
        <div className="login_firstpart">
          <img
            className="Logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="instagram logo"
          />
          <input
            type="text"
            // value ={login}
            // onChange={e => (e.target.value)}
            placeholder="Phonenumber,username"
            style={{
              paddingVertical: 10,
              paddingLeft: 10,
              backgroundColor: "#c4c4c4",
              height: 32,
              marginTop: 10,
              width: "70%",
              border: 1, 
            }}
          />
          <input
            type="text"
            placeholder="Password"
            style={{
              paddingVertical: 10,
              paddingLeft: 10,
              backgroundColor: "#c4c4c4",
              height: 32,
              marginTop: 10,
              width: "70%",
              border: 1, 
              
            }}
          />
          <button
            className="Login_button"
            style={{ marginTop: 14,
            paddingTop: 5, 
            paddingBottom: 5,
            height: 32,
            width: '74%',
           
          }}
          >
            Log In
          </button>
          <p>OR</p>
          <a
            className="Link"
            href="https://www.facebook.com/messages/t/4111057318993472"
          >
            Login with facebook
          </a>
        </div>
        {/* login_secondpart */}
        <div className="second_part">
          <p>Don't have an account?</p>
         <a href=""
         style={{
          color: '#0095f6',
          color: 'rgba(var(--d69,0,149,246),1)',
          margin: 3,
         }}
         >Sign up</a>
        </div>
        {/* last_part */}
        <div>
          <p>Get the app.</p>
        </div>
        <div>

        </div>
      </div>
    </div>
       {/* bottom */}
       <div className="Bottom_part">
        <ul className="Ul">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Top Acoounts</li>
          <li>Hastags</li>
          <li>Locations</li>
          <li>Instagream Lite</li>
          <li>Contact Uploading & Non Uses</li>
        </ul>
        </div>
    </div>
  );
}

export default App;
