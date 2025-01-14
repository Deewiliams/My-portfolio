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

const features = [
  {
    icon: IconReceiptOff,
    title: "KLAPTON INSURANCE ZAMBIA",
    link: "https://app.kiz.co.zm/insure/motor/step/1",
    image: kiz,
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "Z-STUDY ",
    link: "https://web.zstudy.co/#/login",
    image: zstudy,
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: IconCircleDotted,
    title: "OSENSE",
    image: "",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: IconFlame,
    title: "VISION CREATIONS",
    link: "https://vision-creations-rho.vercel.app/",
    image: vision,
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
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
