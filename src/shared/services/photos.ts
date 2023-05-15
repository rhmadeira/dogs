import { api } from "./axios/api";

export interface IPhoto {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export const getPhotos = async (
  page: number,
  total: number,
  user: number
): Promise<IPhoto[]> => {
  const { data } = await api.get(`/api/photo/`, {
    params: {
      _page: page,
      _total: total,
      _user: user,
    },
  });
  return data;
};
