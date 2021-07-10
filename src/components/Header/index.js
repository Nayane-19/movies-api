import React from 'react';
import useSettings from "../../hooks/useSettings";
import { THEMES } from "../../utils/constants";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import Search from '../Search';

import { Container } from './styles';



const Header = () => {
  const { settings, saveSettings } = useSettings();
  return (
    <Container>
      App Filmes
      <div className="content">
        <Search/>
        <button className={`btn-modo-noturno`}>
            {settings.theme === THEMES.DARK ? (
              <Brightness7Icon
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4Icon
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </button>
      </div>
    </Container>
  );
};

export default Header;