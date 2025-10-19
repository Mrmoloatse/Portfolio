import { Group, Title, Stack } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import ProjectCard from "../card/projectCard/ProjectCard";
import projectImage from "../../assets/image-project.png";

function Projects() {
  return (
    <Stack gap={"lg"} className="card">
      <Group>
        <IconBriefcase />
        <Title order={3} fw={600}>
          Projects
        </Title>
      </Group>
      <Carousel
        controlsOffset={0}
        emblaOptions={{
          loop: true,
          align: "center",
        }}
        slideGap={"lg"}
        slideSize={{ base: "95%", md: "86%" }}
      >
        <Carousel.Slide>
          <ProjectCard
            imageSrc={projectImage}
            name="Barber-Proxy"
            status="Current"
            client="Barbers"
            description="BarberProxy is a web-based platform designed to connect barbers with potential clients. The system allows users to search and browse through barbers in their area, view service offerings, and explore pricing and availability. Barbers can showcase their skills and services, while clients can discover, compare, and book the right barber for their needs making the grooming experience more accessible and efficient."
            gitHuLlink="https://github.com/Mrmoloatse/BarberProxy"
            technologies="REACT Js, TypeScript, JavaScript, Mantine UI, ASP.Net Core RestFul API, Docker, C#, Git, GitHub, MSQL"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <ProjectCard
            imageSrc={projectImage}
            name="Randiat"
            status="Current"
            client="School Project"
            description="Randiat is a smart dietary recommendation system that generates personalized meal plans for patients with diabetes and renal failure. The app uses dietitian-provided meal recommendations and patient-specific nutritional requirements to create balanced, tailored diet plans. This ensures that patients receive meals that align with their medical needs, while enabling dietitians to deliver more accurate, data driven, and efficient nutrition guidance."
            completionTime="9 months"
            technologies="ASP.NET Framework, C#, MSQL, ASP.NET RestFul API C#,"
          />
        </Carousel.Slide>
      </Carousel>
    </Stack>
  );
}

export default Projects;
