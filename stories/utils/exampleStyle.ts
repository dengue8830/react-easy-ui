import { Theme, InputColor } from '../../src/types/appThemeTypes';

export const fixedColors = {
  danger: '#ff3d3e',
  warning: '#ffc700',
  info: '#2864ff',
  success: '#00d963',
  coin: '#FAB42C'
};

// Common input colors
const inputWhiteThemeDefaultColor: InputColor = {
  background: '#eeeeee', // '#f8f8f8',
  contrast: '#343a40', // '#4a4a4a',
  border: '#eeeeee', // '#f8f8f8',
  placeholder: '#757575',
  selection: 'gray'
};
const inputWhiteDisabledColor = '#b9b9b9';

const inputDarkThemeDefaultColor: InputColor = {
  background: '#2F343A', // '#f8f8f8',
  contrast: 'white', // '#4a4a4a',
  border: '#2F343A', // '#f8f8f8',
  placeholder: '#757575',
  selection: 'gray'
};
const inputDarkThemeDisabledColor = '#6D7175';

interface ThemeParams {
  theme: 'white' | 'dark';
  primaryColor: string;
  contrastPrimaryColor: string;
}

export function generateTheme(params: ThemeParams): Theme {
  const { theme, primaryColor, contrastPrimaryColor } = params;
  const isWhite = theme === 'white';
  const screenColor = isWhite ? 'white' : '#343A40';
  const screenContrastColor = isWhite ? '#343A40' : 'white';
  const screenNoteColor = isWhite ? '#767c83' : '#6D7175';
  const inputDefaultColor = isWhite
    ? inputWhiteThemeDefaultColor
    : inputDarkThemeDefaultColor;
  const inputDisabledColor = isWhite
    ? inputWhiteDisabledColor
    : inputDarkThemeDisabledColor;

  return {
    // theme,
    primaryColor,
    contrastPrimaryColor,
    dangerColor: fixedColors.danger,
    warningColor: fixedColors.warning,
    infoColor: fixedColors.info,
    successColor: fixedColors.success,
    disabledColor: inputDisabledColor, // isWhite ? '#686C6B' : '?', // screen.colors.disabled
    // secondaryColor: string, // screen.colors.contraste
    noteColor: screenNoteColor,
    screenColor,
    screenContrastColor,
    text: {
      fontFamily: 'Poppins-Regular',
      fontSize: '15px'
    },
    components: {
      input: {
        normal: {
          idle: {
            normal: inputDefaultColor,
            selected: inputDefaultColor,
            disabled: {
              ...inputDefaultColor,
              contrast: inputDisabledColor
            }
          },
          error: {
            normal: {
              ...inputDefaultColor,
              border: fixedColors.danger
            },
            selected: {
              ...inputDefaultColor,
              border: fixedColors.danger
            },
            disabled: {
              ...inputDefaultColor,
              contrast: inputDisabledColor,
              border: fixedColors.danger
            }
          },
          success: {
            normal: {
              ...inputDefaultColor,
              border: primaryColor
            },
            selected: {
              ...inputDefaultColor,
              border: primaryColor
            },
            disabled: {
              ...inputDefaultColor,
              contrast: inputDisabledColor,
              border: primaryColor
            }
          }
        }
      },
      button: {
        normal: {
          idle: {
            normal: {
              primary: {
                background: primaryColor,
                contrast: contrastPrimaryColor,
                border: primaryColor
              },
              default: {
                background: screenColor,
                contrast: screenContrastColor,
                border: screenColor
              }
            },
            disabled: {
              background: '#EEEEEE',
              contrast: '#A6A6A6',
              border: '#EEEEEE'
            }
          }
        },
        outline: {
          idle: {
            normal: {
              primary: {
                background: 'transparent',
                contrast: primaryColor,
                border: primaryColor
              },
              default: {
                background: 'transparent',
                contrast: screenContrastColor,
                border: screenContrastColor
              }
            },
            disabled: {
              background: 'transparent',
              contrast: '#A6A6A6',
              border: '#A6A6A6'
            }
          }
        }
      },
      card: {
        normal: {
          colors: {
            background: '#eeeeee',
            border: '#E1E1E1',
            contrast: screenContrastColor,
            note: screenNoteColor,
            separator: '#eeeeee'
          }
        }
      }
    }
  };
}

/**
 * This allows us to use styles imperatively in any place in any moment.
 * This solves the problem when we just have styles on styledcomponents and we need them in other non-react places too.
 */
class CompanyStyle {
  theme: Theme;

  constructor() {
    // We always have a style defined.
    this.theme = generateTheme({
      theme: 'white',
      primaryColor: 'teal',
      contrastPrimaryColor: 'white'
    });
  }

  setStyles = (params: ThemeParams) => {
    if (!params.theme || !params.primaryColor || !params.contrastPrimaryColor) {
      console.warn('STYLE_WARN', 'Trying to setStyles without enough params');
      return;
    }
    this.theme = generateTheme(params);
  };
}

export const companyStyles = new CompanyStyle();
