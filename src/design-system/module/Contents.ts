import styled from "styled-components";

type StyledContentsProps = {
    $border?: string;
    $backgroundColor?: string;
}
export const StyledContents = styled.div<StyledContentsProps>`
  width: 100%;
  height: 100%;
  border: ${props => props.$border};
  background-color: ${props => props.$backgroundColor};
`;