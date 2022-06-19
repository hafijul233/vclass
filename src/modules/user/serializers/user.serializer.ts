import { Expose } from 'class-transformer';
import { UserInterface } from '@app/modules/user/interfaces/user.interface';
import { ModelSerializer } from '@app/common/serializers/model.serializer';

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];
export const extendedUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];
export const allUserGroupsForSerializing: string[] = [
  ...extendedUserGroupsForSerializing,
  'user.password',
];

export class UserSerializer extends ModelSerializer implements UserInterface {
  id: string;
  email: string;
  name: null | string;
  @Expose({ groups: ['user.password'] })
  password: string;
  active: string | null;
  app_version: string | null;
  applicant_id: string | null;
  application_id: string | null;
  check_id: string | null;
  @Expose({ groups: ['user.timestamps'] })
  created_at: null | Date;
  created_by: string | null;
  default_country_id: string | null;
  default_currency: string | null;
  default_language: string | null;
  deleted_at: string | null;
  deleted_by: string | null;
  document_id: string | null;
  fcm_token: string | null;
  is_jompay_allowed: string | null;
  is_on_fido: string | null;
  mobile_number: string | null;
  on_fido_check_count: string | null;
  on_fido_update_count: string | null;
  parent_id: string | null;
  pin: string | null;
  remember_token: string | null;
  risk_profiling: string | null;
  @Expose({ groups: ['user.timestamps'] })
  updated_at: null | Date;
  updated_by: string | null;
  wrong_password: string | null;
  wrong_pin: string | null;
}
