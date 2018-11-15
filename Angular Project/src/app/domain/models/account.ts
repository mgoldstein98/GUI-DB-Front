export class Account {
  userID?: number;
  userName?: string;
  pass?: string;
  typeFlag?: number; // 1 (anchor) or 0 (manager)
  email?: string;
  points?: number;
  myAnchors?: Account[];
}
