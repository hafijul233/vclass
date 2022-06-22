import { applyDecorators, Type } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';

export const ApiEntityResponse = <TModel extends Type<any>>(
  model: TModel,
  identifier = 'id',
) => {
  return applyDecorators(
    ApiParam({
      name: identifier,
      type: 'number',
      description: `${model.name} identifier number`.toLowerCase(),
      required: true,
    }),
    ApiOkResponse({ description: 'User details', type: model }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
