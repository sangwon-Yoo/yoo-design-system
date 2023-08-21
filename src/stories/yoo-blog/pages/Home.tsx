import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents } from "@/design-system/module/Contents";
import { StyledItemParagraph } from "@/design-system/module/Item";


export function Home() {

    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
            <StyledLayoutFlexItem>
                <StyledWrapper $styled={{ height : '600px' }} as={'main'}>
                    <StyledContents $styled={{ backgroundImage : '/img/gradationBg.jpeg' }}>
                        <StyledLayoutFlex
                            $styled={{ flexDirection : 'column', justifyContent : 'center', height : '100%' }}
                        >
                            <StyledLayoutFlexItem>
                                <StyledWrapper $styled={{ height : '140px', margin : '0 33%' }}>
                                    <StyledContents>
                                        <StyledItemParagraph $styled={{
                                            fontSize : '2rem',
                                            color : 'white',
                                            textAlign : 'center',
                                            marginBottom : '0.8rem'
                                        }}>
                                            {`Yoo's Blog`}
                                        </StyledItemParagraph>
                                        <StyledItemParagraph $styled={{
                                            fontSize : '1rem', color : 'white', textAlign : 'center'
                                        }}>
                                            {`- 공부하는 것을 기록 -`}
                                        </StyledItemParagraph>
                                        {/*<StyledLayoutFlex $styled={{
                                            justifyContent : 'center'
                                        }} $styledMobile={{
                                            flexDirection : 'column'
                                        }}>
                                           <StyledLayoutFlexItem>
                                               <StyledWrapper $styled={{
                                                   height : '20px', width : '60px',
                                               }}>

                                               </StyledWrapper>
                                           </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>

                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>*/}
                                    </StyledContents>
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
                    $styled={{ height : 'auto', margin : '0 10%' }}
                    $styledMobile={{ height : 'auto', margin : '0' }}
                    as={'section'}
                >
                    <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ height : '43px' }}>
                                <StyledContents $styled={{ backgroundColor : '#333333' }}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ height : '225px' }}>
                                <StyledContents $styled={{ backgroundColor : '#444444' }}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ height : '225px' }}>
                                <StyledContents $styled={{ backgroundColor : '#555555' }}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $styled={{ height : '225px' }}>
                                <StyledContents $styled={{ backgroundColor : '#666666' }}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}