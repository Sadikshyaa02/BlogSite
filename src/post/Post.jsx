import React from 'react';
import "./post.css";
import post2 from "../assets/post2.jpg"; // Adjust the path as necessary

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={post2} alt="Background" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nam corporis porro explicabo, delectus quod, ducimus aspernatur sint enim nobis, autem nesciunt ab
           nemo inventore possimus temporibus. Repudiandae exercitationem repellendus aperiam!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nam corporis porro explicabo, delectus quod, ducimus aspernatur sint enim nobis, autem nesciunt ab
           nemo inventore possimus temporibus. Repudiandae exercitationem repellendus aperiam!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nam corporis porro explicabo, delectus quod, ducimus aspernatur sint enim nobis, autem nesciunt ab
           nemo inventore possimus temporibus. Repudiandae exercitationem repellendus aperiam!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nam corporis porro explicabo, delectus quod, ducimus aspernatur sint enim nobis, autem nesciunt ab
           nemo inventore possimus temporibus. Repudiandae exercitationem repellendus aperiam!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Nam corporis porro explicabo, delectus quod, ducimus aspernatur sint enim nobis, autem nesciunt ab
           nemo inventore possimus temporibus. Repudiandae exercitationem repellendus aperiam!</p>
      </div>
    </div>
  )
}
