import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Title,
} from "@mantine/core";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg";

export function LandingPage() {
  return (
    <Container size="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>Innovative </Title>
              <Title className={classes.developer}> Developer</Title>
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Hire Me
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Download CV
                </Button>
              </Group>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Image src={coder} className={classes.image} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
