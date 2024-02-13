import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { TextField } from "../../components/TextField";

export type Provider =
  | "email-password"
  | "google"
  | "facebook"
  | "phone_number";

export interface SignInProps {}

export function SignIn() {
  return (
    <Card>
      <div>
        <TextField type="email" />
      </div>
      <div>
        <TextField type="password" />
      </div>
      <div>
        <Button label={"Sign In"} />
      </div>
    </Card>
  );
}
