export interface UserDto {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  matKhau: string;
  maLoaiNguoiDung: string;
}

export interface ResponseBodyDto<D> {
  statusCode: number;
  message: string;
  content: D;
  dateTime: string;
  messageConstants?: any;
}

export interface UserCreateDto {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  hoTen: string;
}

export interface UserListDto {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Item[];
}

export interface Item {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom?: any;
  maLoaiNguoiDung: string;
  hoTen: string;
}
