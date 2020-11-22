import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export type MediaType = {
  url: string;
  is_video: boolean;
  restricted: boolean;
};

type GalleryProps = {
  media: MediaType[];
  username: string;
  fullName: string;
};

const Gallery = ({ media, username, fullName }: GalleryProps) => {
  const handleClickDownload = (url: string) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    window.location.assign(`${url}&dl=1`);
  };

  return (
    <Box display={["block", "flex"]} flexWrap="wrap">
      <Box marginTop={8} textAlign="center" width="100%">
        <Heading size="sm" fontWeight="500">
          Posted By:
        </Heading>
        {fullName && <Text fontSize="lg">{fullName}</Text>}
        <Link href={`https://www.instagram.com/${username}`} isExternal>
          <Text fontWeight="bold" fontSize="sm">
            @{username}
          </Text>
        </Link>
      </Box>

      {media.map(({ url, is_video }, mediaIndex) => {
        if (is_video) {
          return (
            <Box
              marginY={8}
              key={mediaIndex}
              flexBasis={["100%", media.length > 1 ? "50%" : "100%"]}
              padding={[0, 4]}
            >
              <Box marginBottom={2}>
                <video controls style={{ borderRadius: "1rem", width: "100%" }}>
                  <source src={url} type="video/mp4" />
                </video>
              </Box>

              <Button
                colorScheme="blue"
                onClick={handleClickDownload(url)}
                isFullWidth
              >
                Download Video
              </Button>
            </Box>
          );
        } else {
          return (
            <Box
              marginY={8}
              key={mediaIndex}
              flexBasis={["100%", media.length > 1 ? "50%" : "100%"]}
              padding={[0, 4]}
            >
              <Image src={url} marginBottom={2} borderRadius={"1rem"} />

              <Button
                isFullWidth
                colorScheme="orange"
                onClick={handleClickDownload(url)}
              >
                Download Image
              </Button>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default Gallery;
