import styled from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


type StyledItemSpanProps = StyledProps<{
    fontSize?: string;
    color?: string;
}>;
export const StyledItemSpan = styled.span<StyledItemSpanProps>`
  font-size: ${props => props.$styled?.fontSize};
  color: ${props => props.$styled?.color};
  
  ${isMobile} {
    font-size: ${props => props.$styledMobile?.fontSize};
    color: ${props => props.$styledMobile?.color};
  }
`;

type StyledItemParagraphProps = StyledProps<{
    fontSize?: string;
    color?: string;
    textAlign?: 'start' | 'end' | 'center' | 'justify';
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
    paddingBottom?: string;
    padding?: string;
    height?: string;
    width?: string;
}>;
export const StyledItemParagraph = styled.p<StyledItemParagraphProps>`
  font-size: ${props => props.$styled?.fontSize};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  margin-top: ${props => props.$styled?.marginTop};
  margin-bottom: ${props => props.$styled?.marginBottom};
  padding: ${props => props.$styled?.padding};
  padding-top: ${props => props.$styled?.paddingTop};
  padding-bottome: ${props => props.$styled?.paddingBottom};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width};
  
  ${isMobile} {
    font-size: ${props => props.$styledMobile?.fontSize};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    margin-top: ${props => props.$styledMobile?.marginTop};
    margin-bottom: ${props => props.$styledMobile?.marginBottom};
    padding: ${props => props.$styledMobile?.padding};
    padding-top: ${props => props.$styledMobile?.paddingTop};
    padding-bottome: ${props => props.$styledMobile?.paddingBottom};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
  }
`;