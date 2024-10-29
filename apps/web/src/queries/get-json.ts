type Data = { userId: number; id: number; title: string; completed: boolean }[];

export async function get(): Promise<Data> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data as Data;
}
