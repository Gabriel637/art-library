import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Content } from './styled';
import Card from '../../components/Card';
import data from '../../assets/data.json';

const Home = () => (
  <Container>
    <Title>ART LIBRARY</Title>
    <Content>
      {data.map((artist) => (
        <Link to={`artist/${artist.name}`}>
          <Card
            name={artist.name}
            image={artist.image}
            highlight={artist.highlight}
            color={artist.color}
          />
        </Link>
      ))}
    </Content>
  </Container>
);

export default Home;
