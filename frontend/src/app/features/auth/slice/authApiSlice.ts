import { apiSlice } from "../../../../API/appApi";
import { User } from "../../../../types/user";

export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    user: User;
    token: string;
  };
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
