import React from "react";
import {PageTitleContainer, PageTitleStyled, PageSubtitleStyle} from "./PageTitle.style";

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) =>{
    return (<PageTitleContainer>
                <PageTitleStyled>
                    {props.title}
                </PageTitleStyled>
                <PageSubtitleStyle>
                    {props.subtitle}
                </PageSubtitleStyle>

            </PageTitleContainer>);
}

export default PageTitle;