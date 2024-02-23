import { faker } from "@faker-js/faker";
import { User } from "../interfaces/user";

export function getUserMock(user: Partial<User> = {}): User {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    ...user,
  };
}
