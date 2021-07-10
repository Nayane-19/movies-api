import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../styles/themes';
import useSettings from '../../hooks/useSettings';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;