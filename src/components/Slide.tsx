import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  subtitle: string;
  title: string;
  img: string;
  url: string;
}

export function Slide({ title, subtitle, img, url }: SlideProps) {
  return (
    <Link passHref href={`continente`}>
      <Box
        as="a"
        flex="1"
        display="flex"
        height={["250px", "300px", "450px"]}
        backgroundImage={`url('${img}')`}
        backgroundPosition="center "
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        fontWeight="bold"
      >
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="rgba(28, 20, 1, 0.35)"
        >
          <Text fontSize={["24px", "48px"]} color="#F5F8FA">
            {title}
          </Text>
          <Text fontSize={["14px", "24px"]} color="#DADADA">
            {subtitle}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
