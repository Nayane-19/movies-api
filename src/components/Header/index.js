import React from 'react';
import useSettings from "../../hooks/useSettings";
import { THEMES } from "../../utils/constants";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// import Search from '../Search';

import { Container, HeaderContent, Title, Button } from './styles';



const Header = () => {
  const { settings, saveSettings } = useSettings();
  return (
    <Container>
      <HeaderContent className="content">
        <Title>App Filmes</Title>
        {/* <Search/> */}
        <div>
        <Button className={`btn-modo-noturno`}>
            {settings.theme === THEMES.DARK ? (
              <Brightness7Icon
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4Icon
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </Button>
        </div>
        
      </HeaderContent>
    </Container>
  );
};

export default Header;