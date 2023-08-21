import styled, { css } from "styled-components";
import { StyledProps } from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/* 콘텐츠 영역으로 실제 구성요소가 들어가고 너비, 높이가 display block 엘리먼트에 한해서 필수값이다. */
type StyledContentsProps = StyledProps<{
    width: string;
    height: string;
    border?: string;
    backgroundColor?: string;
    backgroundImage?: string;
}>;
export const StyledContents = styled.div<StyledContentsProps>`
  width: ${props => props.$styled?.width};
  height: ${props => props.$styled?.height};
  border: ${props => props.$styled?.border};
  background-color: ${props => props.$styled?.backgroundColor};
  background-image: ${
    props => props.$styled?.backgroundImage && css`url(${props.$styled.backgroundImage})`
  };
  
  ${isMobile} {
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    border: ${props => props.$styledMobile?.border};
    background-color: ${
        props => props.$styledMobile?.backgroundColor
    };
    background-image: ${
        props => (
            props.$styledMobile?.backgroundImage && css`url(${props.$styledMobile.backgroundImage})`
        )
    };
  }
`;

type StyledContentsSpanProps = StyledProps<{
    fontSize?: string;
    color?: string;
}>;
export const StyledContentsSpan = styled.span<StyledContentsSpanProps>`
  font-size: ${props => props.$styled?.fontSize};
  color: ${props => props.$styled?.color};
  
  ${isMobile} {
    font-size: ${props => props.$styledMobile?.fontSize};
    color: ${props => props.$styledMobile?.color};
  }
`;

type StyledContentsParagraphProps = StyledProps<{
    height: string;
    width: string;
    fontSize?: string;
    color?: string;
    textAlign?: 'start' | 'end' | 'center' | 'justify';
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
    paddingBottom?: string;
    padding?: string;
}>;
export const StyledContentsParagraph = styled.p<StyledContentsParagraphProps>`
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width};
  font-size: ${props => props.$styled?.fontSize};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  margin-top: ${props => props.$styled?.marginTop};
  margin-bottom: ${props => props.$styled?.marginBottom};
  padding: ${props => props.$styled?.padding};
  padding-top: ${props => props.$styled?.paddingTop};
  padding-bottom: ${props => props.$styled?.paddingBottom};
  
  ${isMobile} {
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    font-size: ${props => props.$styledMobile?.fontSize};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    margin-top: ${props => props.$styledMobile?.marginTop};
    margin-bottom: ${props => props.$styledMobile?.marginBottom};
    padding: ${props => props.$styledMobile?.padding};
    padding-top: ${props => props.$styledMobile?.paddingTop};
    padding-bottom: ${props => props.$styledMobile?.paddingBottom};
  }
`;
