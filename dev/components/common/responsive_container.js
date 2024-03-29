import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  flex:1 0 0;
  margin-right: auto;
  margin-left: auto;
  
  padding-left: 15px;
  padding-right: 15px;
  
  height: 100vh;
  width: 100vw;
  @media (min-width: 768px) {
    width: 750px;
    
  @media (min-width: 992px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
