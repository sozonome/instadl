import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

export type MediaType = {
  url: string;
  is_video: boolean;
  restricted: boolean;
};

type GalleryProps = {
  media: MediaType[];
  username: string;
  fullName: string;
  profilePicUrl: string;
};

const Gallery = ({
  media,
  username,
  fullName,
  profilePicUrl,
}: GalleryProps) => {
  const handleClickDownload = (url: string) => (_: any) => {
    window.location.assign(`${url}&dl=1`);
  };

  return (
    <Box display={["block", "flex"]} flexWrap="wrap">
      {media.map(({ url, is_video }, mediaIndex) => {
        if (is_video) {
          return (
            <Box
              marginY={2}
              key={mediaIndex}
              flexBasis={["100%", media.length > 1 ? "50%" : "100%"]}
              padding={[0, 4]}
            >
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
            <Box
              marginY={2}
              key={mediaIndex}
              flexBasis={["100%", "50%"]}
              _even={{
                paddingLeft: [0, 2],
              }}
              _odd={{
                paddingRight: [0, 2],
              }}
              marginX={["inherit", "auto"]}
            >
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
                maxHeight={["50%", "100%"]}
                src={url}
                borderRadius={"1rem"}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
              />
            </Box>
          );
        }
      })}

      <Box marginTop={8} width="100%">
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
    </Box>
  );
};

export default Gallery;
