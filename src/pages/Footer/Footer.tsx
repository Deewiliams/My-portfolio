import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { Link } from "react-scroll";
import classes from "./Footer.module.css";

const navLinks = [
  { label: "Home", to: "landing" },
  { label: "About Me", to: "about_me" },
  { label: "Skills", to: "skills" },
  // { label: "Personality", to: "personality" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Deewiliams",
    icon: <IconBrandGithub size={18} stroke={1.5} />,
    color: "gray",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/desire-irankunda-0a8490183/",
    icon: <IconBrandLinkedin size={18} stroke={1.5} />,
    color: "blue",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/irankunda1",
    icon: <IconBrandFacebook size={18} stroke={1.5} />,
    color: "cyan",
  },
];

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      {/* Gradient accent line */}
      <div className={classes.topAccent} />

      <Container size="lg">
        {/* Main row */}
        <div className={classes.inner}>
          {/* Brand */}
          <Stack gap={6} className={classes.brand}>
            <Text className={classes.logo}>Desire Irankunda</Text>
            <Text size="sm" c="dimmed" lh={1.5} className={classes.tagline}>
              Front-End Developer — building thoughtful, user-centred web
              experiences one component at a time.
            </Text>
            <Group gap={4} mt={4}>
              <IconMapPin size={13} style={{ opacity: 0.5 }} />
              <Text size="xs" c="dimmed">
                Lusaka, Zambia
              </Text>
            </Group>
            <Group gap={4}>
              <IconMail size={13} style={{ opacity: 0.5 }} />
              <Anchor
                href="mailto:desi@example.com"
                size="xs"
                c="dimmed"
                className={classes.mailLink}
              >
              desireirankundawilliams@gmail.com
              </Anchor>
            </Group>
          </Stack>

          {/* Quick nav */}
          <Stack gap={10} className={classes.navCol}>
            <Text
              size="xs"
              fw={700}
              tt="uppercase"
              style={{ letterSpacing: 1 }}
              c="dimmed"
            >
              Quick Links
            </Text>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={500}
                offset={-70}
                className={classes.navLink}
              >
                {l.label}
              </Link>
            ))}
          </Stack>

          {/* Social icons */}
          <Stack gap={10} align="flex-end" className={classes.socialCol}>
            <Text
              size="xs"
              fw={700}
              tt="uppercase"
              style={{ letterSpacing: 1 }}
              c="dimmed"
            >
              Find Me On
            </Text>
            <Group gap="xs">
              {socials.map((s) => (
                <Tooltip key={s.label} label={s.label} position="top" withArrow>
                  <ActionIcon
                    size="lg"
                    color={s.color}
                    variant="light"
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    radius="xl"
                    className={classes.socialIcon}
                  >
                    {s.icon}
                  </ActionIcon>
                </Tooltip>
              ))}
            </Group>
            <Text size="xs" c="dimmed" ta="right" mt={4}>
              Open to freelance &amp; full-time opportunities
            </Text>
          </Stack>
        </div>

        <Divider my="md" />

        {/* Bottom bar */}
        <Group justify="space-between" pb="lg" className={classes.bottomBar}>
          <Text size="xs" c="dimmed">
            &copy; {new Date().getFullYear()} Desire Irankunda. All rights
            reserved.
          </Text>
          
        </Group>
      </Container>
    </Box>
  );
}
