import {
  ActionIcon,
  Group,
  Text,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Link } from "react-scroll";
import classes from "./Header.module.css";

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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

        <Tooltip
          label={colorScheme === "dark" ? "Light mode" : "Dark mode"}
          position="bottom"
          withArrow
        >
          <ActionIcon
            onClick={toggleColorScheme}
            variant="light"
            color="violet"
            size="lg"
            radius="xl"
            aria-label="Toggle color scheme"
            className={classes.themeToggle}
          >
            {colorScheme === "dark" ? (
              <IconSun size={18} stroke={1.5} />
            ) : (
              <IconMoon size={18} stroke={1.5} />
            )}
          </ActionIcon>
        </Tooltip>
      </Group>
    </header>
  );
}
