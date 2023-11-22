import { components } from "@/api/v1";

export class Discount {
  props: components["schemas"]["DiscountResponse"];

  constructor(props: components["schemas"]["DiscountResponse"]) {
    this.props = props;
  }

  get id() {
    return this.props.discountId;
  }

  get content() {
    return this.props.content;
  }

  get valueType() {
    return this.props.valueType;
  }

  get value() {
    return this.props.value;
  }

  get forInstitutions() {
    return this.props.forInstitutions;
  }

  get forClassTypes() {
    return this.props.forClassTypes;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get createdBy() {
    return this.props.createdBy;
  }

  get displayValue() {
    return this.valueType === "PERCENTAGE" ? `${this.value}%` : `Rp${this.value}`;
  }

  toRaw() {
    return this.props;
  }
}
