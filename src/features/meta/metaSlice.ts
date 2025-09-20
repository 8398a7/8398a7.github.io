import { captureException } from '@sentry/browser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from '../../lib/api';

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface MetricState {
  value: number;
  status: RequestStatus;
  error: string | null;
}

export interface MetaState {
  abilitysheet: MetricState;
  ist: MetricState;
}

const createInitialMetric = (): MetricState => ({
  value: 0,
  status: 'idle',
  error: null,
});

const initialState: MetaState = {
  abilitysheet: createInitialMetric(),
  ist: createInitialMetric(),
};

const logAndExtractError = (error: unknown) => {
  captureException(error);

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unknown error';
};

export const fetchAbilitysheetUsers = createAsyncThunk<number, void, { rejectValue: string }>(
  'meta/fetchAbilitysheetUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { users } = await API.fetchAbilitysheetUsers();

      return users;
    } catch (error) {
      return rejectWithValue(logAndExtractError(error));
    }
  },
);

export const fetchIstUsers = createAsyncThunk<number, void, { rejectValue: string }>(
  'meta/fetchIstUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { users } = await API.fetchIstUsers();

      return users;
    } catch (error) {
      return rejectWithValue(logAndExtractError(error));
    }
  },
);

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbilitysheetUsers.pending, (state) => {
        state.abilitysheet.status = 'loading';
        state.abilitysheet.error = null;
      })
      .addCase(fetchAbilitysheetUsers.fulfilled, (state, action) => {
        state.abilitysheet.status = 'succeeded';
        state.abilitysheet.value = action.payload;
      })
      .addCase(fetchAbilitysheetUsers.rejected, (state, action) => {
        state.abilitysheet.status = 'failed';
        state.abilitysheet.error = action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(fetchIstUsers.pending, (state) => {
        state.ist.status = 'loading';
        state.ist.error = null;
      })
      .addCase(fetchIstUsers.fulfilled, (state, action) => {
        state.ist.status = 'succeeded';
        state.ist.value = action.payload;
      })
      .addCase(fetchIstUsers.rejected, (state, action) => {
        state.ist.status = 'failed';
        state.ist.error = action.payload ?? action.error.message ?? 'Unknown error';
      });
  },
});

export const metaReducer = metaSlice.reducer;
export default metaSlice;
