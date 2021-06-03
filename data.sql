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
(1, 'BÀN TAY DIỆT QUỶ', '2021-04-09', '2.jpg', 128, '2021-05-29', '2021-05-29', 'ban-tay-diet-quy');
INSERT INTO "public"."movies" ("id", "name_movie", "release_date", "poster", "time", "created_at", "updated_at", "slug") VALUES
(2, 'CHIẾN BINH CUỐI CÙNG CỘI NGUỒN CỦA QUỶ', '2021-04-30', '5.jpg', 122, '2021-05-29', '2021-05-29', 'chien-binh-cuoi-cung-coi-nguon-cua-quy'),
(3, 'GODZILLA VS. KONG', '2021-03-26', '7.jpg', 113, '2021-05-29', '2021-05-29', 'godzilla-vs-kong'),
(4, 'MORTAL KOMBAT CUỘC CHIẾN SINH TỬ', '2021-04-09', '8.jpg', 110, '2021-05-29', '2021-05-29', 'mortal-kombat-cuoc-chien-sinh-tu'),
(5, 'NGƯỜI NHÂN BẢN', '2021-04-15', '9.jpg', 114, '2021-05-29', '2021-05-29', 'nguoi-nhan-ban'),
(6, 'ONG NHÍ PHIÊU LƯU KÝ GIẢI CỨU CÔNG CHÚA KIẾN', '2021-04-23', '10.jpg', 88, '2021-05-29', '2021-05-29', 'ong-nhi-phieu-luu-ky-giai-cuu-cong-chua-kien'),
(7, 'PALM SPRINGS: MỞ MẮT THẤY HÔM QUA', '2021-03-05', '11.jpg', 89, '2021-05-29', '2021-05-29', 'palm-springs-mo-mat-thay-hom-qua'),
(8, 'THÁM TỬ LỪNG DANH CONAN VIÊN ĐẠN ĐỎ', '2021-04-23', '12.jpg', 111, '2021-05-29', '2021-05-29', 'tham-tu-lung-danh-connan-vien-dan-do'),
(9, 'TRÙM CUỐI SIÊU ĐẲNG', '2021-04-23', '13.jpg', 101, '2021-05-29', '2021-05-29', 'trum-cuoi-sieu-dang'),
(10, 'CỤC NỢ HÓA CỤC CƯNG', '2020-10-09', '24.jpg', 113, '2021-05-29', '2021-05-29', 'cuc-no-hoa-cung'),
(11, 'BỐ GIÀ', '2021-03-12', '25.jpg', 128, '2021-05-29', '2021-05-29', 'bo-gia'),
(12, 'LẬT MẶT 48H', '2021-04-16', '26.jpg', 110, '2021-05-29', '2021-05-29', 'lat-mat-48h');

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

