import { Button, Group, Image, List, Text, ThemeIcon } from "@mantine/core";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import classes from "./AboutMe.module.css";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.png";

interface DetailsProps {
  id: number;
  name: string;
  about_me?: string;
}

const details: DetailsProps[] = [
  {
    id: 1,
    name: "Profile",
    about_me: `
Hi, I’m Desire — a front-end web developer who builds clean, user-friendly
interfaces that solve real problems.

I specialize in JavaScript and React, with hands-on experience using Mantine UI,
HTML, and CSS. I enjoy turning ideas into responsive, accessible, and visually
appealing applications.

Currently, I’m expanding my skill set into mobile app development using
React Native. Outside of coding, I enjoy playing chess, exploring new
technologies, and meeting new people.
    `,
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Experience",
  },
  {
    id: 4,
    name: "Projects",
  },
];

export function AboutMe() {
  const [selectedItem, setSelectedItem] = useState<DetailsProps>(details[0]);

  return (
    <div>
      <TitleHead title="About Me" />

      {/* Tabs */}
      <Group justify="center" mt={-40} mb="xl">
        {details.map((item) => (
          <Button
            key={item.id}
            radius="xl"
            size="md"
            color="violet"
            variant={selectedItem.id === item.id ? "filled" : "default"}
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </Button>
        ))}
      </Group>

      <Text ta="center" className={classes.subTitle}>
        About Me and My Passion
      </Text>

      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Image src={image} className={classes.image} alt="Desire portrait" />
        </div>

        {/* PROFILE */}
        {selectedItem.name === "Profile" && (
          <>
            <Text fz="lg" mt="sm">
              {selectedItem.about_me}
            </Text>

            <Group mt="md">
              {[
                "React",
                "JavaScript",
                "Mantine UI",
                "HTML",
                "CSS",
                "Git",
                "React Native",
              ].map((skill) => (
                <Button key={skill} size="xs" variant="light" radius="xl">
                  {skill}
                </Button>
              ))}
            </Group>
          </>
        )}

        {/* EDUCATION */}
        {selectedItem.name === "Education" && (
          <List
            mt="md"
            spacing="sm"
            size="lg"
            icon={
              <ThemeIcon size={20} radius="xl" color="violet">
                <IconCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Advanced Certificate in Computer Studies</b> – Evelyn Hone
              College of Applied Arts and Commerce (2017)
            </List.Item>
            <List.Item>
              <b>Certificate in Computer Studies</b> – Evelyn Hone College of
              Applied Arts and Commerce (2016)
            </List.Item>
          </List>
        )}

        {/* EXPERIENCE */}
        {selectedItem.name === "Experience" && (
          <List
            mt="md"
            spacing="sm"
            size="lg"
            icon={
              <ThemeIcon size={20} radius="xl" color="violet">
                <IconCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>
              2+ years of experience as a Front-End Developer
            </List.Item>
            <List.Item>
              Built responsive web applications using React and modern UI
              libraries
            </List.Item>
            <List.Item>
              Experience working with APIs and component-based architecture
            </List.Item>
            <List.Item>
              Strong understanding of HTML, CSS, and front-end best practices
            </List.Item>
          </List>
        )}

        {/* PROJECTS */}
        {selectedItem.name === "Projects" && (
          <List
            mt="md"
            spacing="sm"
            size="lg"
            icon={
              <ThemeIcon size={20} radius="xl" color="violet">
                <IconCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Osense App</b> – Role-based web application with authentication
              and admin management
            </List.Item>
            <List.Item>
              <b>Quiz Game (React + Electron)</b> – Desktop quiz game with sound
              effects and category logic
            </List.Item>
            <List.Item>
              <b>Virtual Labs Platform</b> – Offline-first Electron app with
              sync and update system
            </List.Item>
          </List>
        )}
      </div>
    </div>
  );
}
