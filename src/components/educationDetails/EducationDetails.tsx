import { Group, Timeline, Title, Text, Stack } from "@mantine/core";
import { IconBook2 } from "@tabler/icons-react";

function EducationDetails() {
  return (
    <Stack gap={"lg"} className="card">
      <Group>
        <IconBook2 />
        <Title order={3} fw={600}>
          Education & Certification
        </Title>
      </Group>
      <Timeline active={2}>
        <Timeline.Item>
          <Group align="flex-start" gap={"sm"}>
            <Text>2020-2023 :</Text>
            <Stack gap={0}>
              <Text c={"var(--mantine-primary-color-6)"}>
                University Of Johannesburg
              </Text>
              <Text>Bachelors of Science In Information Technology </Text>
            </Stack>
          </Group>
        </Timeline.Item>
        <Timeline.Item>
          <Group align="flex-start" gap={"sm"}>
            <Text>2024-2024 :</Text>
            <Stack gap={0}>
              <Text c={"var(--mantine-primary-color-6)"}>Udemy</Text>
              <Text>
                {" "}
                The complete Javascript Course 2024: from zero to expert
              </Text>
            </Stack>
          </Group>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

export default EducationDetails;
