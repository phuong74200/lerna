import { NotificationProps, notifications } from "@mantine/notifications";
import { IconAlertCircleFilled, IconCircleCheckFilled } from "@tabler/icons-react";

const error = (props: NotificationProps) => {
  notifications.show({
    title: "Xảy ra lỗi",
    icon: <IconAlertCircleFilled />,
    color: "red",
    autoClose: 5000,
    ...props,
  });
};

const loader = (props: NotificationProps) => {
  notifications.show({
    title: "Đang xử lý",
    loading: true,
    color: "blue",
    autoClose: false,
    ...props,
  });
};

const success = (props: NotificationProps) => {
  notifications.show({
    title: "Thành công",
    icon: <IconCircleCheckFilled />,
    color: "green",
    autoClose: 5000,
    ...props,
  });
};

export const notification = { error, loader, success };
