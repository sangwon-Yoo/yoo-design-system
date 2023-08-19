import styled, { css } from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


type StyledContentsProps = StyledProps<{
    border?: string;
    backgroundColor?: string;
}>;
export const StyledContents = styled.div<StyledContentsProps>`
  width: 100%;
  height: 100%;
  border: ${props => props.$styled?.border};
  background-color: ${props => props.$styled?.backgroundColor};
  
  ${isMobile} {
    border: ${props => props.$styledMobile?.border};
    background-color: ${
        props => props.$styledMobile?.backgroundColor
    };
  }
`;

export const StyledContentsWithBackgroundImage = styled(StyledContents)<StyledProps<{
    border?: string;
    backgroundColor?: string;
    backgroundImage?: string;
}>>`
  background-image: ${props => props.$styled?.backgroundImage && css`url(${props.$styled.backgroundImage})`};
  
  ${isMobile} {
    background-image: ${
        props => props.$styledMobile?.backgroundImage && css`url(${props.$styledMobile.backgroundImage})`
    };
  }
`;