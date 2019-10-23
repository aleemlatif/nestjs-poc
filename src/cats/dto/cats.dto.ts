export class CatsDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly limit: number;
}
