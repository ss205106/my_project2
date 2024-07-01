import React, { useEffect, useState } from 'react';
import "../../css/TextAnimation.css"
const TextAnimation = ({text,tiem}) => {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const[ completionWord,setcompletionWord] =useState(text);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, tiem);

    return () => {
      clearInterval(typingInterval);
    };
  });
    return (
        <div className="text-animation">
            {/* <p>I am</p> */}
            <h2>{blogTitle}<span></span></h2>
        </div>
    );
};

export default TextAnimation;