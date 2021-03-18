import React from "react"

export const Colors = ({ match: { params }}) => {
  console.log(params)
  return <div style={{textAlign: "center", backgroundColor: `#${params.colorCode}`}}>Colors</div>;
}
  

/*
 * match
 *  params: (object), key/value pairs parsed from the URL corresponding to the dynamic segments of the path
 *  isExact: (boolean), ture if the entire URL was matched (no trailing characters) 
 *  path: (string), the path pattern used ro match. Useful for building nested routes. We'll take a look at this later in one of the next 
 *  url: (string), the matched portion of the URL. Useful for building nested links.
 */