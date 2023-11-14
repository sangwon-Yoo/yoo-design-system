import {
    StyledLayoutFlex,
    StyledLayoutFlexItem,
    StyledLayoutGrid,
    StyledLayoutGridItem
} from "@/design-system/module/Layout";
import { StyledWrapper } from "@/design-system/module/Wrapper";
import {
    StyledContents, StyledContentsAnchor,
    StyledContentsButton, StyledContentsInputText, StyledContentsParagraph,
    StyledContentsSpan
} from "@/design-system/module/Contents";
import styled from "styled-components";
import { Menu } from "styled-icons/remix-fill";
import { PaperPlane } from "styled-icons/evaicons-solid";
import { Edit } from "styled-icons/boxicons-solid";
import { isMobile } from "@/design-system/MediaQuery";
import { CloseOutline } from "styled-icons/evaicons-outline";


export function ContentsEditor() {

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
                                                            height : '36px'
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
                    $styledMobile={{ flex : '0 0 auto' }}
                >
                    <StyledWrapper
                        $styled={{ margin : '120px 24px 36px 24px' }}
                        $styledMobile={{ margin : '80px 24px 36px 24px' }}
                    >
                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                    borderRadius : '3px',
                                    backgroundColor : '#f2f3f5'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '30% 60% 10%',
                                    gridTemplateAreas :
                                        '"selectBox textField close"' +
                                        '"name name name"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'selectBox' }}>
                                        <StyledWrapper
                                            $styled={{ margin : '0 14px 0 0' }}
                                        >
                                            <StyledContentsInputText
                                                name={'category'}
                                                as={'select'}
                                                $styled={{
                                                    border : '2.4px solid #0ca8ac',
                                                    borderRadius : '3px',
                                                    width : '100%',
                                                    height : '32px',
                                                    lineHeight : '32px',
                                                    backgroundColor : 'transparent',
                                                    hover : { border : '2.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    border : '2.4px solid #0ca8ac',
                                                    hover : { border : '2.4px solid #66f1e1' }
                                                }}
                                            >
                                                <option value={'vanillaJS'}>vanillaJS</option>
                                                <option value={'markup'}>markup</option>
                                                <option value={'react'}>react</option>
                                                <option value={'nextJS'}>nextJS</option>
                                                <option value={'신규추가'}>신규추가</option>
                                            </StyledContentsInputText>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
                                                $styled={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    width : '100%',
                                                    height : '32px',
                                                    backgroundColor : 'transparent',
                                                    lineHeight : '32px',
                                                    transition : 'border-bottom .12s ease',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                }}
                                            >
                                                {`Category`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                    borderRadius : '3px',
                                    backgroundColor : '#f2f3f5'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"textField close"' +
                                        '"name name"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
                                                $styled={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    width : '100%',
                                                    height : '32px',
                                                    backgroundColor : 'transparent',
                                                    lineHeight : '32px',
                                                    transition : 'border-bottom .12s ease',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                }}
                                            >
                                                {`Title`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                    borderRadius : '3px',
                                    backgroundColor : '#f2f3f5'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"textArea close"' +
                                        '"name name"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textArea' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                $styled={{
                                                    border : '2.4px solid #0ca8ac',
                                                    borderRadius : '3px',
                                                    width : '100%',
                                                    height : '100px',
                                                    backgroundColor : 'transparent',
                                                    transition : 'border .12s ease',
                                                    focusingVisible : { border : '2.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    border : '2.4px solid #0ca8ac',
                                                    focusingVisible : { border : '2.4px solid #66f1e1' }
                                                }}
                                                as={'textarea'}
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                }}
                                            >
                                                {`Sub Title`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledContents
                                $styled={{
                                    width : '680px',
                                    height : 'auto',
                                    padding : '20px 20px 6px 20px',
                                    borderRadius : '3px',
                                    backgroundColor : '#f2f3f5'
                                }}
                                $styledMobile={{
                                    width : '100%',
                                    height : 'auto'
                                }}
                            >
                                <StyledLayoutGrid $styled={{
                                    gridTemplateColumns : '90% 10%',
                                    gridTemplateAreas :
                                        '"textField close"' +
                                        '"name name"'
                                }}>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'textField' }}>
                                        <StyledWrapper>
                                            <StyledContentsInputText
                                                type={'text'}
                                                $styled={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    width : '100%',
                                                    height : '32px',
                                                    backgroundColor : 'transparent',
                                                    lineHeight : '32px',
                                                    transition : 'border-bottom .12s ease',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                                $styledMobile={{
                                                    borderBottom : '2.4px solid #0ca8ac',
                                                    focusingVisible : { borderBottom : '2.4px solid #66f1e1' }
                                                }}
                                            />
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'close' }}>
                                        <StyledWrapper $styled={{
                                            height : '32px',
                                            padding : '6px'
                                        }}>
                                            <StyledContentsButton
                                                $styled={{
                                                    width : '100%',
                                                    height : '100%',
                                                    color : '#6B6B6B'
                                                }}
                                            >
                                                <StyledContentsIconClose />
                                            </StyledContentsButton>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                    <StyledLayoutGridItem $styled={{ gridArea : 'name' }}>
                                        <StyledWrapper>
                                            <StyledContentsSpan
                                                $styled={{
                                                    display : 'inline-block',
                                                    width : '100%',
                                                    height : '2rem',
                                                    lineHeight : '2rem',
                                                }}
                                            >
                                                {`Thumbnail`}
                                            </StyledContentsSpan>
                                        </StyledWrapper>
                                    </StyledLayoutGridItem>
                                </StyledLayoutGrid>
                            </StyledContents>
                        </StyledWrapper>

                        <StyledWrapper
                            $styled={{
                                margin : '0 0 24px 0'
                            }}
                            $styledMobile={{
                                margin : '0 0 14px 0'
                            }}
                        >
                            <StyledLayoutFlex $styled={{ flexDirection : 'column' }}>
                                <StyledLayoutFlexItem>
                                    <StyledWrapper $styled={{
                                        margin : '0 0 4px 0',
                                        borderRadius : '3px',
                                        backgroundColor : '#f2f3f5'
                                    }}>
                                        <StyledLayoutFlex
                                            $styled={{ flexWrap : 'wrap' }}
                                            $styledMobile={{ justifyContent : 'center' }}
                                        >
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Title
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Bold
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#292929',
                                                        fontWeight : 'bold'
                                                    }}
                                                >
                                                    Italic
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Center
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Image
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                            <StyledLayoutFlexItem>
                                                <StyledContentsButton
                                                    $styled={{
                                                        width : '72px',
                                                        height : '40px',
                                                        margin : '0 10px',
                                                        color : '#6B6B6B'
                                                    }}
                                                >
                                                    Code
                                                </StyledContentsButton>
                                            </StyledLayoutFlexItem>
                                        </StyledLayoutFlex>
                                    </StyledWrapper>
                                </StyledLayoutFlexItem>
                                <StyledLayoutFlexItem>
                                    <StyledContents $styled={{
                                        height : '630px',
                                        padding : '20px',
                                        border : '2.4px solid #0ca8ac',
                                        borderRadius : '3px',
                                    }} />
                                </StyledLayoutFlexItem>
                            </StyledLayoutFlex>
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
                                        height : '100%'
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

const StyledContentsIconClose = styled(CloseOutline)`
  display: inherit;
  color: inherit;
  width: 100%;
  height: 100%;

  ${isMobile} {
    width: 100%;
    height: 100%;
  }
`;