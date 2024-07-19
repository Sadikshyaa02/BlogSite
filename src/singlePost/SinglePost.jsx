import React from 'react'
import "./singlePost.css"
import post2 from "../assets/post2.jpg"; // Adjust the path as necessary


export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className="singlePostImg" src={post2} alt="Background" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit ametn
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div> 
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author : <b>Sadiii</b></span>
        <span className="singlePostDate"> 1 hour ago</span>
      </div>
      <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Iure alias ad, earum a rem officiis ipsa assumenda 
         dicta, molestiae soluta ratione laborum cupiditate 
         obcaecati omnis fugiat optio. Eius, accusamus nesciunt.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Iure alias ad, earum a rem officiis ipsa assumenda 
         dicta, molestiae soluta ratione laborum cupiditate 
         obcaecati omnis fugiat optio. Eius, accusamus nesciunt.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Iure alias ad, earum a rem officiis ipsa assumenda 
         dicta, molestiae soluta ratione laborum cupiditate 
         obcaecati omnis fugiat optio. Eius, accusamus nesciunt.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Iure alias ad, earum a rem officiis ipsa assumenda 
         dicta, molestiae soluta ratione laborum cupiditate 
         obcaecati omnis fugiat optio. Eius, accusamus nesciunt.</p>
    </div>
  )
}
