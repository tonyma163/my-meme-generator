import React from "react";

export default function Meme() {
  //img-stuff
  const img = "imgs/zyzz.jpg";

  const [file, setFile] = React.useState({
    img: "",
  });

  //console.log(Object.keys(file).length)
  if (Object.keys(file).length === 1) {
    console.log("defaultImg");
    setFile(img);
  }

  function handleFile(event) {
    console.log(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  //text-stuff
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomTexxt: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          id="topText"
          name="topText"
          className="formInput"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          id="bottomText"
          name="bottomText"
          className="formInput"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <input
          type="file"
          id="file"
          accept="image/png, image/jpg"
          onChange={handleFile}
          className="selectFileButton"
        />
        <label for="file" className="inputLabel">
          Upload your own pic 📁
        </label>
      </div>
      <div className="meme">
        <img src={file} alt="" className="memeImg" />
        <h2 className="memeTextTop"> {meme.topText} </h2>
        <h2 className="memeTextBottom"> {meme.bottomText} </h2>
      </div>
      <div className="description">
        <p>use <b>'Window Key'</b> + <b>'Shift'</b> + <b>'S'</b></p>
        <p><b>OR</b></p>
        <p>mobile screen cut to save the image</p>
        <p>:D</p>
      </div>
    </main>
  );
}
