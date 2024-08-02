import supabase from './client';

const tableName = 'donations';

interface Donation {
  id: number;
  title: string;
  description: string;
  deadline: string;
  savedAmount: number;
  targetAmount: number;
  idol: number;
  image: string;
}

export async function getDonations(): Promise<Donation[]> {
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
