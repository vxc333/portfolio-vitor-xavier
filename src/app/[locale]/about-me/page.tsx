"use client";
import Footer from "@/src/components/Footer";
import Menu from "@/src/components/Menu";
import MenuMobile from "@/src/components/MenuMobile";
import TechnologyCheck from "@/src/components/TechnologyCheck";
import React, { useState } from "react";
import {
  Body,
  Folders,
  FolderName,
  Folder,
  PrimeiraParte,
  NomePasta,
  SubPasta,
  DivContact,
  FolterContact,
  Contact,
  ContactText,
  CodeSection,
  FileName,
  Code,
  Numbers,
  TechnologiesSection,
  Post,
  User,
  UserTop,
  Profile,
  UserData,
  UserName,
  PostContent,
  Text,
} from "./styles";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bioIsOpen, setBioIsOpen] = useState(false);
  const [interestsIsOpen, setInterestsIsOpen] = useState(false);
  const [educationIsOpen, setEducationIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const texts: {
    [key: string]: string;
  } = {
    "about-me": `
          * About me
          * 23-year-old professional with technical training 
          * in Electronics and graduating in Internet Systems, combining skills in React, 
          * Next.js, Python, ReactJs, Express, 
          * AdonisJS, Spring Boot.
    `,
    "sobre-mim": `
    * Sobre mim
    * Profissional de 23 anos com formação técnica 
    * em Eletroeletrônica e graduando em Sistemas para Internet, mesclando habilidades em React, 
    * Next.js, Python, ReactJs, Express, 
    * AdonisJS, Spring Boot.
    `,
    experience: `
        ** IT support
        * AquiCNPJ
        * 
        * May 2024 - Until now.
        
            ---- Administrative routines;
            ---- Technical support.
        * 
        *   
        *          
       *          
    `,
    experiencia: `
        **Suporte de TI
        * AquiCNPJ
        * 
        * Maio de 2024 - Até o mometo.
            ---- Rotinas administrativas;
            ---- Suporte técnico.
        * 
        *   
        *       
       *          
    `,
    university: `
          * University
          *
          * Undergraduate in Internet Systems
          * at the Federal Institute of Maranhão.
          *
          * Expected graduation in May 2025.

    `,

    universidade: `
    * Universidade
    *
    * Graduando em Superior de Sistemas
    * para Internet pelo
    * Instituto de Federal do Maranhão.
    * 
    * Previsão de conclusão em Maior de 2025.
`,
  };

  const t = useTranslations("About");

  const [openText, setOpenText] = useState(texts[t("about-me")]);
  const [fileName, setFileName] = useState(t("bioSubFolder"));

  const handleClick = (text: string, fileName: string) => {
    setOpenText(texts[text]);
    setFileName(fileName);
    contarLinhas(texts[text]);
  };

  function contarLinhas(str: string) {
    const linhas = str.split("\n");
    const numeroDeLinhas = linhas.length;
    const linesArray = [];

    for (let index = 1; index <= numeroDeLinhas; index++) {
      linesArray.push(index);
    }

    setNumberOfLines(linesArray);
  }

  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile
        $menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Body>
        <Folders>
          <div>
            <FolderName>
              <img src="/arrow-down.png" />
              {t("folderTitle")}
            </FolderName>

            <div>
              <Folder onClick={() => setBioIsOpen(!bioIsOpen)}>
                <PrimeiraParte>
                  {bioIsOpen ? (
                    <img src={`/arrow-open.png`} />
                  ) : (
                    <img src={`/arrow-right.png`} />
                  )}

                  <NomePasta>
                    <img src="/pink-icon.png" />
                    bio
                  </NomePasta>
                </PrimeiraParte>

                {bioIsOpen ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(t("about-me"), t("bioSubFolder"));
                    }}
                  >
                    <SubPasta>
                      <img src="/file.png" />
                      {t("bioSubFolder")}
                    </SubPasta>
                  </div>
                ) : null}

                {bioIsOpen ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(t("experience"), t("bioSubFolder2"));
                    }}
                  >
                    <SubPasta>
                      <img src="/file.png" />
                      {t("bioSubFolder2")}
                    </SubPasta>
                  </div>
                ) : null}
              </Folder>

              <Folder onClick={() => setInterestsIsOpen(!interestsIsOpen)}>
                <PrimeiraParte>
                  {interestsIsOpen ? (
                    <img src={`/arrow-open.png`} />
                  ) : (
                    <img src={`/arrow-right.png`} />
                  )}

                  <NomePasta>
                    <img src="/green-icon.png" />
                    {t("interestsFolder")}
                  </NomePasta>
                </PrimeiraParte>
              </Folder>

              <Folder onClick={() => setEducationIsOpen(!educationIsOpen)}>
                <PrimeiraParte>
                  {educationIsOpen ? (
                    <img src={`/arrow-open.png`} />
                  ) : (
                    <img src={`/arrow-right.png`} />
                  )}

                  <NomePasta>
                    <img src="/blue-icon.png" />
                    {t("educationFolder")}
                  </NomePasta>
                </PrimeiraParte>

                {educationIsOpen ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(
                        t("educationSubFolder"),
                        t("educationSubFolder")
                      );
                    }}
                  >
                    <SubPasta>
                      <img src="/file.png" />
                      {t("educationSubFolder")}
                    </SubPasta>
                  </div>
                ) : null}
              </Folder>
            </div>
          </div>
          <DivContact
            isOpen={contactIsOpen}
            onClick={() => setContactIsOpen(!contactIsOpen)}
          >
            <FolterContact>
              <img src="/arrow-down.png" />
              {t("contact")}
            </FolterContact>

            <Contact isOpen={contactIsOpen}>
              <img src="/mail-icon.png" />
              <ContactText> vitor.xavier.dev@gmail.com</ContactText>
            </Contact>

            <Contact isOpen={contactIsOpen}>
              <img src="/phone-icon.png" />
              <ContactText> (86) 99905-9537</ContactText>
            </Contact>
          </DivContact>
        </Folders>

        <CodeSection>
          <FileName>
            {fileName}
            <img src="/close-icon.png" />
          </FileName>

          <Code>
            <Numbers>
              {numberOfLines.map((line) => (
                <span>{line}</span>
              ))}
            </Numbers>

            <Text>
              /**
              {openText.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              */
            </Text>
          </Code>
        </CodeSection>

        <TechnologiesSection>
          <Text> // {t("technologiesTitle")}</Text>
          <Post>
            <User>
              <UserTop>
                <Profile src="/profile.jpg" />
                <UserData>
                  <UserName>@vxc333</UserName>
                  <span>Created 5 months ago</span>
                </UserData>
              </UserTop>
            </User>

            <PostContent>
              <TechnologyCheck icon="html" name="HTML" />
              <TechnologyCheck icon="css" name="CSS" />
              <TechnologyCheck icon="javascript" name="JavaScript" />
              <TechnologyCheck icon="react" name="React" />
              <TechnologyCheck icon="typescript" name="TypeScript" />
              <TechnologyCheck icon="next" name="Next.js" />
              <TechnologyCheck icon="adonis" name="AdonisJS" />
              <TechnologyCheck icon="selenium" name="Selenium" />
              <TechnologyCheck icon="python" name="Python" />
              <TechnologyCheck icon="sql" name="SQL" />
              <TechnologyCheck icon="express" name="Express" />
              <TechnologyCheck icon="postgres" name="Postgres" />
              <TechnologyCheck icon="java" name="Java" />
              <TechnologyCheck icon="spring" name="Spring" />
            </PostContent>
          </Post>
        </TechnologiesSection>
      </Body>

      <Footer />
    </>
  );
};

export default AboutMe;
