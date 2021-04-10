import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from "yup";

import ProcessDownload from "./ProcessDownload";

type FormType = {
  link: string;
};

const Form = () => {
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
      link: "",
    },
    validate: (formValues: FormType) => {
      const formErrors: FormikErrors<FormType> = {};

      if (
        formValues.link.indexOf("instagram.com") < 0 ||
        formValues.link.includes("script") ||
        formValues.link.includes("iframe")
      ) {
        formErrors.link = "invalid link";
      }

      return formErrors;
    },
    validationSchema: yup.object().shape({
      link: yup.string().required(),
    }),
    onSubmit: (formValues: FormType) => {
      setPostURL(formValues.link);
    },
  });

  const router = useRouter();
  const {
    query: { url },
  } = router;

  useEffect(() => {
    if (url) {
      new Promise((resolve) => {
        resolve(setFieldValue("link", url));
      }).then(() => {
        handleSubmit();
      });
    }
  }, [url]);

  return (
    <Box margin="0 auto" width={["100%", "100%", "80%"]} alignSelf="center">
      <FormControl isRequired>
        <Input
          placeholder="https://www.instagram.com/p/CGp0Y42HKkm/"
          textAlign="center"
          variant="filled"
          backgroundColor={colorMode === "light" ? "gray.300" : "gray.700"}
          name="link"
          value={values.link}
          onChange={handleChange}
          borderRadius={32}
          height={"3.5rem"}
        />
        {errors.link && (
          <FormHelperText textAlign="center" color="red.400">
            {errors.link}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        disabled={
          !dirty ||
          (dirty && Object.keys(errors).length > 0) ||
          postURL === values.link
        }
        isFullWidth
        colorScheme={colorMode === "light" ? "teal" : "purple"}
        marginY={2}
        borderRadius={"2rem"}
        onClick={() => handleSubmit()}
      >
        Download
      </Button>

      <Button
        isFullWidth
        marginY={4}
        size="xs"
        colorScheme="yellow"
        variant="outline"
        onClick={() => router.push("/search")}
      >
        search by username
      </Button>

      {postURL && <ProcessDownload postURL={postURL} />}
    </Box>
  );
};

export default Form;
