import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
} from "@tabler/icons-react";
import {
  Button,
  Card,
  Grid,
  Overlay,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Project.module.css";
import { TitleHead } from "../../component/Title";
import kiz from "../../assets/Kiz.png";
import vision from "../../assets/vision-background.png";
import zstudy from "../../assets/Z-study.png";
import osense from "../../assets/osense.png";

const features = [
  {
    icon: IconReceiptOff,
    title: "KLAPTON INSURANCE ZAMBIA",
    link: "https://app.kiz.co.zm/insure/motor/step/1",
    image: kiz,
    description:
      "A Zambian insurance company provides insurance products in Zambia. KIZ’s main business objective is to serve the end consumer with superior products.",
  },
  {
    icon: IconFileCode,
    title: "Z-STUDY ",
    link: "https://web.zstudy.co/#/login",
    image: zstudy,
    description:
      "ZStudy is an EdTech platform offering learner-centered digital tools, AI-powered features, and a virtual lab for students.",
  },
  {
    icon: IconCircleDotted,
    title: "OSENSE",
    image: osense,
    link: "https://www.app.osense.io/auth/register/email",
    description:
      "O'Sense is a web app that tracks employee work hours, monitors fuel usage, and manages inventory.",
  },
  // {
  //   icon: IconFlame,
  //   title: "VISION CREATIONS",
  //   link: "https://vision-creations-rho.vercel.app/",
  //   image: vision,
  //   description:
  //     "Vision Creations is a web app where users can browse a photos and book a session or event.",
  // },
];

export function Project() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}>
          <Card
            radius="md"
            className={classes.card}
            style={{
              //   marginTop: -120,
              backgroundImage: `url(${feature.image})`,
            }}
          >
            <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

            <div className={classes.content}>
              <Text size="lg" fw={700} className={classes.titleCard}>
                {feature.title}
              </Text>

              {/* <Text size="sm" className={classes.description}>
                Save up to 25% at Fifth Season Hotels in Europe, the Middle
                East, Africa and Asia Pacific
              </Text> */}
              <a href={feature.link} target="_blank" rel="noreferrer">
                <Button
                  className={classes.action}
                  variant="white"
                  color="dark"
                  size="xs"
                >
                  view project
                </Button>
              </a>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <>
      <TitleHead title="My Projects" />
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              These projects were completed using the skills above, with the
              companies I've worked for, and with help from friends.
            </Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
