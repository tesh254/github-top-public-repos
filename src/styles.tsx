import { styled, keyframes } from "goober";

interface ITypography {
  fontSize: string;
  color: string;
  shadowColor?: string;
  textTransform?: string;
  align?: string;
  width?: string;
}

interface IContainer {
  flex: string;
  justify: string;
  place?: string;
}

export const Flicker = keyframes`
    0% { opacity: 1 }
    49% {opacity: 0.9}
    60% {opacity: 0.4}
    99% {opacity: 0.1}
    100% {opacity: 1}
`;

export const AppContainer = styled("div")`
  max-width: 720px;
  margin: 0px auto;
  width: 100%;
  padding: 16px 8px;
  min-height: 100vh;
  height: 100%;
  animation: ${Flicker} 1.2s infinite;
`;

export const Paragraph = styled<ITypography>("p")`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-shadow: ${(props) => `2px 2px 0px ${props.shadowColor}` || ""};
  text-transform: ${(props) => props.textTransform || ""};
  text-align: ${(props) => props.align || ""};
`;

export const Flex = styled<IContainer>("div")`
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  place-items: ${(props) => props.place || ""};
`;
