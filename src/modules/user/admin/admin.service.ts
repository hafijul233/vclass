import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/modules/user/entities/user.entity';
import { Repository } from 'typeorm';
import { RoleEnum } from '@app/common/constants';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(findAdminDto: any): Promise<User[]> {
    findAdminDto.role = RoleEnum.Admin;
    return await this.userRepository.find({
      where: findAdminDto,
    });
  }

  async findOne(id: number, relations: string[] = [], throwsException = false) {
    return await this.userRepository
      .findOne({
        where: { id: id, role: RoleEnum.Admin },
        relations,
      })
      .then((entity) => {
        if (!entity && throwsException) {
          return Promise.reject(new NotFoundException('Entity not found.'));
        }

        return Promise.resolve(entity ? entity : null);
      })
      .catch((error) => Promise.reject(error));
  }

  async create(createAdminDto: any, relations: string[] = []) {
    return await this.userRepository
      .save(createAdminDto)
      .then(async (entity) => await this.findOne((entity as any).id, relations))
      .catch((error) => Promise.reject(error));
  }

  async update(id: number, updateAdminDto: any, relations: string[] = []) {
    return await this.userRepository
      .update(id, updateAdminDto)
      .then(async () => await this.findOne(id, relations))
      .catch((error) => Promise.reject(error));
  }

  async remove(id: number) {
    return await this.userRepository
      .softDelete(id)
      .then(async () => {
        return (await this.findOne(id)) == null;
      })
      .catch((error) => Promise.reject(error));
  }
}
