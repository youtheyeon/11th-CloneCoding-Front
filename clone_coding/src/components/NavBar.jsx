import styled from 'styled-components';

// images
import logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <Nav>
      <img src={logo} alt='logo' style={{width: '65px', height: '35px'}} />
      <Category>
        <li style={{color: 'orange'}}>중고거래</li>
        <li>동네가게</li>
        <li>알바</li>
        <li>부동산 직거래</li>
        <li>중고차 직거래</li>
      </Category>
      <div>
        <SearchInput placeholder='물품이나 동네를 검색해보세요' />
        <ChattingBtn>채팅하기</ChattingBtn>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 64px;
  padding: 12px 20px;
  box-sizing: border-box;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: row;
  }
`;

const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 661px;
  height: auto;
  row-gap: 10px;
  column-gap: 30px;
  list-style: none;

  li {
    font-weight: 600;
    color: #4d5159;
    cursor: pointer;

    &:hover {
      color: #888888;
    }
  }

  /* 화면 너비가 768px 이하일 때 카테고리를 띄우지 않음 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 288px;
  height: 40px;
  padding: 9px 12px;
  box-sizing: border-box;
  background-color: #f2f3f6;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
`;

const ChattingBtn = styled.button`
  margin-left: 12px;
  width: 100px;
  height: 40px;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #535353;
  }
`;
