import React from 'react';
import { useQuery } from '@tanstack/react-query';
import wait from '../waitFnc';
import axios from 'axios';

function Post({ id, setId }) {
  const queryPost = useQuery({
    queryKey: ['post', id],
    queryFn: () => {
      return wait(1000).then(
        async () => {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          return data;
        }
      )
    }
  })

  
  const handleBackClick = () => {
    setId(-1)
  }

  if(queryPost.status === 'loading') return <div className='loader'></div>
  if(queryPost.status === 'error') return <div>{queryPost.error.message}</div>

  return (
    <div>
      <h1>User ID:{id}</h1>
      <br />
      {queryPost.data.title}
      {queryPost.data.body}
      <br /><br />
      <button onClick={handleBackClick}>Back</button>
    </div>
  )
}

export default Post
