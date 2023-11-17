import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props{
    onClick: () => void;
}

const Like = ({onClick}: Props ) => {

  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }

  if (status) return <div><AiFillHeart color="#ff6b81" size={30} onClick={() => setStatus(false)}/></div>;
  return <div><AiOutlineHeart size={30} onClick={() => setStatus(true)}/></div>

};

export default Like

