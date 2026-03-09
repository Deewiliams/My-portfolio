import { Box, Container, Group, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import {
  IconBulb,
  IconCode,
  IconHeart,
  IconMessageCircle,
  IconMoodSmile,
  IconPlant,
  IconPuzzle,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import { TitleHead } from "../../component/Title";
import classes from "./Personality.module.css";

const traits = [
  { label: "Strategic Thinker", icon: <IconBulb size={18} /> },
  { label: "Lifelong Learner", icon: <IconPlant size={18} /> },
  { label: "Problem Solver", icon: <IconPuzzle size={18} /> },
  { label: "UI Enthusiast", icon: <IconMoodSmile size={18} /> },
  { label: "Team Player", icon: <IconUsers size={18} /> },
  { label: "Open Communicator", icon: <IconMessageCircle size={18} /> },
];

const principles = [
  {
    icon: <IconBulb size={22} />,
    title: "Think First",
    body: "I plan before I build. Understanding the problem deeply leads to better, simpler solutions.",
  },
  {
    icon: <IconHeart size={22} />,
    title: "User-Centred",
    body: "Every line of code I write has a real person on the other end. Empathy drives design decisions.",
  },
  {
    icon: <IconCode size={22} />,
    title: "Clean Code",
    body: "Readable, maintainable components are not optional — they're a professional responsibility.",
  },
  {
    icon: <IconUsers size={22} />,
    title: "Collaborate Openly",
    body: "I thrive in teams where feedback flows freely and everyone's ideas are heard.",
  },
  {
    icon: <IconRocket size={22} />,
    title: "Ship & Iterate",
    body: "Perfection is the enemy of progress. I ship, gather feedback, and continuously improve.",
  },
  {
    icon: <IconPlant size={22} />,
    title: "Keep Growing",
    body: "Technology moves fast. I stay curious and dedicate time to learning something new every week.",
  },
];

export function Personality() {
  return (
    <Box className={classes.section}>
      <TitleHead title="My Style & Mindset" />

      <Container size="lg">
        {/* Subtitle */}
        <Text ta="center" c="dimmed" className={classes.subtitle}>
          I don't just write code — I solve problems thoughtfully. My work
          blends logic, creativity, and empathy to build meaningful digital
          experiences.
        </Text>

        {/* Trait pills */}
        <Group justify="center" mb="xl" gap="sm" className={classes.traitRow}>
          {traits.map((t) => (
            <span key={t.label} className={classes.trait}>
              <span className={classes.traitIcon}>{t.icon}</span>
              {t.label}
            </span>
          ))}
        </Group>

        {/* Divider label */}
        <Text
          ta="center"
          fw={700}
          tt="uppercase"
          fz="xs"
          c="dimmed"
          lh={2}
          mb="lg"
        >
          How I Work
        </Text>

        {/* Principles grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
          {principles.map((p) => (
            <div key={p.title} className={classes.card}>
              <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ from: "violet", to: "blue", deg: 135 }}
                mb="md"
              >
                {p.icon}
              </ThemeIcon>
              <Text fw={700} size="sm" mb={6}>
                {p.title}
              </Text>
              <Text size="sm" c="dimmed" lh={1.6}>
                {p.body}
              </Text>
            </div>
          ))}
        </SimpleGrid>

        {/* Signature */}
        <Text ta="center" c="dimmed" fz="sm" className={classes.signature}>
          Built with ❤️ by Desire using React & Mantine
        </Text>
      </Container>
    </Box>
  );
}
