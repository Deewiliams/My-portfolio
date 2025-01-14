import { Button, Image, Text, TextInput, Title } from "@mantine/core";
// import image from "./image.svg";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg"

export function LandingPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={coder} className={classes.image} />
    </div>
  );
}

// import { Button, Container, Grid, Group, Image, Title } from "@mantine/core";
// import classes from "./LandingPage.module.css";
// import coder from "../../assets/coder.svg";

// export function LandingPage() {
//   return (
//     <Container my="md">
//          <div className={classes.inner}>
//       <Grid>
//         <Grid.Col span={{ base: 12, xs: 6 }}>
//           <div className={classes.content}>
//             <Title className={classes.title}>
//               <span className={classes.highlight}>Innovative</span>
//             </Title>
//             <Title className={classes.developer}>Developer</Title>

//             <Group mt={30}>
//               <Button radius="xl" size="md" className={classes.control}>
//                 Hire Me
//               </Button>
//               <Button
//                 variant="default"
//                 radius="xl"
//                 size="md"
//                 className={classes.control}
//               >
//                 Download PDF
//               </Button>
//             </Group>
//           </div>
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 6 }}>
//           <Image src={coder} className={classes.image} />
//         </Grid.Col>
//       </Grid>
//       </div>
//     </Container>
//   );
// }
