export interface MetaAttrubutes {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
	data: T[];
	meta: MetaAttrubutes;
}

export interface StrapiSingleResponse<T> {
	data: T;
	meta: MetaAttrubutes;
}

export interface Tag {
	id: number;
	name: string;
}
