import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://markova.com/uploads/page_block/banner/image/2608/file.jpeg" 
            alt="ropa"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;