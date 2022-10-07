import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const About = () => {
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
    const currentArtist = data.find((item) => item.name === params.name);
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
              <Card name={art.name} image={art.image} />
            ))}
          </Content>
        )}
      </ContentContainer>
    </Container>
  );
};

export default About;
