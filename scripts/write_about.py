tsx = r"""import {
  Badge,
  Box,
  Container,
  Divider,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBriefcase,
  IconCheck,
  IconCode,
  IconMapPin,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import classes from "./AboutMe.module.css";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.png";

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Tech Stack" },
];

const education = [
  {
    degree: "Advanced Certificate in Computer Studies",
    school: "Evelyn Hone College of Applied Arts and Commerce",
    year: "2017",
  },
  {
    degree: "Certificate in Computer Studies",
    school: "Evelyn Hone College of Applied Arts and Commerce",
    year: "2016",
  },
];

const experience = [
  {
    role: "Front-End Developer",
    company: "Zstudy (EdTech)",
    period: "2023 – Present",
    points: [
      "Built learner-centered interfaces with React and Mantine UI",
      "Integrated AI-powered features and a virtual lab environment",
      "Collaborated with design and backend teams on API integration",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Klapton Insurance Zambia",
    period: "2022 – 2023",
    points: [
      "Developed responsive insurance platform with form validation",
      "Built user portals and claim submission flows with TypeScript",
      "Worked with Remix framework and Golang backend APIs",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Osense",
    period: "2022",
    points: [
      "Created role-based dashboards with authentication flows",
      "Integrated AWS Amplify + GraphQL for secure data access",
      "Built reusable component library across the application",
    ],
  },
];

const projects = [
  {
    title: "Mental Health App",
    type: "Mobile",
    stack: ["React Native", "Expo", "TypeScript"],
    desc: "Cross-platform mobile app with user onboarding, authentication, and self-reflection questionnaires.",
  },
  {
    title: "Klapton Insurance",
    type: "Web",
    stack: ["Remix", "TypeScript", "Golang"],
    desc: "Insurance platform with claim forms, user portals, and backend API integration.",
  },
  {
    title: "Osense App",
    type: "Web",
    stack: ["React", "AWS Amplify", "GraphQL"],
    desc: "Role-based web app with admin management, dashboards, and secure data access.",
  },
  {
    title: "Harvest Platform",
    type: "Web",
    stack: ["React.js", "TypeScript", "Material UI"],
    desc: "Marketing and vendor management platform with responsive UI and vendor store workflows.",
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "HTML & CSS",
  "Git",
  "React Native",
  "Node.js",
  "AWS",
];

export function AboutMe() {
  return (
    <Box className={classes.section}>
      <TitleHead title="About Me" />

      <Container size="xl" className={classes.container}>
        {/* ── LEFT COLUMN ──────────────────────────────── */}
        <div className={classes.left}>
          <div className={classes.photoFrame}>
            <Image
              src={image}
              alt="Desire Irankunda"
              className={classes.photo}
            />
          </div>

          <Stack gap={4} align="center" mt="lg">
            <Title order={3} className={classes.name}>
              Desire Irankunda
            </Title>
            <Text className={classes.roleLabel}>Front-End Developer</Text>
            <Group gap={6} mt={4}>
              <IconMapPin size={14} color="var(--mantine-color-dimmed)" />
              <Text size="sm" c="dimmed">
                Lusaka, Zambia
              </Text>
            </Group>
          </Stack>

          <Divider my="md" />

          <Group justify="center" gap="xl">
            {stats.map((s) => (
              <Stack key={s.label} gap={2} align="center">
                <Text className={classes.statValue}>{s.value}</Text>
                <Text size="xs" c="dimmed" ta="center">
                  {s.label}
                </Text>
              </Stack>
            ))}
          </Group>

          <Divider my="md" />

          <Stack gap="xs" className={classes.infoList}>
            <Group gap="xs">
              <IconCode size={16} color="var(--mantine-color-violet-5)" />
              <Text size="sm">Open to remote opportunities</Text>
            </Group>
            <Group gap="xs">
              <IconBriefcase size={16} color="var(--mantine-color-violet-5)" />
              <Text size="sm">Available for freelance</Text>
            </Group>
            <Group gap="xs">
              <IconSchool size={16} color="var(--mantine-color-violet-5)" />
              <Text size="sm">Lifelong learner</Text>
            </Group>
          </Stack>
        </div>

        {/* ── RIGHT COLUMN ──────────────────────────────── */}
        <div className={classes.right}>
          <Tabs defaultValue="profile" className={classes.tabs}>
            <Tabs.List className={classes.tabList}>
              <Tabs.Tab
                value="profile"
                leftSection={<IconUser size={15} />}
                className={classes.tab}
              >
                Profile
              </Tabs.Tab>
              <Tabs.Tab
                value="education"
                leftSection={<IconSchool size={15} />}
                className={classes.tab}
              >
                Education
              </Tabs.Tab>
              <Tabs.Tab
                value="experience"
                leftSection={<IconBriefcase size={15} />}
                className={classes.tab}
              >
                Experience
              </Tabs.Tab>
              <Tabs.Tab
                value="projects"
                leftSection={<IconCode size={15} />}
                className={classes.tab}
              >
                Projects
              </Tabs.Tab>
            </Tabs.List>

            {/* PROFILE */}
            <Tabs.Panel value="profile" pt="lg">
              <Text className={classes.intro}>
                Hi, I'm Desire — a front-end developer who builds{" "}
                <span className={classes.accent}>clean, user-friendly</span>{" "}
                interfaces that solve real problems.
              </Text>
              <Text size="sm" c="dimmed" mt="md" lh={1.8}>
                I specialize in JavaScript and React, with hands-on experience
                using Mantine UI, HTML, and CSS. I enjoy turning ideas into
                responsive, accessible, and visually appealing applications.
              </Text>
              <Text size="sm" c="dimmed" mt="sm" lh={1.8}>
                Currently expanding into mobile development with React Native.
                Outside of coding, I enjoy playing chess, exploring new
                technologies, and meeting new people.
              </Text>

              <Text fw={600} mt="xl" mb="sm">
                Core Skills
              </Text>
              <Group gap="xs">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="light"
                    color="violet"
                    radius="sm"
                    size="md"
                    className={classes.badge}
                  >
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Tabs.Panel>

            {/* EDUCATION */}
            <Tabs.Panel value="education" pt="lg">
              <Stack gap="md">
                {education.map((edu, i) => (
                  <Paper
                    key={i}
                    className={classes.card}
                    radius="md"
                    p="lg"
                    withBorder
                  >
                    <Group gap="sm" align="flex-start">
                      <ThemeIcon
                        size={36}
                        radius="md"
                        variant="light"
                        color="violet"
                        className={classes.cardIcon}
                      >
                        <IconSchool size={18} />
                      </ThemeIcon>
                      <div>
                        <Text fw={700} size="sm">
                          {edu.degree}
                        </Text>
                        <Text size="sm" c="dimmed" mt={2}>
                          {edu.school}
                        </Text>
                        <Badge mt={8} size="sm" variant="dot" color="violet">
                          {edu.year}
                        </Badge>
                      </div>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Tabs.Panel>

            {/* EXPERIENCE */}
            <Tabs.Panel value="experience" pt="lg">
              <Stack gap="md">
                {experience.map((job, i) => (
                  <Paper
                    key={i}
                    className={classes.card}
                    radius="md"
                    p="lg"
                    withBorder
                  >
                    <Group justify="space-between" mb="xs">
                      <div>
                        <Text fw={700}>{job.role}</Text>
                        <Text size="sm" c="dimmed">
                          {job.company}
                        </Text>
                      </div>
                      <Badge variant="light" color="violet" size="sm">
                        {job.period}
                      </Badge>
                    </Group>
                    <List
                      size="sm"
                      spacing={4}
                      icon={
                        <ThemeIcon
                          size={16}
                          radius="xl"
                          color="violet"
                          variant="light"
                        >
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {job.points.map((p, j) => (
                        <List.Item key={j}>
                          <Text size="sm" c="dimmed">
                            {p}
                          </Text>
                        </List.Item>
                      ))}
                    </List>
                  </Paper>
                ))}
              </Stack>
            </Tabs.Panel>

            {/* PROJECTS */}
            <Tabs.Panel value="projects" pt="lg">
              <div className={classes.projectGrid}>
                {projects.map((proj, i) => (
                  <Paper
                    key={i}
                    className={classes.projectCard}
                    radius="md"
                    p="lg"
                    withBorder
                  >
                    <Group justify="space-between" mb="xs">
                      <Text fw={700} size="sm">
                        {proj.title}
                      </Text>
                      <Badge size="xs" variant="outline" color="violet">
                        {proj.type}
                      </Badge>
                    </Group>
                    <Text size="sm" c="dimmed" lh={1.6} mb="sm">
                      {proj.desc}
                    </Text>
                    <Group gap="xs">
                      {proj.stack.map((t) => (
                        <Badge
                          key={t}
                          size="xs"
                          variant="light"
                          color="blue"
                          radius="sm"
                        >
                          {t}
                        </Badge>
                      ))}
                    </Group>
                  </Paper>
                ))}
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </Container>
    </Box>
  );
}
"""

css = """.section {
  padding-bottom: calc(var(--mantine-spacing-xl) * 3);
}

.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: calc(var(--mantine-spacing-xl) * 2);
  align-items: start;
  margin-top: calc(var(--mantine-spacing-xl) * -1);

  @media (max-width: $mantine-breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

/* LEFT */
.left {
  position: sticky;
  top: 80px;
  background: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7));
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  border-radius: var(--mantine-radius-xl);
  padding: var(--mantine-spacing-xl);
  text-align: center;

  @media (max-width: $mantine-breakpoint-md) {
    position: static;
  }
}

.photoFrame {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
}

.photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7));
}

.name {
  font-size: 1.15rem;
  font-weight: 700;
}

.roleLabel {
  font-size: 0.85rem;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.statValue {
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.infoList {
  text-align: left;
}

/* RIGHT */
.right {
  min-width: 0;
}

.tabs {
  width: 100%;
}

.tabList {
  border-bottom: 2px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  gap: 4px;
  flex-wrap: wrap;
}

.tab {
  font-weight: 500;
  font-size: var(--mantine-font-size-sm);
  padding: 10px 18px;
  border-radius: var(--mantine-radius-sm) var(--mantine-radius-sm) 0 0;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: light-dark(
      var(--mantine-color-gray-1),
      var(--mantine-color-dark-6)
    );
  }

  &[data-active] {
    color: var(--mantine-color-violet-5);
    border-bottom-color: var(--mantine-color-violet-5);
  }
}

.intro {
  font-size: 1.05rem;
  line-height: 1.7;
  font-weight: 500;
}

.accent {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.badge {
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.card {
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.12);
  }
}

.cardIcon {
  flex-shrink: 0;
  margin-top: 2px;
}

.projectGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--mantine-spacing-md);

  @media (max-width: $mantine-breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.projectCard {
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.12);
    border-color: var(--mantine-color-violet-4);
  }
}
"""

base = '/Users/desireirankunda/Desktop/projects/My-portfolio/src/pages/AboutUs'
with open(f'{base}/AboutMe.tsx', 'w') as f:
    f.write(tsx)
with open(f'{base}/AboutMe.module.css', 'w') as f:
    f.write(css)

print(f"TSX lines: {len(tsx.splitlines())}")
print(f"CSS lines: {len(css.splitlines())}")
print("Done")
