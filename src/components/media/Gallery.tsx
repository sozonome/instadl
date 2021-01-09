import {
  Avatar,
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

import { PostRes } from "../../../types/post";

type GalleryProps = {
  entry: PostRes;
};

const Gallery = ({
  entry: {
    post,
    owner: { fullName, username, profilePicUrl },
  },
}: GalleryProps) => {
  const handleClickDownload = (url: string) => (_: any) => {
    window.location.assign(`${url}&dl=1`);
  };

  return (
    <Grid marginY={8} gap={8} templateColumns={["repeat(1)", "repeat(2, 1fr)"]}>
      {post.map(({ url, is_video }, postIndex) => {
        if (is_video) {
          return (
            <Box key={postIndex}>
              <Button
                colorScheme="blue"
                borderRadius={16}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                onClick={handleClickDownload(url)}
                isFullWidth
                leftIcon={<HiDownload />}
              >
                Download Video
              </Button>

              <Box>
                <video
                  controls
                  style={{
                    borderRadius: "1rem",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    width: "100%",
                  }}
                >
                  <source src={url} type="video/mp4" />
                </video>
              </Box>
            </Box>
          );
        } else {
          return (
            <Box key={postIndex}>
              <Button
                borderRadius={16}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                isFullWidth
                colorScheme="orange"
                onClick={handleClickDownload(url)}
                leftIcon={<HiDownload />}
              >
                Download Image
              </Button>

              <Image
                src={url}
                borderRadius={"1rem"}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
              />
            </Box>
          );
        }
      })}

      <Box>
        <Heading
          colorScheme="gray"
          as="span"
          width="auto"
          size="xs"
          textTransform="uppercase"
          fontWeight="bold"
          marginBottom={2}
        >
          Posted By :
        </Heading>
        <br />

        <Box display="inline-flex" alignItems="center">
          <Avatar src={profilePicUrl} />

          <Box marginLeft={2}>
            {fullName && <Text fontSize="lg">{fullName}</Text>}
            <Link href={`https://www.instagram.com/${username}`} isExternal>
              <Text fontWeight="bold" fontSize="sm">
                @{username}
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Gallery;
