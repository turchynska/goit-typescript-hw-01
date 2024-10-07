export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

type RoleDescription = Record<UserRole, string>

  const description: RoleDescription =  {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };
  console.log(description)