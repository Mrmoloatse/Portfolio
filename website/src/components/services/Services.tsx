import {
  Button,
  Stack,
  Title,
  Text,
  useComputedColorScheme,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { IconAppWindow, IconCloud, IconDatabase } from "@tabler/icons-react";
import ServiceCard from "../card/ServiceCard/ServiceCard";

function Services() {
  const colorScheme = useComputedColorScheme();
  return (
    <Stack className="service-container" align="center" id="services">
      <Button component="a" size="compact-lg" radius={"md"}>
        My Services
      </Button>
      <Title
        order={2}
        c={colorScheme == "dark" ? "gray.0" : "dark.6"}
        maw={450}
        className="text-center"
      >
        Designing solutions{" "}
        <Title order={2} c={"dimmed"} display={"inline"}>
          {" "}
          customized to meet your requirements
        </Title>
      </Title>
      <Text c={"dimmed"} className="text-center" maw={500}>
        With expertise in web design and development, I transform ideas into
        visually stunning and user-friendly interfaces that captivate and retain
        users. Explore my work and see design in action.
      </Text>
      <Space h={"35px"}></Space>
      <SimpleGrid px={"lg"} cols={{ base: 1, sm: 2, md: 3 }}>
        <ServiceCard
          icon={<IconAppWindow stroke={2} size={30} />}
          title="Web Development"
          description="Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript,TypeScript and modern frameworks like React."
        />
        <ServiceCard
          icon={<IconDatabase stroke={2} size={30} />}
          title="Database Management"
          description="Designing and managing databases with SQL, T-SQL and technologies such as MSSQL."
        />
        <ServiceCard
          icon={<IconCloud stroke={2} size={30} />}
          title="API Development"
          description="Creating and integrating RESTful APIs to enable smooth communication between front-end and back-end systems."
        />
      </SimpleGrid>
    </Stack>
  );
}

export default Services;
