import { useState } from "react";
import "./App.css";

import alps from "./assets/alps.jpg";
import aperitivo from "./assets/aperitivo.jpg";
import eagle from "./assets/eagle.jpg";
import lions from "./assets/lions.jpg";
import obelisk from "./assets/obelisk.jpg";
import penguins from "./assets/obelisk.jpg";
import peru from "./assets/peru.jpg";
import pizza from "./assets/pizza.jpg";
import prague from "./assets/prague.jpg";
import prosecco from "./assets/prosecco.jpg";
import pyramid from "./assets/pyramid.jpg";
import rio from "./assets/rio.jpg";
import temple from "./assets/temple.jpg";
import venice from "./assets/venice.jpg";
import wall from "./assets/wall.jpg";

const colorDuos = [
  ["#2BAE66FF", "#FCF6F5FF"], // Island Green and White
  ["#FAEBEFFF", "#333D79FF"], // Pink and Navy Blue
  ["#89ABE3FF", "#FCF6F5FF"], // Sky Blue and White
  ["#FAD0C9FF", "#6E6E6DFF"], // Pink Salt and Charcoal Gray
  ["#00539CFF", "#EEA47FFF"], // Royal Blue and Peach
  ["#5F4B8BFF", "#E69A8DFF"], // Ultra Violet and Blooming Dahlia
  ["#2C5F2D", "#97BC62FF"], // Forest Green and Moss Green
  ["#0063B2FF", "#9CC3D5FF"], // Electric Blue Lemonade and Aquamarine
  ["#603F83FF", "#C7D3D4FF"], // Royal Purple and Ice Flow
  ["#990011FF", "#FCF6F5FF"], // Space Cherry and White
  ["#F2EDD7FF", "#755139FF"], // Sweet Corn and Toffee
  ["#DF6589FF", "#3C1053FF"], // Rose Pink and Purple
  ["#FFE77AFF", "#2C5F2DFF"], // Mellow Yellow and Verdant Green
  ["#FCF951FF", "#422057FF"], // Lemon Tonic and Purple
];

const images = [
  alps,
  aperitivo,
  eagle,
  lions,
  obelisk,
  penguins,
  peru,
  pizza,
  prague,
  prosecco,
  pyramid,
  rio,
  temple,
  venice,
  wall,
];

const App = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const changeImage = () => {
    const length = images.length - 1;
    setCurrentImg((currentImg) => (currentImg < length ? currentImg + 1 : 0));
  };

  const changeColors = () => {
    setColorIndex((colorIndex) => (colorIndex + 1) % colorDuos.length);
  };

  const currentColorDuo = colorDuos[colorIndex];

  return (
    <section>
      <header
        style={{
          color: currentColorDuo[0],
          backgroundColor: currentColorDuo[1],
        }}
      >
        <h1 onClick={changeColors}>Welcome to the Gallery!</h1>
        <h2>
          An open image gallery project
          <br />
          by Ali Ramazanov
        </h2>
      </header>
      <figure>
        <figcaption>
          {currentImg + 1} / {images.length}
        </figcaption>
        <img src={images[currentImg]} onClick={changeImage} alt="images" />
      </figure>
    </section>
  );
};

export default App;
