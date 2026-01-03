import {
  Container,
  Text,
  Title,
  Group,
  Button,
  List,
  ThemeIcon,
  Card,
  Box,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { TitleHead } from "../../component/Title";

export function Personality() {
  return (
    <Box>
      <TitleHead title="My Style & Mindset" />
      <Container size="sm" style={{ marginBottom: "90px" }}>
        {/* Personal headline */}
        <Text ta="center" fz="lg" fw={500}>
          I don’t just write code — I solve problems thoughtfully.
        </Text>
        <Text ta="center" c="dimmed" >
          My work blends logic, creativity, and empathy to build meaningful
          digital experiences.
        </Text>

        {/* Personality tags */}
        <Group justify="center" mt="lg">
          {[
            " Strategic Thinker",
            " Lifelong Learner",
            " Problem Solver",
            " UI Enthusiast",
            " Team Player",
          ].map((trait) => (
            <Button
              key={trait}
              variant="light"
              color="violet"
              radius="xl"
              size="sm"
            >
              {trait}
            </Button>
          ))}
        </Group>

        {/* How I work */}
        <Card shadow="md" radius="md" mt="xl" p="xl">
          <Title order={3} mb="sm">
            How I Work
          </Title>

          <List
            spacing="sm"
            icon={
              <ThemeIcon color="violet" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>Think before I code</List.Item>
            <List.Item>Design with the user in mind</List.Item>
            <List.Item>Write clean, readable components</List.Item>
            <List.Item>Collaborate openly and learn continuously</List.Item>
            <List.Item>Improve through feedback and iteration</List.Item>
          </List>
        </Card>

        {/* Signature */}
        <Text ta="center" c="dimmed" mt="xl">
          Built with ❤️ by Desire using React & Mantine
        </Text>
      </Container>
    </Box>
  );
}
