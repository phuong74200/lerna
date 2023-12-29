import { MantineColor } from "@mantine/core";

import { components } from "@/api/v1";

export class TeachingAssistant {
  props: components["schemas"]["TAResponse"];

  constructor(props: components["schemas"]["TAResponse"]) {
    this.props = props;
  }

  get email() {
    return this.props.userResponse?.email;
  }

  get userId() {
    return this.props.userResponse?.userId;
  }

  get fullName() {
    return this.props.userResponse?.fullName;
  }

  get phoneNumber() {
    return this.props.userResponse?.phoneNumber;
  }

  get avatar() {
    return this.props.userResponse?.avatar;
  }

  get institutionName() {
    return this.props.userResponse?.institutionName;
  }

  get institutionId() {
    return this.props.userResponse?.institutionId;
  }

  get description() {
    return this.props.userResponse?.description;
  }

  get gender() {
    return this.props.userResponse?.gender;
  }

  get createdAt() {
    return this.props.userResponse?.createdAt;
  }

  get updatedAt() {
    return this.props.userResponse?.updatedAt;
  }

  get status() {
    return this.props.status;
  }

  get enabled() {
    return this.props.userResponse?.enabled;
  }

  get roleId() {
    return this.props.userResponse?.roleId;
  }

  get permissions() {
    return this.props.userResponse?.permissions;
  }

  get havingPassword() {
    return this.props.userResponse?.havingPassword;
  }

  get statusColor(): MantineColor {
    const status = this.props.status;

    if (status === "PENDING") return "yellow";
    if (status === "SUCCEED") return "green";
    if (status === "CANCEL") return "violet";
    if (status === "FAIL") return "red";

    return "gray";
  }

  toRaw() {
    return this.props;
  }
}
