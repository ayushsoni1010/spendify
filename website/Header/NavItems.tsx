import React from "react";
import { linkDetails } from "./__linkDeatils";
import { HStack, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

const NavItems: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <HStack
        display={{ base: "flex", md: "flex", sm: "none", xs: "none" }}
        flexDir="row"
      >
        <ButtonGroup isAttached alignSelf="center">
          {linkDetails.map(
            (
              item: { name: any; link: any },
              index: React.Key | null | undefined
            ) => (
              <Button
                key={index}
                as={Link}
                variant={"ghost"}
                size="sm"
                colorScheme="blue"
                href={item.link}
                passHref
                _focus={{ boxShadow: "outline" }}
              >
                {item.name}
              </Button>
            )
          )}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;
