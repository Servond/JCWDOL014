export interface FormValues {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface FormProps {
  initialName?: string;
  initialEmail?: string;
  initialPassword?: string;
  initialAge?: number;
}
