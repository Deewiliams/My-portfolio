import {
  IconCircleDotted,
  IconFileCode,
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
  Badge,
  Group,
} from "@mantine/core";
import classes from "./Project.module.css";
import { TitleHead } from "../../component/Title";
import kiz from "../../assets/Kiz.png";
import zstudy from "../../assets/Z-study.png";
import osense from "../../assets/osense.png";

const projects = [
  {
    icon: IconFileCode,
    title: "Z-STUDY",
    link: "https://web.zstudy.co/#/login",
    image: zstudy,
    description:
      "An EdTech platform providing learner-centered digital tools, AI-powered features, and a virtual lab environment for students.",
    stack: ["React", "JavaScript", "Mantine UI", "APIs"],
    role: "Front-End Developer",
  },
  {
    icon: IconReceiptOff,
    title: "KLAPTON INSURANCE ZAMBIA",
    link: "https://app.kiz.co.zm/insure/motor/step/1",
    image: kiz,
    description:
      "A production insurance platform enabling users to purchase motor insurance online, built for performance and usability.",
    stack: ["React", "UI/UX", "Form Validation"],
    role: "Front-End Developer",
  },
  {
    icon: IconCircleDotted,
    title: "OSENSE",
    link: "https://www.app.osense.io/auth/register/email",
    image: osense,
    description:
      "A business management web app for tracking employee work hours, fuel usage, and inventory in real time.",
    stack: ["React", "Role-Based Access", "Dashboards"],
    role: "Front-End Developer",
  },
];

export function Project() {
  return (
    <>
      <TitleHead title="My Projects" />

      <div className={classes.wrapper}>
        <Grid gutter={80}>
          {/* Left content */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              Selected projects that showcase my experience in building
              real-world, production-ready web applications.
            </Title>

            <Text c="dimmed" mt="md">
              Each project reflects my ability to collaborate with teams,
              translate business requirements into user-friendly interfaces,
              and deliver scalable front-end solutions.
            </Text>
          </Grid.Col>

          {/* Projects */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {projects.map((project) => (
                <div key={project.title}>
                  <Card
                    radius="md"
                    className={classes.card}
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  >
                    <Overlay
                      className={classes.overlay}
                      opacity={0.6}
                      zIndex={0}
                    />

                    <div className={classes.content}>
                      <Text size="lg" fw={700} className={classes.titleCard}>
                        {project.title}
                      </Text>

                      <Badge variant="light" color="violet" mt={4}>
                        {project.role}
                      </Badge>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className={classes.action}
                          variant="white"
                          color="dark"
                          size="xs"
                          mt="sm"
                        >
                          View Project
                        </Button>
                      </a>
                    </div>
                  </Card>

                  <Text fz="lg" mt="sm" fw={600}>
                    {project.title}
                  </Text>

                  <Text c="dimmed" fz="sm" mb="xs">
                    {project.description}
                  </Text>

                  <Group spacing={6}>
                    {project.stack.map((tech) => (
                      <Badge key={tech} size="xs" variant="light">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </div>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
