PGDMP          4                y         
   cinema-app    13.1    13.1 ;               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    41178 
   cinema-app    DATABASE     p   CREATE DATABASE "cinema-app" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "cinema-app";
                postgres    false            �            1259    41250    bookings    TABLE     �   CREATE TABLE public.bookings (
    id character varying NOT NULL,
    id_user integer NOT NULL,
    id_schedule integer NOT NULL,
    total bigint,
    created_at timestamp without time zone
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            �            1259    41214    category_room    TABLE     h   CREATE TABLE public.category_room (
    id integer NOT NULL,
    name_cat character varying NOT NULL
);
 !   DROP TABLE public.category_room;
       public         heap    postgres    false            �            1259    41212    category_room_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.category_room_id_seq;
       public          postgres    false    207                       0    0    category_room_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.category_room_id_seq OWNED BY public.category_room.id;
          public          postgres    false    206            �            1259    41192    cineplex    TABLE     �   CREATE TABLE public.cineplex (
    id integer NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL
);
    DROP TABLE public.cineplex;
       public         heap    postgres    false            �            1259    41190    cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cineplex_id_seq;
       public          postgres    false    203                       0    0    cineplex_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cineplex_id_seq OWNED BY public.cineplex.id;
          public          postgres    false    202            �            1259    41225    movies    TABLE       CREATE TABLE public.movies (
    id integer NOT NULL,
    name_movie character varying NOT NULL,
    release_date date NOT NULL,
    poster character varying NOT NULL,
    "time" integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    41223    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    209                       0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    208            �            1259    41203    rooms    TABLE     L  CREATE TABLE public.rooms (
    id integer NOT NULL,
    name_room character varying NOT NULL,
    id_cineplex integer NOT NULL,
    id_category_room integer NOT NULL,
    horizontal_size integer NOT NULL,
    vertical_size integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            �            1259    41201    rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    205            	           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    204            �            1259    41236 	   schedules    TABLE     �   CREATE TABLE public.schedules (
    id integer NOT NULL,
    id_movie integer NOT NULL,
    id_cineplex integer NOT NULL,
    id_time integer NOT NULL,
    price integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            �            1259    41234    schedules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    211            
           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    210            �            1259    41258    ticket    TABLE     �   CREATE TABLE public.ticket (
    id character varying NOT NULL,
    id_booking character varying NOT NULL,
    seat character varying NOT NULL,
    price_tiket integer
);
    DROP TABLE public.ticket;
       public         heap    postgres    false            �            1259    41244    time    TABLE     �   CREATE TABLE public."time" (
    id integer NOT NULL,
    time_start_point integer,
    time_end_point integer,
    date_start_point date,
    date_end_point date
);
    DROP TABLE public."time";
       public         heap    postgres    false            �            1259    41242    time_id_seq    SEQUENCE     �   CREATE SEQUENCE public.time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.time_id_seq;
       public          postgres    false    213                       0    0    time_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.time_id_seq OWNED BY public."time".id;
          public          postgres    false    212            �            1259    41181    users    TABLE     
  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    name character varying NOT NULL,
    phone character varying NOT NULL,
    role integer NOT NULL,
    active character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    41179    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    201                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    200            X           2604    41217    category_room id    DEFAULT     t   ALTER TABLE ONLY public.category_room ALTER COLUMN id SET DEFAULT nextval('public.category_room_id_seq'::regclass);
 ?   ALTER TABLE public.category_room ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            V           2604    41195    cineplex id    DEFAULT     j   ALTER TABLE ONLY public.cineplex ALTER COLUMN id SET DEFAULT nextval('public.cineplex_id_seq'::regclass);
 :   ALTER TABLE public.cineplex ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            Y           2604    41228 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            W           2604    41206    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            Z           2604    41239    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            [           2604    41247    time id    DEFAULT     d   ALTER TABLE ONLY public."time" ALTER COLUMN id SET DEFAULT nextval('public.time_id_seq'::regclass);
 8   ALTER TABLE public."time" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213            U           2604    41184    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            �          0    41250    bookings 
   TABLE DATA           O   COPY public.bookings (id, id_user, id_schedule, total, created_at) FROM stdin;
    public          postgres    false    214   R?       �          0    41214    category_room 
   TABLE DATA           5   COPY public.category_room (id, name_cat) FROM stdin;
    public          postgres    false    207   o?       �          0    41192    cineplex 
   TABLE DATA           5   COPY public.cineplex (id, name, address) FROM stdin;
    public          postgres    false    203   �?       �          0    41225    movies 
   TABLE DATA           f   COPY public.movies (id, name_movie, release_date, poster, "time", created_at, updated_at) FROM stdin;
    public          postgres    false    209   �?       �          0    41203    rooms 
   TABLE DATA           �   COPY public.rooms (id, name_room, id_cineplex, id_category_room, horizontal_size, vertical_size, created_at, updated_at) FROM stdin;
    public          postgres    false    205   �?       �          0    41236 	   schedules 
   TABLE DATA           N   COPY public.schedules (id, id_movie, id_cineplex, id_time, price) FROM stdin;
    public          postgres    false    211   �?       �          0    41258    ticket 
   TABLE DATA           C   COPY public.ticket (id, id_booking, seat, price_tiket) FROM stdin;
    public          postgres    false    215    @       �          0    41244    time 
   TABLE DATA           h   COPY public."time" (id, time_start_point, time_end_point, date_start_point, date_end_point) FROM stdin;
    public          postgres    false    213   @       �          0    41181    users 
   TABLE DATA           O   COPY public.users (id, email, password, name, phone, role, active) FROM stdin;
    public          postgres    false    201   :@                  0    0    category_room_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.category_room_id_seq', 1, false);
          public          postgres    false    206                       0    0    cineplex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplex_id_seq', 1, false);
          public          postgres    false    202                       0    0    movies_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.movies_id_seq', 1, false);
          public          postgres    false    208                       0    0    rooms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rooms_id_seq', 1, false);
          public          postgres    false    204                       0    0    schedules_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.schedules_id_seq', 1, false);
          public          postgres    false    210                       0    0    time_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.time_id_seq', 1, false);
          public          postgres    false    212                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    200            k           2606    41257    bookings bookings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    214            c           2606    41222     category_room category_room_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.category_room
    ADD CONSTRAINT category_room_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.category_room DROP CONSTRAINT category_room_pkey;
       public            postgres    false    207            _           2606    41200    cineplex cineplex_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.cineplex
    ADD CONSTRAINT cineplex_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.cineplex DROP CONSTRAINT cineplex_pkey;
       public            postgres    false    203            e           2606    41233    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    209            a           2606    41211    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    205            g           2606    41241    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    211            m           2606    41265    ticket ticket_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.ticket DROP CONSTRAINT ticket_pkey;
       public            postgres    false    215            i           2606    41249    time time_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."time"
    ADD CONSTRAINT time_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."time" DROP CONSTRAINT time_pkey;
       public            postgres    false    213            ]           2606    41189    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    201            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   �   x�3�LI�442�t)M���9c���8SJ���-,-�s3s���s9U�U�T�=S]R��]�+2�Lң|�JJs�]���͌���*J�
����\���C¼��|�Av�l0153�������� cv#�     