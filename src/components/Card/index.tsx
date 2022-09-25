import React from 'react';
import { Container, Title } from './styled';

interface CardProps {
  name: string;
  image: string;
  highlight: string;
}

const Card = ({ name, image, highlight }: CardProps) => (
  <Container image={image} highlight={highlight}>
    <Title>{name}</Title>
  </Container>
);

export default Card;
