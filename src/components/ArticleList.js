import React from "react";
import Article from "./Article";

export default function ArticleList({posts}) {

  return(
    
    <main>
      {
        posts.map((item) => {
          return (<Article 
            key={item.id}
            title={item.title}
            date={item.date}
            preview={item.preview}
            />)
        })
      }
    </main>
  )
}