import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">       
            <form>
              <div className="tweetBox__input">
                <Avatar src="https://thumbs.dreamstime.com/z/businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-round-button-85824531.jpg" /> 
                  <input placeholder="What's Happening?" type="text" />            
              </div>
              <input 
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL" 
                type="text" 
                />
              <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
