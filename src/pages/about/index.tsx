import { type NextPage } from "next";
import Head from "next/head";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { AppNavHeader } from "@/components/composite/AppNavHeader";
import {
  SplitContent,
  SplitContentLeft,
  SplitContentRight,
} from "@ui/SplitContent";
import { ButtonLink } from "@ui/Button";
import { PUBLIC } from "@/config/routes";
import { Card, CardContent } from "@ui/Card";
import { Figure } from "@ui/Figure";

const Page: NextPage = () => {
  const CONTENT = {
    hero: {
      heading: "Max Randle",
      body: "Find out a little bit about me, download my résumé, play around with some of my embedded projects.",
    },
    workSection: {
      heading: "My work",
      body: "I am a Front-End Software Engineer with a passion for creating fast, responsive, seamless, and accessible web applications. I value readability, consistency, simplicity, and agnosticism as the core paradigms of my coding mantra. In my current role I embrace these values to write professional grade react components at a very high standard.",
      action: "résumé",
    },
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen overflow-hidden bg-base-200 pb-20 dark:bg-base-900">
        <AppNavHeader />
        <Section>
          <Container>
            <Typography className="text-center" level="heading1" color="base">
              {CONTENT.hero.heading}
            </Typography>
            <Typography
              className="mx-auto mt-6 max-w-xl text-center"
              level="heading3"
              color="weaker"
            >
              {CONTENT.hero.body}
            </Typography>
          </Container>
        </Section>

        <Section>
          <Container>
            <Card elevation={"high"} className="bg-accent-50 dark:bg-base-800">
              <CardContent>
                <SplitContent>
                  <SplitContentLeft>
                    <Typography level="heading2" color="base">
                      {CONTENT.workSection.heading}
                    </Typography>
                  </SplitContentLeft>
                  <SplitContentRight>
                    <Figure
                      className="mx-auto aspect-square max-h-80 rounded-full"
                      src={PUBLIC.media.maxProfilePicture}
                      alt="me"
                      width={320}
                      height={320}
                    />
                  </SplitContentRight>
                  <SplitContentLeft>
                    <Typography color="weaker">
                      {CONTENT.workSection.body}
                    </Typography>
                  </SplitContentLeft>
                  <SplitContentLeft>
                    <ButtonLink target="_blank" href={PUBLIC.documents.resume}>
                      {CONTENT.workSection.action}
                    </ButtonLink>
                  </SplitContentLeft>
                </SplitContent>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
