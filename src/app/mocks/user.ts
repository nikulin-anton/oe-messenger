import { faker } from "@faker-js/faker";
import { User } from "../interfaces/user";

export function getUserMock(user: Partial<User> = {}): User {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    bio: faker.person.bio(),
    avatar: faker.image.avatar(),
    ...user,
  };
}
