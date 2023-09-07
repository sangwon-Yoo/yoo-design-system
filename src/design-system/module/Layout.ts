import styled from "styled-components";
import { CSSAlignItems, CSSFlexDirection, CSSJustifyContent, StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/* 레이아웃을 담당하는 컴포넌트  */
type StyledLayoutFlexProps = StyledProps<{
    flexDirection?: CSSFlexDirection;
    justifyContent?: CSSJustifyContent;
    alignItems?: CSSAlignItems;
    height?: string;
    width?: string;
}>;
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  display: flex;
  flex-direction: ${props => props.$styled?.flexDirection || 'row'};
  justify-content: ${props => props.$styled?.justifyContent};
  align-items: ${props => props.$styled?.alignItems};
  height: ${props => props.$styled?.height || '100%'};
  width: ${props => props.$styled?.width || '100%'};
  
  ${isMobile} {
    flex-direction: ${props => props.$styledMobile?.flexDirection};
    justify-content: ${props => props.$styledMobile?.justifyContent};
    align-items: ${props => props.$styledMobile?.alignItems};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
  }
`;

type StyledLayoutFlexItemProps = StyledProps<{
    flex?: string;
    minHeight?: string;
    maxHeight?: string;
    minWidth?: string;
    maxWidth?: string;
}>;
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  flex: ${props => props.$styled?.flex || '0 0 auto'};
  min-height: ${props => props.$styled?.minHeight};
  max-height: ${props => props.$styled?.maxHeight};
  min-width: ${props => props.$styled?.minWidth};
  max-width: ${props => props.$styled?.maxWidth};
  
  ${isMobile} {
    flex: ${props => props.$styledMobile?.flex};
    min-height: ${props => props.$styledMobile?.minHeight};
    max-height: ${props => props.$styledMobile?.maxHeight};
    min-width: ${props => props.$styledMobile?.minWidth};
    max-width: ${props => props.$styledMobile?.maxWidth};
  }
`;