import {
  Badge,
  Box,
  Container,
  Group,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useState } from "react";
import {
  IconBrandCss3,
  IconBrandGit,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconServer,
} from "@tabler/icons-react";
import classes from "./Skills.module.css";
import { TitleHead } from "../../component/Title";

import js from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import typescript from "../../assets/typescript.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import node from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.svg";
import reactNative from "../../assets/reactNative.png";
import aws from "../../assets/aws.png";
import bootstrap from "../../assets/bootstrap.png";

const categories = [
  {
    label: "All",
    value: "all",
    icon: <IconCode size={16} />,
  },
  {
    label: "Frontend",
    value: "frontend",
    icon: <IconBrandCss3 size={16} />,
  },
  {
    label: "Backend",
    value: "backend",
    icon: <IconServer size={16} />,
  },
  {
    label: "Mobile",
    value: "mobile",
    icon: <IconDeviceMobile size={16} />,
  },
  {
    label: "Tools",
    value: "tools",
    icon: <IconBrandGit size={16} />,
  },
  {
    label: "Database",
    value: "database",
    icon: <IconDatabase size={16} />,
  },
];

type Skill = {
  name: string;
  image: string;
  level: number;
  category: string;
  color: string;
};

const skills: Skill[] = [
  {
    name: "HTML",
    image: html,
    level: 95,
    category: "frontend",
    color: "#e44d26",
  },
  {
    name: "CSS",
    image: css,
    level: 90,
    category: "frontend",
    color: "#264de4",
  },
  {
    name: "JavaScript",
    image: js,
    level: 88,
    category: "frontend",
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    image: typescript,
    level: 80,
    category: "frontend",
    color: "#3178c6",
  },
  {
    name: "React",
    image: react,
    level: 90,
    category: "frontend",
    color: "#61dafb",
  },
  {
    name: "Bootstrap",
    image: bootstrap,
    level: 78,
    category: "frontend",
    color: "#7952b3",
  },
  {
    name: "Node.js",
    image: node,
    level: 65,
    category: "backend",
    color: "#339933",
  },
  { name: "AWS", image: aws, level: 55, category: "backend", color: "#ff9900" },
  {
    name: "React Native",
    image: reactNative,
    level: 72,
    category: "mobile",
    color: "#61dafb",
  },
  { name: "Git", image: git, level: 85, category: "tools", color: "#f05032" },
  {
    name: "GitHub",
    image: github,
    level: 85,
    category: "tools",
    color: "#6e5494",
  },
  {
    name: "MongoDB",
    image: mongodb,
    level: 60,
    category: "database",
    color: "#47a248",
  },
];

function getLevelLabel(level: number) {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Advanced";
  if (level >= 55) return "Intermediate";
  return "Learning";
}

function getLevelColor(level: number) {
  if (level >= 85) return "violet";
  if (level >= 70) return "blue";
  if (level >= 55) return "cyan";
  return "teal";
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <Box className={classes.section}>
      <TitleHead title="My Skills" />

      <Container size="lg">
        {/* Subtitle */}
        <Text ta="center" c="dimmed" mb="xl" className={classes.subtitle}>
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications.
        </Text>

        {/* Category filter */}
        <Group justify="center" mb="xl" gap="xs" className={classes.filterRow}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`${classes.filterBtn} ${
                activeCategory === cat.value ? classes.filterBtnActive : ""
              }`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </Group>

        {/* Skills grid */}
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="lg">
          {filtered.map((skill) => (
            <div key={skill.name} className={classes.card}>
              {/* Top section: icon + badge */}
              <Group justify="space-between" mb="md" align="flex-start">
                <div
                  className={classes.iconWrap}
                  style={
                    { "--skill-color": skill.color } as React.CSSProperties
                  }
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    w={40}
                    h={40}
                    fit="contain"
                  />
                </div>
                <Badge
                  size="xs"
                  variant="light"
                  color={getLevelColor(skill.level)}
                  radius="sm"
                >
                  {getLevelLabel(skill.level)}
                </Badge>
              </Group>

              {/* Skill name */}
              <Text fw={700} size="sm" mb={6}>
                {skill.name}
              </Text>

              {/* Progress bar + percentage */}
              <Stack gap={4}>
                <Progress
                  value={skill.level}
                  size="sm"
                  radius="xl"
                  color={getLevelColor(skill.level)}
                  className={classes.progress}
                />
                <Text size="xs" c="dimmed" ta="right">
                  {skill.level}%
                </Text>
              </Stack>
            </div>
          ))}
        </SimpleGrid>

        {/* Summary row */}
        <Group justify="center" mt="xl" gap="xl" className={classes.summary}>
          {[
            {
              icon: <IconBrandCss3 size={18} />,
              label: "Frontend",
              count: skills.filter((s) => s.category === "frontend").length,
            },
            {
              icon: <IconServer size={18} />,
              label: "Backend",
              count: skills.filter((s) => s.category === "backend").length,
            },
            {
              icon: <IconDeviceMobile size={18} />,
              label: "Mobile",
              count: skills.filter((s) => s.category === "mobile").length,
            },
            {
              icon: <IconBrandGit size={18} />,
              label: "Tools",
              count: skills.filter((s) => s.category === "tools").length,
            },
            {
              icon: <IconDatabase size={18} />,
              label: "Database",
              count: skills.filter((s) => s.category === "database").length,
            },
          ].map((item) => (
            <Group key={item.label} gap="xs" className={classes.summaryItem}>
              <ThemeIcon size={32} radius="md" variant="light" color="violet">
                {item.icon}
              </ThemeIcon>
              <div>
                <Text fw={700} size="sm" lh={1.2}>
                  {item.count}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.label}
                </Text>
              </div>
            </Group>
          ))}
        </Group>
      </Container>
    </Box>
  );
}
