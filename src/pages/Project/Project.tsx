import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
} from "@tabler/icons-react";
import { Grid, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
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
    title: "Z STUDY ",
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
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
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
