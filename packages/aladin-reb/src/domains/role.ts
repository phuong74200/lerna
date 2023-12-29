import { uid } from "uid";

import { components } from "@/api/v1";
import { Domain } from "@/interfaces/domain";

export class Role implements Domain {
  props: components["schemas"]["RoleResponse"];

  constructor(props: components["schemas"]["RoleResponse"]) {
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get permissions() {
    return this.props.permissions;
  }

  toRaw() {
    return this.props;
  }

  get id() {
    return this.props.roleId ?? uid();
  }
}
