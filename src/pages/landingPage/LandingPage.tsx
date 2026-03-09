import { Button, Group, Image, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg";
import { Link } from "react-scroll";

export function LandingPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Text className={classes.greeting}>Hello, I’m</Text>
        <Title className={classes.name}>Desire Irankunda</Title>
        <Text className={classes.role}>
          <span className={classes.roleHighlight}>Front-End Developer</span>
        </Text>
        <Text className={classes.description}>
          I build clean, fast, and user-friendly web experiences using React,
          TypeScript, and modern UI libraries.
        </Text>
        <Group mt={36} gap="md">
          <Button
            radius="xl"
            size="md"
            className={classes.primaryBtn}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={classes.link}
            >
              Hire Me
            </Link>
          </Button>
          <Button
            variant="outline"
            radius="xl"
            size="md"
            className={classes.secondaryBtn}
            component="a"
            href="https://docs.google.com/document/d/e/2PACX-1vSr7xGrKk919RvAiH_7ubtD5Y4dzaHJlehO9pWv-GEsfmJN_F-zpKvbDy_DrIpXlUOYPuH6YxToJxyV/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Group>
        <Group mt={28} gap="sm">
          <Button
            component="a"
            href="https://github.com/Deewiliams"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            radius="xl"
            size="sm"
            leftSection={<IconBrandGithub size={18} />}
            className={classes.socialBtn}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/desire-irankunda-0a8490183/"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            radius="xl"
            size="sm"
            leftSection={<IconBrandLinkedin size={18} />}
            className={classes.socialBtn}
          >
            LinkedIn
          </Button>
        </Group>
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
