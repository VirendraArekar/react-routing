import React from 'react';

export default function BlogInfo({match}) {
  return(
    <div>
      <b><h3 className="text-center">Blog Title is {match.params.title}</h3></b>
    </div>
  )
}
