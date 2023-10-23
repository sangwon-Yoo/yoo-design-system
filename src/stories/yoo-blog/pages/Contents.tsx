import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents, StyledContentsAnchor,
    StyledContentsButton, StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import styled from "styled-components";
import { Menu } from "styled-icons/remix-fill";
import { PaperPlane } from "styled-icons/evaicons-solid";
import { Copy } from "styled-icons/boxicons-regular";
import { Edit } from "styled-icons/boxicons-solid";
import { isMobile } from "@/design-system/MediaQuery";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/androidstudio.min.css';
import { useEffect } from "react";



export function Contents() {


    // Then register the languages you need
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('css', css);

    useEffect(() => {
        hljs.highlightAll();
    }, []);

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

            <StyledLayoutFlex
                $styled={{ flexDirection : 'column', alignItems : 'center' }}
                $styledMobile={{ flexDirection : 'column', alignItems : 'stretch' }}
            >
                <StyledLayoutFlexItem
                    $styled={{ flex : '0 0 auto' }}
                    $styledMobile={{ flex : '0 0 100%' }}
                >
                    <StyledWrapper
                        $styled={{ margin : '120px 24px 36px 24px' }}
                        $styledMobile={{ margin : '80px 24px 36px 24px' }}
                    >
                        <StyledWrapper
                            $styled={{ width : '680px', height : '384px', margin : '0 0 36px 0' }}
                            $styledMobile={{ width : '100%', height : '194px' }}
                        >
                            <StyledContents $styled={{ width : '100%', height : '100%' }}>
                                <img src={'/img/contents.jpeg'} alt={'이미지'} style={{
                                    height : '100%',
                                    width : '100%',
                                    objectFit : 'cover',
                                    borderRadius : '2px',
                                    boxShadow : '1px 1px 1px rgba(0,0,0,0.2)'
                                }} />
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{ margin : '0 0 24px 0' }}
                            $styledMobile={{ margin : '0 0 14px 0' }}
                        >
                            <StyledContentsSpan $styled={{
                                display : 'inline-block',
                                height : '24px',
                                lineHeight : '24px',
                                padding : '0 14px',
                                backgroundColor : '#0ca8ac',
                                borderRadius : '7px',
                                color : '#ffffff',
                            }}>
                                {`Dev`}
                            </StyledContentsSpan>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{ margin : '0 0 24px 0' }}
                            $styledMobile={{ margin : '0 0 14px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '2rem'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.4rem'
                                }}
                                as={'h1'}
                            >
                                useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{ margin : '0 0 36px 0' }}
                            $styledMobile={{ margin : '0 0 24px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '1.2rem',
                                    fontWeight : 'normal',
                                    color : '#6B6B6B'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.1rem',
                                    fontWeight : 'normal',
                                    color : '#6B6B6B'
                                }}
                                as={'h2'}
                            >
                                useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>


                        <StyledWrapper $styled={{
                            margin : '32px 0 24px 0',
                            borderTop : '1px solid #e6e6e6',
                            borderBottom : '1px solid #e6e6e6'
                        }}>
                            <StyledContents $styled={{ height : '49px' }}>
                                <StyledLayoutFlex>

                                    <StyledLayoutFlexItem $styled={{ flex : '0 0 50%' }}>
                                        <StyledLayoutFlex>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{
                                                    padding : '0 10px'
                                                }}>
                                                    <StyledContentsParagraph
                                                        $styled={{
                                                            width : 'auto',
                                                            height : '50px',
                                                            lineHeight : '50px',
                                                            color : '#6B6B6B'
                                                        }}
                                                    >
                                                        {`Sep. 19. 22`}
                                                    </StyledContentsParagraph>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>


                                    <StyledLayoutFlexItem $styled={{ flex : '0 0 50%' }}>
                                        <StyledLayoutFlex $styled={{ flexDirection : 'row-reverse' }}>
                                            <StyledLayoutFlexItem>
                                                <StyledWrapper $styled={{
                                                    padding : '14px 10px 14px 10px',
                                                    width : '42px',
                                                    height : '50px'
                                                }}>
                                                    <StyledContentsButton
                                                        $styled={{
                                                            width : '100%',
                                                            height : '100%',
                                                            color : '#6B6B6B',
                                                            cursor : 'pointer',
                                                        }}
                                                    >
                                                        <StyledContentsIconCopy />
                                                    </StyledContentsButton>
                                                </StyledWrapper>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledLayoutFlexItem>

                                </StyledLayoutFlex>
                            </StyledContents>
                        </StyledWrapper>

                        {/* ++ 부제 */}
                        <StyledWrapper
                            $styled={{ margin : '64px 0 48px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '1.2rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.1rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                as={'h3'}
                            >
                                부제목 부제목 부제목 부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목부제목 부제목 부제목
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단 */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                            >
                                useEffect에 대해 자세히 알아보자. <b>생명주기를</b> 위해 무엇을 신경써야할까? <i style={{backgroundColor : '#66f1e1' }}>useEffect에 대해 자세히 알아보자.</i> 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect 에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단(가운데정렬) */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line',
                                    textAlign : 'center'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                            >
                                useEffect에 대해 자세히 알아보자.
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단 */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                            >
                                useEffect에 대해 자세히 알아보자. <b>생명주기를</b> 위해 무엇을 신경써야할까? <i style={{ backgroundColor : '#66f1e1' }}>useEffect에 대해 자세히 알아보자.</i> 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect 에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까? useEffect에 대해 자세히 알아보자. 생명주기를 위해 무엇을 신경써야할까?
                            </StyledContentsParagraph>
                        </StyledWrapper>


                        {/* ++ 문단 : 코드블럭 */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <pre>
                                    <code dangerouslySetInnerHTML={{
                                        __html : hljs.highlight(`async function APICalc({design, REQ_info}: APICalcProps): Promise<ProductCalcOutput> {

    const reqURI: string = '/calculate/v1/default';

    return await APIProduct<ProductCalcOutput>(reqURI, {
        method: 'POST',
        body: JSON.stringify(designToCalcInput(design, REQ_info)),
        headers: {
            'Content-Type' : 'application/json',
        }
    });
}`,
                                            { language : 'typescript' }
                                        ).value
                                    }} />
                                </pre>
                            </StyledContents>
                        </StyledWrapper>

                        {/* ++ 부제 */}
                        <StyledWrapper
                            $styled={{ margin : '64px 0 48px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    fontSize : '1.2rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    fontSize : '1.1rem',
                                    fontWeight : 'bold',
                                    color : '#292929'
                                }}
                                as={'h3'}
                            >
                                상태관리를 위한 툴
                            </StyledContentsParagraph>
                        </StyledWrapper>

                        {/* ++ 문단(이미지) */}
                        <StyledWrapper
                            $styled={{ margin : '0 0 36px 0' }}
                        >
                            <StyledContents
                                $styled={{ width : '680px', height : 'auto' }}
                                $styledMobile={{ width : '100%', height : 'auto' }}
                            >
                                <img src={'/img/contents.jpeg'} alt={'이미지'} style={{
                                    height : 'auto',
                                    width : '100%',
                                    objectFit : 'cover',
                                    borderRadius : '2px',
                                    boxShadow : '1px 1px 1px rgba(0,0,0,0.2)'
                                }} />
                            </StyledContents>
                        </StyledWrapper>

                        {/* ++ 문단 */}
                        <StyledWrapper
                            $styled={{ margin : '36px 0' }}
                        >
                            <StyledContentsParagraph
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    color : '#292929',
                                    whiteSpace : 'pre-line'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto',
                                    color : '#292929'
                                }}
                            >
                                {`상태관 In San Francisco, there is a fresh crime wave that no DA can stop.\n Emboldened criminals are rushing around the streets wearing backpacks with suits, tan shoes with dark worsted slacks, and Patagonia fleece vests with chinos, dress shirts, and Allbird sneakers. Let’s take a look at some of the city’s most common fashion offenses today, as well as potential solutions.`}
                            </StyledContentsParagraph>
                        </StyledWrapper>



                    </StyledWrapper>
                </StyledLayoutFlexItem>
            </StyledLayoutFlex>

            {/* ++ footer */}
            <StyledWrapper $styled={{ margin : '40px 0 0 0' }}>
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
            {/* -- footer */}
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

const StyledContentsIconCopy = styled(Copy)`
  display: inherit;
  color: inherit;
  width: 100%;
  height: 100%;

  ${isMobile} {
    width: 100%;
    height: 100%;
  }
`;