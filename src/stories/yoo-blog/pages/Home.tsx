import {
    StyledLayoutFlex,
    StyledLayoutFlexItem,
    StyledLayoutGrid,
    StyledLayoutGridItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan,
} from "@/design-system/module/Contents";
import styled from "styled-components";
import { Menu } from "styled-icons/remix-fill";
import { PaperPlane } from "styled-icons/evaicons-solid";
import { Edit } from "styled-icons/boxicons-solid";
import { isMobile } from "@/design-system/MediaQuery";


export function Home() {

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

            <StyledWrapper
                $styled={{
                    width : '100%',
                    height : '100%',
                    position : 'fixed',
                    zIndex : 20,
                }}
                style={{display : "none"}}
            >
                <StyledContents $styled={{ height : '100%', backgroundColor : 'rgba(0,0,0,0.4)' }}>
                    <StyledWrapper $styled={{ height : '100%' }}>
                        <StyledContents $styled={{
                            width : '260px',
                            height : '100%',
                            backgroundColor : '#111111',
                            overflowY : 'scroll'
                        }}>
                            <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '8px 16px 8px 16px'
                                    }}>
                                        <StyledWrapper $styled={{
                                            display : 'inline-block',
                                            verticalAlign : 'middle',
                                            width : '32px',
                                            height : '32px',
                                        }}>
                                            <StyledContentsAnchor
                                                $styled={{
                                                    display : 'block',
                                                    width : '100%',
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
                                            display : 'inline-block',
                                            verticalAlign : 'middle',
                                            width : '100px',
                                            height : '32px',
                                            margin : '0 0 0 10px'
                                        }}>
                                            <StyledContentsSpan $styled={{
                                                display : 'block',
                                                height : '100%',
                                                lineHeight : '32px',
                                                fontSize : '1rem',
                                                color : '#ffffff'
                                            }}>
                                                {`Yoo's Blog`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        borderBottom : '1.2px solid rgba(255,255,255,0.08)',
                                        padding : '13px 16px 3px 16px'
                                    }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '2rem',
                                            lineHeight : '2rem',
                                            fontSize : '1rem',
                                            color : '#ffffff'
                                        }}>
                                            Hello
                                        </StyledContentsParagraph>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                        <StyledContentsAnchor $styled={{
                                            display : 'block',
                                            height : '1.6rem',
                                            lineHeight : '1.6rem',
                                            fontSize : '0.8rem',
                                            color : '#ffffff80'
                                        }}>
                                            hihihi
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledContents>
                    </StyledWrapper>
                </StyledContents>
            </StyledWrapper>


            {/* ++ 메인 */}
            <StyledWrapper as={'main'}>
                <StyledContents $styled={{
                    height : '600px', backgroundImage : '/img/gradationBg.jpeg'
                }}>
                    <StyledLayoutFlex
                        $styled={{ flexDirection : 'column', justifyContent : 'center' }}
                    >
                        <StyledLayoutFlexItem>
                            <StyledWrapper>
                                <StyledContentsParagraph $styled={{
                                    height : '40px',
                                    fontSize : '2rem',
                                    color : 'white',
                                    textAlign : 'center',
                                    marginBottom : '0.8rem'
                                }}>
                                    {`Yoo's Blog`}
                                </StyledContentsParagraph>
                                <StyledContentsParagraph $styled={{
                                    height : '40px',
                                    fontSize : '0.9rem',
                                    color : 'white',
                                    textAlign : 'center'
                                }}>
                                    {`공부하는 것을 기록`}
                                </StyledContentsParagraph>
                            </StyledWrapper>

                        </StyledLayoutFlexItem>

                        <StyledLayoutFlexItem>
                            <StyledLayoutFlex
                                $styled={{ flexDirection : 'row', justifyContent : 'center' }}
                                $styledMobile={{ flexDirection : 'column' }}
                            >
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                                        <StyledContentsAnchor $styled={{
                                            display : 'inline-block',
                                            width : '143px',
                                            height : '43px',
                                            lineHeight : '39px',
                                            fontSize : '1rem',
                                            margin : '4px',
                                            border : '2px solid #ffffff',
                                            borderRadius : '2px',
                                            color : '#ffffff',
                                            backgroundColor : 'transparent',
                                            cursor : 'pointer',
                                            transition : 'background-color .12s ease',
                                            hover : {
                                                color : '#292929',
                                                backgroundColor : '#ffffff'
                                            }
                                        }}>
                                            {`블로그 소개`}
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{ textAlign : 'center' }}>
                                        <StyledContentsAnchor $styled={{
                                            display : 'inline-block',
                                            width : '143px',
                                            height : '43px',
                                            lineHeight : '39px',
                                            fontSize : '1rem',
                                            margin : '4px',
                                            border : '2px solid #ffffff',
                                            borderRadius : '2px',
                                            color : '#ffffff',
                                            backgroundColor : 'transparent',
                                            cursor : 'pointer',
                                            transition : 'background-color .12s ease',
                                            hover : {
                                                color : '#292929',
                                                backgroundColor : '#ffffff'
                                            }
                                        }}>
                                            {`Yoo 소개`}
                                        </StyledContentsAnchor>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledContents>
            </StyledWrapper>
            {/* -- 메인 */}

            {/* ++ 최근작성한 내용 */}
            <StyledWrapper
                $styled={{ margin : '0 10%' }}
                $styledMobile={{ margin : '0' }}
                as={'section'}
            >
                <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{ padding : '10px' }}>
                            <StyledContentsParagraph $styled={{
                                height : '23px',
                                lineHeight : '23px',
                                fontWeight : 'bold'
                            }}>
                                {`최근 작성한 내용`}
                            </StyledContentsParagraph>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{
                            borderTop : '1px solid #e6e6e6', padding : '20px 10px 2px 10px'
                        }}>
                            <StyledLayoutGrid $styled={{
                                gridTemplateColumns : '72% 28%',
                                gridTemplateAreas :
                                    '"date date"' +
                                    '"title img"' +
                                    '"contents img"' +
                                    '"category category"'
                            }}>
                                <StyledLayoutGridItem $styled={{ gridArea : 'date' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '24px',
                                            color : '#BDC3C7'
                                        }}>
                                            {`Sep. 19. 22`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'title' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '36px',
                                            fontSize : '20px',
                                            fontWeight : 'bold',
                                            overflow : 'hidden',
                                            textOverflow : 'ellipsis',
                                            whiteSpace : 'nowrap'
                                        }}>
                                            {`Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem >
                                <StyledLayoutGridItem $styled={{ gridArea : 'contents' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '105px',
                                            overflow: 'hidden',
                                        }}>
                                            {
                                                'grid-template-columns(또는 grid-template-rows)의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성이에요.\n' +
                                                '속성 이름이 헷갈린다면 -template- 자리에 – auto-가 들어간다고 생각하세요~\n' +
                                                '“통제를 벗어난”이 무슨 의미일까요? 아까 이 코드 기억 나시나요?\n' +
                                                '각 셀마다 최소 100px의 높이를 확보하고, 컨텐츠가 높이 100px을 넘어가면 알아서 자동으로 늘어나도록(auto) 하려고 저 코드를 썼는데, 우리가 만든 예시가 row가 3개였기 때문에 repeat 회수를 3으로 지정해 줬었지요? 그런데 row 개수를 미리 알 수 없는 경우면 어떻게 할까요? 바로 이 grid-auto-rows가 그 해결책입니다'
                                            }
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'img' }}>
                                    <StyledWrapper $styled={{ height : '100%', margin : '4px' }}>
                                        <img src={'/img/wonny.jpeg'} alt={'이미지'} style={{
                                            position : 'absolute',
                                            height : '100%',
                                            width : '100%',
                                            objectFit : 'cover'
                                        }} />
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'category' }}>
                                    <StyledWrapper $styled={{ margin : '10px 0 6px 0', padding : '4px' }}>
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
                                </StyledLayoutGridItem>
                            </StyledLayoutGrid>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{
                            borderTop : '1px solid #e6e6e6', padding : '20px 10px 2px 10px'
                        }}>
                            <StyledLayoutGrid $styled={{
                                gridTemplateColumns : '72% 28%',
                                gridTemplateAreas :
                                    '"date date"' +
                                    '"title img"' +
                                    '"contents img"' +
                                    '"category category"'
                            }}>
                                <StyledLayoutGridItem $styled={{ gridArea : 'date' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '24px',
                                            color : '#BDC3C7'
                                        }}>
                                            {`Sep. 19. 22`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'title' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '36px',
                                            fontSize : '20px',
                                            fontWeight : 'bold',
                                            overflow : 'hidden',
                                            textOverflow : 'ellipsis',
                                            whiteSpace : 'nowrap'
                                        }}>
                                            {`Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem >
                                <StyledLayoutGridItem $styled={{ gridArea : 'contents' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '105px',
                                            overflow: 'hidden',
                                        }}>
                                            {
                                                'grid-template-columns(또는 grid-template-rows)의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성이에요.\n' +
                                                '속성 이름이 헷갈린다면 -template- 자리에 – auto-가 들어간다고 생각하세요~\n' +
                                                '“통제를 벗어난”이 무슨 의미일까요? 아까 이 코드 기억 나시나요?\n' +
                                                '각 셀마다 최소 100px의 높이를 확보하고, 컨텐츠가 높이 100px을 넘어가면 알아서 자동으로 늘어나도록(auto) 하려고 저 코드를 썼는데, 우리가 만든 예시가 row가 3개였기 때문에 repeat 회수를 3으로 지정해 줬었지요? 그런데 row 개수를 미리 알 수 없는 경우면 어떻게 할까요? 바로 이 grid-auto-rows가 그 해결책입니다'
                                            }
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'img' }}>
                                    <StyledWrapper $styled={{ height : '100%', margin : '4px' }}>
                                        <img src={'/img/wonny.jpeg'} alt={'이미지'} style={{
                                            position : 'absolute',
                                            height : '100%',
                                            width : '100%',
                                            objectFit : 'cover'
                                        }} />
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'category' }}>
                                    <StyledWrapper $styled={{ margin : '10px 0 6px 0', padding : '4px' }}>
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
                                </StyledLayoutGridItem>
                            </StyledLayoutGrid>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                    <StyledLayoutFlexItem>
                        <StyledWrapper $styled={{
                            borderTop : '1px solid #e6e6e6', padding : '20px 10px 2px 10px'
                        }}>
                            <StyledLayoutGrid $styled={{
                                gridTemplateColumns : '72% 28%',
                                gridTemplateAreas :
                                    '"date date"' +
                                    '"title img"' +
                                    '"contents img"' +
                                    '"category category"'
                            }}>
                                <StyledLayoutGridItem $styled={{ gridArea : 'date' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '24px',
                                            color : '#BDC3C7'
                                        }}>
                                            {`Sep. 19. 22`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'title' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '36px',
                                            fontSize : '20px',
                                            fontWeight : 'bold',
                                            overflow : 'hidden',
                                            textOverflow : 'ellipsis',
                                            whiteSpace : 'nowrap'
                                        }}>
                                            {`Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?`}
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem >
                                <StyledLayoutGridItem $styled={{ gridArea : 'contents' }}>
                                    <StyledWrapper $styled={{ padding : '4px' }}>
                                        <StyledContentsParagraph $styled={{
                                            height : '105px',
                                            overflow: 'hidden',
                                        }}>
                                            {
                                                'grid-template-columns(또는 grid-template-rows)의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성이에요.\n' +
                                                '속성 이름이 헷갈린다면 -template- 자리에 – auto-가 들어간다고 생각하세요~\n' +
                                                '“통제를 벗어난”이 무슨 의미일까요? 아까 이 코드 기억 나시나요?\n' +
                                                '각 셀마다 최소 100px의 높이를 확보하고, 컨텐츠가 높이 100px을 넘어가면 알아서 자동으로 늘어나도록(auto) 하려고 저 코드를 썼는데, 우리가 만든 예시가 row가 3개였기 때문에 repeat 회수를 3으로 지정해 줬었지요? 그런데 row 개수를 미리 알 수 없는 경우면 어떻게 할까요? 바로 이 grid-auto-rows가 그 해결책입니다'
                                            }
                                        </StyledContentsParagraph>
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'img' }}>
                                    <StyledWrapper $styled={{ height : '100%', margin : '4px' }}>
                                        <img src={'/img/wonny.jpeg'} alt={'이미지'} style={{
                                            position : 'absolute',
                                            height : '100%',
                                            width : '100%',
                                            objectFit : 'cover'
                                        }} />
                                    </StyledWrapper>
                                </StyledLayoutGridItem>
                                <StyledLayoutGridItem $styled={{ gridArea : 'category' }}>
                                    <StyledWrapper $styled={{ margin : '10px 0 6px 0', padding : '4px' }}>
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
                                </StyledLayoutGridItem>
                            </StyledLayoutGrid>
                        </StyledWrapper>
                    </StyledLayoutFlexItem>
                </StyledLayoutFlex>
            </StyledWrapper>
            {/* -- 최근작성한 내용 */}

            {/* ++ footer */}
            <StyledWrapper $styled={{ margin : '120px 0 0 0' }}>
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