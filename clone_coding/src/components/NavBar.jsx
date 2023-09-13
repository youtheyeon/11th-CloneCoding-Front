import styled from 'styled-components';

// images
import logo from '../images/logo.svg';
import search from '../images/search-icon.png';
import menu from '../images/menu.webp';

const NavBar = () => {
  return (
    <Nav>
      <Container>
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
          <SearchIcon src={search} alt='search' />
          <ChattingBtn>채팅하기</ChattingBtn>
          <Menu src={menu} alt='menu' />
        </div>
      </Container>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 64px;
  padding: 12px 20px;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    font-size: 18px;
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

  /* 화면 너비가 992px 이하일 때 검색창을 띄우지 않음 */
  @media (max-width: 992px) {
    display: none;
  }
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;

  /* 화면 너비가 992px 이하일 때 아이콘을 띄움 */
  @media (min-width: 992px) {
    display: none;
  }
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
    color: #717171;
  }

  /* 화면 너비가 768px 이하일 때 버튼을 띄우지 않음 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.img`
  margin-left: 12px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  /* 화면 너비가 768px 이하일 때 아이콘을 띄움 */
  @media (min-width: 768px) {
    display: none;
  }
`;
