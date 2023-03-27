import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { PostEntity } from '../post.entity';
import { PostTranslationDto } from './post-translation.dto';

export class PostDto extends AbstractDto {
  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  info: string;

  @ApiPropertyOptional({ type: PostTranslationDto, isArray: true })
  translations?: PostTranslationDto[];

  constructor(postEntity: PostEntity) {
    super(postEntity);

    this.info = 'keywords.admin';
  }
}
