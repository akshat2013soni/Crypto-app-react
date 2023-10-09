import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import avatarSrc from "../assets/profile.jpg"
import {SocialIcon} from "react-social-icons"
import React from "react";

const Footer = () => {
  return (
    <Box 
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Unlock the World of Crypto with CoinSpot: Explore Exchanges, Discover Coins, Analyze Trends!
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text> Created By Akshat Soni</Text>
         
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
