import "./styles.css";
import { Box, TextBox, ImageBox } from "./Styles";
import ban1 from "./images/bnn1.jpg";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 }
};

const textVariants = {
  beforeHover: { opacity: 0, position: "absolute", bottom: "-85px" },
  onHover: { opacity: 1, position: "absolute", top: "68%" }
};
export default function App() {
  return (
    <div className="App">
      <Box initial="beforeHover" whileHover="onHover">
        <ImageBox variants={imageVariants}>
          <img src={ban1} className="respic" alt="sl1" />
        </ImageBox>
        <TextBox variants={textVariants}>
          <h1> Lorium 1</h1>
          Lorem ipsum dolor amet mustache knausgaard swag.
        </TextBox>
      </Box>

      <Box initial="beforeHover" whileHover="onHover">
        <ImageBox variants={imageVariants}>
          <img src={ban1} className="respic" alt="sl1" />
        </ImageBox>
        <TextBox variants={textVariants}>
          <h1> Lorium 2</h1>
          Lorem ipsum dolor amet mustache knausgaard swag.
        </TextBox>
      </Box>

      <Box initial="beforeHover" whileHover="onHover">
        <ImageBox variants={imageVariants}>
          <img src={ban1} className="respic" alt="sl1" />
        </ImageBox>
        <TextBox variants={textVariants}>
          <h1> Lorium 3</h1>
          Lorem ipsum dolor amet mustache knausgaard swag.
        </TextBox>
      </Box>
      <Box initial="beforeHover" whileHover="onHover">
        <ImageBox variants={imageVariants}>
          <img src={ban1} className="respic" alt="sl1" />
        </ImageBox>
        <TextBox variants={textVariants}>
          <h1> Lorium 4</h1>
          Lorem ipsum dolor amet mustache knausgaard swag.
        </TextBox>
      </Box>
    </div>
  );
}
