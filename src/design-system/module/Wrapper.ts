import styled from "styled-components";

type StyledWrapperProps = {
    height: string;
    width: string;
}
export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  height: ${props => props.height};
  width: ${props => props.width};
`;