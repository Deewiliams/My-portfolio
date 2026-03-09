tsx = r"""import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconSend,
  IconClock,
} from "@tabler/icons-react";
import { TitleHead } from "../../component/Title";
import classes from "./Contact.module.css";

const contactInfo = [
  {
    icon: <IconMail size={20} />,
    label: "Email",
    value: "irankunda.desire@gmail.com",
    href: "mailto:irankunda.desire@gmail.com",
  },
  {
    icon: <IconMapPin size={20} />,
    label: "Location",
    value: "Kigali, Rwanda",
    href: null,
  },
  {
    icon: <IconClock size={20} />,
    label: "Availability",
    value: "Open to opportunities",
    href: null,
  },
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

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name must be at least 2 characters" : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? "Please enter a valid email" : null),
      subject: (value) => (value.trim().length === 0 ? "Subject is required" : null),
      message: (value) => (value.trim().length === 0 ? "Message is required" : null),
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    form.validate();
    if (!form.isValid()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mwppzqop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.values),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.", {
          position: "top-center",
          autoClose: 5000,
        });
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={classes.section}>
      <TitleHead title="Contact Me" />

      <Container size="lg">
        <Text ta="center" c="dimmed" mb="xl" className={classes.subtitle}>
          Have a project in mind or just want to say hi? My inbox is always
          open — I'll do my best to get back to you!
        </Text>

        <div className={classes.layout}>
          {/* ── Left: contact info ── */}
          <Stack gap="lg" className={classes.infoCol}>
            <div>
              <Text fw={800} fz="xl" className={classes.heading}>
                Let's talk
              </Text>
              <Text c="dimmed" size="sm" mt={4} lh={1.7}>
                Whether you have a question, a collaboration idea, or just want
                to connect — feel free to reach out.
              </Text>
            </div>

            <Stack gap="sm">
              {contactInfo.map((item) => (
                <div key={item.label} className={classes.infoCard}>
                  <ThemeIcon
                    size={40}
                    radius="md"
                    variant="gradient"
                    gradient={{ from: "violet", to: "blue", deg: 135 }}
                  >
                    {item.icon}
                  </ThemeIcon>
                  <div>
                    <Text size="xs" c="dimmed" fw={600} tt="uppercase" style={{ letterSpacing: 0.5 }}>
                      {item.label}
                    </Text>
                    {item.href ? (
                      <Text
                        size="sm"
                        fw={500}
                        component="a"
                        href={item.href}
                        className={classes.infoLink}
                      >
                        {item.value}
                      </Text>
                    ) : (
                      <Text size="sm" fw={500}>
                        {item.value}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </Stack>

            <div>
              <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb="xs" style={{ letterSpacing: 0.5 }}>
                Find me on
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
            </div>
          </Stack>

          {/* ── Right: form ── */}
          <Box className={classes.formCard}>
            <form onSubmit={handleSubmit}>
              {error && (
                <Text c="red" size="sm" ta="center" mb="md">
                  {error}
                </Text>
              )}

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  size="md"
                  {...form.getInputProps("name")}
                />
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  size="md"
                  {...form.getInputProps("email")}
                />
              </SimpleGrid>

              <TextInput
                label="Subject"
                placeholder="What's this about?"
                size="md"
                mt="md"
                {...form.getInputProps("subject")}
              />

              <Textarea
                label="Message"
                placeholder="Tell me about your project or idea..."
                minRows={5}
                maxRows={10}
                autosize
                size="md"
                mt="md"
                {...form.getInputProps("message")}
              />

              <Group justify="flex-end" mt="xl">
                <Button
                  type="submit"
                  size="md"
                  loading={loading}
                  disabled={loading}
                  leftSection={<IconSend size={16} />}
                  className={classes.submitBtn}
                >
                  Send Message
                </Button>
              </Group>
            </form>
          </Box>
        </div>
      </Container>

      <ToastContainer />
    </Box>
  );
}
"""

css = """.section {
  padding-bottom: calc(var(--mantine-spacing-xl) * 3);
}

.subtitle {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ── Two-column layout ── */
.layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: calc(var(--mantine-spacing-xl) * 2);
  align-items: flex-start;

  @media (max-width: $mantine-breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

/* ── Left column ── */
.heading {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.infoCard {
  display: flex;
  align-items: center;
  gap: var(--mantine-spacing-md);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateX(4px);
    border-color: var(--mantine-color-violet-5);
  }
}

.infoLink {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--mantine-color-violet-5) !important;
  }
}

.socialIcon {
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(124, 58, 237, 0.25);
  }
}

/* ── Right: form card ── */
.formCard {
  padding: calc(var(--mantine-spacing-xl) * 1.5);
  border-radius: var(--mantine-radius-lg);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  background: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
}

/* ── Submit button ── */
.submitBtn {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  border: none;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.92;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
  }
}
"""

base = '/Users/desireirankunda/Desktop/projects/My-portfolio/src/pages/Contact'
with open(f'{base}/Contact.tsx', 'w') as f:
    f.write(tsx)
with open(f'{base}/Contact.module.css', 'w') as f:
    f.write(css)

print(f"TSX: {len(tsx.splitlines())} lines")
print(f"CSS: {len(css.splitlines())} lines")
print("Done")
