import React from 'react'

function Posts({ posts, setId }) {

  const handleId = (postId) => {
    setId(postId)
  }
  console.log(posts)
  return (
    <>
      <h1>React Query Exercise</h1>
      {posts.map(post => (
        <div style={{margin:'5px 0'}} onClick={() => handleId(post.id)} key={post.id}>
          <a  href="#">{post.title}</a>
        </div>
      ))} 
    </>
  ) 
}

export default Posts
