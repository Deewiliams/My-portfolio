import { Container, Title } from "@mantine/core";
import classes from "./Title.module.css";
 interface TitleProps {
  title: string;
}
export const TitleHead = (props: TitleProps) => {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
       {props.title}
      </Title>
    </Container>
  );
};
