import { Navigate, Outlet, useParams } from "react-router-dom";
import { isValidUUID } from "@/utils/isValidUUID";

export const ClientRoute = () => {
  const { uuid } = useParams<{ uuid: string }>();

  if (!uuid || !isValidUUID(uuid)) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};
