import { Button, Container, Grid, Group, Image, Text } from "@mantine/core";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.jpg";
import classes from "./AboutUs.module.css";

const details = [
  {
    id: 1,
    name: "Bio",
    about_me:
      "I am a software developer with a passion for creating innovative and user-friendly applications. I have a strong background in computer science and have experience working with various programming languages and frameworks. I am constantly learning and expanding my skills to stay at the forefront of technology.",
  },
  {
    id: 2,
    name: "Education",
    about_me:
      "I have a strong background in computer science and have experience working with various programming languages and frameworks. I am constantly learning and expanding my skills to stay at the forefront of technology.",
  },
  {
    id: 3,
    name: "Experience",
    about_me:
      "I have a strong background in computer science and have experience working with various programming languages and frameworks. I am constantly learning and expanding my skills to stay at the forefront of technology.",
  },
];

export const AboutUs = () => {
  return (
    <div>
      <TitleHead />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "-50px",
        }}
      >
        {details.map((item) => (
          <div key={item.id} style={{ marginTop: "-50px" }}>
            <Group mt={30}>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                {item.name}
              </Button>
            </Group>
          </div>
        ))}
      </div>
      <div>
        <Text className={classes.subTitle}>
          A Little About Me And My Passion
        </Text>
      </div>

      <Container style={{ marginTop: "50px" }}>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Image
              src={image}
              alt="image"
              width={300}
              height={300}
              style={{ borderRadius: "10px" }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Text>
              When writing about "A Little About Me and My Passion," you want to
              create a personal, engaging, and authentic description of who you
              are, what drives you, and what excites you. Here are some terms
              and phrases you can use, depending on the tone and style you're
              aiming for:
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
