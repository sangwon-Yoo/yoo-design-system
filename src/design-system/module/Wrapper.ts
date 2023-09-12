import styled from "styled-components";
import { CSSDisplay, CSSPosition, CSSTextAlign, StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/*
    레퍼로서 콘텐츠 영역을 감싸고, 콘텐츠의 영역의 시작을 나타낸다. (position => non-static)
*/

type StyledWrapperProps = StyledProps<{
    display?: CSSDisplay;
    position?: CSSPosition;
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderBottom?: string;
    textAlign?: CSSTextAlign;
}>;
export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: ${props => props.$styled?.display || 'block'};
  position: ${props => props.$styled?.position || 'relative'};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  border: ${props => props.$styled?.border};
  border-bottom: ${props => props.$styled?.borderBottom};
  text-align: ${props => props.$styled?.textAlign};
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    position: ${props => props.$styledMobile?.position};
    margin: ${props => props.$styledMobile?.margin};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    padding: ${props => props.$styledMobile?.padding};
    border: ${props => props.$styledMobile?.border};
    border-bottom: ${props => props.$styledMobile?.borderBottom};
    text-align: ${props => props.$styledMobile?.textAlign};
  }
`;