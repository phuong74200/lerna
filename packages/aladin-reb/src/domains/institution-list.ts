import { components } from "@/api/v1";
import { Institution } from "@/domains/insitution";

export class InsitutionList {
  props: Institution[] = [];

  constructor(props: components["schemas"]["InstitutionResponse"][]) {
    this.props = props.map((item) => new Institution(item));
  }

  toSelectList() {
    return this.props.map((item) => ({
      description: item.description,
      value: item.institutionId || "",
      label: item.name || "",
      image: item.image || "",
      searchString: JSON.stringify(item),
    }));
  }

  toArray() {
    return this.props;
  }
}
