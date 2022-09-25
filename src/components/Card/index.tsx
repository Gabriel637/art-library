import React from 'react';
import { Container, Title } from './styled';

interface CardProps {
  name: string;
  image: string;
  highlight?: string | undefined;
  color?: string | undefined;
}

const Card = ({ name, image, highlight = '', color = '' }: CardProps) => (
  <Container image={image} highlight={highlight} color={color}>
    <Title>{name}</Title>
  </Container>
);

export default Card;
