import { Post } from './Posts';
import { Address, Company } from './Users';

export interface Letter {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
}
