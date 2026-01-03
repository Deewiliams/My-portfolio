import { Card, Container, Image, SimpleGrid, Text, Group } from "@mantine/core";
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

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: react },
  { name: "TypeScript", image: typescript },
  { name: "Git", image: git },
  { name: "GitHub", image: github },
  { name: "Node.js", image: node },
  { name: "MongoDB", image: mongodb },
  { name: "React Native", image: reactNative },
  { name: "AWS", image: aws },
  { name: "Bootstrap", image: bootstrap },
];

export function Skills() {
  return (
    <>
      <TitleHead title="My Skills" />

      <Container size="lg" py="xl">
        <Text ta="center" c="dimmed" mb="xl">
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications.
        </Text>

        <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="xl">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              shadow="md"
              radius="md"
              padding="xl"
              className={classes.card}
            >
              <Group justify="center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  fit="contain"
                />
              </Group>

              <Text ta="center" mt="md" fw={600}>
                {skill.name}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
