export interface MetaAttrubutes {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiListResponse<T> {
	data: T[];
	meta: MetaAttrubutes;
}
