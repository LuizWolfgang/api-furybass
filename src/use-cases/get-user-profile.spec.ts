import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import { expect, describe, it, beforeEach } from "vitest";
import { getUserUseCase } from "./get-user-profile";
import { ResourceNotExistErro } from "./errors/resource-not-exists-error";

let usersRepository: InMemoryUsersRepository;
let sut: getUserUseCase;

describe("Get user by id", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new getUserUseCase(usersRepository);
  });

  it("should be able to get user", async () => {
    const createdUser = await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
    });

    expect(user.name).toEqual("John Doe");
  });

  it("should not be able to get user profile with wrong id", async () => {
    expect(() =>
      sut.execute({
        userId: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotExistErro);
  });
});
