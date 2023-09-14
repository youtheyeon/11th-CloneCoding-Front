import styled from 'styled-components';

// components
import NavBar from '../components/NavBar';
import Article from '../components/DetailPage/Article';
import ImageSlider from '../components/DetailPage/ImageSlider';

const DetailPage = () => {
  return (
    <>
      <Page>
        <NavBar />
        <ImageSlider />
        <Article />
      </Page>
    </>
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
