import { Container, Title } from "@mantine/core";
import classes from "./Title.module.css";

export const TitleHead = () => {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        About Us
      </Title>
    </Container>
  );
};
