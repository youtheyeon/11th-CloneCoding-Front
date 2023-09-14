import styled from 'styled-components';

// images
import itemCover1 from '../../images/intro-cover.webp'; //임시 이미지

const Article = () => {
  return (
    <Wrapper>
      {/* 사용자 정보 */}
      <User>
        <div>
          {/* 사용자 정보 왼쪽 */}
          <div>
            <Profile src={itemCover1} alt='profile' />
            <ul>
              <li>닉네임</li>
              <li>주소</li>
            </ul>
          </div>
          {/* 사용자 정보 오른쪽 */}
          <div>
            <ul style={{textAlign: 'right'}}>
              <span>37.2 °C</span>
              <TempBar>
                <div />
              </TempBar>
            </ul>
            <Face src={itemCover1} alt='temperature' />
          </div>
        </div>
        <TempText>매너온도</TempText>
      </User>

      {/* 내용 */}
      <Content>
        <span>베트남 동 판매합니다.</span>
        <span>분류 · 시간</span>
        <span>가격</span>
        <div>내용</div>
        <span>관심 14 ∙ 채팅 33 ∙ 조회 3899</span>
      </Content>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = styled.div`
  margin-top: 25px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
  width: 677px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      align-items: center;
      gap: 12px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li:nth-child(1) {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.6px;
        }

        li:nth-child(2) {
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.6px;
        }

        span {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: -0.5px;
          color: #1561a9;
        }
      }
    }
  }
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Face = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const TempBar = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100px;
  height: 4px;
  background-color: #e9ecef;
  border-radius: 10px;

  div {
    position: absolute;
    width: 30%; //임시 값
    height: 100%;
    background-color: #1561a9;
    border-radius: 10px;
  }
`;

const TempText = styled.div`
  margin-left: auto;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 677px;
  padding: 30px 0px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;

  div {
    margin: 16px 0px;
    font-size: 17px;
    line-height: 1.6;
    letter-spacing: -0.6px;
    word-break: break-all;
  }

  span:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  span:nth-child(2),
  span:nth-child(5) {
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }

  span:nth-child(3) {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.76;
    letter-spacing: -0.6px;
  }
`;
