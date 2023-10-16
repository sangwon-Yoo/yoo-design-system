import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents, StyledContentsAnchor, StyledContentsSpan } from "@/design-system/module/Contents";
import styled from "styled-components";
import { Menu } from "styled-icons/remix-fill";
import { PaperPlane } from "styled-icons/evaicons-solid";
import { Edit } from "styled-icons/boxicons-solid";
import { isMobile } from "@/design-system/MediaQuery";


export function Login() {

    return (
        <>
            <StyledWrapper
                $styled={{
                    width : '100%',
                    position : 'fixed',
                    zIndex : 10,
                    boxShadow : '0px 1px 3px rgba(0,0,0,0.2)',
                    borderBottom : '1px solid #DDDDDD'
                }}
                $styledMobile={{
                    borderBottom : 'unset'
                }}
            >
                <StyledContents
                    $styled={{ height : '64px', backgroundColor : '#ffffff' }}
                    $styledMobile={{ height : '42px', backgroundColor : '#111111', opacity : 0.875 }}
                >
                    <StyledLayoutFlex>
                        <StyledLayoutFlexItem $styled={{ flex : '0 0 16%' }}>
                            <StyledWrapper $styled={{ height : '100%', margin : '0 0 0 10px' }}>
                                <StyledLayoutFlex
                                    $styled={{ justifyContent : 'flex-end' }}
                                    $styledMobile={{ justifyContent : 'flex-start' }}
                                >
                                    <StyledLayoutFlexItem>
                                        <StyledLayoutFlex $styled={{
                                            flexDirection : 'column', justifyContent : 'center'
                                        }}>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{ margin : '6px' }}>
                                                    <StyledContentsAnchor
                                                        $styled={{
                                                            display : 'block',
                                                            width : '36px',
                                                            height : '36px',
                                                            cursor : 'pointer',
                                                        }}
                                                        $styledMobile={{
                                                            width : '32px',
                                                            height : '32px'
                                                        }}
                                                    >
                                                        <img src={'/img/wonny.jpeg'} alt={'이미지'} style={{
                                                            height : '100%',
                                                            width : '100%',
                                                            objectFit : 'cover',
                                                            borderRadius : '2px',
                                                            boxShadow : '1px 1px 1px rgba(0,0,0,0.2)'
                                                        }} />
                                                    </StyledContentsAnchor>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>
                                    <StyledLayoutFlexItem>
                                        <StyledLayoutFlex $styled={{
                                            flexDirection : 'column', justifyContent : 'center'
                                        }}>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{ margin : '6px' }}>
                                                    <StyledContentsAnchor
                                                        $styled={{
                                                            display : 'block',
                                                            padding : '7px',
                                                            color : '#0ca8ac',
                                                            cursor : 'pointer',
                                                            borderRadius : '2px',
                                                            transition : 'background-color .12s ease',
                                                            hover : { backgroundColor : '#ececeb' }
                                                        }}
                                                        $styledMobile={{
                                                            hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                        }}
                                                    >
                                                        <StyledContentsIconMenu />
                                                    </StyledContentsAnchor>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>
                                </StyledLayoutFlex>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem $styled={{ flex : '0 1 68%' }}>

                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem $styled={{ flex : '0 0 16%' }}>
                            <StyledWrapper $styled={{ height : '100%', margin : '0 10px 0 0' }}>
                                <StyledLayoutFlex
                                    $styled={{ justifyContent : 'flex-start' }}
                                    $styledMobile={{ justifyContent : 'flex-end' }}
                                >
                                    <StyledLayoutFlexItem>
                                        <StyledLayoutFlex $styled={{
                                            flexDirection : 'column', justifyContent : 'center'
                                        }}>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{ margin : '6px' }}>
                                                    <StyledContentsAnchor
                                                        $styled={{
                                                            display : 'block',
                                                            padding : '7px',
                                                            color : '#0ca8ac',
                                                            cursor : 'pointer',
                                                            borderRadius : '2px',
                                                            transition : 'background-color .12s ease',
                                                            hover : { backgroundColor : '#ececeb' }
                                                        }}
                                                        $styledMobile={{
                                                            hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                        }}
                                                    >
                                                        <StyledContentsIconEdit />
                                                    </StyledContentsAnchor>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>
                                    <StyledLayoutFlexItem>
                                        <StyledLayoutFlex $styled={{
                                            flexDirection : 'column', justifyContent : 'center'
                                        }}>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{ margin : '6px' }}>
                                                    <StyledContentsAnchor
                                                        $styled={{
                                                            display : 'block',
                                                            padding : '7px',
                                                            color : '#0ca8ac',
                                                            cursor : 'pointer',
                                                            borderRadius : '2px',
                                                            transition : 'background-color .12s ease',
                                                            hover : { backgroundColor : '#ececeb' }
                                                        }}
                                                        $styledMobile={{
                                                            hover : { color : '#66f1e1', backgroundColor : 'unset' }
                                                        }}
                                                    >
                                                        <StyledContentsIconPaperPlan />
                                                    </StyledContentsAnchor>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>
                                </StyledLayoutFlex>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledContents>
            </StyledWrapper>


            <StyledContents $styled={{ width : '100%', height : '630px' }}>
                <StyledLayoutFlex $styled={{ justifyContent : 'center', alignItems : 'center' }}>
                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                        <StyledContentsAnchor $styled={{
                            display : 'inline-block',
                            width : '276px',
                            height : '38px',
                            lineHeight : '36px',
                            fontSize : '1rem',
                            margin : '4px',
                            border : '1px solid #bdc3c7',
                            borderRadius : '4px',
                            color : '#292929',
                            cursor : 'pointer',
                            transition : 'background-color .12s ease',
                            hover : {
                                color : '#292929',
                                backgroundColor : '#f2f3f5'
                            }
                        }}>
                            <StyledWrapper $styled={{ margin : '2px' }}>
                                <StyledContents $styled={{ height : '32px', lineHeight : '32px' }}>
                                    <img src={'/img/googleLogo.png'} style={{
                                        display: 'inline-block',
                                        width : '32px',
                                        height : '32px',
                                        verticalAlign : 'top'
                                    }} />
                                    <StyledContentsSpan $styled={{
                                        display : 'inline-block',
                                        height : '32px',
                                        verticalAlign : 'top'
                                    }}>
                                        {`구글로 로그인`}
                                    </StyledContentsSpan>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledContentsAnchor>
                    </StyledWrapper>
                </StyledLayoutFlex>
            </StyledContents>

            <StyledWrapper $styled={{ position : 'fixed', width : '100%', bottom : '0', margin : '40px 0 0 0' }}>
                <StyledContents $styled={{ height : '120px', borderTop : '1px solid #e6e6e6' }}>
                    <StyledLayoutFlex $styled={{ justifyContent : 'center', alignItems : 'flex-end' }}>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{
                                verticalAlign : 'middle',
                                width : '100px',
                                height : '36px',
                                textAlign : 'center'
                            }}>
                                <StyledContentsAnchor
                                    $styled={{
                                        display : 'inline-block',
                                        verticalAlign : 'middle',
                                        width : '36px',
                                        height : '100%',
                                        cursor : 'pointer',
                                    }}
                                >
                                    <img src={'/img/wonny.jpeg'} alt={'이미지'} style={{
                                        height : '100%',
                                        width : '100%',
                                        objectFit : 'cover',
                                    }} />
                                </StyledContentsAnchor>
                            </StyledWrapper>

                            <StyledWrapper $styled={{
                                width : '100px',
                                height : '36px',
                                margin : '0 0 10px 0'
                            }}>
                                <StyledContentsSpan $styled={{
                                    display : 'inline-block',
                                    width : '100%',
                                    height : '36px',
                                    textAlign : 'center',
                                    lineHeight : '36px',
                                    fontSize : '1rem',
                                    color : '#bdc3c7',
                                }}>
                                    {`© Yoo's Blog`}
                                </StyledContentsSpan>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledContents>
            </StyledWrapper>
        </>
    );
}

const StyledContentsIconMenu = styled(Menu)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;

const StyledContentsIconPaperPlan = styled(PaperPlane)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;

const StyledContentsIconEdit = styled(Edit)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;