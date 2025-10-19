import "../defaultLayout/style.css";
import {
  IconCode,
  IconMenu2,
  IconSun,
  IconMoonStars,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandGithub,
  IconHome,
  IconDevicesCode,
  IconBriefcase,
  IconPhone,
} from "@tabler/icons-react";
import {
  ActionIcon,
  AspectRatio,
  Group,
  Title,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
  Stack,
  Drawer,
  CloseButton,
  Divider,
  Space,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { NavLink, Outlet } from "react-router";
import sharedLinks from "../../contexts/sharedLinks";

function DefaultLayout() {
  const colorscheme = useComputedColorScheme();
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [isOpen, { close, open }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width:992px)");

  return (
    <div className="default-layout">
      <header>
        <Group>
          <AspectRatio visibleFrom="xs" ratio={1 / 1} h={"100%"}>
            <ActionIcon
              radius={0}
              onClick={open}
              h={"100%"}
              w={"100%"}
              color={
                colorscheme == "dark"
                  ? "dark.5"
                  : "var(--mantine-primary-color-5)"
              }
            >
              <IconMenu2 stroke="2" size={24} />
            </ActionIcon>
          </AspectRatio>
          <Group gap={"xs"}>
            <IconCode stroke={2} size={32} color={"white"} />
            <Title order={3} c={"gray.0"} fw={600}>
              Tshephiso.dev
            </Title>
          </Group>
        </Group>
        <Group visibleFrom="md" className="nav-bar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Services</span>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Portfolio</span>
          </NavLink>

          <NavLink
            to="/contact"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>Contact</span>
          </NavLink>
        </Group>
        <Group justify="flex-end">
          <Group align="center">
            <ActionIcon
              component="a"
              href={sharedLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              variant="transparent"
              color="white"
            >
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={sharedLinks.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              variant="transparent"
              color="white"
            >
              <IconBrandGithub />
            </ActionIcon>
          </Group>
          <ActionIcon variant="subtle" onClick={toggleColorScheme}>
            {colorscheme == "dark" ? (
              <IconSun stroke={1.5} color="gold" size={32} />
            ) : (
              <IconMoonStars stroke={1.5} color="white" size={32} />
            )}
          </ActionIcon>
          <AspectRatio hiddenFrom="xs" ratio={1 / 1} h={"60%"}>
            <ActionIcon
              radius={"md"}
              h={"100%"}
              w={"100%"}
              color={colorscheme == "dark" ? "dark.5" : "gray.0"}
              onClick={open}
            >
              <IconMenu2 stroke="1.5" size={24} />
            </ActionIcon>
          </AspectRatio>
        </Group>
      </header>
      <main>
        <Outlet />
        <Space h={"100px"}></Space>
      </main>
      <Group hiddenFrom="md" align="center" className="mobile-nav-bar" flex={1}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          <IconHome />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          <IconDevicesCode />
          <span>Services</span>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          <IconBriefcase />
          <span>Portfolio</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active nav-item" : "nav-item"
          }
        >
          <IconPhone />
          <span>Contact</span>
        </NavLink>
      </Group>
      <Drawer
        opened={isOpen}
        position={isMobile ? "right" : "left"}
        onClose={close}
        withCloseButton={false}
      >
        <Stack>
          <Group justify="space-between">
            <Title order={1} fw={500}>
              Get in touch
            </Title>
            <CloseButton onClick={close} />
          </Group>
          <Divider />
          <Text>
            I'm always excited to take on new projects and collaborate with
            innovative minds
          </Text>
          <Stack gap={0} mt={36}>
            <Text fz={"h4"}>Phone Number</Text>
            <Text c={"dimmed"}>(+27) 66 003 0244</Text>
          </Stack>
          <Stack gap={0}>
            <Text fz={"h4"}>Email</Text>
            <Text c={"dimmed"}>tshephisomoloatse38@gmail.com</Text>
          </Stack>
          <Stack gap={0}>
            <Text fz={"h4"}>Socials</Text>
            <Group>
              <ActionIcon component="a" variant="transparent">
                <IconBrandFacebook />
              </ActionIcon>
              <a>
                <ActionIcon
                  component="a"
                  href={sharedLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                >
                  <IconBrandLinkedin />
                </ActionIcon>
              </a>

              <ActionIcon
                component="a"
                href={sharedLinks.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                variant="transparent"
              >
                <IconBrandGithub />
              </ActionIcon>
            </Group>
          </Stack>
        </Stack>
      </Drawer>
    </div>
  );
}

export default DefaultLayout;
