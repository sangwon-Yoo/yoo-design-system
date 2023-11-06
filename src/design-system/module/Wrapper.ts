import styled from "styled-components";
import {CSSDisplay, CSSPosition, CSSTextAlign, CSSVerticalAlign, StyledProps} from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/*
    레퍼로서 콘텐츠 영역을 감싸고, 콘텐츠의 영역의 시작을 나타낸다. (position => non-static)
*/

type StyledWrapperProps = StyledProps<{
    display?: CSSDisplay;
    position?: CSSPosition;
    height?: string;
    width?: string;
    top?: string;
    bottom?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderBottom?: string;
    borderTop?: string;
    borderRadius?: string;
    boxShadow?: string;
    backgroundColor?: string;
    textAlign?: CSSTextAlign;
    verticalAlign?: CSSVerticalAlign;
    zIndex?: number;
}>;
export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: ${props => props.$styled?.display || 'block'};
  position: ${props => props.$styled?.position || 'relative'};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width};
  top: ${props => props.$styled?.top};
  bottom: ${props => props.$styled?.bottom};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  border: ${props => props.$styled?.border};
  border-bottom: ${props => props.$styled?.borderBottom};
  border-top: ${props => props.$styled?.borderTop};
  border-radius: ${props => props.$styled?.borderRadius};
  box-shadow: ${props => props.$styled?.boxShadow};
  background-color: ${props => props.$styled?.backgroundColor};
  text-align: ${props => props.$styled?.textAlign};
  vertical-align: ${props => props.$styled?.verticalAlign};
  z-index: ${props => props.$styled?.zIndex};
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    position: ${props => props.$styledMobile?.position};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    top: ${props => props.$styledMobile?.top};
    bottom: ${props => props.$styledMobile?.bottom};
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    border: ${props => props.$styledMobile?.border};
    border-bottom: ${props => props.$styledMobile?.borderBottom};
    border-top: ${props => props.$styledMobile?.borderTop};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    box-shadow: ${props => props.$styledMobile?.boxShadow};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    text-align: ${props => props.$styledMobile?.textAlign};
    vertical-align: ${props => props.$styledMobile?.verticalAlign};
    z-index: ${props => props.$styledMobile?.zIndex};
  }
`;