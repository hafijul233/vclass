import { applyDecorators, Type } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

export const ApiShow = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({ description: `${model.name} details`, type: model }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
