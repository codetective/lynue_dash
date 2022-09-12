import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { Logo } from "../Logo";
import SidebarContent from "./Sidebar";

export default function MobileMenu({ menuItems, baseUrl }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant={"flushed"}
        onClick={onOpen}
        icon={<BiMenuAltRight />}
        fontSize="30px"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex="10" />
          <DrawerHeader p={0}>
            <Flex h="100px" px="4" py="4" justify="center" bg="gray.50">
              <Logo baseUrl={baseUrl} />
            </Flex>
          </DrawerHeader>

          <DrawerBody px="0">
            <SidebarContent
              baseUrl={baseUrl}
              menuItems={menuItems}
              w="full"
              borderRight="none"
              withoutLogo
              pos="relative"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
