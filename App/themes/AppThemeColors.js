const theme_id = "theme_1";
var primary, secondary, tertiary, background, inactive_primary, inactive_secondary = '';
switch (theme_id) {
  case 'theme_1':
    primary = "#396F81";
    secondary = '#ECDD80';
    tertiary= '#98B9C4';
    background = '#e5e7eb';
    inactive_primary = '#D8D8D8';
    inactive_secondary = '#9E9E9E';
    break;

  case 'theme_2':
    primary = '#396F81';
    secondary = '#ECDD80';
    tertiary= '#F7B633';
    background = '#F6F6F6';
    inactive_primary = '#FFCAC7';
    inactive_secondary = '#BA9391';
    break;
  
  case 'theme_3':
    primary = '#000000';
    secondary = '#FFFFFF';
    tertiary= '#F7B633';
    background = '#E8E8E8';
    inactive_primary = '#B9B9B9';
    inactive_secondary = '#878787';
    break;

  case 'theme_4':
    primary = '#81CCC4';
    secondary = '#FFFFFF';
    tertiary= '#F7B633';
    background = '#303030';
    inactive_primary = '#DCF1EE';
    inactive_secondary = '#A1B0AE';
    break;

  case 'theme_5':
    primary = '#1D2B50';
    secondary = '#E0FBFC';
    tertiary= '#F7B633';
    background = '#BFD0DA';
    inactive_primary = '#C1C5CF';
    inactive_secondary = '#8D9097';
    break;

  case 'theme_6':
    primary = '#fef160';
    secondary = '#00005D';
    tertiary= '#F7B633';
    background = '#303030';
    inactive_primary = '#C1C5CF';
    inactive_secondary = '#8D9097';
    break;

  default:
    primary = '#213260';
    secondary = '#EFF1F3';
    tertiary= '#F7B633';
    background = '#f3f8ff';
    inactive_primary = '#C2C7D3';
    inactive_secondary = '#8E919A';
    break;
}

export default {
  primary,
  secondary,
  tertiary,
  background,
  inactive_primary,
  inactive_secondary,
}