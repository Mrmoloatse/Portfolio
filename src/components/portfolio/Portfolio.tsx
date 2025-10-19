import { Title, Stack, SimpleGrid } from "@mantine/core";
import EducationDetails from "../educationDetails/EducationDetails";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

function Portfolio() {
  return (
    <Stack gap={"lg"}>
      <Title
        order={1}
        className="text-center"
        fw={600}
        c={"var(--mantine-primary-color-6)"}
      >
        Portfolio
      </Title>
      <SimpleGrid spacing={"lg"} cols={{ base: 1, md: 2 }}>
        <EducationDetails />
        <Skills />
      </SimpleGrid>
      <Projects />
    </Stack>
  );
}

export default Portfolio;
