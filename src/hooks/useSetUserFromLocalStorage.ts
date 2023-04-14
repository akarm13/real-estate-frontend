import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetMeQuery } from "../api/endpoints/user";
import { isValidToken } from "../utils/auth";
import { setIsLoadingUser, setToken, setUser } from "../store/slices/auth";

export const useSetUserFromLocalStorage = () => {
  const dispatch = useDispatch();
  const [getMe, { isLoading: isGetMeLoading }] = useLazyGetMeQuery();
  const token = localStorage.getItem("token");

  const trigger = useCallback(async () => {
    if (token !== null && isValidToken(token)) {
      dispatch(setIsLoadingUser(true));
      try {
        const getMeResponse = await getMe(token).unwrap();

        if (getMeResponse) {
          dispatch(setToken(token));
          dispatch(setUser(getMeResponse));
          dispatch(setIsLoadingUser(false));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch, getMe, token]);

  return {
    trigger,
    isLoading: isGetMeLoading,
  };
};
