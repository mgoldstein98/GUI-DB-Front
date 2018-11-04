export class Account {
  name?: string;
  password?: string;
  jobTitle?: number;//0 (anchor) or 1 (manager)
  email?: string;
  points?: number;
  myAnchors?: Account[];
}
