import React from 'react'
import "./topbar.css"
import { NotificationsNone,Language, Settings } from '@material-ui/icons';
import user from '../../assets/user.jpg'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">OCEANS-MALL</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={user} alt="profile" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
