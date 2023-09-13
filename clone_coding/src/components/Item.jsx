import styled from 'styled-components';

// images
import itemCover1 from '../images/intro-cover.webp'; //임시 이미지

const Item = () => {
  return (
    <Container>
      <div>
        <img src={itemCover1} alt='item cover 1' />
      </div>
      <span>제목</span>
      <span>가격 원</span>
      <span>주소</span>
      <span>관심 3·채팅 19</span>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  div {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;

    background-color: #212529; //임시
    border-radius: 10px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span:nth-child(2) {
    margin-top: 8px;
    font-size: 16px;
    letter-spacing: -0.02px;
  }

  span:nth-child(3) {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
  }

  span:nth-child(4) {
    font-size: 13px;
    line-height: 1.5;
  }

  span:nth-child(5) {
    font-size: 13px;
    color: #868e96;
  }
`;
