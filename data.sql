-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."bookings" (
    "id" varchar NOT NULL,
    "id_user" int4 NOT NULL,
    "id_schedule" int4 NOT NULL,
    "total" int8,
    "created_at" timestamp,
    "updated_at" timestamp,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS category_room_id_seq

-- Table Definition
CREATE TABLE "public"."category_rooms" (
    "id" int4 NOT NULL DEFAULT nextval('category_room_id_seq'::regclass),
    "name_cat" varchar NOT NULL
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS cineplex_id_seq

-- Table Definition
CREATE TABLE "public"."cineplexs" (
    "id" int4 NOT NULL DEFAULT nextval('cineplex_id_seq'::regclass),
    "name" varchar NOT NULL,
    "address" varchar NOT NULL,
    "id_movie" int4
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS movies_id_seq

-- Table Definition
CREATE TABLE "public"."movies" (
    "id" int4 NOT NULL DEFAULT nextval('movies_id_seq'::regclass),
    "name_movie" varchar NOT NULL,
    "release_date" date NOT NULL,
    "poster" varchar NOT NULL,
    "time" int4 NOT NULL,
    "created_at" date,
    "updated_at" date,
    "slug" varchar
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS movies_cineplex_id_seq

-- Table Definition
CREATE TABLE "public"."movies_cineplexs" (
    "id" int4 NOT NULL DEFAULT nextval('movies_cineplex_id_seq'::regclass),
    "id_movie" int4 NOT NULL,
    "id_cineplex" int4 NOT NULL
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS rooms_id_seq

-- Table Definition
CREATE TABLE "public"."rooms" (
    "id" int4 NOT NULL DEFAULT nextval('rooms_id_seq'::regclass),
    "name_room" varchar NOT NULL,
    "id_cineplex" int4 NOT NULL,
    "id_category_room" int4 NOT NULL,
    "horizontal_size" int4,
    "vertical_size" varchar
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS schedules_id_seq

-- Table Definition
CREATE TABLE "public"."schedules" (
    "id" int4 NOT NULL DEFAULT nextval('schedules_id_seq'::regclass),
    "id_movie" int4 NOT NULL,
    "id_room" int4 NOT NULL,
    "id_time" int4 NOT NULL,
    "price" int4
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."tickets" (
    "id" varchar NOT NULL,
    "id_booking" varchar NOT NULL,
    "seat" varchar NOT NULL,
    "price_ticket" int4
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS time_id_seq

-- Table Definition
CREATE TABLE "public"."times" (
    "id" int4 NOT NULL DEFAULT nextval('time_id_seq'::regclass),
    "start_point" timestamp,
    "end_point" timestamp
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS users_id_seq

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "name" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "role" int4 NOT NULL,
    "active" varchar
);

INSERT INTO "public"."bookings" ("id", "id_user", "id_schedule", "total", "created_at", "updated_at") VALUES
('3', 3, 3, 50000, NULL, NULL);
INSERT INTO "public"."bookings" ("id", "id_user", "id_schedule", "total", "created_at", "updated_at") VALUES
('1', 1, 1, 1000, '2021-01-24 23:59:59', NULL);
INSERT INTO "public"."bookings" ("id", "id_user", "id_schedule", "total", "created_at", "updated_at") VALUES
('2', 2, 2, 2000, '2021-02-24 02:04:55', NULL);
INSERT INTO "public"."bookings" ("id", "id_user", "id_schedule", "total", "created_at", "updated_at") VALUES
('4', 1, 2, 5000, '2021-10-12 23:59:59', NULL),
('2785489a-8483-4b9a-8ae3-b86bce974270', 1, 2, 10000, '2021-05-17 11:11:15.815', '2021-05-17 11:11:15.815');

INSERT INTO "public"."category_rooms" ("id", "name_cat") VALUES
(1, '2D');
INSERT INTO "public"."category_rooms" ("id", "name_cat") VALUES
(2, '3D');
INSERT INTO "public"."category_rooms" ("id", "name_cat") VALUES
(3, '4DMAX');

INSERT INTO "public"."cineplexs" ("id", "name", "address", "id_movie") VALUES
(1, 'Galaxy nhà làm', 'Đoán xem', 1);
INSERT INTO "public"."cineplexs" ("id", "name", "address", "id_movie") VALUES
(4, 'CGV America', '123 DD rrr', 3);
INSERT INTO "public"."cineplexs" ("id", "name", "address", "id_movie") VALUES
(2, 'CGV nhà làm', 'Như trên', 1);

INSERT INTO "public"."movies" ("id", "name_movie", "release_date", "poster", "time", "created_at", "updated_at", "slug") VALUES
(1, 'BAD SEEDS - NHỮNG ĐỨA TRẺ HƯ HỎNG', '2021-03-09', '1.jpg', 105, '2021-05-29', '2021-05-29', 'bad-seeds-nhung-dua-tre-hu-hong');
INSERT INTO "public"."movies" ("id", "name_movie", "release_date", "poster", "time", "created_at", "updated_at", "slug") VALUES
(2, 'BÀN TAY DIỆT QUỶ', '2021-04-09', '2.jpg', 128, '2021-05-29', '2021-05-29', 'ban-tay-diet-quy');
INSERT INTO "public"."movies" ("id", "name_movie", "release_date", "poster", "time", "created_at", "updated_at", "slug") VALUES
(3, 'BỘ ĐÔI SẤM SÉT - THUNDER FORCE', '2021-04-14', '3.jpg', 105, '2021-05-29', '2021-05-29', 'bo-doi-sam-set-thunder-force');
INSERT INTO "public"."movies" ("id", "name_movie", "release_date", "poster", "time", "created_at", "updated_at", "slug") VALUES
(4, 'BỐN NGƯỜI BẠN HỌC - CLASSMATES MINUS', '2021-02-22', '4.jpg', 91, '2021-05-29', '2021-05-29', 'bon-nguoi-ban-hoc-classmates-minus'),
(5, 'CHIẾN BINH CUỐI CÙNG CỘI NGUỒN CỦA QUỶ', '2021-04-30', '5.jpg', 122, '2021-05-29', '2021-05-29', 'chien-binh-cuoi-cung-coi-nguon-cua-quy'),
(7, 'GODZILLA VS. KONG', '2021-03-26', '7.jpg', 113, '2021-05-29', '2021-05-29', 'godzilla-vs-kong'),
(8, 'MORTAL KOMBAT CUỘC CHIẾN SINH TỬ', '2021-04-09', '8.jpg', 110, '2021-05-29', '2021-05-29', 'mortal-kombat-cuoc-chien-sinh-tu'),
(9, 'NGƯỜI NHÂN BẢN', '2021-04-15', '9.jpg', 114, '2021-05-29', '2021-05-29', 'nguoi-nhan-ban'),
(10, 'ONG NHÍ PHIÊU LƯU KÝ GIẢI CỨU CÔNG CHÚA KIẾN', '2021-04-23', '10.jpg', 88, '2021-05-29', '2021-05-29', 'ong-nhi-phieu-luu-ky-giai-cuu-cong-chua-kien'),
(11, 'PALM SPRINGS: MỞ MẮT THẤY HÔM QUA', '2021-03-05', '11.jpg', 89, '2021-05-29', '2021-05-29', 'palm-springs-mo-mat-thay-hom-qua'),
(12, 'THÁM TỬ LỪNG DANH CONAN VIÊN ĐẠN ĐỎ', '2021-04-23', '12.jpg', 111, '2021-05-29', '2021-05-29', 'tham-tu-lung-danh-connan-vien-dan-do'),
(13, 'TRÙM CUỐI SIÊU ĐẲNG', '2021-04-23', '13.jpg', 101, '2021-05-29', '2021-05-29', 'trum-cuoi-sieu-dang'),
(14, 'ĐẤU TRƯỞNG ẢO READY PLAYER ONE', '2020-12-23', '14.jpg', 139, '2021-05-29', '2021-05-29', 'dau-truong-ao-ready-player-one'),
(15, 'KỲ TÍCH BIỂN XANH - BLUE MIRACLE (2021)', '2021-05-28', '15.jpg', 95, '2021-05-29', '2021-05-29', 'ky-tich-bien-xanh-blue-miracle-(2021)'),
(16, 'MẬT VỤ KINGSMAN : TỔ CHỨC HOÀNG KIM - KINGSMAN : THE GOLDEN CIRCLE', '2020-12-23', '16.jpg', 114, '2021-05-29', '2021-05-29', 'mat-vu-kingsman-to-chuc-hoang-kim'),
(17, 'NGƯỜI ĐÀN ÔNG THÉP - MAN OF STEEL', '2020-12-23', '17.jpg', 148, '2021-05-29', '2021-05-29', 'nguoi-dan-ong-thep'),
(18, 'NGƯỜI TIÊN PHONG - VANGUARD', '2020-12-23', '18.jpg', 108, '2021-05-29', '2021-05-29', 'nguoi-tien-phong'),
(19, 'NỮ THẦN CHIẾN MINH - WONDER WOMAN 1984 (WW84)', '2021-01-27', '19.jpg', 155, '2021-05-29', '2021-05-29', 'nu-than-chien-binh'),
(20, 'OHANA BÁU VẬT QUÝ GIÁ NHẤT - FINDING "OHANA', '2021-03-23', '20.jpg', 123, '2021-05-29', '2021-05-29', 'ohana-bau-vat-quy-gia-nhat-finding-ohana'),
(21, 'SÁT THỦ TỬ THẦN - 492: A MAN CALLED DEATH', '2021-05-24', '21.jpg', 95, '2021-05-29', '2021-05-29', 'sat-thu-tu-than-492-a-man-called-death'),
(22, 'SONG SINH SÁT THỦ - LEGEND', '2021-05-11', '22.jpg', 132, '2021-05-29', '2021-05-29', 'song-sinh-sat-thu-legend'),
(23, 'VŨ HỘI TỐT NGHIỆP - THE PROM', '2020-12-23', '23.jpg', 132, '2021-05-29', '2021-05-29', 'vu-hoi-tot-nghiep-the-prom'),
(24, 'CỤC NỢ HÓA CỤC CƯNG', '2020-10-09', '24.jpg', 113, '2021-05-29', '2021-05-29', 'cuc-no-hoa-cung'),
(25, 'BỐ GIÀ', '2021-03-12', '25.jpg', 128, '2021-05-29', '2021-05-29', 'bo-gia'),
(26, 'LẬT MẶT 48H', '2021-04-16', '26.jpg', 110, '2021-05-29', '2021-05-29', 'lat-mat-48h'),
(27, 'THE LAST WARRIOR: ROOT OF EVIL', '2021-04-30', '27.jpg', 122, '2021-05-29', '2021-05-29', 'the-last-warrior:-root-of-evil'),
(28, 'THE HYPNOSIS CON LẮC TÀ THUẬT', '2021-04-21', '28.jpg', 86, '2021-05-29', '2021-05-29', 'the-hypnosis-con-lac-ta-thuat'),
(29, 'NGƯỜI ĐƯA TIN - The COURIER (2021)', '2021-05-29', '29.jpg', 112, '2021-05-29', '2021-05-29', 'nguoi-dua-tin-the-courier-(2021)'),
(30, 'KẺ THẾ MẠNG - SELF/LESS', '2021-05-19', '30.jpg', 117, '2021-05-29', '2021-05-29', 'ke-the-mang-self/less'),
(32, 'HUNG THẦN TRẮNG -GREAT WHITE', '2021-05-25', '32.jpg', 91, '2021-05-29', '2021-05-29', 'hung-than-trang'),
(33, 'ẤN QUỶ - THE UNHOLY', '2021-05-29', '33.jpg', 99, '2021-05-29', '2021-05-29', 'an-quy'),
(34, 'KẺ VÔ DANH - NOBODY', '2021-04-17', '34.jpg', 95, '2021-05-29', '2021-05-29', 'ke-vo-danh'),
(35, 'ĐỒI TUYẾT MÁU - LET IT SNOW', '2021-04-11', '35.jpg', 86, '2021-05-29', '2021-05-29', 'doi-tuyet-mau'),
(36, 'QUÁI VẬT SĂN ĐÊM - SPUTNIK', '2021-04-08', '36.jpg', 114, '2021-05-29', '2021-05-29', 'quai-vat-san-dem'),
(37, 'HÀNH TINH HỖN LOẠN - CHAOS WALKING', '2021-04-05', '37.jpg', 110, '2021-05-29', '2021-05-29', 'hanh-tinh-hon-loan'),
(38, 'ÁM SÁT TIỂU THUYẾT GIA', '2021-04-15', '38.jpg', 130, '2021-05-29', '2021-05-29', 'am-sat-tieu-thuyet-gia'),
(39, 'SIÊU TRỘM - WAY DOWN', '2021-03-28', '39.jpg', 118, '2021-05-29', '2021-05-29', 'sieu-trom'),
(40, 'ÂM DƯƠNG SƯ: THỊ THẦN LỆNH - THE YIN YANG MASTER', '2021-03-19', '40.jpg', 132, '2021-05-29', '2021-05-29', 'am-duong-su'),
(41, 'TÂN PHONG THẦN: NA TRA TRÙNG SINH', '2021-04-11', '41.jpg', 117, '2021-05-29', '2021-05-29', 'tan-phong-than-na-tra-trung-sinh'),
(31, 'VỆ BINH GIẢI NGÂN HÀ 2 - Guardians Of The Galaxy Vol. 2', '2020-12-23', '31.jpg', 138, '2021-05-29', '2021-05-29', 've-binh-giai-ngan-ha-2'),
(6, 'ĐIỆP VIÊN SIÊU LẦY', '2020-08-14', '6.png', 101, '2021-05-29', '2021-05-29', 'diep-vien-sieu-lay'),
(42, 'LỪA ĐỂU GẶP LỪA ĐẢO - THE CON-HEARTIST', '2021-03-10', '42.jpg', 130, '2021-05-29', '2021-05-29', 'lua-deu-gap-lua-dao'),
(43, 'CƠN THỊNH NỘ CHẾT NGƯỜI - WRATH OF MAN (2021)', '2021-05-28', '43.jpg', 119, '2021-05-29', '2021-05-29', 'con-thinh-no-chet-nguoi'),
(44, 'TÔI LÀ VỢ CỦA ANH', '2021-04-21', '44.jpg', 120, '2021-01-10', '2021-05-29', 'toi-la-vo-cua-anh'),
(45, 'ĐIỂM MÙ CHẾT CHÓC - SIGHTLESS', '2021-01-20', '45.jpg', 89, '2021-05-29', '2021-05-29', 'diem-mu-chet-choc'),
(46, 'DORAEMON: ĐÔI BẠN THÂN 2 - STAND BY ME DORAEMON 2', '2021-04-21', '46.jpg', 96, '2021-05-29', '2021-05-29', 'doraemon-doi-ban-than-2'),
(47, 'TÂY DU KÍ - TÁI THẾ YÊU VƯƠNG', '2021-04-04', '47.jpg', 110, '2021-05-29', '2021-05-29', 'tay-du-ki-tai-the-yeu-vuong'),
(48, 'TOM & JERRY QUẬY TUNG NEW YORK', '2021-03-17', '48.jpg', 101, '2021-05-29', '2021-05-29', 'tom-va-jerry'),
(49, 'LỐI THOÁT Ở PHÁP - FRENCH EXIT', '2021-05-11', '49.jpg', 113, '2021-05-29', '2021-05-29', 'loi-thoat-o-phap'),
(50, 'THẢM SÁT Ở KATYN - KATYN', '2021-05-10', '50.jpg', 125, '2021-05-29', '2021-05-29', 'tham-sat-o-katyn');

INSERT INTO "public"."movies_cineplexs" ("id", "id_movie", "id_cineplex") VALUES
(1, 1, 1);
INSERT INTO "public"."movies_cineplexs" ("id", "id_movie", "id_cineplex") VALUES
(2, 2, 1);
INSERT INTO "public"."movies_cineplexs" ("id", "id_movie", "id_cineplex") VALUES
(2, 22, 1);

INSERT INTO "public"."rooms" ("id", "name_room", "id_cineplex", "id_category_room", "horizontal_size", "vertical_size") VALUES
(1, '1', 1, 1, NULL, NULL);
INSERT INTO "public"."rooms" ("id", "name_room", "id_cineplex", "id_category_room", "horizontal_size", "vertical_size") VALUES
(2, '2', 2, 2, NULL, NULL);
INSERT INTO "public"."rooms" ("id", "name_room", "id_cineplex", "id_category_room", "horizontal_size", "vertical_size") VALUES
(10, 'Thu trà', 1, 1, NULL, NULL);

INSERT INTO "public"."schedules" ("id", "id_movie", "id_room", "id_time", "price") VALUES
(3, 1, 2, 3, NULL);
INSERT INTO "public"."schedules" ("id", "id_movie", "id_room", "id_time", "price") VALUES
(4, 2, 1, 1, NULL);
INSERT INTO "public"."schedules" ("id", "id_movie", "id_room", "id_time", "price") VALUES
(1, 1, 1, 1, 100);
INSERT INTO "public"."schedules" ("id", "id_movie", "id_room", "id_time", "price") VALUES
(2, 1, 1, 2, 100),
(8, 1, 1, 17, 70000),
(9, 1, 1, 18, 70000);

INSERT INTO "public"."tickets" ("id", "id_booking", "seat", "price_ticket") VALUES
('1', '1', 'E8', 590000);
INSERT INTO "public"."tickets" ("id", "id_booking", "seat", "price_ticket") VALUES
('2', '1', 'E9', 590000);
INSERT INTO "public"."tickets" ("id", "id_booking", "seat", "price_ticket") VALUES
('3', '1', 'E10', 590000);
INSERT INTO "public"."tickets" ("id", "id_booking", "seat", "price_ticket") VALUES
('4', '4', 'D10', 90000),
('5', '4', 'D11', 90000),
('519d4fce-6c05-4b84-8918-3431214a0573', '2785489a-8483-4b9a-8ae3-b86bce974270', 'H2', 5000),
('918f6076-288c-45fb-8fb1-67040a046c3b', '2785489a-8483-4b9a-8ae3-b86bce974270', 'H3', 5000);

INSERT INTO "public"."times" ("id", "start_point", "end_point") VALUES
(1, '2021-12-11 12:55:55', '2021-12-11 14:55:55');
INSERT INTO "public"."times" ("id", "start_point", "end_point") VALUES
(2, '2021-12-11 09:55:54', '2021-12-11 11:55:54');
INSERT INTO "public"."times" ("id", "start_point", "end_point") VALUES
(17, '2021-12-11 22:25:00', '2021-12-12 00:25:00');
INSERT INTO "public"."times" ("id", "start_point", "end_point") VALUES
(18, '2021-12-12 22:25:00', '2021-12-13 00:25:00');

INSERT INTO "public"."users" ("id", "email", "password", "name", "phone", "role", "active") VALUES
(1, 'ducga079099@gmail.com', '$2a$12$Hin4/C1tfBNmdEZEhMbWEuXsWdaPOD1J3o2q06/8NyEc5HBN8MTvq', 'Ducga', '123456789', 1, NULL);

