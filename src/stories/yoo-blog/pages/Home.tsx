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
    StyledContentsSpan
} from "@/design-system/module/Contents";
import Image from "next/image";


export function Home() {

    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
            <StyledLayoutFlexItem>
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
                                        fontSize : '1rem',
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
                                                lineHeight : '43px',
                                                fontSize : '19px',
                                                margin : '4px',
                                                border : '2px solid #ffffff',
                                                borderRadius : '2px',
                                                color : '#ffffff',
                                                backgroundColor : 'transparent'
                                            }}>
                                                {`sdf`}
                                            </StyledContentsAnchor>
                                        </StyledWrapper>
                                    </StyledLayoutFlexItem>
                                    <StyledLayoutFlexItem>
                                        <StyledWrapper $styled={{ textAlign : 'center' }}>
                                            <StyledContentsAnchor $styled={{
                                                display : 'inline-block',
                                                width : '143px',
                                                height : '43px',
                                                lineHeight : '43px',
                                                fontSize : '19px',
                                                margin : '4px',
                                                border : '2px solid #ffffff',
                                                borderRadius : '2px',
                                                color : '#ffffff',
                                                backgroundColor : 'transparent'
                                            }}>
                                                {`sdf`}
                                            </StyledContentsAnchor>
                                        </StyledWrapper>
                                    </StyledLayoutFlexItem>
                                </StyledLayoutFlex>
                            </StyledLayoutFlexItem>
                        </StyledLayoutFlex>
                    </StyledContents>
                </StyledWrapper>
            </StyledLayoutFlexItem>
            <StyledLayoutFlexItem>
                <StyledWrapper
                    $styled={{ margin : '0 10%' }}
                    $styledMobile={{ margin : '0' }}
                    as={'section'}
                >
                    <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ borderBottom : '1px solid #e6e6e6', padding : '10px' }}>
                                <StyledContentsParagraph $styled={{ height : '23px', lineHeight : '23px' }}>
                                    {`최근 작성한 내용`}
                                </StyledContentsParagraph>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ borderBottom : '1px solid #e6e6e6', padding : '24px 10px' }}>
                                <StyledContents $styled={{ height : '225px' }}>
                                    <StyledLayoutFlex>
                                        <StyledLayoutFlexItem $styled={{
                                            flex : '0 0 72%',
                                            maxWidth : '72%'
                                        }}>
                                            <StyledContentsParagraph $styled={{
                                                height : '24px',
                                                color : '#BDC3C7'
                                            }}>
                                                {`Sep. 19. 22`}
                                            </StyledContentsParagraph>
                                            <StyledContentsParagraph $styled={{
                                                height : '36px',
                                                fontSize : '20px',
                                                fontWeight : 'bold',
                                                overflow : 'hidden',
                                                textOverflow : 'ellipsis',
                                                whiteSpace : 'nowrap'
                                            }}>
                                                {`Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?dfsdfsdfsdkkhkjhk러줄에 걸쳐 나타내기 위해서는?dfsdfsdfsdkk러줄에 걸쳐 나타내기 위해서는?dfsdfsdfsdkk러줄에 걸쳐 나타내기 위해서는?dfsdfsdfsdkkjh`}
                                            </StyledContentsParagraph>
                                            <StyledContentsParagraph>

                                            </StyledContentsParagraph>
                                            <StyledContentsParagraph>

                                            </StyledContentsParagraph>
                                        </StyledLayoutFlexItem>
                                        <StyledLayoutFlexItem $styled={{ flex : '0 0 28%' }}>
                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ borderBottom : '1px solid #e6e6e6', padding : '24px 10px' }}>
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '72% 28%',
                                    gridTemplateAreas :
                                        '"date date"' +
                                        '"title img"' +
                                        '"contents img"' +
                                        '"category category"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'date' }}>
                                        <StyledWrapper>
                                            <StyledContentsParagraph $styled={{
                                                height : '24px',
                                                color : '#BDC3C7'
                                            }}>
                                                {`Sep. 19. 22`}
                                            </StyledContentsParagraph>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'title' }}>
                                        <StyledWrapper>
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
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'contents' }}>
                                        <StyledWrapper>
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
                                        <StyledWrapper>
                                            <StyledContents $styled={{ height : '141px', width : '100%' }}>
                                                <Image src={'http://127.0.0.1:3000/img/wonny.png'} alt={'/img/wonny.png'} fill />
                                            </StyledContents>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'category' }}>
                                        <StyledWrapper>
                                            <StyledContentsParagraph $styled={{
                                                height : '24px',
                                                marginTop : '10px',
                                                color : '#0ca8ac',
                                                fontWeight : 'bold'
                                            }}>
                                                {`"Dev"`}
                                            </StyledContentsParagraph>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ borderBottom : '1px solid #e6e6e6' }}>
                                <StyledContents $styled={{ height : '225px' }}>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}