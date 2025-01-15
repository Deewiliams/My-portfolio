import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        Desire Irankunda
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a
              href="https://github.com/Deewiliams"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconBrandGithub size={40} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a
              href="https://web.facebook.com/irankunda1"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconBrandFacebook size={40} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a
              href="https://www.linkedin.com/in/desire-irankunda-0a8490183/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconBrandLinkedin size={40} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
