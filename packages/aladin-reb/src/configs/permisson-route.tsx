import Suspense from "@/layout/components/suspense";
import { PermissionComponent } from "@/modules/permisson-component";
import { Error404Page } from "@/pages";
import useGetCurrentUser from "@/services/use-get-current-user";
import { Permission } from "@/types/permisson";

const permissonComponent = new PermissionComponent<Permission[]>({
  // the hook to get permission and return it to the Switch component
  usePermission: () => {
    const { data, isFetching } = useGetCurrentUser();

    const auth = data?.data?.permissions as Permission[];

    return { auth, isFetching: isFetching };
  },

  suspense: <Suspense />,
  fallbackElement: <Error404Page />,
});
export const RouteSwitch = permissonComponent.Switch;

// pco stands for permission component -> on
export const on = permissonComponent.on;
