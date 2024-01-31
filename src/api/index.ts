export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
  favourite: NonNullable<unknown>;
}

export async function getCats(page: number): Promise<Cat[]> {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`,
    {
      headers: {
        'x-api-key': import.meta.env.API_KEY,
      },
    }
  ).then((res) => res.json());
}
