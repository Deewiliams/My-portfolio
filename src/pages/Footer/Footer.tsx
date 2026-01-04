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
      <Container className={classes.inner} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Text color="white" weight={500}>
          Desire Irankunda
        </Text>

        <Group spacing="md">
          <Tooltip label="GitHub" position="top" withArrow>
            <ActionIcon
              size="lg"
              color="gray"
              variant="filled"
              component="a"
              href="https://github.com/Deewiliams"
              target="_blank"
              rel="noreferrer"
              radius="xl"
            >
              <IconBrandGithub size={24} stroke={1.5} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Facebook" position="top" withArrow>
            <ActionIcon
              size="lg"
              color="blue"
              variant="filled"
              component="a"
              href="https://web.facebook.com/irankunda1"
              target="_blank"
              rel="noreferrer"
              radius="xl"
            >
              <IconBrandFacebook size={24} stroke={1.5} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="LinkedIn" position="top" withArrow>
            <ActionIcon
              size="lg"
              color="cyan"
              variant="filled"
              component="a"
              href="https://www.linkedin.com/in/desire-irankunda-0a8490183/"
              target="_blank"
              rel="noreferrer"
              radius="xl"
            >
              <IconBrandLinkedin size={24} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>
    </div>
  );
}
