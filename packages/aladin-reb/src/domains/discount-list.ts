import { components } from "@/api/v1";
import { Discount } from "@/domains/discount";

export class DiscountList {
  props: Discount[] = [];

  constructor(props: components["schemas"]["DiscountResponse"][]) {
    this.props = props.map((item) => new Discount(item));
  }

  toArray() {
    return this.props;
  }
}
