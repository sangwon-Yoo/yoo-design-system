import styled from "styled-components";

type StyledWrapperProps = {
    $position?: 'relative' | 'absolute' | 'sticky' | 'fixed';
    $margin?: string;
    $padding?: string;
    $height: string;
    $width?: string;
}
export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: ${props => props.$position || 'relative'};
  margin: ${props => props.$margin};
  padding: ${props => props.$padding};
  height: ${props => props.$height};
  width: ${props => props.$width};
`;