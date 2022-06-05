import "./widgetSm.css";
import avatar from "../../assets/user.jpg";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../../requestMethods";
import Modal from "react-modal";
import * as timeago from "timeago.js";
// import axios from "axios";

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "30%",
    height: "auto",
    transform: "translate(-40%, -10%)",
  },
};
export const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/user/?new=true");
        console.log(res.data);
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="widgetSm">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="modalContainer">
          <h4
            style={{
              textAlign: "center",
              borderBottom: "1px solid lightGray",
            }}
          >
            AGENT DETAILS
          </h4>
          <div
            className="user-details"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
            }}
          >
            <span>User ID : {}</span>
            <span>
              Name : {}
              {}
            </span>
            <span>Contact : {}</span>
            <span>Location : {}</span>
            <span>Created At : {} </span>
          </div>
        </div>
      </Modal>
      <span className="widgetSmTitle">Current Agents</span>
      <ul className="widgetSmList">
        {users.map((agent) =>
          agent.isAgent ? (
            <li className="widgetSmListItem" key={agent._id}>
              <img
                src={agent.img || avatar}
                alt="profile"
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                
                <span className="widgetSmUserTitle">{agent.email}</span>
              </div>
              <button
                className="widgetSmButton"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Visibility className="widgeSmIcon" />
                Display
              </button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
