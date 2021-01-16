import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from "yup";

import ProcessDownload from "./ProcessDownload";
import ProcessUsername from "./ProcessUsername";

type FormType = {
  username: string;
};

const SearchForm = () => {
  const [username, setUsername] = useState<string>("");
  const [isPostSelected, setIsPostSelected] = useState<boolean>(false);
  const [postURL, setPostURL] = useState<string>("");

  const { colorMode } = useColorMode();

  const {
    values,
    errors,
    dirty,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik<FormType>({
    initialValues: {
      username: "",
    },
    validate: (formValues: FormType) => {
      const formErrors: FormikErrors<FormType> = {};

      if (
        formValues.username === "" ||
        formValues.username.includes("script") ||
        formValues.username.includes("iframe")
      ) {
        formErrors.username = "invalid username";
      } else if (formValues.username.includes("@")) {
        formErrors.username = `remove "@" character`;
      }

      return formErrors;
    },
    validationSchema: yup.object().shape<FormType>({
      username: yup.string().required(),
    }),
    onSubmit: (formValues: FormType) => {
      setUsername(formValues.username);
    },
  });

  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      new Promise((resolve) => {
        resolve(setFieldValue("username", id));
      }).then(() => {
        handleSubmit();
      });
    }
  }, [id]);

  const handleSelectPost = (postId: string) => {
    window.scrollTo({ top: 0 });
    setPostURL(postId);
    setIsPostSelected(true);
  };

  return (
    <Box margin="0 auto" width={["100%", "100%", "80%"]} alignSelf="center">
      <FormControl>
        <FormLabel textAlign="center" fontSize="sm">
          username
        </FormLabel>
        <Input
          placeholder="sozonome"
          textAlign="center"
          variant="filled"
          backgroundColor={colorMode === "light" ? "gray.300" : "gray.700"}
          name="username"
          value={values.username}
          onChange={handleChange}
          borderRadius={32}
          height={"3.5rem"}
        />
        {errors.username && (
          <FormHelperText textAlign="center" color="red.400">
            {errors.username}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        disabled={
          !dirty ||
          (dirty && Object.keys(errors).length > 0) ||
          username === values.username
        }
        isFullWidth
        colorScheme={colorMode === "light" ? "teal" : "purple"}
        marginY={2}
        borderRadius={"2rem"}
        onClick={() => handleSubmit()}
      >
        Search
      </Button>

      <Button
        isFullWidth
        size="sm"
        colorScheme="orange"
        opacity={0.8}
        onClick={() => router.back()}
      >
        back to home
      </Button>

      {username && (
        <Box hidden={isPostSelected}>
          <ProcessUsername
            username={username}
            onSelectPost={handleSelectPost}
          />
        </Box>
      )}

      {postURL && (
        <Box hidden={!isPostSelected}>
          <Button
            marginY={4}
            size="sm"
            isFullWidth
            onClick={() => setIsPostSelected(false)}
          >
            back to profile
          </Button>
          <ProcessDownload postURL={postURL} />
        </Box>
      )}
    </Box>
  );
};

export default SearchForm;
