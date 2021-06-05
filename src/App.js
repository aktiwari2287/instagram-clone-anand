import "./App.css";
import Post from "./components/Post";
import {useState} from 'react';
function App() {
  const [posts, setPosts] = useState([
    {
      username: "Anand",
      caption: "Learning React",
      imageUrl: "https://avatars.githubusercontent.com/u/7508506?v=4"
    },
    {
      username: "React JS",
      caption: "Learning React",
      imageUrl: "https://miro.medium.com/max/2484/1*CeuWv9fCjD1uTiTuKytnBQ.png"
    }
  ]);
  return (
    <div className="app">
      <div className="app_header">
        <img  className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        />
      </div>
      {
        posts.map(post => {
          return <Post username={post.username} imageUrl = {post.imageUrl} caption={post.caption} ></Post>
        })
      }
    </div>
  );
}

export default App;
