import { Button, Group, Image, Title } from "@mantine/core";
import classes from "./LandingPage.module.css";
import coder from "../../assets/coder.svg";
import { Link } from "react-scroll";

export function LandingPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title style={{ textAlign: "center" }}>
          <span className={classes.highlight}>Innovative</span>
        </Title>
        <Title className={classes.title}>Developer</Title>
        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.controlButton}>
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
            variant="default"
            radius="xl"
            size="md"
            className={classes.controlButton}
            component="a"
            href="https://docs.google.com/document/d/e/2PACX-1vSr7xGrKk919RvAiH_7ubtD5Y4dzaHJlehO9pWv-GEsfmJN_F-zpKvbDy_DrIpXlUOYPuH6YxToJxyV/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
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
