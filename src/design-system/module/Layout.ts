import styled from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/* 레이아웃을 담당하는 컴포넌트  */
type StyledLayoutFlexProps = StyledProps<{
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start;' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    height?: string;
    width?: string;
}>;
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  display: flex;
  flex-direction: ${props => props.$styled?.flexDirection};
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
}>;
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  flex: ${props => props.$styled?.flex || '0 0 auto'};
  
  ${isMobile} {
    flex: ${props => props.$styledMobile?.flex};
  }
`;