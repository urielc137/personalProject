import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/imageGrid';
import Modal from './components/Modal';

const Body = ({handleLogout}) => {
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <h3>Here are your photos</h3>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg}/>
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
            </div>
        </section>
    );
};

export default Body;