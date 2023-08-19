import styled from "styled-components";


type StyledLayoutFlexProps = {
    $flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  display: flex;
  flex-direction: ${props => props.$flexDirection || 'row'};
`;

type StyledLayoutFlexItemProps = {
    $flex?: string;
};
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  flex: ${props => props.$flex || '0 0 auto'};
`;