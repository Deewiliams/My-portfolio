import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text, Tooltip } from "@mantine/core";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Text className={classes.logo}>Desire Irankunda</Text>
          <Text size="xs" c="dimmed" mt={4}>
            Front-End Developer &mdash; Building the web, one component at a time.
          </Text>
        </div>

        <div className={classes.right}>
          <Group gap="xs" mb={8}>
            <Tooltip label="GitHub" position="top" withArrow>
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                component="a"
                href="https://github.com/Deewiliams"
                target="_blank"
                rel="noreferrer"
                radius="xl"
                className={classes.icon}
              >
                <IconBrandGithub size={20} stroke={1.5} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Facebook" position="top" withArrow>
              <ActionIcon
                size="lg"
                color="blue"
                variant="subtle"
                component="a"
                href="https://web.facebook.com/irankunda1"
                target="_blank"
                rel="noreferrer"
                radius="xl"
                className={classes.icon}
              >
                <IconBrandFacebook size={20} stroke={1.5} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="LinkedIn" position="top" withArrow>
              <ActionIcon
                size="lg"
                color="cyan"
                variant="subtle"
                component="a"
                href="https://www.linkedin.com/in/desire-irankunda-0a8490183/"
                target="_blank"
                rel="noreferrer"
                radius="xl"
                className={classes.icon}
              >
                <IconBrandLinkedin size={20} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Text size="xs" c="dimmed" ta="right">
            &copy; {new Date().getFullYear()} Desire Irankunda. All rights reserved.
          </Text>
        </div>
      </Container>
    </div>
  );
}
