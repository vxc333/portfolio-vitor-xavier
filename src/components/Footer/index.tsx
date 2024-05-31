import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import linkedinDark from '../../../public/logos/linkedin-dark.png'
import gitHubDark from '../../../public/logos/github-dark.png'
import { useTranslations } from 'next-intl';

interface LogoProps {
    $leftBorder?: boolean;
  }

const FooterStyled = styled.footer`
    width: 100vw;
    height: 49.5px;
    position: fixed;
    bottom: 0;
    border: 1px solid #1E2D3D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 23px;
    padding-right: 23px;    
`

const FindMe = styled.div`
    color: #607B96;
    height: 100%;
    display: flex;
    align-items: center;
`

const DivNome = styled.div`
    color: #607B96;
    margin-right: 18px;
`

const Logo = styled.div<LogoProps>`
    height: 100%;
    width: 52px;
    ${(props) => props.$leftBorder && 'border-left: 1px solid #1E2D3D;'}
    border-right: 1px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        img {
            content: url(${'./logos/linkedin-light.png'});
    }
`

const GitHubLink = styled.a`
    color: #607B96;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 5px;

    &:hover {
        img {
            content: url(${'./logos/github-light.png'});
        }
    }

    @media (max-width: 600px) {
        height: 100%;
        > span {
           font-size: 14px;
        }
    }
`

const Footer = () => {

    const t = useTranslations("Footer");

  return (
    <FooterStyled>
        <FindMe>
            <DivNome>
            {t("text")}
            </DivNome>

            <Logo $leftBorder={true}>
                <a href='https://www.linkedin.com/in/vitorxaviercorreia/' target="_blank" rel="noopener noreferrer">
                    <Image src={linkedinDark} alt='Linkedin Logo' width={24} height={24} />
                </a>
            </Logo>
        </FindMe>

        <GitHubLink href='https://github.com/vxc333' target="_blank" rel="noopener noreferrer">
            <span>@vxc333</span>
            <Image src={gitHubDark} alt='GitHub Logo' width={24} height={24} />
        </GitHubLink>

    </FooterStyled>
  )
}

export default Footer