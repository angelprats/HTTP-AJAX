import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <p>{props.friends.name}</p>
      <p>{props.friends.age}</p>
      <p>{props.friends.email}</p>
    </div>
  )
}

export default Friend;