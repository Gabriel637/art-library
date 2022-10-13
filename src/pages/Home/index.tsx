import { Link } from 'react-router-dom';
import { Container, Title, Content } from './styled';
import Card from '../../components/Card';
import data from '../../assets/data.json';
import { IArtist } from '../../types';

const Home = () => (
  <Container>
    <Title>ART LIBRARY</Title>
    <Content>
      {data.map((artist: IArtist) => (
        <Link to={`artist/${artist.name}`} key={artist.id}>
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
