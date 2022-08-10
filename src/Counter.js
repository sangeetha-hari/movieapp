import { useState } from 'react';

export default function Counter() {
  // const like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const inc = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <button onClick={() => { inc(); }}>👍{like}</button>
      <button onClick={() => { setDislike(dislike + 1); }}>👎{dislike}</button>
    </div>
  );
}
