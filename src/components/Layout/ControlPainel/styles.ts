import styled from 'styled-components';
import { Search } from '../../../styles/GlobalIcons';
import { Notifications } from '../../../styles/GlobalIcons';

// LG - Logo
// IS - InputSearch
// MN - Menu
// SB - SideBar
// MC - MainContant

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 282px minmax(260px, auto) 538px;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'LG IS MN'
    'SB MC MC';

  height: 100vh;
`;

export const InputSearch = styled.div`
  grid-area: IS;
  display: flex;
  background: var(--color-primary);
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);

  > input {
    width: 100%;
    height: 45px;
    background: var(--color-background);
    border-radius: 4px;
    padding-left: 48px;
  }

  > svg {
    position: relative;
    left: 32px;
    z-index: 2;
  }
`;
export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  color: var(--color-input);
`;
export const Menu = styled.div`
  grid-area: MN;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);
`;
export const MenuIcons = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg:not(:las-child) {
    margin-right: 15px;
  }
`;
export const NotificationIcon = styled(Notifications)`
  width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.6);
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: gray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  > strong {
    margin-bottom: 2px;
    font-size: 12pt;
  }

  > span {
    font-size: 9pt;
  }
`;

export const Logo = styled.div`
  grid-area: LG;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 38px;

  background: var(--color-primary);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);

  > img {
    width: 70px;
    height: 70px;
  }
`;
