export class Account {
  userID?: number;
  userName?: string;
  pass?: string;
  typeFlag?: number; // 0 (anchor) or 1 (manager)
  email?: string;
  points?: number;
  myAnchors?: Account[];
}
