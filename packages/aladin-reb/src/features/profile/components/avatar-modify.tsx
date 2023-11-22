import { faker } from "@faker-js/faker";
import { Avatar, Group, Paper, ThemeIcon, Tooltip } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

const avatars = new Array(10).fill(0).map(() => ({
  src: faker.image.avatar(),
}));

export default function AvatarModify() {
  return (
    <Paper p="lg" shadow="lg">
      <Group noWrap>
        <Avatar
          src={faker.image.urlPicsumPhotos({ width: 200, height: 200 })}
          size={116}
          className="rounded-full"
        />
        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-4">
          {avatars.map(({ src }) => (
            <Avatar size={50} className="rounded-full" key={src} src={src} />
          ))}
          <Tooltip label="Upload new image">
            <ThemeIcon size={50} className="cursor-pointer rounded-full">
              <IconUpload />
            </ThemeIcon>
          </Tooltip>
        </div>
      </Group>
    </Paper>
  );
}
