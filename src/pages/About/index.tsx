import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title, UserContainer, UserImage, UserInfo, Content, InfoItem } from './styled';
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
    const currentArtist = data.filter((item) => item.name === params.name);
    setArtist(currentArtist[0]);
  }, [params.name]);

  return (
    <Container>
      <UserContainer>
        <UserImage src={artist.image} />
        <UserInfo>
          <Title>{artist.name}</Title>
          <InfoItem>{artist.birthdate}</InfoItem>
          <InfoItem>{artist.birthplace}</InfoItem>
          <InfoItem>{artist.description}</InfoItem>
        </UserInfo>
      </UserContainer>
      <button onClick={() => setArtist(data[0])}>dsadsads</button>
      {artist.arts && artist.arts.length > 0 && (
        <Content>
          {artist.arts.map((art: IArt) => (
            <Card name={art.name} image={art.image} />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default About;
