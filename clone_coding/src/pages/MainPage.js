import styled from 'styled-components';

// components
import NavBar from '../components/NavBar';
import Introduction from '../components/MainPage/Introduction';

const MainPage = () => {
  return (
    <Page>
      <NavBar />
      <Introduction />
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
