import React, { useState } from 'react';

const ImageUpload = () => {
  const [imgInp, setImgInput] = useState(new FormData());

  const setImgInp = (img) => {
    setImgInput(img.files[0]);
  };

  const uploadImg = async() => {
    const form = new FormData();
    form.append('image', imgInp);

    await fetch('http://127.0.0.1:3000/api/v1/newimg', {
      method: 'POST',
      body: form,
    }).then((response => response.json()))
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <input  type="file" onChange={(e) => setImgInp(e.target)} />
      <button type="button" onClick={uploadImg}>Submit</button>
    </div>
  );
}

export default ImageUpload
