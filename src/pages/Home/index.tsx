import React from 'react';
import { Container, Title, Content } from './styled';
import Card from '../../components/Card';
import data from '../../assets/data.json';

const Home = () => (
  <Container>
    <Title>ART LIBRARY</Title>
    <Content>
      {data.map((artist) => (
        <Card name={artist.name} image={artist.image} highlight={artist.highlight} />
      ))}
    </Content>
  </Container>
);

export default Home;
