import { Container, Grid, Image, Text } from "@mantine/core";
import { TitleHead } from "../../component/Title";
import image from "../../assets/desire.jpg";
import classes from "./AboutUs.module.css"

export const AboutUs = () => {
  return (
    <div>
      <TitleHead />
      <div>
      <Text className={classes.subTitle}>A Little About Me And My Passion</Text>
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
