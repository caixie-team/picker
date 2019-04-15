// tslint:disable
export type Maybe<T> = T | null;

export interface AdministratorListOptions {
    skip?: Maybe<number>;
    take?: Maybe<number>;
    sort?: Maybe<AdministratorSortParameter>;
    filter?: Maybe<AdministratorFilterParameter>;
}

export interface AdminstratorSortParameter {
    id?: Maybe<SortOrder>
}

/**
 * 排序
 */
export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC'
}

/**
 * 权限
 *
 * Permissions for administrators and customers
 */
export enum Permission {
    Authenticated = 'Authenticated',
    SuperAdmin = 'SuperAdmin',
    Owner = 'Owner',
    Public = 'Public',
    CreateAdministrator = 'CreateAdministrator',
    ReadAdministrator = 'ReadAdministrator',
    UpdateAdministrator = 'UpdateAdministrator',
    DeleteAdministrator = 'DeleteAdministrator',
    CreateSettings = 'CreateSettings',
    ReadSettings = 'ReadSettings',
    UpdateSettings = 'UpdateSettings',
    DeleteSettings = 'DeleteSettings'
}

export enum AssetType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}
