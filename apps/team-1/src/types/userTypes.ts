export interface joinUserTypes {
  username: string;
  email: string;
  emailVisibility?: boolean;
  password: string;
  passwordConfirm: string;
  disable: boolean;
  description?: string;
  sfaclogUrl?: string;
  category?: (
    | "frontend"
    | "backend"
    | "data"
    | "server"
    | "dba"
    | "ios"
    | "android"
  )[];
  sns?: {
    email?: string;
    github?: string;
    instagram?: string;
    sfacfolio?: string;
    rocketpunch?: string;
    youtube?: string;
  };
}

export interface userUpdateTypes {
  username?: string;
  password?: string;
  passwordConfirm?: string;
  disable?: boolean;
  description?: string;
  sfaclogUrl?: string;
  category?: (
    | "frontend"
    | "backend"
    | "data"
    | "server"
    | "dba"
    | "logs"
    | "android"
  )[];
  sns?: {
    email?: string;
    github?: string;
    instagram?: string;
    sfacfolio?: string;
    rocketpunch?: string;
    youtube?: string;
  };
}

export interface loginUserTypes {
  email: string;
  password: string;
}

export interface userTypes {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  disable: boolean;
  profileImage: string;
  description: string;
  sfaclogUrl: string;
  category: string[];
  sns: {
    [index: string]: string;
  } | null;
  careers: {
    [index: string]: string;
  } | null;
  contest: {
    [index: string]: string;
  } | null;
  skills: {
    [index: string]: string;
  } | null;
}
