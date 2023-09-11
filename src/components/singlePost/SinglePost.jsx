import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg"
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Eranga</b>
          </span>
          <span className="singlePostDate">
            1 hour ago
          </span>
        </div>
        <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor soluta repellendus consectetur magnam modi dicta vero asperiores ex nemo itaque veniam assumenda quasi sequi rerum necessitatibus temporibus eaque consequuntur.
        </p>
      </div>
    </div>
  );
}
