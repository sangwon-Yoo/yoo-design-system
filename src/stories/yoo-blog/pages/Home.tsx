import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents } from "@/design-system/module/Contents";


export function Home() {

    return (
        <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
            <StyledLayoutFlexItem>
                <StyledWrapper $styled={{height : '600px'}} as={'main'}>
                    <StyledContents $styled={{ backgroundImage : '/img/gradationBg.jpeg' }} />
                </StyledWrapper>
            </StyledLayoutFlexItem>
            <StyledLayoutFlexItem>
                <StyledWrapper $styled={{ height : 'auto', margin : '0 10%' }}>
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