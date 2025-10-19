import { Stack, Text, Title, Grid } from "@mantine/core";
import ContactForm from "../forms/ContactForm";
import ContactDetails from "../ContactDetails/ContactDetails";

function Contact() {
  return (
    <Stack w={"100%"} justify="center">
      <Title order={1} c={"var(--mantine-primary-color-6)"} fw={600}>
        Get in Touch
      </Title>
      <Text maw={400}>
        I'm always excited to take on new projects and collaborate with
        innovative minds. If you have a project in mind or just want to chat
        about design, feel free to reach out!
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <ContactForm />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: "auto" }}>
          <ContactDetails />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default Contact;
