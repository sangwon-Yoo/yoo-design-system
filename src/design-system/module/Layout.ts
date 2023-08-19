import styled from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


type StyledLayoutFlexProps = StyledProps<{
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}>;
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  display: flex;
  flex-direction: ${props => props.$styled?.flexDirection || 'row'};
  
  ${isMobile} {
    flex-direction: ${
        props => (
            props.$styledMobile?.flexDirection || props.$styled?.flexDirection || 'row'
        )
    };
  }
`;

type StyledLayoutFlexItemProps = StyledProps<{
    flex?: string;
}>;
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  flex: ${props => props.$styled?.flex || '0 0 auto'};
  
  ${isMobile} {
    flex: ${props => props.$styledMobile?.flex || props.$styled?.flex || '0 0 auto'};
  }
`;