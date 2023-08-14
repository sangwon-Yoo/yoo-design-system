import styled from "styled-components";


type StyledLayoutFlexProps = {
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};
export const StyledLayoutFlex = styled.div<StyledLayoutFlexProps>`
  position: absolute;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
`;

type StyledLayoutFlexItemProps = {
    flex?: string;
};
export const StyledLayoutFlexItem = styled.div<StyledLayoutFlexItemProps>`
  position: absolute;
  flex: ${props => props.flex || '0 0 auto'};
`;