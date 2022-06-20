import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  parent_id: null | string;

  @Column()
  name: null | string;

  @Column()
  mobile_number: null | string;

  @Column()
  password: null | string;

  @Column()
  pin: null | string;

  @Column()
  active: null | string;

  @Column()
  wrong_password: null | string;

  @Column()
  wrong_pin: null | string;

  @Column()
  risk_profiling: null | string;

  @Column()
  is_jompay_allowed: null | string;

  @Column()
  app_version: null | string;

  @Column()
  fcm_token: null | string;

  @Column()
  default_language: null | string;

  @Column()
  default_currency: null | string;

  @Column()
  default_country_id: null | string;

  @Column()
  applicant_id: null | string;

  @Column()
  check_id: null | string;

  @Column()
  application_id: null | string;

  @Column()
  document_id: null | string;

  @Column()
  is_on_fido: null | string;

  @Column()
  on_fido_update_count: null | string;

  @Column()
  on_fido_check_count: null | string;

  @Column()
  remember_token: null | string;

  @Column()
  deleted_by: null | string;

  @Column()
  created_by: null | string;

  @Column()
  updated_by: null | string;

  @Column()
  deleted_at: null | string;

  @Column()
  created_at: null | string;

  @Column()
  updated_at: null | string;
}
