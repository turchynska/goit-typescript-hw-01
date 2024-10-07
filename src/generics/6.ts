type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };

  type Params = Omit<Form, 'errors'>;
  const params: Params = {
    email: ' qwert2024@mail.com',
    firstName: 'Alice',
    lastName: 'Jung',
    phone: '277536321'
  }
  console.log(params)