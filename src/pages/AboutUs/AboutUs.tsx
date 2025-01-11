import { Button, Container, Grid, Group, Image, Text } from "@mantine/core";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.jpg";
import classes from "./AboutUs.module.css";
import { useState } from "react";

interface Details {
  id: number;
  name: string;
  about_me: string;
}
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
  const [selectedItem, setSelectedItem] = useState<Details>();

  const handleSelectedAboutMe = (item: Details) => {
    setSelectedItem(item)

  }
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
                onClick={() => handleSelectedAboutMe(item)}
              >
                {item.name}
              </Button>
            </Group>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "50px" }}>
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
              {selectedItem?.about_me}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
