import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: "Title can't be empty!" })
  title!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsString()
  @IsOptional()
  body!: string;
}
