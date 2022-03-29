import "./user.css";
import user from "../../assets/user.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Danny Mills</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="showInfoIcon" />
              <span className="userShowInfoTitle">dannylil96</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="showInfoIcon" />
              <span className="userShowInfoTitle">10.12.1996</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="showInfoIcon" />
              <span className="userShowInfoTitle">+233 0235-456-865</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="showInfoIcon" />
              <span className="userShowInfoTitle">danny@mail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="showInfoIcon" />
              <span className="userShowInfoTitle">
                19th Kings Street | Nungua
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="dannylil96"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Danny Mills"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="10.12.1996"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="danny@mail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+233 0235-456-865"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="19th Kings Street | Nungua"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={user} alt="user" className="userUpdateImg" />
                <label htmlFor="file" className="userUpdateLabel">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
