CREATE TABLE [DeXuat]
(
 [Ma]               int NOT NULL IDENTITY(1,1) ,
 [DeXuat_MaLoaiXe]  int NULL ,
 [DeXuat_TenXe]     nvarchar(50) NULL ,
 [DeXuat_Mau]       nvarchar(50) NULL ,
 [DeXuat_MucDich]   nvarchar(50) NULL ,
 [DeXuat_LyDo]      nvarchar(50) NULL ,
 [DeXuat_TrangThai] varchar(1) NULL ,
 [DeXuat_NguoiTao]  nvarchar(50) NULL ,
 [DeXuat_NgayTao]   datetime NULL ,
 [DeXuat_MaBangGia] int NULL ,
 [DeXuat_SoLuong]   int NULL ,


 CONSTRAINT [PK_DeXuat] PRIMARY KEY CLUSTERED ([Ma] ASC)
);
GO

CREATE TABLE [DeXuat_BangGia]
(
 [Ma]                     int NOT NULL IDENTITY(1,1),
 [DeXuatBangGia_MaDeXuat] int NULL ,
 [DeXuatBangGia_Gia]      bigint NULL ,
 [DeXuatBangGia_ChuThau]  nvarchar(50) NULL ,


 CONSTRAINT [PK_DeXuat_Gia] PRIMARY KEY CLUSTERED ([Ma] ASC)
);
GO

CREATE TABLE [LoaiXe]
(
 [Ma]                      int NOT NULL IDENTITY(1,1),
 [LoaiXe_Ten]              nvarchar(50) NULL ,
 [LoaiXe_Hang]             nvarchar(50) NULL ,
 [LoaiXe_DinhMucNhienLieu] float NULL ,
 [LoaiXe_NamSX]            int NULL ,
 [LoaiXe_SoLuong]          int NULL ,
 [LoaiXe_TrangThai]        varchar(1) NULL ,
 [LoaiXe_NgayTao]          datetime NULL ,
 [LoaiXe_NguoiTao]         nvarchar(50) NULL ,
 [LoaiXe_LoaiNhienLieu]    varchar(1) NULL ,


 CONSTRAINT [PK_LoaiXe] PRIMARY KEY CLUSTERED ([Ma] ASC)
);
GO

CREATE TABLE [ThanhLy]
(
 [Ma]               int NOT NULL IDENTITY(1,1),
 [ThanhLy_MaXe] int NULL,
 [ThanhLy_LyDo]     nvarchar(50) NULL ,
 [ThanhLy_NguoiMua] nvarchar(50) NULL ,
 [ThanhLy_SoTien]   bigint NULL ,
 [ThanhLy_NguoiTao] nvarchar(50) NULL ,
 [ThanhLy_NgayTao]  datetime NULL ,


 CONSTRAINT [PK_ThanhLy] PRIMARY KEY CLUSTERED ([Ma] ASC)
);
GO

CREATE TABLE [Xe]
(
 [Ma]           int NOT NULL IDENTITY(1,1),
 [Xe_MaLoaiXe]  int NULL ,
 [Xe_Ten]       nvarchar(50) NULL ,
 [Xe_BienSo]    varchar(50) NULL ,
 [Xe_Gia]       bigint NULL ,
 [Xe_Mau]       nvarchar(50) NULL ,
 [Xe_NguoiTao]  nvarchar(50) NULL ,
 [Xe_NgayTao]   datetime NULL ,
 [Xe_TrangThai] varchar(1) NULL ,


 CONSTRAINT [PK_Xe] PRIMARY KEY CLUSTERED ([Ma] ASC)
);
GO

ALTER TABLE Xe ADD
FOREIGN KEY (Xe_MaLoaiXe) REFERENCES LoaiXe(Ma);

GO

ALTER TABLE ThanhLy ADD
FOREIGN KEY (ThanhLy_MaXe) REFERENCES Xe(Ma);

GO

ALTER TABLE DeXuat_BangGia ADD
FOREIGN KEY (DeXuatBangGia_MaDeXuat) REFERENCES DeXuat(Ma);

GO
ALTER TABLE DeXuat ADD
FOREIGN KEY (DeXuat_MaLoaiXe) REFERENCES LoaiXe(Ma);
