import React from 'react';
import './Post.css';
import { Avatar, Button } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    avatar
}) {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src='https://thumbs.dreamstime.com/z/businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-round-button-85824531.jpg' />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Allen Harper
                        <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I challenge you to build a twitter clone with React</p>
                </div>
            </div>
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="" width="400" height="200"/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>

  )
}

export default Post;
