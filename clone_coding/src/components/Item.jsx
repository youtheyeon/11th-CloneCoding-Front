import styled from 'styled-components';

const Item = ({item}) => {
  return (
    <Container>
      <div>
        <img src={item.images[0]} alt='item cover' />
      </div>
      <span>{item.title}</span>
      <span>{item.price}원</span>
      <span>{item.place}</span>
      <span>
        관심 {item.like} · 채팅 {item.chat}
      </span>
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
