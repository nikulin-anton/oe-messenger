import { User } from "../interfaces/user";
import { getUserMock } from "../mocks/user";

export function getUser(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getUserMock()), Math.random() * 100)
  );
}
