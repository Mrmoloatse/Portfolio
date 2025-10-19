import { Group, Stack, ThemeIcon, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailFilled,
  IconPhoneFilled,
  IconSocial,
} from "@tabler/icons-react";

function ContactDetails() {
  const themeIconSize = 45;
  return (
    <Stack>
      <Group>
        <ThemeIcon size={themeIconSize} variant="outline">
          <IconPhoneFilled stroke={1.5} />
        </ThemeIcon>
        <Stack gap={0}>
          <Text c={"dimmed"} fz={"sm"}>
            Phone
          </Text>
          <Text>089588594940</Text>
        </Stack>
      </Group>
      <Group>
        <ThemeIcon size={themeIconSize} variant="outline">
          <IconMailFilled stroke={1.5} />
        </ThemeIcon>
        <Stack gap={0}>
          <Text c={"dimmed"} fz={"sm"}>
            Email
          </Text>
          <Text>(+27) 66 003 0244</Text>
        </Stack>
      </Group>
      <Group>
        <ThemeIcon size={themeIconSize} variant="outline">
          <IconSocial stroke={1.5} />
        </ThemeIcon>
        <Stack gap={0}>
          <Text c={"dimmed"} fz={"sm"}>
            Socials
          </Text>
          <Group>
            <a>
              <ThemeIcon variant="transparent">
                <IconBrandLinkedin />
              </ThemeIcon>
            </a>
            <a>
              <ThemeIcon variant="transparent">
                <IconBrandGithub />
              </ThemeIcon>
            </a>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
}

export default ContactDetails;
