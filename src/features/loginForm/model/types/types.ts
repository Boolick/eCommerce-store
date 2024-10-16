import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

export type LoginErrorMessage = FetchBaseQueryError & {data?: {message: string}};
