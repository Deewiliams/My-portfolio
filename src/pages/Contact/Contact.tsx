import {
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { TitleHead } from "../../component/Title";
import { useState } from "react";
import { toast } from "react-toastify";

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
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    form.validate();

    if (!form.isValid()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mwppzqop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.values.name,
          email: form.values.email,
          subject: form.values.subject,
          message: form.values.message,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.ok) {
        toast.success(
          "Thank you for your message! We will get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          }
        );
        form.reset();
      } else {
        setError("There was an error with the submission.");
      }
    } catch (error: unknown) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }} style={{ marginTop: "-50px" }}>
          <form onSubmit={handleSubmit}>
            <TitleHead title="Contact Me" />
            {error && (
              <Text color="red" size="sm" ta="center" mt={10}>
                {error}
              </Text>
            )}
            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
              <TextInput
                label="Name"
                placeholder="Your name"
                size="lg"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                size="lg"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              size="lg"
              placeholder="Subject"
              mt="md"
              name="subject"
              variant="filled"
              {...form.getInputProps("subject")}
            />
            <Textarea
              mt="md"
              size="lg"
              label="Message"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("message")}
            />

            <Group justify="center" mt="xl">
              <Button
                type="submit"
                size="md"
                loading={loading}
                disabled={loading}
              >
                Send message
              </Button>
            </Group>
          </form>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
