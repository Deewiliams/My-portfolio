import { Group, Text } from "@mantine/core";
import { Link } from "react-scroll";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
          <Text className={classes.logo}>My Portfolio</Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link
              to="landing"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              Home
            </Link>
            <Link
              to="about_me"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              About Me
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              Skills
            </Link>

            {/* <Link
              to="projects"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              My Project
            </Link> */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              Contact Me
            </Link>
          </Group>
        </Group>
    </header>
  );
}
