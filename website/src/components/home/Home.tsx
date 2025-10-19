import { Group, Grid, Title, Text, Image, Stack, Button } from "@mantine/core";
import { IconDownload, IconChevronRight } from "@tabler/icons-react";
import image from "../../assets/image-home.png";

function Home() {
  return (
    <Grid id="home" itemID="home">
      <Grid.Col span={{ base: 12, xs: 7 }}>
        <Stack gap={50}>
          <Stack gap={28}>
            <Text>&lt;span&gt;Hey, I'm Tshephiso &lt;/span&gt;</Text>
            <Title order={1} fw={600}>
              <Title
                display={"inline"}
                order={1}
                fw={600}
                c={"var(--mantine-primary-color-6)"}
              >
                &#123;Full Stack&#125;{"  "}
              </Title>
              Web Developer
            </Title>

            <Text>
              &lt;p&gt; With expertise in cutting-edge technologies such as
              React, Sql, Javascript, Typescript ... I deliver web solutions
              that are both innovative and robustg &lt;/p&gt;
            </Text>
            <Group>
              <Button
                w={"min-content"}
                size="md"
                rightSection={<IconDownload stroke={1.5} />}
              >
                Download CV
              </Button>
              <Button
                component="a"
                href="/contact"
                w={"min-content"}
                size="md"
                variant="outline"
                rightSection={<IconChevronRight stroke={1.5} />}
              >
                Hire me
              </Button>
            </Group>
          </Stack>
          icons here for framweowkrs
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: "auto" }}>
        <Image src={image} fit="contain" height={350} width={350}></Image>
      </Grid.Col>
    </Grid>
  );
}

export default Home;
