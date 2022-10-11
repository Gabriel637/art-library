import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ArtContainer,
  ArtImage,
  ArtInfo,
  InfoDesc,
  LinkItem,
} from './styled';
import { IArt, IArtist } from '../../types';
import data from '../../assets/data.json';

const Art = () => {
  const params = useParams();
  const [art, setArt] = useState<IArt>();
  const [artist, setArtist] = useState<IArtist>();

  useEffect(() => {
    const currentArtist = data.find((item) => item.name === params.name) as IArtist;
    const currentArt = currentArtist.arts.find((item) => item.name === params.art_name) as IArt;
    setArt(currentArt);
    setArtist(currentArtist);
  }, [params.art_name, params.name]);

  if (art === undefined || artist === undefined) {
    return <>404</>;
  }

  return (
    <Container>
      <TitleContainer>
        <Title color={artist.color}>{art.name}</Title>
        <SubTitle>
          <span>by</span>
          <p> {params.name}</p>
        </SubTitle>
      </TitleContainer>
      <ArtContainer>
        <ArtInfo>
          <ArtImage src={art.image} />
          <InfoDesc>{art.description}</InfoDesc>
          <a href={art.url}>
            <LinkItem>see more</LinkItem>
          </a>
        </ArtInfo>
      </ArtContainer>
    </Container>
  );
};

export default Art;
