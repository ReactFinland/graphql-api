"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const CardBase = styled_1.default.div `
  position: absolute;

  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  backface-visibility: hidden;
`;
const Card = {
    Container: styled_1.default.section `
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    /* Animation */
    perspective: 100%;
    transform-style: preserve-3d;
    transition-duration: 500ms;

    &:hover {
      &:nth-of-type(1) {
        transform: rotateY(180deg);
      }

      &:nth-of-type(2) {
        transform: rotateY(0deg);
      }
    }
  `,
    Front: styled_1.default(CardBase) ``,
    Back: styled_1.default(CardBase) `
    transform: rotateY(-180deg);

    @media print {
      display: none;
    }
  `,
};
exports.default = Card;
//# sourceMappingURL=Card.js.map