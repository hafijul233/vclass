import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@app/modules/user/entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { FindUserDto } from '@app/modules/user/dto/find-user.dto';
import { PaginatedDto } from '@app/common/dtos/paginate.dto';
import {
  ForbiddenDto,
  ServerErrorDto,
  UnauthorizedDto,
  ValidationDto,
} from '@app/common/dtos/exception';

@Controller('users')
@ApiTags('users')
@ApiBadRequestResponse({
  description: 'Validation Error',
  type: ValidationDto,
})
@ApiUnauthorizedResponse({
  description: 'Unauthorized Access',
  type: UnauthorizedDto,
})
@ApiForbiddenResponse({
  description: 'Access Forbidden',
  type: ForbiddenDto,
})
@ApiInternalServerErrorResponse({
  description: 'Internal Server Error',
  type: ServerErrorDto,
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiExtraModels(PaginatedDto)
  @ApiOkResponse({
    description: 'Return all users as list',
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginatedDto) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(User) },
            },
          },
        },
      ],
    },
  })
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    return await this.userService.findAll(findUserDto);
  }

  @Post()
  @ApiBody({ description: 'Create new user', type: CreateUserDto })
  @ApiCreatedResponse({ description: 'Create new user', type: User })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'user id number',
    required: true,
  })
  @ApiOkResponse({ description: 'User details', type: User })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ description: 'Update user details', type: UpdateUserDto })
  @ApiOkResponse({ description: 'Updated user details', type: User })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiBody({ description: 'Soft delete a user', type: UpdateUserDto })
  @ApiNoContentResponse({ description: 'item is deleted ' })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
