import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px 0;
  flex-direction: column;
  background-color: black;
`;

export const Title = styled.span`
  font-size: 40px;
  color: #ffffff;
  font-family: 'Amatic SC';
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const ArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 20px 0;

  @media ${devices.desktop} {
    width: 60%;
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
`;

export const ArtistImage = styled.img`
  width: 250px;
  height: 250px;
`;

export const ArtistInfo = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const InfoItem = styled.span`
  font-size: 14px;
  color: #ffffff;
`;
