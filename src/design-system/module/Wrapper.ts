import styled from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/* 레퍼로서 콘텐츠 영역을 감싸고, 콘텐츠의 영역의 시작을 나타낸다. (position => non-static) */
type StyledWrapperProps = StyledProps<{
    position?: 'relative' | 'absolute' | 'sticky' | 'fixed';
    margin?: string;
    padding?: string;
    border?: string;
}>;
export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: ${props => props.$styled?.position || 'relative'};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  border: ${props => props.$styled?.border};
  
  ${isMobile} {
    position: ${props => props.$styledMobile?.position};
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    border: ${props => props.$styledMobile?.border};
  }
`;