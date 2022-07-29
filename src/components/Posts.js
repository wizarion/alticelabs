import { memo } from 'react';

const Posts = props => {
  return props.posts.map((post, ind) => {
    return (
      <details key={ind}>
        <summary>Post {post.id}</summary>
        <strong>{post.title}</strong>
        <br />
        <p>{post.body}</p>
        <br />
      </details>
    )
  });
}

export default memo(Posts);