import { components } from "@/api/v1";
import { Subject } from "@/domains/subject";
import { DomainList } from "@/interfaces/domain-list";

export class SubjectList extends DomainList<Subject> {
  constructor(props: components["schemas"]["PageResponseSubjectSubjectResponse"]) {
    const transformed = {
      ...props,
      list: (props.list || []).map((item) => new Subject(item)),
    };

    super(transformed);
  }
}
