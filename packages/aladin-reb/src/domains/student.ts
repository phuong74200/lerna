import { components } from "@/api/v1";

export class Student {
  props: components["schemas"]["StudentResponse"];

  constructor(props: components["schemas"]["StudentResponse"]) {
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
    return this.props.userResponse?.status;
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

  toRaw() {
    return this.props;
  }
}
