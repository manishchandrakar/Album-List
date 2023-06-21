import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AddAlbum = ({ addAlbumToList }) => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddAlbum = () => {
    addAlbumToList(Number(userId), title);
    setUserId('');
    setTitle('');
  };

  return (
    <>
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Enter New Album Details</h4>
          <div className="inp-container">
            Enter User Id:
            <input
              id="aaform-userid-inp"
              type="number"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <div className="inp-container">
            Enter Album Title:
            <input
              id="aaform-title-inp"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <Link to="/">
              <button onClick={handleAddAlbum}>Add To List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;

