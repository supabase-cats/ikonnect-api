import supabase from './client';

const tableName = 'idols';

interface Idol {
  id: number;
  name: string;
  group: string;
  image: string;
}

export async function getIdols(): Promise<Idol[]> {
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
