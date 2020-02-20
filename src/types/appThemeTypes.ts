export interface ButtonColor {
  background: string;
  contrast: string;
  border: string;
}

export interface ThemeButton {
  normal: {
    idle: {
      normal: {
        primary: ButtonColor;
        default: ButtonColor;
      };
      disabled: ButtonColor;
    };
  };
  outline: {
    idle: {
      normal: {
        primary: ButtonColor;
        default: ButtonColor;
      };
      disabled: ButtonColor;
    };
  };
}

export interface ThemeInput {
  normal: {
    idle: {
      normal: InputColor;
      selected: InputColor;
      disabled: InputColor;
    };
    error: {
      normal: InputColor;
      selected: InputColor;
      disabled: InputColor;
    };
    success: {
      normal: InputColor;
      selected: InputColor;
      disabled: InputColor;
    };
  };
}

export interface InputColor {
  background: string;
  contrast: string;
  border: string;
  placeholder: string;
  selection: string;
}

interface Components {
  input: ThemeInput;
  button: ThemeButton;
  card: {
    normal: {
      colors: {
        background: string;
        /**
         * If it's not defined, will be the same as the background.
         */
        border?: string;
        contrast: string;
        note: string;
        separator: string;
      };
    };
  };
}

interface Text {
  fontFamily: string;
  // Eg. 1em, 1px
  fontSize: string;
}

export interface Theme {
  primaryColor: string;
  contrastPrimaryColor: string;
  dangerColor: string;
  warningColor: string;
  infoColor: string;
  successColor: string;
  disabledColor: string;
  noteColor: string;
  screenColor: string;
  screenContrastColor: string;
  text: Text;
  components: Components;
}
