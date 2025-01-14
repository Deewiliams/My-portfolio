import {
  Button,
  Group,
  Image,
  List,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
// import image from "./image.svg";
import classes from "./AboutMe.module.css";
import { TitleHead } from "../../component/Title";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import image from "../../assets/desire.jpg"

interface DetailsProps {
  id: number;
  name: string;
  about_me: string;
}
const details = [
  {
    id: 1,
    name: "Boi",
    about_me:
      "Hi, I’m Desire, a web developer specializing in front-end technologies. I build websites that help businesses solve problems and achieve their goals. My expertise includes JavaScript, React, HTML, and CSS. I handle everything from site layout and navigation to web hosting. I'm passionate about learning and am currently taking a course on building mobile apps with React Native. Outside of coding, I enjoy playing chess, exploring new technologies, and meeting new people.",
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

export function AboutMe() {
  const [selectedItem, setSelectedItem] = useState<DetailsProps>(details[0]);

  console.log(selectedItem);
  const handleSelectedAboutMe = (item: DetailsProps) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <TitleHead title="About Us" />
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
        <Text className={classes.subTitle}>About Me and My Passion</Text>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Image src={image} className={classes.image} />
        </div>
        {selectedItem?.name === "Boi" ? (
          <Text fz="xl" mt="sm" fw={500}>
            {selectedItem?.about_me}
          </Text>
        ) : selectedItem?.name === "Education" ? (
          <List
            mt={30}
            spacing="sm"
            size="xl"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Diploma in computer studies</b> – from evelyn hone college of
              applied art and commerce in 2018
            </List.Item>
            <List.Item>
              <b>Advanced certificate in computer studies</b> – from evelyn hone
              college of applied art and commerce in 2017
            </List.Item>
            <List.Item>
              <b>Certificate in computer studies</b> – from evelyn hone college
              of applied art and commerce in 2016
            </List.Item>
          </List>
        ) : selectedItem?.name === "Experience" ? ( // New condition for Experience
          <List
            mt={30}
            spacing="sm"
            size="xl"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>2 Years Work Experience as programmer</List.Item>
            <List.Item>Programming as front end developer</List.Item>
            <List.Item>Expert knowledge of front end languages</List.Item>
          </List>
        ) : null}
      </div>
    </div>
  );
}
