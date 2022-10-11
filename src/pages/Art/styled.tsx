import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 40px;
  color: #ffffff;
  font-family: 'Amatic SC';
`;

export const SubTitle = styled.div`
  color: #ffffff;
  font-family: 'Amatic SC';
  margin-top: -20px;
  display: flex;
  align-items: baseline;
  gap: 3px;

  span {
    font-size: 20px;
  }

  p {
    font-size: 32px;
  }
`;

export const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ArtImage = styled.img`
  max-width: 300px;
  max-height: 300px;

  @media ${devices.desktop} {
    max-width: 500px;
    max-height: 500px;
  }
`;

export const ArtInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const InfoDesc = styled.span`
  font-size: 14px;
  color: #ffffff;
  text-align: center;

  @media ${devices.desktop} {
    width: 50%;
  }
`;

export const LinkItem = styled.span`
  font-size: 14px;
  color: #ffffff;
  text-decoration: underline;
`;
