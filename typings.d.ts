interface Appwrite {
  client: Client;
  account: Account;
  database: Database;
  storage: Storage;
  ID: ID;
}

interface Board {
  colums: Map<TypedColumn, Column>
}

type TypedColumn = 'todo' | 'inprogress' | 'done';

interface Column {
  id: TypedColumn;
  todo: Todo[];
}

interface Todo {
  id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}