import { components } from "@/api/v1";

export class User {
  props: components["schemas"]["CreatedByResponse"];

  constructor(props: components["schemas"]["CreatedByResponse"]) {
    this.props = props;
  }

  get email() {
    return this.props.email;
  }

  get userId() {
    return this.props.userId;
  }

  get fullName() {
    return this.props.fullName;
  }

  get phoneNumber() {
    return this.props.phoneNumber;
  }

  get avatar() {
    return this.props.avatar;
  }

  get status() {
    return this.props.status;
  }

  get enabled() {
    return this.props.enabled;
  }

  get roleId() {
    return this.props.roleId;
  }

  get permissions() {
    return this.props.permissions;
  }

  toRaw() {
    return this.props;
  }
}
