import { Card, Container, Image, SimpleGrid } from "@mantine/core";
import classes from "./Skills.module.css";
import js from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import typescript from "../../assets/typescript.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import node from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.svg";
import reactNavtive from "../../assets/reactNative.png";
import aws from "../../assets/aws.png";
import bootstap from "../../assets/bootstrap.png";
import { TitleHead } from "../../component/Title";

const mockdata = [
  html,
  css,
  js,
  react,
  typescript,
  github,
  node,
  mongodb,
  reactNavtive,
  aws,
  git,
  bootstap,
];

export function Skills() {
  return (
    <>
      <TitleHead title="My Skills" />
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mt={-80}>
          {mockdata.map((feature) => (
            <Card
              key={feature}
              shadow="md"
              radius="md"
              className={classes.card}
              padding="xl"
            >
              <Image src={feature} alt="image" width={200} height={200} />
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
