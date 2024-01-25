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
