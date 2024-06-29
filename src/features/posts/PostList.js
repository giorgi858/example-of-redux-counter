import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectAllPosts } from './postSlice'
import { useSelector } from 'react-redux'
import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostList = () => {
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const navigage = useNavigate()

  const goAnother = () => {
    navigage('/')
  }
   const renderdPosts = orderedPosts.map((post) => (
    <article key={post.id}>
        <h2>{post.title}</h2>
        <h4>{post.content}</h4>
        <p className='postCredit'>
          <PostAuthor userId={post.userId}/> 
          <TimeAgo timeStamp={post.date}/> 
        </p>
        <ReactionButtons post={post}/>
    </article>
   ))

  return (
    <div>
      <AddPostForm/>
    {renderdPosts}
    <button onClick={goAnother}  className='btn btn-outline-success'>Go Home</button>
    </div>
  )
}
export default PostList