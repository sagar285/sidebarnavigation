import React, { useContext } from 'react';
import { CreateModalContext } from './Context';
import Modal from './Modal';

const Maincontent = () => {
  const { openmodal, setopenmodal } = useContext(CreateModalContext);

  return (
    <div className={`maincontent ${openmodal ? 'blurred' : ''}`}>
      <div className='flexbox'>
        <ul className='listflexbox'>
          <li>new</li>
          <li>Home</li>
          <li>Contact</li>
        </ul>
        <button onClick={() => setopenmodal(!openmodal)}>plus</button>
      </div>

      {openmodal && (
        <>
          <div className="backdrop"></div> {/* Backdrop to create shadow effect */}
          <Modal />
        </>
      )}
    </div>
  );
};

export default Maincontent;
