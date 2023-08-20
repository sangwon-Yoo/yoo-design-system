import styled from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


type StyledWrapperProps = StyledProps<{
    position?: 'relative' | 'absolute' | 'sticky' | 'fixed';
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
}>;
export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: ${props => props.$styled?.position || 'relative'};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width};
  
  ${isMobile} {
    position: ${props => props.$styledMobile?.position};
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
  }
`;