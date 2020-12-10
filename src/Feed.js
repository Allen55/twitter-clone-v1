import React from 'react';
import Post from './Post.js';
import TweetBox from './TweetBox.js';
import './Feed.css';

function Feed() {
    return (
        <div class="feed">

          <div className="feed__header">
            <h2>Home</h2>
          </div>

          <TweetBox />

          <Post />
          <Post />
          <Post />
          <Post />
          {/* Post */}
          {/* Post */}
          {/* Post */}
        </div>
    );
}

export default Feed;
