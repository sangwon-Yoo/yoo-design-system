import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents,
    StyledContentsAnchor,
    StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";


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
                                                {`Ellipsis 를 여러줄에 걸쳐 나타내기 위해서는?dfsdfsdfsdkkhkjhkjh`}
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
                            <StyledWrapper $styled={{ borderBottom : '1px solid #e6e6e6' }}>
                                <StyledContents $styled={{ height : '225px' }}>
                                </StyledContents>
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