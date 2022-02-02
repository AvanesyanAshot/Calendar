import queryString from "query-string";
import { useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      location,
    };
  }, [params, location, navigate]);
}
