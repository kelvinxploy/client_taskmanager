import { AxiosResponse } from 'axios';

import { WEB_API_URL, getRequest } from '../helpers';

import { Task } from '@/src/types/task';

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await getRequest<Task[]>(`${WEB_API_URL}/task/`);
};
