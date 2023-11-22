import { components } from "@/api/v1";

export class Institution {
  props: components["schemas"]["InstitutionResponse"];

  constructor(props: components["schemas"]["InstitutionResponse"]) {
    this.props = props;
  }

  get institutionId() {
    return this.props.institutionId;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get status() {
    return this.props.status;
  }

  get image() {
    return this.props.image;
  }

  get numberOfMajors() {
    return this.props.numberOfMajors;
  }

  toRaw() {
    return this.props;
  }
}
