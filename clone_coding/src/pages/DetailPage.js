import styled from 'styled-components';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

// components
import NavBar from '../components/NavBar';
import Article from '../components/DetailPage/Article';
import ImageSlider from '../components/DetailPage/ImageSlider';

import {itemData} from '../_mock/itemData';

const DetailPage = () => {
  const {id} = useParams();
  const [item, setItem] = useState(itemData[id - 1]);

  console.log(item);
  return (
    <Page>
      <NavBar />
      <ImageSlider images={item.images} />
      <Article item={item} />
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
