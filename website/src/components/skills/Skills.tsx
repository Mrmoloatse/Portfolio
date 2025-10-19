import { Group, Title, Text, Stack, ThemeIcon, List } from "@mantine/core";
import { IconBrandReact, IconBulb } from "@tabler/icons-react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

function Skills() {
  return (
    <Stack gap={"lg"} className="card">
      <Group>
        <IconBulb />
        <Title order={3} fw={600}>
          Skills
        </Title>
      </Group>
      <Stack>
        <Carousel
          withControls={false}
          emblaOptions={{
            loop: true,
          }}
        >
          <Carousel.Slide>
            <ThemeIcon>
              <IconBrandReact />
            </ThemeIcon>
          </Carousel.Slide>
        </Carousel>
        <List spacing={"md"}>
          <List.Item>
            <Text>
              Front End :
              <Text c={"dimmed"}>
                HTML, CSS, JavaScript, TypeScript, React, Asp.Net Framework Web
                Application
              </Text>{" "}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Back End :<Text c={"dimmed"}>Asp.Net RestFul Api, C#</Text>{" "}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Databases :
              <Text c={"dimmed"}>HTML, CSS, JavaScript, React, Angular</Text>{" "}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Tools :<Text c={"dimmed"}>Git, GitHub, Docker</Text>{" "}
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Others :
              <Text c={"dimmed"}>Object Oriented Programming, RestFul API</Text>{" "}
            </Text>
          </List.Item>
        </List>
      </Stack>
    </Stack>
  );
}

export default Skills;
