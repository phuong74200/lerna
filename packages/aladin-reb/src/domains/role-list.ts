import { components } from "@/api/v1";
import { Role } from "@/domains/role";
import { DomainList } from "@/interfaces/domain-list";

export class RoleList extends DomainList<Role> {
  constructor(props: components["schemas"]["PageResponseMajorMajorResponse"]) {
    const transformed = {
      ...props,
      list: (props.list || []).map((item) => new Role(item)),
    };

    super(transformed);
  }
}
