import React from 'react';
import {
  Grid,
  InputSearch,
  SearchIcon,
  Menu,
  MenuIcons,
  NotificationIcon,
  Profile,
  InfoProfile,
  Avatar,
  Logo,
} from './styles';
import LogoImage from '../../assets/images/logo.png';
import SideBar from '../SideBar';
import MainContent from '../MainContent';
const Layout: React.FC = () => {
  return (
    <Grid>
      <Logo>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <InputSearch>
        <SearchIcon />
        <input type="search" placeholder="Search..." />
      </InputSearch>
      <Menu>
        <MenuIcons>
          <NotificationIcon />
        </MenuIcons>
        <Profile>
          <Avatar />
          <InfoProfile>
            <strong>Juliano Suzin</strong>
            <span>Administrador</span>
          </InfoProfile>
        </Profile>
      </Menu>
      <SideBar />
      <MainContent />
    </Grid>
  );
};

export default Layout;
