tsx = r"""import { Box, Container, Group, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
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
          ls={2}
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
"""

css = """.section {
  padding-bottom: calc(var(--mantine-spacing-xl) * 3);
}

.subtitle {
  max-width: 520px;
  margin: 0 auto var(--mantine-spacing-xl);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* ── Traits ── */
.traitRow {
  flex-wrap: wrap;
}

.trait {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  color: light-dark(var(--mantine-color-violet-7), var(--mantine-color-violet-4));
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.2);
    border-color: var(--mantine-color-violet-5);
  }
}

.traitIcon {
  display: flex;
  align-items: center;
  opacity: 0.8;
}

/* ── Principle cards ── */
.card {
  padding: var(--mantine-spacing-xl);
  border-radius: var(--mantine-radius-lg);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(124, 58, 237, 0.12);
    border-color: var(--mantine-color-violet-4);
  }
}

/* ── Signature ── */
.signature {
  padding-top: var(--mantine-spacing-xl);
  border-top: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  max-width: 300px;
  margin: 0 auto;
}
"""

base = '/Users/desireirankunda/Desktop/projects/My-portfolio/src/pages/Personality'
with open(f'{base}/Personality.tsx', 'w') as f:
    f.write(tsx)
with open(f'{base}/Personality.module.css', 'w') as f:
    f.write(css)

print(f"TSX: {len(tsx.splitlines())} lines")
print(f"CSS: {len(css.splitlines())} lines")
print("Done")
