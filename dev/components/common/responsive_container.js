import styled from 'styled-components';

const WideContainer = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 88vh;
  
  @media (min-width: 768px) {
    width: 750px;
    
  @media (min-width: 992px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const NormalContainer = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 88vh;
  
  @media (min-width: 768px) {
    width: 750px;
    
  @media (min-width: 992px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export { WideContainer, NormalContainer };
