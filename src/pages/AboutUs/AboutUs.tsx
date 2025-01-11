import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.jpg";
import classes from "./AboutUs.module.css";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

interface DetailsProps {
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
  const [selectedItem, setSelectedItem] = useState<DetailsProps>();

  const handleSelectedAboutMe = (item: DetailsProps) => {
    setSelectedItem(item);
  };

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
              {selectedItem?.name === "Boi" ? (
                <p>hello there</p>
              ) : selectedItem?.name === "Education" ? (
                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <b>TypeScript based</b> – build type safe applications, all
                    components and hooks export types
                  </List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license,
                    you can use Mantine in any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only
                    when user navigates with keyboard
                  </List.Item>
                </List>
              ) : selectedItem?.name === "Experience" ? ( // New condition for Experience
                <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>hello</List.Item>
                  <List.Item>
                    <b>Free and open source</b> – all packages have MIT license,
                    you can use Mantine in any project
                  </List.Item>
                  <List.Item>
                    <b>No annoying focus ring</b> – focus ring will appear only
                    when user navigates with keyboard
                  </List.Item>
                </List>
              ) : null}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
