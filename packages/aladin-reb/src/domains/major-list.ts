import { components } from "@/api/v1";
import { Major } from "@/domains/major";
import { DomainList } from "@/interfaces/domain-list";

export class MajorList extends DomainList<Major> {
  constructor(props: components["schemas"]["PageResponseMajorMajorResponse"]) {
    const transformed = {
      ...props,
      list: (props.list || []).map((item) => new Major(item)),
    };

    super(transformed);
  }
}
