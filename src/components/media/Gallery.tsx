import { Box, Button, Image, Link } from "@chakra-ui/react";
import React from "react";

export type MediaType = {
  url: string;
  is_video: boolean;
  restricted: boolean;
};

type GalleryProps = {
  media: MediaType[];
};

const Gallery = ({ media }: GalleryProps) => {
  return (
    <Box display={["block", "flex"]} flexWrap="wrap">
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
                <video controls style={{ borderRadius: "1rem" }}>
                  <source src={url} type="video/mp4" />
                </video>
              </Box>

              <Link href={`${url}&dl=1`} download>
                <Button isFullWidth>Download Video</Button>
              </Link>
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
                onClick={() => window.location.assign(`${url}&dl=1`)}
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
