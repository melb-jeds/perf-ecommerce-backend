export enum RoleEnum {
	User,
	Admin,
}

export const ROLE_RECORD: Record<RoleEnum, string> = {
	[RoleEnum.Admin]: 'admin',
	[RoleEnum.User]: 'user',
}
