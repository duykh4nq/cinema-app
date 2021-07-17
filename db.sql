PGDMP     /    .                y         
   cinema-app    13.3    13.3 X    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    41265 
   cinema-app    DATABASE     p   CREATE DATABASE "cinema-app" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "cinema-app";
                postgres    false            �            1259    41266    bookings    TABLE     �   CREATE TABLE public.bookings (
    id character varying(255) NOT NULL,
    id_user integer NOT NULL,
    id_schedule integer NOT NULL,
    total integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            �            1259    41269    category_rooms    TABLE     n   CREATE TABLE public.category_rooms (
    id integer NOT NULL,
    name_cat character varying(255) NOT NULL
);
 "   DROP TABLE public.category_rooms;
       public         heap    postgres    false            �            1259    41272    category_room_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.category_room_id_seq;
       public          postgres    false    201            &           0    0    category_room_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.category_room_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    202            �            1259    41274    category_rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.category_rooms_id_seq;
       public          postgres    false    201            '           0    0    category_rooms_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.category_rooms_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    203            �            1259    41276 	   cineplexs    TABLE     �   CREATE TABLE public.cineplexs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255)
);
    DROP TABLE public.cineplexs;
       public         heap    postgres    false            �            1259    41282    cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cineplex_id_seq;
       public          postgres    false    204            (           0    0    cineplex_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.cineplex_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    205            �            1259    41284    cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cineplexs_id_seq;
       public          postgres    false    204            )           0    0    cineplexs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cineplexs_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    206            �            1259    41286    movies    TABLE     ;  CREATE TABLE public.movies (
    id integer NOT NULL,
    name_movie character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    release_date date,
    poster character varying(255) NOT NULL,
    "time" integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    41292    movies_cineplexs    TABLE     �   CREATE TABLE public.movies_cineplexs (
    id integer NOT NULL,
    id_movie integer NOT NULL,
    id_cineplex integer NOT NULL
);
 $   DROP TABLE public.movies_cineplexs;
       public         heap    postgres    false            �            1259    41295    movies_cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.movies_cineplex_id_seq;
       public          postgres    false    208            *           0    0    movies_cineplex_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.movies_cineplex_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    209            �            1259    41297    movies_cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.movies_cineplexs_id_seq;
       public          postgres    false    208            +           0    0    movies_cineplexs_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.movies_cineplexs_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    210            �            1259    41299    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    207            ,           0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    211            �            1259    41301    rooms    TABLE     �   CREATE TABLE public.rooms (
    id integer NOT NULL,
    name_room character varying(255) NOT NULL,
    id_cineplex integer,
    id_category_room integer,
    horizontal_size integer,
    vertical_size character varying(255)
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            �            1259    41307    rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    212            -           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    213            �            1259    41309 	   schedules    TABLE     �   CREATE TABLE public.schedules (
    id integer NOT NULL,
    id_movie integer,
    id_room integer,
    id_time integer,
    price integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            �            1259    41312    schedules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    214            .           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    215            �            1259    41314    tickets    TABLE     �   CREATE TABLE public.tickets (
    id character varying(255) NOT NULL,
    id_booking character varying(255) NOT NULL,
    seat character varying(255),
    price_ticket integer NOT NULL
);
    DROP TABLE public.tickets;
       public         heap    postgres    false            �            1259    41320    times    TABLE     �   CREATE TABLE public.times (
    id integer NOT NULL,
    start_point timestamp with time zone NOT NULL,
    end_point timestamp with time zone NOT NULL
);
    DROP TABLE public.times;
       public         heap    postgres    false            �            1259    41323    time_id_seq    SEQUENCE     �   CREATE SEQUENCE public.time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.time_id_seq;
       public          postgres    false    217            /           0    0    time_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.time_id_seq OWNED BY public.times.id;
          public          postgres    false    218            �            1259    41325    times_id_seq    SEQUENCE     �   CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.times_id_seq;
       public          postgres    false    217            0           0    0    times_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;
          public          postgres    false    219            �            1259    41327    users    TABLE     G  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    role integer NOT NULL,
    active character varying(255),
    "verifyCode" character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    41333    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            1           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    221            a           2604    41335    category_rooms id    DEFAULT     u   ALTER TABLE ONLY public.category_rooms ALTER COLUMN id SET DEFAULT nextval('public.category_room_id_seq'::regclass);
 @   ALTER TABLE public.category_rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201            b           2604    41336    cineplexs id    DEFAULT     k   ALTER TABLE ONLY public.cineplexs ALTER COLUMN id SET DEFAULT nextval('public.cineplex_id_seq'::regclass);
 ;   ALTER TABLE public.cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            c           2604    41337 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    207            d           2604    41338    movies_cineplexs id    DEFAULT     y   ALTER TABLE ONLY public.movies_cineplexs ALTER COLUMN id SET DEFAULT nextval('public.movies_cineplex_id_seq'::regclass);
 B   ALTER TABLE public.movies_cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208            e           2604    41339    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212            f           2604    41340    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            g           2604    41341    times id    DEFAULT     c   ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.time_id_seq'::regclass);
 7   ALTER TABLE public.times ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            h           2604    41342    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            
          0    41266    bookings 
   TABLE DATA           [   COPY public.bookings (id, id_user, id_schedule, total, created_at, updated_at) FROM stdin;
    public          postgres    false    200   yd                 0    41269    category_rooms 
   TABLE DATA           6   COPY public.category_rooms (id, name_cat) FROM stdin;
    public          postgres    false    201   �d                 0    41276 	   cineplexs 
   TABLE DATA           6   COPY public.cineplexs (id, name, address) FROM stdin;
    public          postgres    false    204   �d                 0    41286    movies 
   TABLE DATA           l   COPY public.movies (id, name_movie, slug, release_date, poster, "time", created_at, updated_at) FROM stdin;
    public          postgres    false    207   Ve                 0    41292    movies_cineplexs 
   TABLE DATA           E   COPY public.movies_cineplexs (id, id_movie, id_cineplex) FROM stdin;
    public          postgres    false    208   Kh                 0    41301    rooms 
   TABLE DATA           m   COPY public.rooms (id, name_room, id_cineplex, id_category_room, horizontal_size, vertical_size) FROM stdin;
    public          postgres    false    212   �h                 0    41309 	   schedules 
   TABLE DATA           J   COPY public.schedules (id, id_movie, id_room, id_time, price) FROM stdin;
    public          postgres    false    214   Mi                 0    41314    tickets 
   TABLE DATA           E   COPY public.tickets (id, id_booking, seat, price_ticket) FROM stdin;
    public          postgres    false    216   dw                 0    41320    times 
   TABLE DATA           ;   COPY public.times (id, start_point, end_point) FROM stdin;
    public          postgres    false    217   �w                 0    41327    users 
   TABLE DATA           ]   COPY public.users (id, email, password, name, phone, role, active, "verifyCode") FROM stdin;
    public          postgres    false    220   m�       2           0    0    category_room_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.category_room_id_seq', 1, false);
          public          postgres    false    202            3           0    0    category_rooms_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.category_rooms_id_seq', 1, false);
          public          postgres    false    203            4           0    0    cineplex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplex_id_seq', 18, true);
          public          postgres    false    205            5           0    0    cineplexs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplexs_id_seq', 3, true);
          public          postgres    false    206            6           0    0    movies_cineplex_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplex_id_seq', 197, true);
          public          postgres    false    209            7           0    0    movies_cineplexs_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplexs_id_seq', 1, false);
          public          postgres    false    210            8           0    0    movies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.movies_id_seq', 184, true);
          public          postgres    false    211            9           0    0    rooms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rooms_id_seq', 92, true);
          public          postgres    false    213            :           0    0    schedules_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.schedules_id_seq', 940, true);
          public          postgres    false    215            ;           0    0    time_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.time_id_seq', 984, true);
          public          postgres    false    218            <           0    0    times_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.times_id_seq', 1, false);
          public          postgres    false    219            =           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 19, true);
          public          postgres    false    221            j           2606    41344    bookings bookings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    200            l           2606    41346 "   category_rooms category_rooms_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.category_rooms
    ADD CONSTRAINT category_rooms_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.category_rooms DROP CONSTRAINT category_rooms_pkey;
       public            postgres    false    201            n           2606    41348    cineplexs cineplexs_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.cineplexs
    ADD CONSTRAINT cineplexs_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.cineplexs DROP CONSTRAINT cineplexs_pkey;
       public            postgres    false    204            r           2606    41350 :   movies_cineplexs movies_cineplexs_id_movie_id_cineplex_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key UNIQUE (id_movie, id_cineplex);
 d   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key;
       public            postgres    false    208    208            t           2606    41352 &   movies_cineplexs movies_cineplexs_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_pkey PRIMARY KEY (id, id_movie, id_cineplex);
 P   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_pkey;
       public            postgres    false    208    208    208            p           2606    41354    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    207            v           2606    41356    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    212            x           2606    41358    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    214            z           2606    41360    tickets tickets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_pkey;
       public            postgres    false    216            |           2606    41362    times times_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.times DROP CONSTRAINT times_pkey;
       public            postgres    false    217            ~           2606    41364    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220                       2606    41365 "   bookings bookings_id_schedule_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_id_schedule_fkey FOREIGN KEY (id_schedule) REFERENCES public.schedules(id) ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_id_schedule_fkey;
       public          postgres    false    214    200    2936            �           2606    41370 2   movies_cineplexs movies_cineplexs_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_cineplex_fkey;
       public          postgres    false    2926    204    208            �           2606    41375 /   movies_cineplexs movies_cineplexs_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_fkey;
       public          postgres    false    207    208    2928            �           2606    41380 !   rooms rooms_id_category_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_category_room_fkey FOREIGN KEY (id_category_room) REFERENCES public.category_rooms(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_category_room_fkey;
       public          postgres    false    212    2924    201            �           2606    41385    rooms rooms_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_cineplex_fkey;
       public          postgres    false    212    2926    204            �           2606    41390 !   schedules schedules_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_movie_fkey;
       public          postgres    false    207    2928    214            �           2606    41395     schedules schedules_id_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.rooms(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_room_fkey;
       public          postgres    false    214    2934    212            �           2606    41400     schedules schedules_id_time_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_time_fkey FOREIGN KEY (id_time) REFERENCES public.times(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_time_fkey;
       public          postgres    false    2940    217    214            �           2606    41405    tickets tickets_id_booking_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_id_booking_fkey FOREIGN KEY (id_booking) REFERENCES public.bookings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_id_booking_fkey;
       public          postgres    false    2922    216    200            
      x������ � �            x�3�4r�2�4v�2�4q�u������� -I�         �   x�3�tvS�8�3/]!�؆c�t@NbU"���ݓ�3�U�����2+��WH�,�D�64��xȤ#�y
!w/�PgV瘚TpxQ�B@��]�,���%��*� ��4o~&��=... �pL�         �  x�����9�c�S8a�խ�o�]B�]���N!���n�\?@�[]Ճ�	6�d7d%�+�� ��F�G�	n@�LO���,_����1�9ݮ_я���_Hg�v�Ƒ&@�"t����7��E�O�U�����k��!�/<.�>qa>�`�b����p� �
�$��E��ӳy��0\���8i��(�t'�<[����pw�������.jW�(���p��҂	Y
e	���]5�:W"W,I���e?(Mxf�����9=_n޵�x�]��H��0,C�*�7GAp�%ZA!u	�(,Wip��2�ܕ2%��=�:˵M2�n��^�p��	�=�'�eV=���p��	�Wv0Ue��*����r��JU޻�ͱHFs(��Pz�+,9r��Ș�}c��k�H���=?�OO�=8=�����G�^әI���`h<4����ϡn��<@�_��W�����k��*�ʘ�JƾR%^��VYS�BcJ��n0Is�sf"���f)����=��ݮ�����Κ�?��%������@����k����qJVE*�@+c�p[�i�R�ط-ra��"�J��"�6���]M�w�B���v���kV]Cp��0���p~0(���]�Y��*^�8�7Fj@�i\i^Ǡ�\�İ[ys��Hr�y�����!ި����C�7���PK�(�:�.%�4d�#g*3�����}gr��h�GL_+M�$���3��K�         �   x�%��� E�u(f�	ظ��_Ǽ�"��������;"���#E�i^��9lE-񰦈��j�x���Nͷ��x�҇�Y&{��[B�Q(���LD����n	�=��4�Ɉ�^E-!�)1�0�25�Qo�ё�ɛe��~c�?dT:�         P   x�=���@D�o(�Ȳ�����t	��&���K�!�F��N��ˬ�_,�XI����m}ʓ헱�B^�U} @��           x�E�[��:��3!�x���#�D"��v٧�4R�������;+�D����]����~(�[̿���(�7Ŝ��b<��yޢP\�WVQ)��+�-��{e��M�o�D��WV�Da��(n�x�$�����$��W�(�_1�"�r��^E�W�(������S�ފ|/�*�I��'����w�8�S$N����q2��q��p�"�UQ)n�W��/�Wt���JPT:A��q��Pt]��(uSL]I�NMI��I�6��$Z�SS-�8�DK98%њ32-����$ZsFF��K�I�猌D{��H�Ҹ^�"�^��{FF�-���h+�i$zi�����h;G�$��;�vr�N��p�N���H��9w'�9�����{{It�sw� �K���*��$:I��^ ��W�D�KT$�M��d~�D"�M�H���$���D4X���{{I���$��$�n�3I��ː$R������3I�ֽ$�����D/��?�!��u���:yHdt�<$2�N]'�����D��`�Ȭ[Q����E"��%Y$2�N�����E"_�`�H�L��t�"�K7� �
�W$��u�0���a8N�	�p�y$C�^�
�����(Éݽ$�	�N���	�P@ޮ��0�E���t�P@v�!���H�D�a( ����{{It��+��:�W$Q�@�3�ݟ8C�}PI�LX��u��O�A&��dw2�P@~TE�x~��;�d�<� ���8��3|�N��d�7�P@֧E�:p��{e�=�M��r��+�h��-8�,��qigx�8C������H�r��g( �#���l�p��9�
�g�q�
��g���W�
Ȧg( �WV�D�U$Q;CI4� 8C����AU$����( �r�pig�"�N �P@~��~�P@6\8C�p�dÅ3���P@~TE���P@6\8C�t�d�ͯH"I��
��g( ���l�p��"����+�H�#�A�g( /G�3���EFq��¥8Cy�Gq18R����t(� �3�_�D�?dgc)�P@^gc)�P@R$�?�����Pqq.�g( ��Q����*�P@^g����8��7q�3H/�H"�&Nqig��H�XM��$E�3T�D��I��PE�3�0T����*� w��ҡ8��%�W$Q>=�g�\ͦ����P�Az�PE%^�8Cy�S�A�wFE� �g�"�2�H��jBq�=��:{���Vqmg��S����Vq}�'��d��3�3���u�3��Πk��R�A����ldp����
�;�g��jKq]28�� �AW��R�A�8��8��3T�D�g�"��@Π[�g( �R�A{�PE� ����CJq=x��d��3���g�s�H�# �3��Πw�PE���ldp=28��LL@e�&�r@P��
�FP�)�	���UL@%@&�{���Ё	���UL@uC&����1�&�ItM�+�H��0Ul�0Ul�0��!e���	T�D�	�A�aj�a���	T�D�	�A�aj�a�����05�zP��W#c��:;+�ԡ�0u�0L@]{H&����	���2L@g{`��:S�0�&�Ipd�����082L@�Ѐ#�t��	h��apd�����0M82L@�)c��&S�0��N�
��a�:E�A&�退	�I4��l��	�l��&`ρL��L��!�	�M&`W=�	��U�a�p�c��-l�0��a��5�lak�	�������7&P@6�����0��a�:0�t`6��lo��l��lt`�:0���G�	�v@�l�8&`;{�&P@�)c���E�cvvO��y%�f{`����:L���у	�ag�����3�=0���G8�ɞ"�G8��p�3���3��d8�l��3�lg0�y�3�bk�3�.��L7t��3�pәG8�)�f8�)��8�)��8�)��8�)9�`G�3�������q38r����9�`G�3�w�8�`}��EY��q��,�8���f;�`���ۆ�3�w�8�`G�3��u�3���s���-���x����y����9�`��q�p�3X��s���-��l�g�`�8�[8�,���\�8�`�U���p�8�%9�`	G�3X��p�8�%9�`9�6��,�#��r8���p�#����g�g8���p�#����g��m�����v���َ3x?���<���m����#���p�3�u��y���B���s��^�8�/�q���8�������j�s��������CI�e�$��#��>�P=�3�f9���y�8�o�p�3xoޞ�|��3�lg����8���^�8���q?8�����OB���]!�\t�.:p�8��@��Ё3�t�~�R��$�O)|EI���:������]!�\=�3������P@^�gp��2�3���\��	��홷����_���U$Q��H"c8��=�{�3��3Tgpc���<
���3�'8�;��G�3��Q��p8�;�஍L����qw�	�������zౚ�@�o.�[���	�x�L��W=�x��y��������������y�$J.�OFO����@<�9
��������灄@�W
�UI��zP��)�A<kޮ7t�1$z
�A�G1)2�A�	��<��A�	��zZ�=���=���W$�<��A�J��f�hV
�Ĭ=��p�D�\xA@����$��z{8BbG�A�c�ЏYC?�1�*�=7�u����[0��p�~��W(�Џ3t0�c�Џ{ˠڛ����8��~̣��Џ~̠�$�����hb0�C=��Â��1��O�~ܡ�I$3P�1�&C?zQPE����$��w��ʚ7�яT�D}s�m0�~�ͅ*����"_^y�%��4X2ߣ�#T�/�4X2��h�d�G��ȗ76Q�|��	T�/�O!V��0,��aK2��0�d���`�|��7���4X2��i�d���`�|?�6�|���PE�'
�"�z�W?�Ƚ{)�	�G�b2��i�d���GH�~���7��q�����x;��3����D����"�"h�~�Я"�������m���3�Џ�U$Q�I���#f��}����H�Β���Y2�#�#f���p��|��ϻ��F��d�g�*E��$C?FO2�sv����	$C?�9#�~ޡ�It�#�1���G��$Z��c��)�h�1�s�1����8��0�d��3b��3b��^���=g���=��=g�N ��z����D��#����A��=��]�D����$:�f�y�=�3�u�A�N��$�'
��� Ϝz�g�=��0M� ON�D�p�����������p            x������ � �         �  x���]re)���o��wT�����G�t�ֶ��z��A��[vR����6�?m�������壵���G������k<������hX��1�Ew?��hW�����pS�����~����-��!�X�YCs~@�fُ2��s쇀ԪYBe�d~bEt-�ꕠ�G��ٕ\�
w��+�������&H���\^?�]�j#X�H���U�9��d"s��������a^�n*��|������v^�]���BT���;V�s~�L�Q�!t����p��8�>��]Ѳ�JPօ*�p�.V�C��w��3���A�h��R.wO��0-\�sح!n�c��@�>����U��X�D�s�>�X�k�o?�QQjn*Ȓ�fO��v�*�Հ]�~�*ܕ®渖�,�=qR.V'�&Wc5�H��/�B�y5g5����
ve�X�5�g>�X�X��5��Zt�*�]W�p#�R�x.�X�l_z%\��uO=�
��ʱ�j��Uce=�W{W6���U�Fռ2`��X��X�⦢X�+Vꦂ�soK槢X�+V�ME��W��Z>��g&���֮X��gW����s�_qn��^uW����o_�]�n.Ɗ�\A	wE�+��U;����X�r���W�[5V�Wc�G.V[��=����ݝ�;�b��(w){�?(
nK�o����̫+�6�[��Ѫy5z.��9�c�bu�}P� ��ƈc�_⦢�>��WgWꦢ��5��OE�^�Ї{/����3�p��]��}��T��2�p?D3�p��B��ᗅcf��YB��qr�4���,�ty`e���q��Uyp���^���ʃ���>X.Q�^A?'k�G��Tf��2����#��Cz�ǎ���s~%��/���E�<D�<�v�{���[�a&�Ū��VՇ�w~��C)���51�0���~Y����A�<�����A�w,�~��]<���x����TT���+��Q̃�n�c[t�Fă�>�Gq7�˽C�p�<�]tr�ǔ����x��{�<���q�մ��\-��L��L<�z���Z��1v��vub����s�\��8OBx��Z�/���ZU�3<���b$�d�a��~p��!9}��h���}+������XYN���Vչ���+<��8��p�p�/vS���!؇��v���q̃�>��av�`�c}�ᗅ]�b����y�k�`�|
��~�c�)�9��9C� �K��V�t�<��O��]�,�+Gp���5����>�OO���!(��12<�R%y���G�$�j3zm8�ct�%�)�n5V��Q԰T��>�W�A��J���8��XHU�U}Ь�VUdpCn9��,ܫ<xdx�Y�r�8:�>��<�}���$�!�&�}8�=Ⱋ
y��c�񐋇�vuj	��$>?���`Nb�y`�'��>�ĿWs�/�\�~�,w���+���ǏY�Y	0���$�����>�gx��9E��b�W�w�TՇrU*U}�^�ȫS��ί�Е�_,j9��l	}�/��s�8������դ�>����!8%��;�^�c���yo����U��i�l_����W�}�j�c�Lc���4��t^~*⡞��4桞��4桞��4桞��4>ԟ��#Ә�z�#{��{d������$���^M3<���f�V[9���]~ȫ]E���]E��+���m#��'j��>ƶ�$�c!9}���x@��
���;m+���YF�u��ex�ם�^ԇ�Qԇv*�C;��]���Z�G*L�}�Ծ���V��hU}�^��U}�x<�'V����ٌyL_��G6cӝ�:�T��t�Q�=��p�/s?,�1�y��#�iW�<W��O�:�ٌyLw�+�Ȟy�y��#��y>�y�$��!A��P�\t���R�9�k��]��e���έ]�X�Z�#��XK����d�E�d"���sWKX��}
�UKN&�r����Ld���>Ғ<�E����VF2�7s�D���V8�k��j;f��j;�.U�v��Z"���	�dm?�G����J�������j;�{d���%�Y���/!(����>��vV����ᗅ_>��Y�=��=���NP����~��{d�~�e�s<N���O<N�OJ�p�jr�֫)X���x�z5�?�qN�2<�קӒ��:_-�z}�z��fT�H�رZ���9��x����
|+w�/��cͪ>֪�cYU֪��^Շ��>�<�7?j\ՇIR;�Ls< �OBx<?lex��a���>?fk9;V���>v-�m�x켚؇�_��Ո�}�����_ؘ؇�ߙ�xL��Y���,���x,7񰋇����0w�O���/��<���]'��y@oivJ�ۂ3<�7ճK�G?~h��j&x�y>�J�8�[U�U�1zUcT�1����U}���ի�U}���߃s����<�{pR��c�}&������F��m�$���w�I��q��T�AZ��)��>hU�AV���>�W������Q��	�O&��(~���'�p�B�<��Q���~Y���.�M<ޛ��_��Ї��U�L�������~���J(]<��s�=��H.���{n2rO�~��ݔ�����%���Ж�v�ڞ�s<�-CG��V�R��9q��<T�<Ts<Ή�3�����<��r<N�f��8���x:�qm8���w�sR�����Ϋ)9�4�����9g&��˘s]ˇѝ��y���3���ʵ�p�@C�e�	}8�_�"�bք>�o�P�g-��(~��,ĭ�����>�/�7{N��"���Tģ_<,��Z��Q�z����ye=��UX}�r<��l��kȵ�(V�40���������r���Z��%���Ǔ�ڶ�E}�6�<V�"��8���-$�c׫�4��㛋��X}@�Zͪ<z����j�^��GQ�SQ�s��!9���p��>3<�<_}�x���V�1Z��Z��=_kw��S�x�������_�x���U�;�����j�5��x�>ƽ�������x���k*�y�Z�������.���px�`ex���"���_w�$���]�*z
�3���q�YU���ߥ.�U}��)�����?�-�%��s��Üg�c�V���h�U�!���U}�H����ZBU}gx�����b�9}��'!\< V+�c�X���kÿ�+�U
̣w��è%7����즢�c����5��ꕪ[#�1|�R�6���j67�p�/��6���ܭY�1=��#���_�G���)��N-G�)(ϱZ�Xa-�e�])�.���b���k�U�+�]��^�vuN��W��bȫ%�]�WOϮf&V�U�VfW	ZuW�2y��~�1��l�)�P�ή�u,�e	�Vf��A�v��e�<zW�=�b�"�����ME~��_Yk�"�+����^ܕ�q�*����ѵ�p��k����KϚ\A�,�3aM��D��t�1˻Zn��s�+kV�+�-�+���^͒>�Yҩʣ��y������z�E���A�5K�*��2��[�������̣*J���U�������!�m��"��/���(�xE�_��/?���q(��rS����T���m�{��aǋc�n�e��?�q,F��x�b���⦢;�;��������2A�f"{�Q-a��m�~Y|�Wn�eᘇ�b�[2������,�Ђ ���,��LEo���/��"r�07y��2�xEo���/��~XDP��
;^�V�j�����FEa��9Vxb��y� v���ޱ���1�?,�>�m*�u����C�
J�+�cڪY�7�_y�bf;tqL���jtU2Y��R���lW����xC/�t�����?q������+
�j�{{�c��TT�^n�qo8�c���7ʰ���-C]�����1s�̱��������,�����W�U�j�;��V�嘇T��EU�����Ͽ����_�@�H         �   x�e��
�@ @���.\����.0,JG'
Jܘ�X���ï/�E��=�E�J5��B�̲k��
"�gQ�Qv��m���7|�&� �[��&K���na	V��@�dt�gl��6q ��r�N�P
�	���k��fŮ�գ�;�\��9��G_>o�|xg�,�U��a�Ɛo��ZO���0������MM�^L�C$     