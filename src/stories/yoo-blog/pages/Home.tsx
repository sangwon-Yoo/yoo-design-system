import { StyledContainerRelative } from "@/design-system/module/Container";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";


export function Home() {

    return (
        <StyledContainerRelative id={'sdf'}>
            <StyledLayoutFlex flexDirection={'column'}>
                <StyledLayoutFlexItem>
                    <StyledWrapper height={'600px'} width={'100%'} style={{backgroundColor : 'gray'}}>

                    </StyledWrapper>
                </StyledLayoutFlexItem>
                <StyledLayoutFlexItem>

                </StyledLayoutFlexItem>
            </StyledLayoutFlex>
        </StyledContainerRelative>
    );
}