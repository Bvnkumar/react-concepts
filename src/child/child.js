import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Child(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [message, setMessage] = useState(1);
  const { increment, counter, decrement, reset } = props;
  console.log("counter ", counter);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("response", response.data);
      setPosts(response.data);
    });
  }, [message]);
  if (!posts) return [];
  return (
    <>
      {" "}
      <h2>----{counter}----</h2>
      <button onClick={increment}>Increment</button>
      <br></br>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <button onClick={reset}>Reset</button>
      <h1>
        {props.name} component {props.id} {message} ----Page- {id}
      </h1>
      <button onClick={() => setMessage(message + 1)}>Count</button>
      <br></br>
      <button onClick={() => navigate("/")}>Back</button>
      {posts.map((post) => (
        <p key={post.id}>
          {post.id}-{post.title}
        </p>
      ))}
    </>
  );
}
export default Child;
