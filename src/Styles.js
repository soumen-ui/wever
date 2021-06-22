import styled from "styled-components";
import { motion } from "framer-motion";
// import img from "./images/gg.jpg";

// export const Container = styled.div`
//   width: 25%;
//   /*  height: 100vh;*/
//   /* display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #111;  */
// `;

export const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background: #fff;
  display: flex;

  overflow: hidden;
  margin-top: 0rem;
  position: relative;
  /* border: 1px solid green; */
`;

export const ImageBox = styled(motion.div)`
  /* border:1px solid red; */
  overflow: hidden;
`;

export const TextBox = styled(motion.div)`
  color: #fff;
  padding: 1rem;
  background: #344;
  width: 100%;
  overflow: hidden;
  z-index: 2;
`;
