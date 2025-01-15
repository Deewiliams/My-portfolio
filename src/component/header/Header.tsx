import { IconChevronDown } from "@tabler/icons-react";
import { Box, Group, HoverCard, Center, Divider, Text } from "@mantine/core";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { useMantineTheme } from "@mantine/core";
import classes from "./Header.module.css";

export function Header() {
  const theme = useMantineTheme();

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
              to="projects" // The ID of the Project section
              smooth={true}
              duration={500}
              className={classes.link}
            >
              My Project
            </Link>
            <Link
              to="contact" // The ID of the ContactMe section
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
