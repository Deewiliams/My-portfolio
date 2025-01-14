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

const features = [
  {
    icon: IconReceiptOff,
    title: "KLAPTON INSURANCE ZAMBIA",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: IconFileCode,
    title: "Z-STUDY ",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: IconCircleDotted,
    title: "OSENSE",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: IconFlame,
    title: "VISION CREATIONS",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function Project() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }}>
          <Card radius="md" className={classes.card}>
            <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

            <div className={classes.content}>
              <Text size="lg" fw={700} className={classes.titleCard}>
                Plan & save
              </Text>

              <Text size="sm" className={classes.description}>
                Save up to 25% at Fifth Season Hotels in Europe, the Middle
                East, Africa and Asia Pacific
              </Text>

              <Button
                className={classes.action}
                variant="white"
                color="dark"
                size="xs"
              >
                Book now
              </Button>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
      {/* <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      > */}

      {/* <feature.icon size={26} stroke={1.5} /> */}
      {/* </ThemeIcon> */}
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
