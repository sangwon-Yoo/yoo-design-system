import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import { StyledContents } from "@/design-system/module/Contents";


export function Home() {

    return (
        <StyledLayoutFlex $flexDirection={'column'}>
            <StyledLayoutFlexItem>
                <StyledWrapper $height={'600px'}     >
                    fsadsdfsdf
                </StyledWrapper>
            </StyledLayoutFlexItem>
            <StyledLayoutFlexItem>
                <StyledWrapper $height={'auto'} $width={'80%'} $margin={'0 10%'}>
                    <StyledLayoutFlex $flexDirection={'column'}>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $height={'43px'}>
                                <StyledContents $backgroundColor={'#333333'}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $height={'225px'}>
                                <StyledContents $backgroundColor={'#444444'}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $height={'225px'}>
                                <StyledContents $backgroundColor={'#555555'}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                        <StyledLayoutFlexItem>
                            <StyledWrapper $height={'225px'}>
                                <StyledContents $backgroundColor={'#666666'}></StyledContents>
                            </StyledWrapper>
                        </StyledLayoutFlexItem>
                    </StyledLayoutFlex>
                </StyledWrapper>
            </StyledLayoutFlexItem>
        </StyledLayoutFlex>
    );
}