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
import { User } from '@app/modules/user/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiCreate,
  ApiHttpExceptionResponse,
  ApiIndex,
  ApiRemove,
  ApiShow,
  ApiUpdate,
} from '@app/common/decorators';
import {
  CreateUserDto,
  FindUserDto,
  UpdateUserDto,
} from '@app/modules/user/dto';

@Controller('users')
@ApiTags('user')
@ApiHttpExceptionResponse()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiIndex(User)
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    let users = [];
    try {
      users = await this.userService.findAll(findUserDto);
    } catch (e) {
      console.log(e);
    } finally {
      return users;
    }
  }

  @Post()
  @ApiCreate(User)
  async create(@Body() createUserDto: CreateUserDto): Promise<User | null> {
    return await this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiShow(User)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiUpdate(User)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiRemove(User)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
