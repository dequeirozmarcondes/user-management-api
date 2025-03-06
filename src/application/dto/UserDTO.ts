//src/dtos/UserDTO.ts

/**
 * DTO para criação de usuário.
 */
export interface CreateUserDTO {
  /** Nome do usuário. */
  name: string;
  /** E-mail do usuário. */
  email: string;
  /** Senha do usuário. */
  password: string;
}

/**
 * DTO para atualização de usuário.
 */
export interface UpdateUserDTO {
  /** Nome do usuário. */
  name?: string;
  /** E-mail do usuário. */
  email?: string;
  /** Senha do usuário. */
  password?: string;
}

/**
 * DTO para resposta de usuário.
 */
export interface UserResponseDTO {
  /** ID do usuário. */
  id: string;
  /** Nome do usuário. */
  name: string;
  /** E-mail do usuário. */
  email: string;
}
