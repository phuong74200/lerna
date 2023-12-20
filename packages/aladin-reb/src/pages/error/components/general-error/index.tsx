import { Link, useRouteError } from "react-router-dom";
import { Button, Center, Container, Group, Text, Title } from "@mantine/core";

import { FLAGS, useFeatureFlag } from "@/configs/feature-flag";
import Error404 from "@/pages/error/components/error404";
import { ResponseError } from "@/types/response-error";

import { useStyles } from "./styles";

export default function GeneralError() {
  const { classes } = useStyles();
  const [dev] = useFeatureFlag(FLAGS.DEV);

  const error = useRouteError() as ResponseError;

  if (dev)
    return (
      <Center w="100vw" h="100vh">
        <Container className={classes.root}>
          <div className={classes.label}>{error?.status || "404"}</div>
          <Title className={classes.title}>
            {error?.error || "You have found a secret place."}
          </Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            {error?.detail ||
              "Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."}
          </Text>
          <Group position="center">
            <Link to="/login">
              <Button variant="outline" size="lg">
                Take me back to home page
              </Button>
            </Link>
          </Group>
        </Container>
      </Center>
    );

  return <Error404 />;
}
