import { Domain } from "@/interfaces/domain";
import { toNonAccentVietnamese } from "@/utils/converter";

export class DomainList<T extends Domain> {
  props: {
    totalPages?: number | undefined;
    pageNumber?: number | undefined;
    pageSize?: number | undefined;
    totalElements?: number | undefined;
    list: T[];
  };

  constructor(props: typeof DomainList.prototype.props) {
    this.props = props;
  }

  get totalElements() {
    return this.props.totalElements;
  }

  get totalPages() {
    return this.props.totalPages;
  }

  get pageNumber() {
    return this.props.pageNumber;
  }

  get pageSize() {
    return this.props.pageSize;
  }

  get list() {
    return this.props.list;
  }

  toSelectList() {
    return this.props.list.map((item) => ({
      searchString: toNonAccentVietnamese(JSON.stringify(item)),
      description: item.description,
      value: item.id.toString(),
      label: item.name,
    }));
  }
}
