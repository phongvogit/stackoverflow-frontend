import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	list: [],
	listPopular: [],
	filter: {
		_page: 1,
		_limit: 5,
	},
	pagination: {
		_page: 1,
		_limit: 5,
		_totalRows: 6,
	},
};

const tagSlice = createSlice({
	name: 'Tag',
	initialState,
	reducers: {
		fetchTagList(state, action) {
			state.loading = true;
		},
		fetchTagListSuccess(state, action) {
			state.list = action.payload.data;
			state.pagination = action.payload.pagination;
			state.loading = false;
		},
		fetchTagListFailed(state) {
			state.loading = false;
		},

		fetchPopularTagList(state, action) {
			state.loading = true;
		},
		fetchPopularTagListSuccess(state, action) {
			state.listPopular = action.payload.data;
			state.pagination = action.payload.pagination;
			state.loading = false;
		},
		fetchPopularTagListFailed(state) {
			state.loading = false;
		},

		setFilter(state, action) {
			state.filter = action.payload;
		},

		setFilterWithDebounce(state, action) {},
	},
});

//Actions
export const tagActions = tagSlice.actions;
//Selectors
export const selectTagList = state => state.tag.list;
export const selectPopularTagList = state => state.tag.listPopular;
export const selectTagPagination = state => state.tag.pagination;
export const selectTagFilter = state => state.tag.filter;

//Reducers
const tagReducer = tagSlice.reducer;
export default tagReducer;
