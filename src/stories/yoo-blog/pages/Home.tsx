import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents, StyledContentsParagraph } from "@/design-system/module/Contents";


export function Home() {

    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
            <StyledLayoutFlexItem>
                <StyledWrapper as={'main'}>
                    <StyledContents $styled={{
                        height : '600px', width : '100%', backgroundImage : '/img/gradationBg.jpeg'
                    }}>
                        <StyledLayoutFlex
                            $styled={{ flexDirection : 'column', justifyContent : 'center' }}
                        >
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{ margin : '0 33%' }}>
                                    <StyledContentsParagraph $styled={{
                                        width : '100%',
                                        height : '40px',
                                        fontSize : '2rem',
                                        color : 'white',
                                        textAlign : 'center',
                                        marginBottom : '0.8rem'
                                    }}>
                                        {`Yoo's Blog`}
                                    </StyledContentsParagraph>
                                    <StyledContentsParagraph $styled={{
                                        width : '100%',
                                        height : '40px',
                                        fontSize : '1rem',
                                        color : 'white',
                                        textAlign : 'center'
                                    }}>
                                        {`- 공부하는 것을 기록 -`}
                                    </StyledContentsParagraph>
                                    <StyledLayoutFlex $styled={{
                                        height : 'auto',
                                        width  :'auto',
                                        justifyContent : 'center'
                                    }} $styledMobile={{
                                        flexDirection : 'column'
                                    }}>
                                       <StyledLayoutFlexItem>

                                       </StyledLayoutFlexItem>
                                        <StyledLayoutFlexItem>

                                        </StyledLayoutFlexItem>
                                    </StyledLayoutFlex>
                                </StyledWrapper>
                            </StyledLayoutFlexItem>
                            {/*<StyledLayoutFlexItem>
                                <StyledWrapper $styled={{ height : '100px' }}>

                                </StyledWrapper>
                            </StyledLayoutFlexItem>*/}
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
                            <StyledWrapper>
                                <StyledContents $styled={{
                                    width : '100%', height : '43px', backgroundColor : '#333333'
                                }}>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper>
                                <StyledContents $styled={{
                                    width : '100%', height : '225px', backgroundColor : '#444444'
                                }}>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper>
                                <StyledContents $styled={{
                                    width : '100%', height : '225px', backgroundColor : '#555555'
                                }}>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper>
                                <StyledContents $styled={{
                                    width : '100%', height : '225px', backgroundColor : '#666666'
                                }}>
                                </StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}