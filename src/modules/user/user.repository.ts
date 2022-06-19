import {
  allUserGroupsForSerializing,
  UserSerializer,
} from './serializers/user.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
import { EntityRepository } from 'typeorm';
import { ModelRepository } from '@app/common/repositories/model.repository';
import { User } from '@app/modules/user/entities/user';

@EntityRepository(User)
export class UserRepository extends ModelRepository<User, UserSerializer> {
  transform(model: User): UserSerializer {
    const transformOptions = {
      groups: allUserGroupsForSerializing,
    };
    return plainToClass(
      UserSerializer,
      classToPlain(model, transformOptions),
      transformOptions,
    );
  }

  transformMany(models: User[]): UserSerializer[] {
    return models.map((model) => this.transform(model));
  }
}
