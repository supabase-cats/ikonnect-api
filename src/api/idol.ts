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

export async function searchIdol(keyword: string): Promise<Idol[]> {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .or(`name.ilike.%${keyword}%,group.ilike.%${keyword}%`); // 'name' 또는 'description' 필드에서 'John'이 포함된 데이터 검색

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
