import { Link } from 'react-router-dom';

import { Header, TooltipBox, HeaderLeftBox, HeaderRightBox, H2 } from './CurrentOrderHeader.style';

const CurrentOrderHeader = () => {
  return (
    <div css={Header}>
      <div css={HeaderLeftBox}>
        <h2 css={H2}>최근에 주문했어요</h2>
        <i css={TooltipBox}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
        </i>
      </div>

      <div css={HeaderRightBox}>
        <Link to="/order-detail">
          <span>주문내역 보기</span>
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default CurrentOrderHeader;
