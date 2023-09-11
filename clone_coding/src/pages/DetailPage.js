import styled from 'styled-components';

// components
import NavBar from '../components/NavBar';

const DetailPage = () => {
  return (
    <Page>
      <NavBar />
    </Page>
  );
};

export default DetailPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0px auto;
`;
