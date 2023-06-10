import { useQuery, useMutation } from "@tanstack/react-query";
import  { useState } from 'react';
import Posts from "./components/Posts";
import axios from "axios";
import Post from "./components/Post";
import wait from "./waitFnc";

const POSTS = [
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
];

function App() {
  const [id, setId ] = useState(-1);

  const queryPosts = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return wait(1000).then(async () => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
      });
    },
  });

  

  if (queryPosts.status === 'loading') return <div className="loader"></div >;
  if (queryPosts.status === 'error') return <h1>{queryPosts.error.message}</h1>;

  return(
    <>
      {
        id > -1 ? <Post id={id} setId={setId} /> : <Posts setId={setId} posts={queryPosts.data} />
      }
    </>
  )
}



export default App;
