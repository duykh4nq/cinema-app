PGDMP     6                    y            cinema    13.3    13.3 X    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    16394    cinema    DATABASE     j   CREATE DATABASE cinema WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE cinema;
                postgres    false            �            1259    24658    bookings    TABLE     �   CREATE TABLE public.bookings (
    id character varying(255) NOT NULL,
    id_user integer NOT NULL,
    id_schedule integer NOT NULL,
    total integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            �            1259    24600    category_rooms    TABLE     n   CREATE TABLE public.category_rooms (
    id integer NOT NULL,
    name_cat character varying(255) NOT NULL
);
 "   DROP TABLE public.category_rooms;
       public         heap    postgres    false            �            1259    24712    category_room_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.category_room_id_seq;
       public          postgres    false    205            &           0    0    category_room_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.category_room_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    218            �            1259    24598    category_rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.category_rooms_id_seq;
       public          postgres    false    205            '           0    0    category_rooms_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.category_rooms_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    204            �            1259    24589 	   cineplexs    TABLE     �   CREATE TABLE public.cineplexs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255)
);
    DROP TABLE public.cineplexs;
       public         heap    postgres    false            �            1259    24714    cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cineplex_id_seq;
       public          postgres    false    203            (           0    0    cineplex_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.cineplex_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    219            �            1259    24587    cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cineplexs_id_seq;
       public          postgres    false    203            )           0    0    cineplexs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cineplexs_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    202            �            1259    24578    movies    TABLE     ;  CREATE TABLE public.movies (
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
       public         heap    postgres    false            �            1259    24670    movies_cineplexs    TABLE     �   CREATE TABLE public.movies_cineplexs (
    id integer NOT NULL,
    id_movie integer NOT NULL,
    id_cineplex integer NOT NULL
);
 $   DROP TABLE public.movies_cineplexs;
       public         heap    postgres    false            �            1259    24716    movies_cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.movies_cineplex_id_seq;
       public          postgres    false    214            *           0    0    movies_cineplex_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.movies_cineplex_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    220            �            1259    24668    movies_cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.movies_cineplexs_id_seq;
       public          postgres    false    214            +           0    0    movies_cineplexs_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.movies_cineplexs_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    213            �            1259    24576    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    201            ,           0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    200            �            1259    24608    rooms    TABLE     �   CREATE TABLE public.rooms (
    id integer NOT NULL,
    name_room character varying(255) NOT NULL,
    id_cineplex integer,
    id_category_room integer,
    horizontal_size integer,
    vertical_size character varying(255)
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            �            1259    24606    rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    207            -           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    206            �            1259    24637 	   schedules    TABLE     �   CREATE TABLE public.schedules (
    id integer NOT NULL,
    id_movie integer,
    id_room integer,
    id_time integer,
    price integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            �            1259    24635    schedules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    211            .           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    210            �            1259    24699    tickets    TABLE     �   CREATE TABLE public.tickets (
    id character varying(255) NOT NULL,
    id_booking character varying(255) NOT NULL,
    seat character varying(255),
    price_ticket integer NOT NULL
);
    DROP TABLE public.tickets;
       public         heap    postgres    false            �            1259    24629    times    TABLE     �   CREATE TABLE public.times (
    id integer NOT NULL,
    start_point timestamp with time zone NOT NULL,
    end_point timestamp with time zone NOT NULL
);
    DROP TABLE public.times;
       public         heap    postgres    false            �            1259    24718    time_id_seq    SEQUENCE     �   CREATE SEQUENCE public.time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.time_id_seq;
       public          postgres    false    209            /           0    0    time_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.time_id_seq OWNED BY public.times.id;
          public          postgres    false    221            �            1259    24627    times_id_seq    SEQUENCE     �   CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.times_id_seq;
       public          postgres    false    209            0           0    0    times_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;
          public          postgres    false    208            �            1259    24690    users    TABLE     #  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    role integer NOT NULL,
    active character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24688    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            1           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            c           2604    24728    category_rooms id    DEFAULT     u   ALTER TABLE ONLY public.category_rooms ALTER COLUMN id SET DEFAULT nextval('public.category_room_id_seq'::regclass);
 @   ALTER TABLE public.category_rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    205            b           2604    24729    cineplexs id    DEFAULT     k   ALTER TABLE ONLY public.cineplexs ALTER COLUMN id SET DEFAULT nextval('public.cineplex_id_seq'::regclass);
 ;   ALTER TABLE public.cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    203            a           2604    24730 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            g           2604    24731    movies_cineplexs id    DEFAULT     y   ALTER TABLE ONLY public.movies_cineplexs ALTER COLUMN id SET DEFAULT nextval('public.movies_cineplex_id_seq'::regclass);
 B   ALTER TABLE public.movies_cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    214            d           2604    24732    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            f           2604    24733    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211            e           2604    24734    times id    DEFAULT     c   ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.time_id_seq'::regclass);
 7   ALTER TABLE public.times ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    209            h           2604    24735    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216                      0    24658    bookings 
   TABLE DATA           [   COPY public.bookings (id, id_user, id_schedule, total, created_at, updated_at) FROM stdin;
    public          postgres    false    212   Pd                 0    24600    category_rooms 
   TABLE DATA           6   COPY public.category_rooms (id, name_cat) FROM stdin;
    public          postgres    false    205   md                 0    24589 	   cineplexs 
   TABLE DATA           6   COPY public.cineplexs (id, name, address) FROM stdin;
    public          postgres    false    203   �d                 0    24578    movies 
   TABLE DATA           l   COPY public.movies (id, name_movie, slug, release_date, poster, "time", created_at, updated_at) FROM stdin;
    public          postgres    false    201   �e                 0    24670    movies_cineplexs 
   TABLE DATA           E   COPY public.movies_cineplexs (id, id_movie, id_cineplex) FROM stdin;
    public          postgres    false    214   �                 0    24608    rooms 
   TABLE DATA           m   COPY public.rooms (id, name_room, id_cineplex, id_category_room, horizontal_size, vertical_size) FROM stdin;
    public          postgres    false    207   ́                 0    24637 	   schedules 
   TABLE DATA           J   COPY public.schedules (id, id_movie, id_room, id_time, price) FROM stdin;
    public          postgres    false    211   �                 0    24699    tickets 
   TABLE DATA           E   COPY public.tickets (id, id_booking, seat, price_ticket) FROM stdin;
    public          postgres    false    217   %�                 0    24629    times 
   TABLE DATA           ;   COPY public.times (id, start_point, end_point) FROM stdin;
    public          postgres    false    209   B�                 0    24690    users 
   TABLE DATA           O   COPY public.users (id, email, password, name, phone, role, active) FROM stdin;
    public          postgres    false    216   ��       2           0    0    category_room_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.category_room_id_seq', 1, false);
          public          postgres    false    218            3           0    0    category_rooms_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.category_rooms_id_seq', 1, false);
          public          postgres    false    204            4           0    0    cineplex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplex_id_seq', 15, true);
          public          postgres    false    219            5           0    0    cineplexs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplexs_id_seq', 3, true);
          public          postgres    false    202            6           0    0    movies_cineplex_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplex_id_seq', 152, true);
          public          postgres    false    220            7           0    0    movies_cineplexs_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplexs_id_seq', 1, false);
          public          postgres    false    213            8           0    0    movies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.movies_id_seq', 172, true);
          public          postgres    false    200            9           0    0    rooms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rooms_id_seq', 82, true);
          public          postgres    false    206            :           0    0    schedules_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.schedules_id_seq', 44, true);
          public          postgres    false    210            ;           0    0    time_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.time_id_seq', 88, true);
          public          postgres    false    221            <           0    0    times_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.times_id_seq', 1, false);
          public          postgres    false    208            =           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    215            v           2606    24662    bookings bookings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    212            n           2606    24605 "   category_rooms category_rooms_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.category_rooms
    ADD CONSTRAINT category_rooms_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.category_rooms DROP CONSTRAINT category_rooms_pkey;
       public            postgres    false    205            l           2606    24597    cineplexs cineplexs_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.cineplexs
    ADD CONSTRAINT cineplexs_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.cineplexs DROP CONSTRAINT cineplexs_pkey;
       public            postgres    false    203            x           2606    24677 :   movies_cineplexs movies_cineplexs_id_movie_id_cineplex_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key UNIQUE (id_movie, id_cineplex);
 d   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key;
       public            postgres    false    214    214            z           2606    24675 &   movies_cineplexs movies_cineplexs_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_pkey PRIMARY KEY (id, id_movie, id_cineplex);
 P   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_pkey;
       public            postgres    false    214    214    214            j           2606    24586    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    201            p           2606    24616    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    207            t           2606    24642    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    211            ~           2606    24706    tickets tickets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_pkey;
       public            postgres    false    217            r           2606    24634    times times_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.times DROP CONSTRAINT times_pkey;
       public            postgres    false    209            |           2606    24698    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    24663 "   bookings bookings_id_schedule_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_id_schedule_fkey FOREIGN KEY (id_schedule) REFERENCES public.schedules(id) ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_id_schedule_fkey;
       public          postgres    false    212    211    2932            �           2606    24683 2   movies_cineplexs movies_cineplexs_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_cineplex_fkey;
       public          postgres    false    2924    203    214            �           2606    24678 /   movies_cineplexs movies_cineplexs_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_fkey;
       public          postgres    false    214    201    2922            �           2606    24622 !   rooms rooms_id_category_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_category_room_fkey FOREIGN KEY (id_category_room) REFERENCES public.category_rooms(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_category_room_fkey;
       public          postgres    false    2926    207    205                       2606    24617    rooms rooms_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_cineplex_fkey;
       public          postgres    false    2924    203    207            �           2606    24643 !   schedules schedules_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_movie_fkey;
       public          postgres    false    2922    201    211            �           2606    24648     schedules schedules_id_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.rooms(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_room_fkey;
       public          postgres    false    211    207    2928            �           2606    24653     schedules schedules_id_time_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_time_fkey FOREIGN KEY (id_time) REFERENCES public.times(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_time_fkey;
       public          postgres    false    209    2930    211            �           2606    24707    tickets tickets_id_booking_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_id_booking_fkey FOREIGN KEY (id_booking) REFERENCES public.bookings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_id_booking_fkey;
       public          postgres    false    212    217    2934                  x������ � �            x�3�4r�2�4v�2�4q�u������� -I�           x�}��J1��ݧ�'c-֣��[X���%��&t;����/ �����Ww��7i6�C�J/	d��3�?�GG��T�a*l�	�g[}���V+��|�D���<�_́՛z���<�{E� ����|�ˮS��\+i�G�$�Ɂ'�2�05o���h�R浙k����G�=vSo��r�7��KO�͟C����<�ȩ�wJs���$�0X��2�0v�\�`H:|�/��"u0Lx�	��5�5���k��Ev�6�̹�:�[2��ѳ�K����IE;_=�`            x��}M�]IrݺM{c��̌����4�!9�i� 
�I��UE�ŖG+Y-��ZH�m�0�x�E������|E��{7G�=�e�VV�{�"#Ή��K�䫟��_>x����~3��䧏�:yzU�����(�}5�_\]>=�R+!Ihw����ūݗ_��5�W��������O���>�����9_]|���2}��/�E��Q��~Ɵ^�������/\�]}{^��?~����J(��r�/���I���~������pQ�y�'�W�����6��)*'�V$��^��R�ɺ�ʉR���;�䩖;�ֳ��J�@���o����;t�����œ���wo��$�Kq)�y����￉�0z���~�Y9?�>���gg����ً�W����V>xQ����� *dQ��1J�,͉�aɁ�΁�3ysD�4Y��?{r�!����;ON��wz���w���ǧ�<x|��ɻ7wrq��:>G$]�x-��,��z)^�_>ׯ�I%��˫s������4��9C�ET*"�Ju%��5�%_%"J��F���VuMd?=�M��"hbab�"������"/�2�3fg��ϭ��ȝ<�귿y��??8}|��?>���_?>�|���\\>�R�r�H��?�O��SA=A�43)GH?���ƍ�`1�HcE&�iňPd&��%�g��#��)�3���,�����wo~u�Ճ�v������1U+��1qquq%^�x~��\h%Iie�D�8�V)�g�Ȑ3㕖u��FU6�k�-:��Ll���qr�j'i'��u8f��(��{��o�>~��ק����;�7���oP���,.�ĳ�(���'�~���՟�]����Y�,_�<d���c�J�_�dC�W%����'�K�ʦvJ�F~���&�N���>z���?95���s���k³��W��G=����gJ���'_�3��"0)�f�~L��b�m����^ǎ2�ڑ�)��%�d,��蓯�<|t���?{���ov ������'�O���o���W�P���/ī/�/���	��N��3h�gW��/?��%���"ξ�yg����ꋻw���]��x�;?�>�~���˳g_ܣ/���	�F��a�<&-LQpmIPJ����-t������*�B��-g��Mfi��:-F~V� j�`R,��u&���;fV�b����l&�>�V�Vjh&_�<2�SI�xjƫA&'ڑ��f�d���2gfo�ő�A$+��R"�i6�A'��<��Z@�qw(^f�9�9@)�ב}!S����x7
�4�����h/�O�{�?u��;���~�����?|��/���_�������ߟ �_@^��P�@��|u	2����r��KM?�N�P¬��s�E����u5N�f�s�y��Қ�VԬUn��N=��1qa�<
�4�m+U��9$Q��gh�T3���Z��VG��F�,���ɓ����G{c��0to������ ������������k|������������{��xX�����d�bx�H!a�$iN�����&uB����	;E�3+�rMVn�*EQ"~���ڈ���^jr�"F�pB��4�M	s�k@~�"�
JPRʋPs0k����>ۘ�%4Y}�wA����Όp<1g/��*(� }�cf�j@ ���V�f�^{$|QLB��$X�b�-.���:&Z���4Y{�w����g�{o��r��p@_�s��q���y��n:|�w��Y�WO0�,�%>�Z��'u����]����Z�I|�����:gŠ�c�	�*B��뫓Ut��z���f/i�6]B�u���
�ť�������H5�1�t�� BЬ��!4ٰmא|e�a�YD[�,�Ky57i�*���5��{;���8�&�ۦ���!z)'$�PH�#�P<���tH#z���C�����6=^%1���l�4���Za��������Y�R�!4��o��4])��C����^&'�JM��q;��!_��ۦ��d�+pDXN�1���*�
�XeʈD��2�\@J��I2�J�`�`�>A��ς��ޥ�i���ތ�����6=M'6�|�Z�ᔑ�t�7�D��c��x�w���������"9%`w��Ū�T���=$wr�����'��)b&��o��|
�~�ʙ���9�;h!�S����6=�i���Q"��Qdo�8α���0���Z �۸Nf�骅��#k��J�Hn�Q)R(ڳr��Y@�۸N���Z�>P:I��:�!\�"��=��{�z6����]�5��Q����E��
O��Z���V�����t\B���I���
s��S)#D%�r�LrD��I9C��\@�׷��XYj#��X�X�NFjD���ɍ��(<��#4y�]t�,Kќ��ѩ��K�V r�ַ��!��T��)̚~+h��*:�FU��BB�J(���>�J$��n'i�#6�G&˚�A�]S��%0bSQ�*�7I1c����G��cd��R��h먹7���{!�rZ��.шL�Sr6~�h��v��U��2���|��5�0%��n5���+!���4�p��tV�4T����H�]�[Qr�>Ԕ�1�df�8XA���E'Ie��Kb����Ȝ%
�f#{'�ՈN�!��й��p��L���bEu���$������5�Έ砆l~@�p��PSp�**Os}ʴ�d�*�3�d��d�Io7��k6�����L�O��sؕ,L�P�N�CS��G+�n�Cm ��G*�15���;��HQH����O�Y�r�&/9)}:\�������1���`�<�����٬����3�Q�@�.R�֤�I�|?~��� p��:/�������������O����~���������ϑ������o�ӝӟ�c�K���Q�ڇ�^�_�����<���z!�=C
����1�ŭ�Ҥn�H�U5����.�V� ����Iщ(����S�ڜ�p�[�Y;��c�+h
��X��L� ��R�ɪ����A�J����9�ړ�����>@��7=�\[�2�j�IVD��'e"K�̠Hhڑ�-���!4!x�z�%�T�TX�0e����������o޾�F�V�� �l��Ֆ����~LAfx's.N��mP�M���y�4�ܰ�2��E",��E�W�r�
J��h�~�٪QvY@��'��tNF"��UF�$[R��\e4:������GRb	M����b�6�P�s�L�Z�$|i�$�*<�Y����`	ML�Qg��<\� � �ɂ-(fM-�L���Y��O�tMln�o�#��+��R�W⾐����H�!�w2�v(���v�'�b }*Хރ4��I/r��hF[�<?8�'������ �-���fuUn����Hg�Xf�C�!+�P����~h\�����oIY�fL	l�=e��/2T�ʊ����~BR��8lXYqE�VP��Q�	9G��[�h]�VKʪ��ٸ17����SV�֒t��D��=+��"Ŗ��.É�B�fD����[�V���&.ª�ϕ�,">r��X�յ;(0}kr���Գ���VF��}$�OJ�Z
�>-�Q�ȶ�V}���ޮ6�!p�����B�@b5kJE�"$hZϪd��6��X`�x���]@ �n���6���	E$MU5�Yx��#�L��@Œ�IјA�g	�T�q�"W����g�b\d�bLFE��F2��z��Av��S�>׌b��������b%�	
0�H��>0��<�g����|�D���Ͻ�,��/U`irN�Q$�H滝53�z�K�lJ�{-�ҵ��w"P�7�!�囦�s�0�;�g�<`c����o��	}�'��Ae�M��U��.d�5UFB�Pߎ��$��@�'�����d���ׁ"�cЃ�2�g_r�̳����V��V��(4.��<���'���ki�ij���i�%����"�}J߅�
U'��0 �	  ���~�!_i�&Z+}��9�#o����g��AUx)*M��>l��j�	T�Rt�J��<���ʹ���Ho��g��� �z3��$��(������@�߯�c��3ɶu~��k��AYS���"T�����!W:$X;�@�,���M��6d�5��宨%�_�R(��#*d��k�R'�����jܧ�Mb4XTZ�+���4*&��Y(^�_oy�M�~�F�AOh	�3�em��C��"8����ZH� �mI�P�������v�-�&M�=G�<e��X�_i��8��
��[iGvfl�/!pʟ����e�B�X�}P�/�X�ҨV�W]�tvfW�Q�.�Iiy����a�'QS���WW]�x�.�0��6��͇0|K�����ڔ�Iaa���?j�v��{��V=��:�E@���/����r�R�n S,Z��b�������;�g7\���f��XAp�dP�ꍀ~�F{A�x��M&�A�x&8Ӂ�]B��l�YQF3y*��&;�_{+�A����F��EX�<��Ɩu>ms�,��z0�m�E�Z����h�l;#'����M?��Q���Ȳ�{qi"5*B���A?�@�*	]��`��s��Ya�ߓ�͕�g\E��VS������v��G
�Mkf?��2�Lw�UM�q��:7�nM�KJ��pK�d��X_u�T��S�c}u�ԭ_�N��~3�P59aJ��%b��E��V�avl=�M�䖪���"(r!c?7	����0�M��g��%y���S��!�#�Bm�FzҎ��J6�r���HIf���VJ�ps$H��#��O��T��H��f�*��~'>��}�^�p"�Y�㽨#�m�J)�H}+)�������.���e�]��u
��,�v��YW��l[lƉ ��N��%�~땪�g/�wn:�����!�#D�[�,�x=�h�aq�,���W%a�[�9�U�憹�pyl�� �궮,��[4�,6=�lD��|�(�5������S8�@�vu�ji҄*���7�e8*��$���з�[7��,�(v�	�^-��lg�V̡?Ŋ፺�	�V�Д��Z��M�L#m���oX��ۑ[�07��(ߟ��ȦQ��R,�a�L��d��Ф̦G�R1:�ͽ�����$��Z�������[ȇ��z�=F����k��!dE)�Y5�5���D��l|�b?�@�ޒ�XAT!ҕ��r���j{�~�QjC��'b�Q�Z@`�6��@Utyo�-lS�#�s��|�)�a����w�ҵ�@��p�?�3f�5S�0T��p���J�R��p0���[��%r>��ū*����o�Y��s�{%}�JˑGV
�guK�
gnKه���Af�]�&Q�YQ�7�'�vu���[��N�A`c��3�?"F+TvRA"AnZ6�oן*�*�J���.4�;a��H�����W��U�n���2�����c%R�(v��[8]d�8��DV�N�l�'�h��32����tQ'nߏYM>Al��Շ�mk��2�cL�q�ֱ�-��%�{T`��F�b	��O�2X��y�V�����з55�*�\]Z؉�}�խ.-<���޸���f�?���~񷃖�J���Z�:��Yp�(�OA �6�����(�M�f��,�t�o �VYl�A�����ԏH��\y�JV��}(������)ca�<Z�~��..!��幚f���I��/�w����&N5Y�"�[�!�7��v�P�#�|��>Y+M�����Co��GYł��z�F�����Ap��;���%ݰ�E��؟ڒ��hq)9�L�>{�s[WW��P�y���C���	�rm���xQ��`�������X�fV��C�~������Hz����y�
�Mې
kE9�c���� D�0~�L�����	Y��|K�0�g�I��>n�#{⌝Q\��~�@�֛���J�zS��NP��.�}��oR{�+	�h;E3>5 h��M5�)�T�)�W]��3���<V�1P�Y�������~emX]Yt�ڰZ�$���&�{�#z���

bM�����3�?kWT8��~��'�֠p	���}|�D�����nu��1V�c����nY���&!\���c^d𡉖���r�~=ݥ�[�a��óG�q�P����X�P�/""O�
�����؁R����ӏ8�<��!:j����R��L?>_�MXM̩��13��ѷq�Zc[r_QQ_�Ə���UYe!a�u�hϜѳ�1�!���Y��P}�J�$Bʬ������|��>ځV�o�~u%�4�� ���Fޙ��?� �]&RK�� �V�Ł>�ϴn�B�Gmv���ê�|U�4"�m�L�Y����
U�V�wP��@ͦT>tj!(V��|G!E)�$;S+W/��5k;0�Kh�W�4M��%6P         )  x�%���1�����\6�8�z,�D�.<a+,<�V�n[[�l�j�j�c�PgX�M��r�.˥����-�jY�j[��<����gۃ��o�i{�.�Kuۖ[}����F�׵M+�aE+G��ڑ�iǑ�eב*��U�0�b��x�-G���f�
���� �f`G�tԚ��NRP�M
�]J��[)H�Q
�}���J��R$:IA�,UZ�궳U�N���V=v4;��RQ�;�,Q�S���j�MU�j�-ն۪�.���]�ӥ7���!���_�%�c���[��K��>�߱����f��9����:���`}&����Г���l"@��\�1�G�f=E4��#���"�O��uL}5i�*"�U髝��`]!ԃ���{.�X�!)k=$f�CrtKB�V=���C�tT\WhE�SK2��񐤜I�����`��"�C�����P+�D�T��Rj��㡖2��s������!I���o�]I����}���C�*�T�!I�D����
I��
I��
I�I�	IzG����!IIj��?w���         +  x�E�In�0��cS�_�����c�-�_\ZZEJŒ��ߝ~s)���RS}fZj���r�|g����نf�� X�`���v{r��P7������>s{Z��z����$	�۸ǡ��f �	���(A�(��hC	�<�O� #��
�6(��i{I ]���b��3}�9`_[��Y �P�"���D��C����͘�7���p-��f�2*n]��a%.t��d�&2Et�'�.�&]DtѥF'']Dti��&]Dt�ED��>&]-���"�ˡ�G��w=            x������ � �            x������ � �         /   x��0�4202�5��5�P04�24�20�6@6�sYX��!F��� ޺�         u   x�3�L)MNO40�4��tH�M���K���T1JT14R���3�w6,Is��Mq�r��M
w-�(OI�w1�2�7*40ӷ�tM6�p��)+�t�ihdlbjfna�i������� +�     