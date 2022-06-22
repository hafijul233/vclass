import { applyDecorators, Type } from '@nestjs/common';
import { ApiNoContentResponse, ApiNotFoundResponse } from '@nestjs/swagger';

export const ApiRemove = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiNoContentResponse({ description: `${model.name} is deleted ` }),
    ApiNotFoundResponse({ description: 'Data Not Found' }),
  );
};
