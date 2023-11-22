import { components } from "@/api/v1";

export class Voucher {
  props: components["schemas"]["EventVoucherResponse"];

  constructor(props: components["schemas"]["EventVoucherResponse"]) {
    this.props = props;
  }

  get voucherId() {
    return this.props.voucherResponse?.voucherId;
  }
  get content() {
    return this.props.voucherResponse?.content;
  }
  get valueType() {
    return this.props.voucherResponse?.valueType;
  }
  get value() {
    return this.props.voucherResponse?.value;
  }
  get maxRange() {
    return this.props.voucherResponse?.maxRange;
  }
  get code() {
    return this.props.voucherResponse?.code;
  }
  get voucherType() {
    return this.props.voucherResponse?.voucherType;
  }
  get forInstitutions() {
    return this.props.voucherResponse?.forInstitutions;
  }
  get forClassTypes() {
    return this.props.voucherResponse?.forClassTypes;
  }
  get createdAt() {
    return this.props.voucherResponse?.createdAt;
  }
  get createdBy() {
    return this.props.voucherResponse?.createdBy;
  }

  get displayValue() {
    return this.valueType === "PERCENTAGE" ? `${this.value}%` : `Rp${this.value}`;
  }

  toRaw() {
    return this.props;
  }
}
