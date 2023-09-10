import styled from 'styled-components';

// images
import itemCover1 from '../../images/intro-cover.webp';

const ItemBoard = () => {
  return (
    <Wrapper>
      <h1>중고거래 인기매물</h1>

      {/* 게시글 리스트 */}
      <ItemList>
        <Item>
          <img src={itemCover1} alt='item cover 1' />
          <span>제목</span>
          <span>가격 원</span>
          <span>주소</span>
          <span>관심 3·채팅 19</span>
        </Item>
      </ItemList>
    </Wrapper>
  );
};

export default ItemBoard;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 769px;
  height: 100%;

  h1 {
    margin: 0;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.5;
  }
`;

const ItemList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 44px;
  width: 757px;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  img {
    width: 223px;
    height: 223px;
    background-color: #212529;
    border-radius: 10px;
    object-fit: cover;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span:nth-child(2) {
    margin-top: 8px;
    font-size: 16px;
    letter-spacing: -0.02px;
    color: #212529;
  }

  span:nth-child(3) {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
  }

  span:nth-child(4) {
    font-size: 13px;
    line-height: 1.5;
    color: #212529;
  }

  span:nth-child(5) {
    font-size: 13px;
    color: #868e96;
  }
`;
