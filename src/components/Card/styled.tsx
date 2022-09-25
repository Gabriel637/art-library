import styled from 'styled-components';

interface StyledContainerProps {
  image: string;
  highlight: string;
}

export const Container = styled.div<StyledContainerProps>`
  border: 5px solid #ffffff;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: top;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 150ms linear;
  cursor: pointer;

  :hover {
    background-image: ${(props) => `url(${props.highlight})`};
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  position: absolute;
  text-transform: uppercase;
  bottom: 0;
  margin-bottom: 0;
  background-color: #000000;
  width: 100%;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
