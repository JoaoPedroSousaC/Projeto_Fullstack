import React from "react";
import {AppList, FooterContainer, FooterStyle, FooterTitle} from "./Footer.style";
import {Box, Typography} from "@mui/material";

const Footer = () =>{
    return (<FooterStyle>
                <FooterContainer>
                    <Box sx={{ maxWidth: '400px' }}>
                        <FooterTitle >Quem Somos</FooterTitle>
                        <Typography variant={'body2'} sx={{ mt: 2 }}>O e-diaristas te ajuda a encontrar um profissional
                            perfeito para realizar a limpeza da sua casa. Garantimos
                            os melhores profissionais com total segurança e
                            praticidade! São milhares de clientes satisfeitos por
                            todo o país.
                        </Typography>
                    </Box>
                    <div>
                        <FooterTitle>Baixe nosso aplicativos</FooterTitle>
                        <AppList>
                            <li>
                                <a
                                    href={'/'}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                >
                                    <img
                                        src={'/img/logos/app-store.png'}
                                        alt={'App Store'}
                                    />
                                </a>

                            </li>
                            <li>
                                <a
                                    href={'/'}
                                    target={'_blank'}
                                    rel={'noopener noreferrer'}
                                >
                                    <img
                                        src={'/img/logos/google-play.png'}
                                        alt={'Google Play'}
                                    />
                                </a>

                            </li>

                        </AppList>
                    </div>
                </FooterContainer>
            </FooterStyle>);
}

export default Footer;