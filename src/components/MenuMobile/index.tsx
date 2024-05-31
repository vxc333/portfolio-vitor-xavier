import Image from 'next/image';
import React from 'react'
import { Container } from './styles';
import closeIcon from '../../../public/close.png'
import styled from 'styled-components';
import Footer from '../Footer';
import { useRouter } from '@/src/navigation';
import { useTranslations } from 'next-intl';

interface Props {
    $menuIsVisible: boolean
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivNome = styled.div`
  color: #607B96;
  margin-right: 124px;
  cursor: pointer;

  &: hover {
    color: #FFF;
  }
`;

const PrimeiraParte = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
  height: 56.191px;
  border-bottom: 0.5px solid #1E2D3D;
  width: 100%;
`;
  
const Links = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;


const LinkNavegacao = styled.div`
    color: #FFF;
    border-top: 0.5px solid #1E2D3D;
    border-bottom: 0.5px solid #1E2D3D;
    padding-left: 31px;
    padding-right: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 55px;
`;  

const MenuMobile = ({$menuIsVisible, setMenuIsVisible}: Props) => {

  const router = useRouter();
  const t = useTranslations("Menu");

  return (
    <Container isvisible={$menuIsVisible ? 'true' : 'false'} >
        <PrimeiraParte>
            <DivNome>
            vitor-xavier
            </DivNome>
            <Image src={closeIcon} width={16} height={16} alt='Close icon' onClick={() => setMenuIsVisible(false)} /> 
        </PrimeiraParte>
        <Links>
            <LinkNavegacao onClick={() => router.push('/')}>
                _{t("hello")}
            </LinkNavegacao>
            <LinkNavegacao onClick={() => router.push('/about-me')}>
                _{t("about")}
            </LinkNavegacao>
            <LinkNavegacao onClick={() => router.push('/projects')}>
                _{t("projects")}
            </LinkNavegacao>
            <LinkNavegacao onClick={() => router.push('/contact-me')}>
                _{t("contact")}
            </LinkNavegacao>
        </Links>
        <Footer />
    </Container>
  )
}

export default MenuMobile