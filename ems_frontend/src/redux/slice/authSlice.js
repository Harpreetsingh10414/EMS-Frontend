import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../routes/Api";

// --- Async thunk for login ---
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/dummyLogin", credentials);
      const data = response.data;
      console.log("Login response data:", data);

      if (typeof data === "string") {
        if (data.toLowerCase().includes("success")) {
          console.log("Detected success string, setting dummy token and user.");

          const dummyToken = "dummy-token-for-dev";
          localStorage.setItem("token", dummyToken);

          // Set a dummy user object for testing
          const dummyUser = {
            id: "12345",
            name: "Test User",
            email: "testuser@example.com",
            role: "admin",
          };
          localStorage.setItem("user", JSON.stringify(dummyUser));

          return dummyToken;
        } else {
          return rejectWithValue(data);
        }
      }

      if (data.token) {
        console.log("Token found, saving to localStorage:", data.token);
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        return data.token;
      }

      return rejectWithValue("Unexpected response from server");
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

// --- Auth slice ---
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        state.token = null;
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
