import { StyledContainerRelative } from "@/design-system/module/Container";
import { StyledLayoutFlex, StyledLayoutFlexItem } from "@/design-system/module/Layout";
import {StyledWrapper} from "@/design-system/module/Wrapper";


export function Home() {

    return (
        <StyledContainerRelative>
            <StyledLayoutFlex flexDirection={'column'}>
                <StyledLayoutFlexItem>
                    <StyledWrapper height={'5rem'} width={'100%'}>

                    </StyledWrapper>
                </StyledLayoutFlexItem>
                <StyledLayoutFlexItem>

                </StyledLayoutFlexItem>
            </StyledLayoutFlex>
        </StyledContainerRelative>
    );
}