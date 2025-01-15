import { Box, Group, Text } from "@mantine/core";
import { Link } from "react-scroll"; // Import Link from react-scroll
import classes from "./Header.module.css";

export function Header() {
  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text fz="30px">Desire Irankunda</Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link
              to="landing" // The ID of the LandingPage section
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

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              My Project
            </Link>
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
    </Box>
  );
}
