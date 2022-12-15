"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themeFragment = `
fragment themeFragment on Theme {
  id
  textures {
    url
    style {
      backgroundSize
    }
  }
  colors {
    primary
    secondary
    text
    background
  }
  fonts {
    primary
    secondary
    variants {
      family
      weight
      style
      fileName
      formats
      href
    }
  }
  logos {
    black {
      ...logoFragment
    }
    colored {
      ...logoFragment
    }
    white {
      ...logoFragment
    }
  }
}

fragment logoFragment on WithWithoutText {
  withText {
    url
  }
  withoutText {
    url
  }
}
`;
exports.default = themeFragment;
//# sourceMappingURL=themeFragment.js.map