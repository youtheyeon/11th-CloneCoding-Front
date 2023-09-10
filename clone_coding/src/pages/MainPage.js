import styled from 'styled-components';

// components
import NavBar from '../components/NavBar';

// images

const MainPage = () => {
  return (
    <Page>
      <NavBar />
    </Page>
  );
};

export default MainPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0px auto;
`;
