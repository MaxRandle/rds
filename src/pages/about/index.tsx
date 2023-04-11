import { type NextPage } from "next";
import Head from "next/head";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { AppNavHeader } from "@/components/composite/AppNavHeader";

const Page: NextPage = () => {
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
            <Typography level="heading1" color="base">
              hello dude.
            </Typography>
            <Typography level="heading1" color="weak">
              hello dude.
            </Typography>
            <Typography level="heading1" color="weaker">
              hello dude.
            </Typography>
            <Typography level="heading1" color="primary">
              hello dude.
            </Typography>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
