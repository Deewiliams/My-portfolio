import { Button, Container, Group, Image, Title } from "@mantine/core";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg";

export function LandingPage() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Innovative</span>
          </Title>
          <Title className={classes.developer}>Developer</Title>

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
              Download PDF
            </Button>
          </Group>
        </div>
        <Image src={coder} className={classes.image} />
      </div>
    </Container>
  );
}
