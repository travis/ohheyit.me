import React, {useState} from 'react';

export default ({
  add, del, exists, addContent, deleteContent, existsContent
}) => {
  const [hover, setHover] = useState(false)
  if (exists) {
    return <button onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)}
                   onClick={del}>{hover ? deleteContent : existsContent}</button>
  } else {
    return <button onClick={add}>{addContent}</button>
  }
}
