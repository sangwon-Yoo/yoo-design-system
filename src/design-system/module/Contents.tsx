import styled, { css } from "styled-components";
import {
    CSSCursor,
    CSSDisplay,
    CSSOverflow, CSSPosition,
    CSSTextAlign,
    CSSTextOverflow, CSSVerticalAlign,
    CSSWhiteSpace, Hovering,
    StyledProps
} from "@/design-system/CommonType";
import { isMobile } from "@/design-system/MediaQuery";


/*
    콘텐츠 영역으로 실제 구성요소가 들어가고 너비, 높이가 display block 엘리먼트에 한해서 필수값이다.
*/

type StyledContentsProps = StyledProps<{
    position?: CSSPosition;
    height: string;
    width?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    opacity?: number;
    overflow?: CSSOverflow;
    overflowY?: CSSOverflow;
    backgroundImage?: string;
}>;
export const StyledContents = styled.div<StyledContentsProps>`
  position: ${props => props.$styled?.position};
  width: ${props => props.$styled?.width || '100%'};
  height: ${props => props.$styled?.height};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  opacity: ${props => props.$styled?.opacity};
  overflow: ${props => props.$styled?.overflow};
  overflow-y: ${props => props.$styled?.overflowY};;
  background-image: ${
    props => props.$styled?.backgroundImage && css`url(${props.$styled.backgroundImage})`
  };
  
  ${isMobile} {
    position: ${props => props.$styledMobile?.position};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    opacity: ${props => props.$styledMobile?.opacity};
    overflow: ${props => props.$styledMobile?.overflow};
    overflow-y: ${props => props.$styledMobile?.overflowY};;
    background-image: ${
        props => (
            props.$styledMobile?.backgroundImage && css`url(${props.$styledMobile.backgroundImage})`
        )
    };
  }
`;

type StyledContentsSpanProps = StyledProps<{
    display?: CSSDisplay;
    width?: string;
    height?: string;
    textAlign?: CSSTextAlign;
    fontSize?: string;
    color?: string;
    lineHeight?: string;
}>;
export const StyledContentsSpan = styled.span<StyledContentsSpanProps>`
  display: ${props => props.$styled?.display};
  width: ${props => props.$styled?.width};
  height: ${props => props.$styled?.height};
  text-align: ${props => props.$styled?.textAlign};
  font-size: ${props => props.$styled?.fontSize};
  color: ${props => props.$styled?.color || props.theme.color.black};
  line-height: ${props => props.$styled?.lineHeight};
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    width: ${props => props.$styledMobile?.width};
    height: ${props => props.$styledMobile?.height};
    text-align: ${props => props.$styledMobile?.textAlign};
    font-size: ${props => props.$styledMobile?.fontSize};
    color: ${props => props.$styledMobile?.color};
    line-height: ${props => props.$styledMobile?.lineHeight};
  }
`;

type StyledContentsParagraphProps = StyledProps<{
    width?: string;
    height: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: CSSTextAlign;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    overflow?: CSSOverflow;
    textOverflow?: CSSTextOverflow;
    whiteSpace?: CSSWhiteSpace;
}>;
export const StyledContentsParagraph = styled.p<StyledContentsParagraphProps>`
  width: ${props => props.$styled?.width || '100%'};
  height: ${props => props.$styled?.height};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color || props.theme.color.black};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  margin-top: ${props => props.$styled?.marginTop};
  margin-bottom: ${props => props.$styled?.marginBottom};
  padding: ${props => props.$styled?.padding};
  padding-top: ${props => props.$styled?.paddingTop};
  padding-bottom: ${props => props.$styled?.paddingBottom};
  overflow: ${props => props.$styled?.overflow};
  text-overflow: ${props => props.$styled?.textOverflow};
  white-space: ${props => props.$styled?.whiteSpace};
  
  ${isMobile} {
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    margin-top: ${props => props.$styledMobile?.marginTop};
    margin-bottom: ${props => props.$styledMobile?.marginBottom};
    padding: ${props => props.$styledMobile?.padding};
    padding-top: ${props => props.$styledMobile?.paddingTop};
    padding-bottom: ${props => props.$styledMobile?.paddingBottom};
    overflow: ${props => props.$styledMobile?.overflow};
    text-overflow: ${props => props.$styledMobile?.textOverflow};
    white-space: ${props => props.$styledMobile?.whiteSpace};
  }
`;


type StyledContentsAnchorProps = StyledProps<{
    display?: CSSDisplay;
    height?: string;
    width?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: CSSTextAlign;
    verticalAlign?: CSSVerticalAlign;
    margin?: string;
    padding?: string;
    cursor?: CSSCursor;
    transition?: string;
    hover?: Hovering;
}>;
export const StyledContentsAnchor = styled.a<StyledContentsAnchorProps>`
  display: ${props => props.$styled?.display};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width || '100%'};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  vertical-align: ${props => props.$styled?.verticalAlign};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  cursor: ${props => props.$styled?.cursor};
  transition: ${props => props.$styled?.transition};
  &:hover {
    color: ${props => props.$styled?.hover?.color};
    background-color: ${props => props.$styled?.hover?.backgroundColor};
  }
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign}
    vertical-align: ${props => props.$styledMobile?.verticalAlign};;
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    cursor: ${props => props.$styledMobile?.cursor};
    transition: ${props => props.$styledMobile?.transition};
    &:hover {
      color: ${props => props.$styledMobile?.hover?.color};
      background-color: ${props => props.$styledMobile?.hover?.backgroundColor};
    }
  }
`;


type StyledContentsButtonProps = StyledProps<{
    display?: CSSDisplay;
    height?: string;
    width?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: CSSTextAlign;
    margin?: string;
    padding?: string;
    cursor?: CSSCursor;
    transition?: string;
    hover?: Hovering;
}>;
export const StyledContentsButton = styled.a<StyledContentsButtonProps>`
  display: ${props => props.$styled?.display};
  height: ${props => props.$styled?.height};
  width: ${props => props.$styled?.width || '100%'};
  border: ${props => props.$styled?.border};
  border-radius: ${props => props.$styled?.borderRadius};
  background-color: ${props => props.$styled?.backgroundColor};
  line-height: ${props => props.$styled?.lineHeight};
  font-size: ${props => props.$styled?.fontSize};
  font-weight: ${props => props.$styled?.fontWeight};
  color: ${props => props.$styled?.color};
  text-align: ${props => props.$styled?.textAlign};
  margin: ${props => props.$styled?.margin};
  padding: ${props => props.$styled?.padding};
  cursor: ${props => props.$styled?.cursor};
  transition: ${props => props.$styled?.transition};
  &:hover {
    color: ${props => props.$styled?.hover?.color};
    background-color: ${props => props.$styled?.hover?.backgroundColor};
  }
  
  ${isMobile} {
    display: ${props => props.$styledMobile?.display};
    height: ${props => props.$styledMobile?.height};
    width: ${props => props.$styledMobile?.width};
    border: ${props => props.$styledMobile?.border};
    border-radius: ${props => props.$styledMobile?.borderRadius};
    background-color: ${props => props.$styledMobile?.backgroundColor};
    line-height: ${props => props.$styledMobile?.lineHeight};
    font-size: ${props => props.$styledMobile?.fontSize};
    font-weight: ${props => props.$styledMobile?.fontWeight};
    color: ${props => props.$styledMobile?.color};
    text-align: ${props => props.$styledMobile?.textAlign};
    margin: ${props => props.$styledMobile?.margin};
    padding: ${props => props.$styledMobile?.padding};
    cursor: ${props => props.$styledMobile?.cursor};
    transition: ${props => props.$styledMobile?.transition};
    &:hover {
      color: ${props => props.$styledMobile?.hover?.color};
      background-color: ${props => props.$styledMobile?.hover?.backgroundColor};
    }
  }
`;