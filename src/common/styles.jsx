import styled, { keyframes } from "styled-components";

export const ArrayHolder = styled.div`
  display: flex;
  height: 400px;
  width:100%;
  background-color:rgba(102, 221, 64, 0.4);
  padding: 15px;
  overflow: auto;
`;


export const ArrayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 30px;
  border-radius: 5px;
  flex-shrink: 0;
`;


export const swapAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  10%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  30% {
    transform: translate(0px, -50px);
    background-color: ${swapColor};
  }
  70% {
    transform: translate(-${distance * 50}px, -50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
  }
`;

export const moveAnimation = () => keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  100%{
    transform: translate(50px, 0px);
  }
`;

export const destinationAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, 50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(-${distance * 50}px, 50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
    background-color: none;
  }
`;

export const sourceAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, -50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(${distance * 50}px, -50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(${distance * 50}px, 0px);
    background-color: none;
  }
`;