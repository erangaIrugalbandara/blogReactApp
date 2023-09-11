import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
        />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet  
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto dolorum ad esse sint in tempora corrupti placeat delectus voluptas unde, odit reprehenderit veritatis, repudiandae ea dicta deleniti blanditiis fugiat
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto dolorum ad esse sint in tempora corrupti placeat delectus voluptas unde, odit reprehenderit veritatis, repudiandae ea dicta deleniti blanditiis fugiat
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto dolorum ad esse sint in tempora corrupti placeat delectus voluptas unde, odit reprehenderit veritatis, repudiandae ea dicta deleniti blanditiis fugiat
        </p>

    </div>
  )
}
