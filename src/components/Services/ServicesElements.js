import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
    padding-top: 40px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 16px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ServicesIcon = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesData = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  display: inline-block;
  vertical-align: middle;
  width: calc(50% - 5px);
  margin-right: 5px;
`;

export const ServicesH21 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  text-align: right;
`;

export const ServicesP = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  height: 50px;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  outline: none;
  font-size: 15px;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
