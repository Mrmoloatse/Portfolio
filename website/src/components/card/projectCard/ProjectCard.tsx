import {
  Grid,
  Image,
  Title,
  Text,
  Stack,
  Divider,
  Space,
  NavLink,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import "../projectCard/style.css";

interface ProjectcardProps {
  imageSrc?: string | undefined;
  name?: string;
  client?: string;
  description?: string;
  status?: string;
  completionTime?: string;
  technologies?: string;
  gitHuLlink?: string;
}

function ProjectCard({
  imageSrc,
  name,
  description,
  status,
  completionTime,
  technologies,
  gitHuLlink,
  client,
}: ProjectcardProps) {
  return (
    <Grid gutter={"sm"} className="card project-card" bdrs={"lg"}>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Image
          w={"100%"}
          mah={"400px"}
          src={imageSrc}
          fit="cover"
          alt={"Image here"}
          radius={"md"}
        />
      </Grid.Col>
      <Grid.Col px={"lg"} span={{ base: 12, md: "auto" }}>
        <Stack>
          <Stack gap={"sm"}>
            <Title
              fw={600}
              lineClamp={2}
              order={4}
              c={"var(--mantine-primary-color-6)"}
            >
              {name}
            </Title>
            <Text c={"dimmed"}>{description}</Text>
          </Stack>
          <Space h={"md"}></Space>
          <Stack gap={"xs"} fz={"sm"}>
            <Grid>
              <Grid.Col span={5}>Status</Grid.Col>
              <Grid.Col span={"auto"}>{status}</Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid>
              <Grid.Col span={5}>Client</Grid.Col>
              <Grid.Col span={"auto"}>{client}</Grid.Col>
            </Grid>
            <Divider></Divider>
            <Grid>
              <Grid.Col span={5}>Technologies</Grid.Col>
              <Grid.Col span={"auto"} c={"dimmed"}>
                {technologies}
              </Grid.Col>
            </Grid>
            <Divider></Divider>
            {completionTime && (
              <Grid>
                <Grid.Col span={5}>Completion Time</Grid.Col>
                <Grid.Col span={"auto"} c={"dimmed"}>
                  {completionTime}
                </Grid.Col>
              </Grid>
            )}
          </Stack>
          <Space h={32}></Space>
          {gitHuLlink && (
            <NavLink
              variant="subtle"
              leftSection={<IconBrandGithub />}
              label="View on GitHub"
              bdrs={"md"}
              maw={"fit-content"}
              display={"stciky"}
              href={gitHuLlink}
            />
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ProjectCard;
