import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: black;
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
  max-width: 500px;
  max-height: 500px;
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
  width: 50%;
  text-align: center;
`;

export const LinkItem = styled.span`
  font-size: 14px;
  color: #ffffff;
  text-decoration: underline;
`;
