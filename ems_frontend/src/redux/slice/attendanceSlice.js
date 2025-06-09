import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [], // { date: '2025-06-07', punchIn: '09:05', punchOut: '17:30' }
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    punchIn(state, action) {
      const date = action.payload; // 'YYYY-MM-DD'
      const nowTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // check if record exists for today
      const existing = state.records.find((r) => r.date === date);
      if (!existing) {
        state.records.push({ date, punchIn: nowTime, punchOut: null });
      } else {
        // if already punched in, ignore or maybe update punchIn time
        if (!existing.punchIn) {
          existing.punchIn = nowTime;
        }
      }
    },
    punchOut(state, action) {
      const date = action.payload;
      const nowTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const existing = state.records.find((r) => r.date === date);
      if (existing && !existing.punchOut) {
        existing.punchOut = nowTime;
      }
    },
  },
});

export const { punchIn, punchOut } = attendanceSlice.actions;
export default attendanceSlice.reducer;
                                