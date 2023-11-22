import { components } from "@/api/v1";
import { Voucher } from "@/domains/voucher";

export class VoucherList {
  props: Voucher[] = [];

  constructor(props: components["schemas"]["EventVoucherResponse"][]) {
    this.props = props.map((item) => new Voucher(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      value: item.voucherId || "",
      label: item.code || "",
    }));
  }

  toArray() {
    return this.props;
  }
}
