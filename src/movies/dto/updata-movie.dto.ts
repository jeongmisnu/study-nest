import { PartialType } from '@nestjs/mapped-types';
import { createMovieDto } from './reate-movie.dto';

export class UpdateDataDto extends PartialType(createMovieDto) {}
