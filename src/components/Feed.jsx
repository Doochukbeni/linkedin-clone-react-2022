import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function postQueryDocument() {
      const postQuery = query(
        collection(db, "posts"),
        orderBy("timestamp", "desc")
      );

      onSnapshot(postQuery, (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
    postQueryDocument();
    // async function getPosts(db) {
    //   const postsCol = collection(db, "posts");
    //   const postSnapshot = await getDocs(postsCol);
    //   const postList = postSnapshot.docs.map((doc) => doc.data());
    //   return postList;
    // }
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput(" ");

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form action="">
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
};

export default Feed;
