import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Title,
  ArtistContainer,
  ArtistImage,
  ArtistInfo,
  Content,
  InfoItem,
  ContentContainer,
} from './styled';
import Card from '../../components/Card';
import { IArtist, IArt } from '../../types';
import data from '../../assets/data.json';

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState<IArtist>();

  useEffect(() => {
    const currentArtist = data.find((item) => item.name === params.name) as IArtist;
    setArtist(currentArtist);
  }, [params.name]);

  if (artist === undefined) {
    return <>404</>;
  }

  return (
    <Container>
      <ArtistContainer>
        <ArtistImage src={artist.image} />
        <ArtistInfo>
          <Title>{artist.name}</Title>
          <InfoItem>{artist.full_name}</InfoItem>
          <InfoItem>
            {artist.birthdate}, {artist.birthplace}
          </InfoItem>
          <InfoItem>{artist.description}</InfoItem>
        </ArtistInfo>
      </ArtistContainer>
      <ContentContainer>
        {artist.arts && artist.arts.length > 0 && (
          <Content>
            {artist.arts.map((art: IArt) => (
              <Link to={`${art.name}`}>
                <Card name={art.name} image={art.image} />
              </Link>
            ))}
          </Content>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Artist;
