// import {
//   Button,
//   Container,
//   Grid,
//   Group,
//   Image,
//   Title,
// } from "@mantine/core";
// import classes from "./LandingPage.module.css";
// import coder from "../../assets/coder.svg";

// export function LandingPage() {
//   return (
//     <Container size="md">
//       <Grid>
//         <Grid.Col span={{ base: 12, xs: 6 }}>
//           <div className={classes.inner}>
//             <div className={classes.content}>
//               <Title className={classes.title}>Innovative </Title>
//               <Title className={classes.developer}> Developer</Title>
//               <Group mt={30}>
//                 <Button radius="xl" size="md" className={classes.control}>
//                   Hire Me
//                 </Button>
//                 <Button
//                   variant="default"
//                   radius="xl"
//                   size="md"
//                   className={classes.control}
//                 >
//                   Download CV
//                 </Button>
//               </Group>
//             </div>
//           </div>
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 6 }}>
//           <Image src={coder} className={classes.image} />
//         </Grid.Col>
//       </Grid>
//     </Container>
//   );
// }

import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
// import image from "./image.svg";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg"

export function LandingPage() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

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
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Image src={coder} className={classes.image} />
      </div>
    </Container>
  );
}
