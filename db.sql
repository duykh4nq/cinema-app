PGDMP                         y         
   cinema-app    13.3    13.3 X    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    33572 
   cinema-app    DATABASE     p   CREATE DATABASE "cinema-app" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "cinema-app";
                postgres    false            �            1259    33573    bookings    TABLE     �   CREATE TABLE public.bookings (
    id character varying(255) NOT NULL,
    id_user integer NOT NULL,
    id_schedule integer NOT NULL,
    total integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            �            1259    33576    category_rooms    TABLE     n   CREATE TABLE public.category_rooms (
    id integer NOT NULL,
    name_cat character varying(255) NOT NULL
);
 "   DROP TABLE public.category_rooms;
       public         heap    postgres    false            �            1259    33579    category_room_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.category_room_id_seq;
       public          postgres    false    201            &           0    0    category_room_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.category_room_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    202            �            1259    33581    category_rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.category_rooms_id_seq;
       public          postgres    false    201            '           0    0    category_rooms_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.category_rooms_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    203            �            1259    33583 	   cineplexs    TABLE     �   CREATE TABLE public.cineplexs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255)
);
    DROP TABLE public.cineplexs;
       public         heap    postgres    false            �            1259    33589    cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cineplex_id_seq;
       public          postgres    false    204            (           0    0    cineplex_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.cineplex_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    205            �            1259    33591    cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cineplexs_id_seq;
       public          postgres    false    204            )           0    0    cineplexs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cineplexs_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    206            �            1259    33593    movies    TABLE     ;  CREATE TABLE public.movies (
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
       public         heap    postgres    false            �            1259    33599    movies_cineplexs    TABLE     �   CREATE TABLE public.movies_cineplexs (
    id integer NOT NULL,
    id_movie integer NOT NULL,
    id_cineplex integer NOT NULL
);
 $   DROP TABLE public.movies_cineplexs;
       public         heap    postgres    false            �            1259    33602    movies_cineplex_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.movies_cineplex_id_seq;
       public          postgres    false    208            *           0    0    movies_cineplex_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.movies_cineplex_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    209            �            1259    33604    movies_cineplexs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.movies_cineplexs_id_seq;
       public          postgres    false    208            +           0    0    movies_cineplexs_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.movies_cineplexs_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    210            �            1259    33606    movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    207            ,           0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    211            �            1259    33608    rooms    TABLE     �   CREATE TABLE public.rooms (
    id integer NOT NULL,
    name_room character varying(255) NOT NULL,
    id_cineplex integer,
    id_category_room integer,
    horizontal_size integer,
    vertical_size character varying(255)
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            �            1259    33614    rooms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    212            -           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    213            �            1259    33616 	   schedules    TABLE     �   CREATE TABLE public.schedules (
    id integer NOT NULL,
    id_movie integer,
    id_room integer,
    id_time integer,
    price integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            �            1259    33619    schedules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    214            .           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    215            �            1259    33621    tickets    TABLE     �   CREATE TABLE public.tickets (
    id character varying(255) NOT NULL,
    id_booking character varying(255) NOT NULL,
    seat character varying(255),
    price_ticket integer NOT NULL
);
    DROP TABLE public.tickets;
       public         heap    postgres    false            �            1259    33627    times    TABLE     �   CREATE TABLE public.times (
    id integer NOT NULL,
    start_point timestamp with time zone NOT NULL,
    end_point timestamp with time zone NOT NULL
);
    DROP TABLE public.times;
       public         heap    postgres    false            �            1259    33630    time_id_seq    SEQUENCE     �   CREATE SEQUENCE public.time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.time_id_seq;
       public          postgres    false    217            /           0    0    time_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.time_id_seq OWNED BY public.times.id;
          public          postgres    false    218            �            1259    33632    times_id_seq    SEQUENCE     �   CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.times_id_seq;
       public          postgres    false    217            0           0    0    times_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;
          public          postgres    false    219            �            1259    33634    users    TABLE     G  CREATE TABLE public.users (
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
       public         heap    postgres    false            �            1259    33640    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            1           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    221            a           2604    33642    category_rooms id    DEFAULT     u   ALTER TABLE ONLY public.category_rooms ALTER COLUMN id SET DEFAULT nextval('public.category_room_id_seq'::regclass);
 @   ALTER TABLE public.category_rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201            b           2604    33643    cineplexs id    DEFAULT     k   ALTER TABLE ONLY public.cineplexs ALTER COLUMN id SET DEFAULT nextval('public.cineplex_id_seq'::regclass);
 ;   ALTER TABLE public.cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            c           2604    33644 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    207            d           2604    33645    movies_cineplexs id    DEFAULT     y   ALTER TABLE ONLY public.movies_cineplexs ALTER COLUMN id SET DEFAULT nextval('public.movies_cineplex_id_seq'::regclass);
 B   ALTER TABLE public.movies_cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208            e           2604    33646    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212            f           2604    33647    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            g           2604    33648    times id    DEFAULT     c   ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.time_id_seq'::regclass);
 7   ALTER TABLE public.times ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            h           2604    33649    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            
          0    33573    bookings 
   TABLE DATA           [   COPY public.bookings (id, id_user, id_schedule, total, created_at, updated_at) FROM stdin;
    public          postgres    false    200   yd                 0    33576    category_rooms 
   TABLE DATA           6   COPY public.category_rooms (id, name_cat) FROM stdin;
    public          postgres    false    201   �d                 0    33583 	   cineplexs 
   TABLE DATA           6   COPY public.cineplexs (id, name, address) FROM stdin;
    public          postgres    false    204   �d                 0    33593    movies 
   TABLE DATA           l   COPY public.movies (id, name_movie, slug, release_date, poster, "time", created_at, updated_at) FROM stdin;
    public          postgres    false    207   e                 0    33599    movies_cineplexs 
   TABLE DATA           E   COPY public.movies_cineplexs (id, id_movie, id_cineplex) FROM stdin;
    public          postgres    false    208   Jg                 0    33608    rooms 
   TABLE DATA           m   COPY public.rooms (id, name_room, id_cineplex, id_category_room, horizontal_size, vertical_size) FROM stdin;
    public          postgres    false    212   �g                 0    33616 	   schedules 
   TABLE DATA           J   COPY public.schedules (id, id_movie, id_room, id_time, price) FROM stdin;
    public          postgres    false    214   �g                 0    33621    tickets 
   TABLE DATA           E   COPY public.tickets (id, id_booking, seat, price_ticket) FROM stdin;
    public          postgres    false    216   �k                 0    33627    times 
   TABLE DATA           ;   COPY public.times (id, start_point, end_point) FROM stdin;
    public          postgres    false    217   �k                 0    33634    users 
   TABLE DATA           ]   COPY public.users (id, email, password, name, phone, role, active, "verifyCode") FROM stdin;
    public          postgres    false    220   s       2           0    0    category_room_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.category_room_id_seq', 1, false);
          public          postgres    false    202            3           0    0    category_rooms_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.category_rooms_id_seq', 1, false);
          public          postgres    false    203            4           0    0    cineplex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplex_id_seq', 15, true);
          public          postgres    false    205            5           0    0    cineplexs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplexs_id_seq', 3, true);
          public          postgres    false    206            6           0    0    movies_cineplex_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplex_id_seq', 162, true);
          public          postgres    false    209            7           0    0    movies_cineplexs_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplexs_id_seq', 1, false);
          public          postgres    false    210            8           0    0    movies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.movies_id_seq', 177, true);
          public          postgres    false    211            9           0    0    rooms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rooms_id_seq', 86, true);
          public          postgres    false    213            :           0    0    schedules_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.schedules_id_seq', 273, true);
          public          postgres    false    215            ;           0    0    time_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.time_id_seq', 317, true);
          public          postgres    false    218            <           0    0    times_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.times_id_seq', 1, false);
          public          postgres    false    219            =           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 18, true);
          public          postgres    false    221            j           2606    33651    bookings bookings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    200            l           2606    33653 "   category_rooms category_rooms_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.category_rooms
    ADD CONSTRAINT category_rooms_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.category_rooms DROP CONSTRAINT category_rooms_pkey;
       public            postgres    false    201            n           2606    33655    cineplexs cineplexs_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.cineplexs
    ADD CONSTRAINT cineplexs_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.cineplexs DROP CONSTRAINT cineplexs_pkey;
       public            postgres    false    204            r           2606    33657 :   movies_cineplexs movies_cineplexs_id_movie_id_cineplex_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key UNIQUE (id_movie, id_cineplex);
 d   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key;
       public            postgres    false    208    208            t           2606    33659 &   movies_cineplexs movies_cineplexs_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_pkey PRIMARY KEY (id, id_movie, id_cineplex);
 P   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_pkey;
       public            postgres    false    208    208    208            p           2606    33661    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    207            v           2606    33663    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    212            x           2606    33665    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    214            z           2606    33667    tickets tickets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_pkey;
       public            postgres    false    216            |           2606    33669    times times_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.times DROP CONSTRAINT times_pkey;
       public            postgres    false    217            ~           2606    33671    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220                       2606    33672 "   bookings bookings_id_schedule_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_id_schedule_fkey FOREIGN KEY (id_schedule) REFERENCES public.schedules(id) ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_id_schedule_fkey;
       public          postgres    false    214    200    2936            �           2606    33677 2   movies_cineplexs movies_cineplexs_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_cineplex_fkey;
       public          postgres    false    2926    204    208            �           2606    33682 /   movies_cineplexs movies_cineplexs_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_fkey;
       public          postgres    false    207    208    2928            �           2606    33687 !   rooms rooms_id_category_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_category_room_fkey FOREIGN KEY (id_category_room) REFERENCES public.category_rooms(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_category_room_fkey;
       public          postgres    false    212    2924    201            �           2606    33692    rooms rooms_id_cineplex_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_cineplex_fkey;
       public          postgres    false    212    2926    204            �           2606    33697 !   schedules schedules_id_movie_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_movie_fkey;
       public          postgres    false    207    2928    214            �           2606    33702     schedules schedules_id_room_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.rooms(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_room_fkey;
       public          postgres    false    214    2934    212            �           2606    33707     schedules schedules_id_time_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_time_fkey FOREIGN KEY (id_time) REFERENCES public.times(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_time_fkey;
       public          postgres    false    2940    217    214            �           2606    33712    tickets tickets_id_booking_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_id_booking_fkey FOREIGN KEY (id_booking) REFERENCES public.bookings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_id_booking_fkey;
       public          postgres    false    2922    216    200            
      x������ � �            x�3�4r�2�4v�2�4q�u������� -I�         D   x�3�tvS�8�3/]!�؆c�t@NbU"���ݓ�3�U�����2+��WH�,�D������ ��8         !  x����n�@�ϛ��.h���z׎T!� � '�H��;K;������ H�8!q@�� �#o¶U�R�c$�{?��ƨ3����}w�9$�l��I���kÚz�hfԀ��	.�.ج��d<����|׷+�}Z�m=��]j��x��flC��\�'I:�wݲ�o�hǯ����&�'�ſ���e�����»@O���7GJ�YY � )J���D���I�P���<8�ńc��3���������<y�̴P�����Vi�/Ι�re*���xPJUJ��"C�]�	/R�g���c�ޮ���]G�!����:�}����Ԭ_�`����G�v{Z��r0 ��ȅ���WXI����"����������OK5 i߉�$;�^4IOg���O}ri�d1������t}�ϊ>\Vi��:o�r�2u��\@i� �Y&Hf�T�5�2E!�<hE"�խ��sJ6]r��\�`��Ma��`�iN7���(�ɹ�%ϕ�^�
.�<�H�Q��b`�r�r5�@��ѻt4�b�         ?   x��� !��)��z���0䷳>�|lXɩ��.���Bw���ʾ\/�*ݖ�� Y�         .   x��0�4�4�4�4�t�02����1��d��Lc0'F��� ۟t         �  x�E�Q��(���eI �.{�s��dz���e!��a��Ě����g��y��������/��ԙB�³�h����|<��2�m�G��S?�a��z�V}�}C}�}C}�}C}W���*����5��
���[�YV�R��Emj��͘�V�`?fC,\��w��X�V{��c�#�=si�y�4��̥���;-�|�����g.�|<si��K3���̧Yo�ݟ�1�Lg���/{��XM� ӌ	L�7��g}���1�8��|>@��@�@M��1�(|�&F��Q���~��n�Qب1�k�_�QlC����5F��1�4�(�9�����l^��(m�0J��Q?�Q�haTA��Q�haTe�QC�jz$��F��W�1*m��F��S�1ޣ�Ѱ��h�;����ј��h��h,��6�hC��C���7�h�;:��M��lL�:�٘�'��6�2�h�%Wm�c�Q?�uxM�:1�r9F=�$F=1jq�Gۈ;<�F\���b�l�0�h�.�z!FJb�p!F�b� 0>I%�1Rxˉ�,p!F
�#��1�6"Ķy n9F�F$����\X��}���BA�B��q9F�
b��p!F����Hi�6��؈�gbt~�ѻ&�!΢�!.�H��B��="3��%2C*3��z���������3z������~2������1Rfx��2�Gd��bN2C��#2C*3�FEӝ̐��̐a#2C���̐�SGfHe�1J��!�<F�������e����6"3dn�$3dڈ̐��#e���J�'3�2Å�p9F5=F��̐e#2C���Y�Fd�#�R��B�F���SGfHe�1Rf�#e��R��mDfHe�1d�$3�2�}��Df��SGfHe�1Rf���SGf�ɩ+2CΥ��̐sb��P/ĨC�:1Rf�kb�e�QC�zzM��=*2C6{Td��m�Qۈ̐�Fd�\�r�����lDf������� Cl��            x������ � �         �  x���]r$)��ǧ���l ��>���KU��ȶ��D�"�
>��?�T���7��4)����%=�s�ch0 ��R�ϠG@�_��_RwK�K��b��z̰\ҍ4��nI�8�!B�R��3�#���#�-�k�����*��Zf��	_{5�O�1�n.B�{%����s���x�
������Sy��U�"X����X�+ҽ4�>�և��?l��k��94���#dI�)��#�pyA��en�����Cn$B�9Fd�2_U��r�s��l$㎨ 52G>�ps��������=?�X����t�E�%�_���
֕�.��Q�3�X�ӳJ<W�Π9+��zT���^��א9H�J*V���*6��0��RW�<��+"�S�>��N�8��U�:�8�ՊP�X]5��l^�UҰJr�9���\B�lUPW��<h��e'u~��pŐ�A2��~��V5@b���=���$/���X�Eb�������(H����_�UYȃf��(̪�~�.Z���1ЏRAb~��������%��~���X�ϣ.Ϗ�����[[%H۪$y�f����3=�3�pOd������*�p�J�$�.j3��f�}毤��r���9[���<��NV���uE���_�c���M@"_�뾻��)H�k0��k�$�58���n�1��sA�[	)�9�Զ%��[U��<�����yΟ��OT�	$�������K�hDs{�$��b�w�e��y�!�e磗�)[����*�$r���F8ɸ��Q�Vu=}�3�H�;(�g�j$/ѽ�s�V��<��p-�^��+��z��Xr���1���%���!)���t{>*H���s���$��:_E���36�x?H��f�W긏�����{U�Lnǰ.?49�9��y��>�WI�*єAb�}3��T�E�{xFT/��K��I���
�JS��FU�g� ��K*�KTH�3T�*f�W���+�//i��H��6�*$�Gy/�נé�{�[pWe��7�B�V�j�v~95P5ƨ����T��A�~����o���\P�7�"U��f����N=U3���<���<r�#R5�Ȫ��s0�_d�@��HlUg��p��5#s�����]��^�^�9\�o�
wQ��QC��Xg�v�������r8EG��b� �����ñ�m����h/i�K�ù�;�z�+r�7X��3�S��^�(� r8�`G�#�����G3�y�p�'vx�(r8���ǵ�~	k�?i^����E?�M�v�A�)�S����.��r�8[\��3���V~`rlF؅�1��W���	x���ѪX���������s�,�1RuL�Y��n&7�F���n]09�zI؉�c����dr�&���*2�7H�"�{��gr��d�dp�o�ߊ &��[����޽���h�u�L�����^Q<>�c~����^�""�c{�	�������Ln�n`r�,��� &����3�L����29�;����S��C�dr�E?~��409�?"��Weد�c����39F
��;09懡�ɽf�w�����dr�Я529֯2�nJ�����| �{�~!���F~�L����C&G����0��2�~d��29ZW��6&G���-�&GnK��L��[,F
��.J�����y&Wx� ��L�z^����X/���9#���^R���groQ<C&�ų���T7#����[ȼ��l蠀Dl���~||�3G�         �   x�e��
�@ @���.\����.0,JG'
Jܘ�X���ï/�E��=�E�J5��B�̲k��
"�gQ�Qv��m���7|�&� �[��&K���na	V��@�dt�gl��6q ��r�N�P
�	���k��fŮ�գ�;�\��9��G_>o�|xg�,�U��a�Ɛo��ZO���0������MM�^L�C$     