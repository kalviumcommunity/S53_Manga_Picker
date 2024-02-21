import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const HeaderItem = ({ name, Icon, i, path, path1 }) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = (e) => {
    if (i === 2) {
      setOpen(!open);
    }
  };

  return (
    <div
      key={i}
      className="text-white flex items-center gap-3
      text-[15px] font-semibold cursor-pointer 
      underline-offset-8 mb-2"
      onClick={handleClick}
    >
      <Icon />
      {i === 0 ? (
        <Link to='/'>
          <h2 className="hover:underline">{name}</h2>
        </Link>
      ) : i === 3 ? (
        <Link to='/Filter'>
          <h2 className="hover:underline">{name}</h2>
        </Link>
      ) : (
        <h2 className="hover:underline">{name}</h2>
      )}
      <Modal open={open} setopen={setOpen} />
    </div>
  );
}

export default HeaderItem;
