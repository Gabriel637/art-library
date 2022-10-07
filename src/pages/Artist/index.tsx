import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Title,
  UserContainer,
  UserImage,
  UserInfo,
  Content,
  InfoItem,
  ContentContainer,
} from './styled';
import Card from '../../components/Card';
import { IArtist, IArt } from '../../types';
import data from '../../assets/data.json';

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState<IArtist>({
    id: 0,
    name: '',
    full_name: '',
    color: '',
    birthplace: '',
    birthdate: '',
    image: '',
    highlight: '',
    description: '',
    arts: [],
  });

  useEffect(() => {
    const currentArtist: IArtist = data.find((item) => item.name === params.name);
    setArtist(currentArtist);
  }, [params.name]);

  return (
    <Container>
      <UserContainer>
        <UserImage src={artist.image} />
        <UserInfo>
          <Title>{artist.name}</Title>
          <InfoItem>{artist.full_name}</InfoItem>
          <InfoItem>
            {artist.birthdate}, {artist.birthplace}
          </InfoItem>
          <InfoItem>{artist.description}</InfoItem>
        </UserInfo>
      </UserContainer>
      <ContentContainer>
        {artist.arts && artist.arts.length > 0 && (
          <Content>
            {artist.arts.map((art: IArt) => (
              <Link to={`/art/${art.name}`}>
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
