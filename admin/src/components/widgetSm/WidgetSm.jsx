import "./widgetSm.css";
import avatar from "../../assets/user.jpg";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("auth/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
          <img src={user.img || avatar} alt="profile" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.email}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgeSmIcon" />
            Display
          </button>
        </li>
          ))
        }
      </ul>
    </div>
  );
};
