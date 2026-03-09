tsx = r"""import {
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
  { label: "Personality", to: "personality" },
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
                Kigali, Rwanda
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
                irankunda.desire@gmail.com
              </Anchor>
            </Group>
          </Stack>

          {/* Quick nav */}
          <Stack gap={10} className={classes.navCol}>
            <Text size="xs" fw={700} tt="uppercase" ls={1} c="dimmed">
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
            <Text size="xs" fw={700} tt="uppercase" ls={1} c="dimmed">
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
          <Text size="xs" c="dimmed">
            Built with React &amp; Mantine
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
"""

css = """.footer {
  margin-top: 80px;
  background: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  border-top: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
}

/* Gradient accent at very top */
.topAccent {
  height: 3px;
  background: linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%);
}

/* ── Main row ── */
.inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: calc(var(--mantine-spacing-xl) * 2);
  align-items: flex-start;
  padding-top: calc(var(--mantine-spacing-xl) * 1.5);
  padding-bottom: var(--mantine-spacing-md);

  @media (max-width: $mantine-breakpoint-sm) {
    grid-template-columns: 1fr 1fr;
    row-gap: var(--mantine-spacing-xl);
  }

  @media (max-width: $mantine-breakpoint-xs) {
    grid-template-columns: 1fr;
  }
}

/* ── Brand column ── */
.logo {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  max-width: 280px;
}

.mailLink {
  transition: color 0.2s ease;

  &:hover {
    color: var(--mantine-color-violet-5) !important;
  }
}

/* ── Nav column ── */
.navLink {
  font-size: 0.85rem;
  color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-gray-4));
  cursor: pointer;
  transition: color 0.2s ease, padding-left 0.2s ease;
  text-decoration: none;

  &:hover {
    color: var(--mantine-color-violet-5);
    padding-left: 4px;
  }
}

/* ── Social column ── */
.socialCol {
  @media (max-width: $mantine-breakpoint-sm) {
    align-items: flex-start;
  }
}

.socialIcon {
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(124, 58, 237, 0.25);
  }
}

/* ── Bottom bar ── */
.bottomBar {
  @media (max-width: $mantine-breakpoint-xs) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--mantine-spacing-xs);
  }
}
"""

base = '/Users/desireirankunda/Desktop/projects/My-portfolio/src/pages/Footer'
with open(f'{base}/Footer.tsx', 'w') as f:
    f.write(tsx)
with open(f'{base}/Footer.module.css', 'w') as f:
    f.write(css)

print(f"TSX: {len(tsx.splitlines())} lines")
print(f"CSS: {len(css.splitlines())} lines")
print("Done")
