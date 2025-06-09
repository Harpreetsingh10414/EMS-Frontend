import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../routes/Api";
const dummyTasks = [
  {
    id: "T001",
    name: "Design Landing Page",
    description: "Create a responsive landing page using Tailwind CSS.",
    status: "In Progress",
    dueDate: "2025-06-10",
  },
  {
    id: "T002",
    name: "Set up Backend API",
    description: "Develop RESTful API using Node.js and Express.",
    status: "Completed",
    dueDate: "2025-06-05",
  },
  {
    id: "T003",
    name: "Integrate Payment Gateway",
    description: "Integrate Razorpay/Stripe for checkout process.",
    status: "Pending",
    dueDate: "2025-06-15",
  },
];

// // Fetch tasks from backend
// export const fetchMyTasks = createAsyncThunk(
//   "myTask/fetch",
//   async (_, thunkAPI) => {
//     try {
//       const response = await api.get("/api/mytasks");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || "Fetch failed");
//     }
//   }
// );

// // Update task status
// export const editTaskStatus = createAsyncThunk(
//   "myTask/editStatus",
//   async ({ id, status }, thunkAPI) => {
//     try {
//       const response = await api.patch(`/api/mytasks/${id}`, { status });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || "Update failed");
//     }
//   }
// );

// Simulate fetchMyTasks
export const fetchMyTasks = createAsyncThunk("myTask/fetch", async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dummyTasks;
});

// Simulate editTaskStatus without mutating dummyTasks
export const editTaskStatus = createAsyncThunk(
  "myTask/editStatus",
  async ({ id, status }, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const task = dummyTasks.find((t) => t.id === id);
    if (task) {
      // DON'T mutate dummyTasks here
      return { id, status };
    } else {
      return thunkAPI.rejectWithValue("Task not found");
    }
  }
);

const myTaskSlice = createSlice({
  name: "myTask",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchMyTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editTaskStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex((t) => t.id === updated.id);
        if (index !== -1) state.list[index].status = updated.status;
        state.error = null;
      })
      .addCase(editTaskStatus.rejected, (state, action) => {
        state.error = action.payload || action.error.message || "Update failed";
      });
  },
});

export default myTaskSlice.reducer;
