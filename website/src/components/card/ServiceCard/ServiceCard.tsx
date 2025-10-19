import { Stack, Title, Text } from "@mantine/core";
import React from "react";
import "../ServiceCard/styles/style.css";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Stack gap={"lg"} maw={700} className="service-card">
      {icon}
      <Title className="title" order={3} fw={600}>
        {title}
      </Title>
      <Text>{description}</Text>
    </Stack>
  );
}

export default ServiceCard;
