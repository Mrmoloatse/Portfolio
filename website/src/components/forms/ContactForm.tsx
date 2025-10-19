import { Button } from "@mantine/core";
import { SimpleGrid, Stack, TextInput, Textarea } from "@mantine/core";

function ContactForm() {
  return (
    <form style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Stack w={"100%"}>
        <SimpleGrid w={"100%"} cols={{ base: 1, md: 2 }}>
          <TextInput placeholder="Your Name"></TextInput>
          <TextInput placeholder="Your Phone"></TextInput>
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Subject"></TextInput>
        </SimpleGrid>
        <Textarea placeholder="Message" rows={8} />
        <Button>Sent Message</Button>
      </Stack>
    </form>
  );
}

export default ContactForm;
