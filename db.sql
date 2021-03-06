PGDMP     9                    y         
   cinema-app    13.3    13.3 X    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    41563 
   cinema-app    DATABASE     p   CREATE DATABASE "cinema-app" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "cinema-app";
                postgres    false            ?            1259    41564    bookings    TABLE     ?   CREATE TABLE public.bookings (
    id character varying(255) NOT NULL,
    id_user integer NOT NULL,
    id_schedule integer NOT NULL,
    total integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.bookings;
       public         heap    postgres    false            ?            1259    41567    category_rooms    TABLE     n   CREATE TABLE public.category_rooms (
    id integer NOT NULL,
    name_cat character varying(255) NOT NULL
);
 "   DROP TABLE public.category_rooms;
       public         heap    postgres    false            ?            1259    41570    category_room_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.category_room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.category_room_id_seq;
       public          postgres    false    201            &           0    0    category_room_id_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.category_room_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    202            ?            1259    41572    category_rooms_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.category_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.category_rooms_id_seq;
       public          postgres    false    201            '           0    0    category_rooms_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.category_rooms_id_seq OWNED BY public.category_rooms.id;
          public          postgres    false    203            ?            1259    41574 	   cineplexs    TABLE     ?   CREATE TABLE public.cineplexs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255)
);
    DROP TABLE public.cineplexs;
       public         heap    postgres    false            ?            1259    41580    cineplex_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cineplex_id_seq;
       public          postgres    false    204            (           0    0    cineplex_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.cineplex_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    205            ?            1259    41582    cineplexs_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cineplexs_id_seq;
       public          postgres    false    204            )           0    0    cineplexs_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cineplexs_id_seq OWNED BY public.cineplexs.id;
          public          postgres    false    206            ?            1259    41584    movies    TABLE     ;  CREATE TABLE public.movies (
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
       public         heap    postgres    false            ?            1259    41590    movies_cineplexs    TABLE     ?   CREATE TABLE public.movies_cineplexs (
    id integer NOT NULL,
    id_movie integer NOT NULL,
    id_cineplex integer NOT NULL
);
 $   DROP TABLE public.movies_cineplexs;
       public         heap    postgres    false            ?            1259    41593    movies_cineplex_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.movies_cineplex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.movies_cineplex_id_seq;
       public          postgres    false    208            *           0    0    movies_cineplex_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.movies_cineplex_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    209            ?            1259    41595    movies_cineplexs_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.movies_cineplexs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.movies_cineplexs_id_seq;
       public          postgres    false    208            +           0    0    movies_cineplexs_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.movies_cineplexs_id_seq OWNED BY public.movies_cineplexs.id;
          public          postgres    false    210            ?            1259    41597    movies_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.movies_id_seq;
       public          postgres    false    207            ,           0    0    movies_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
          public          postgres    false    211            ?            1259    41599    rooms    TABLE     ?   CREATE TABLE public.rooms (
    id integer NOT NULL,
    name_room character varying(255) NOT NULL,
    id_cineplex integer,
    id_category_room integer,
    horizontal_size integer,
    vertical_size character varying(255)
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            ?            1259    41605    rooms_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    212            -           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    213            ?            1259    41607 	   schedules    TABLE     ?   CREATE TABLE public.schedules (
    id integer NOT NULL,
    id_movie integer,
    id_room integer,
    id_time integer,
    price integer
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            ?            1259    41610    schedules_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    214            .           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    215            ?            1259    41612    tickets    TABLE     ?   CREATE TABLE public.tickets (
    id character varying(255) NOT NULL,
    id_booking character varying(255) NOT NULL,
    seat character varying(255),
    price_ticket integer NOT NULL
);
    DROP TABLE public.tickets;
       public         heap    postgres    false            ?            1259    41618    times    TABLE     ?   CREATE TABLE public.times (
    id integer NOT NULL,
    start_point timestamp with time zone NOT NULL,
    end_point timestamp with time zone NOT NULL
);
    DROP TABLE public.times;
       public         heap    postgres    false            ?            1259    41621    time_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.time_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.time_id_seq;
       public          postgres    false    217            /           0    0    time_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.time_id_seq OWNED BY public.times.id;
          public          postgres    false    218            ?            1259    41623    times_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.times_id_seq;
       public          postgres    false    217            0           0    0    times_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;
          public          postgres    false    219            ?            1259    41625    users    TABLE     G  CREATE TABLE public.users (
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
       public         heap    postgres    false            ?            1259    41631    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            1           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    221            a           2604    41633    category_rooms id    DEFAULT     u   ALTER TABLE ONLY public.category_rooms ALTER COLUMN id SET DEFAULT nextval('public.category_room_id_seq'::regclass);
 @   ALTER TABLE public.category_rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201            b           2604    41634    cineplexs id    DEFAULT     k   ALTER TABLE ONLY public.cineplexs ALTER COLUMN id SET DEFAULT nextval('public.cineplex_id_seq'::regclass);
 ;   ALTER TABLE public.cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            c           2604    41635 	   movies id    DEFAULT     f   ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
 8   ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    207            d           2604    41636    movies_cineplexs id    DEFAULT     y   ALTER TABLE ONLY public.movies_cineplexs ALTER COLUMN id SET DEFAULT nextval('public.movies_cineplex_id_seq'::regclass);
 B   ALTER TABLE public.movies_cineplexs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208            e           2604    41637    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212            f           2604    41638    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            g           2604    41639    times id    DEFAULT     c   ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.time_id_seq'::regclass);
 7   ALTER TABLE public.times ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            h           2604    41640    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            
          0    41564    bookings 
   TABLE DATA           [   COPY public.bookings (id, id_user, id_schedule, total, created_at, updated_at) FROM stdin;
    public          postgres    false    200   yd                 0    41567    category_rooms 
   TABLE DATA           6   COPY public.category_rooms (id, name_cat) FROM stdin;
    public          postgres    false    201   e                 0    41574 	   cineplexs 
   TABLE DATA           6   COPY public.cineplexs (id, name, address) FROM stdin;
    public          postgres    false    204   7e                 0    41584    movies 
   TABLE DATA           l   COPY public.movies (id, name_movie, slug, release_date, poster, "time", created_at, updated_at) FROM stdin;
    public          postgres    false    207   ?e                 0    41590    movies_cineplexs 
   TABLE DATA           E   COPY public.movies_cineplexs (id, id_movie, id_cineplex) FROM stdin;
    public          postgres    false    208   nh                 0    41599    rooms 
   TABLE DATA           m   COPY public.rooms (id, name_room, id_cineplex, id_category_room, horizontal_size, vertical_size) FROM stdin;
    public          postgres    false    212   i                 0    41607 	   schedules 
   TABLE DATA           J   COPY public.schedules (id, id_movie, id_room, id_time, price) FROM stdin;
    public          postgres    false    214   bi                 0    41612    tickets 
   TABLE DATA           E   COPY public.tickets (id, id_booking, seat, price_ticket) FROM stdin;
    public          postgres    false    216   t                 0    41618    times 
   TABLE DATA           ;   COPY public.times (id, start_point, end_point) FROM stdin;
    public          postgres    false    217   ?t                 0    41625    users 
   TABLE DATA           ]   COPY public.users (id, email, password, name, phone, role, active, "verifyCode") FROM stdin;
    public          postgres    false    220   ?       2           0    0    category_room_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.category_room_id_seq', 1, false);
          public          postgres    false    202            3           0    0    category_rooms_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.category_rooms_id_seq', 1, false);
          public          postgres    false    203            4           0    0    cineplex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplex_id_seq', 22, true);
          public          postgres    false    205            5           0    0    cineplexs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cineplexs_id_seq', 3, true);
          public          postgres    false    206            6           0    0    movies_cineplex_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplex_id_seq', 203, true);
          public          postgres    false    209            7           0    0    movies_cineplexs_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.movies_cineplexs_id_seq', 1, false);
          public          postgres    false    210            8           0    0    movies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.movies_id_seq', 185, true);
          public          postgres    false    211            9           0    0    rooms_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rooms_id_seq', 96, true);
          public          postgres    false    213            :           0    0    schedules_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.schedules_id_seq', 920, true);
          public          postgres    false    215            ;           0    0    time_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.time_id_seq', 964, true);
          public          postgres    false    218            <           0    0    times_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.times_id_seq', 1, false);
          public          postgres    false    219            =           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 60, true);
          public          postgres    false    221            j           2606    41642    bookings bookings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_pkey;
       public            postgres    false    200            l           2606    41644 "   category_rooms category_rooms_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.category_rooms
    ADD CONSTRAINT category_rooms_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.category_rooms DROP CONSTRAINT category_rooms_pkey;
       public            postgres    false    201            n           2606    41646    cineplexs cineplexs_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.cineplexs
    ADD CONSTRAINT cineplexs_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.cineplexs DROP CONSTRAINT cineplexs_pkey;
       public            postgres    false    204            r           2606    41648 :   movies_cineplexs movies_cineplexs_id_movie_id_cineplex_key 
   CONSTRAINT     ?   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key UNIQUE (id_movie, id_cineplex);
 d   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_id_cineplex_key;
       public            postgres    false    208    208            t           2606    41650 &   movies_cineplexs movies_cineplexs_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_pkey PRIMARY KEY (id, id_movie, id_cineplex);
 P   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_pkey;
       public            postgres    false    208    208    208            p           2606    41652    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    207            v           2606    41654    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    212            x           2606    41656    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    214            z           2606    41658    tickets tickets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_pkey;
       public            postgres    false    216            |           2606    41660    times times_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.times DROP CONSTRAINT times_pkey;
       public            postgres    false    217            ~           2606    41662    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220                       2606    41663 "   bookings bookings_id_schedule_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_id_schedule_fkey FOREIGN KEY (id_schedule) REFERENCES public.schedules(id) ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.bookings DROP CONSTRAINT bookings_id_schedule_fkey;
       public          postgres    false    214    200    2936            ?           2606    41668 2   movies_cineplexs movies_cineplexs_id_cineplex_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_cineplex_fkey;
       public          postgres    false    2926    204    208            ?           2606    41673 /   movies_cineplexs movies_cineplexs_id_movie_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.movies_cineplexs
    ADD CONSTRAINT movies_cineplexs_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.movies_cineplexs DROP CONSTRAINT movies_cineplexs_id_movie_fkey;
       public          postgres    false    207    208    2928            ?           2606    41678 !   rooms rooms_id_category_room_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_category_room_fkey FOREIGN KEY (id_category_room) REFERENCES public.category_rooms(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_category_room_fkey;
       public          postgres    false    212    2924    201            ?           2606    41683    rooms rooms_id_cineplex_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_id_cineplex_fkey FOREIGN KEY (id_cineplex) REFERENCES public.cineplexs(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_id_cineplex_fkey;
       public          postgres    false    212    2926    204            ?           2606    41688 !   schedules schedules_id_movie_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_movie_fkey FOREIGN KEY (id_movie) REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_movie_fkey;
       public          postgres    false    207    2928    214            ?           2606    41693     schedules schedules_id_room_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.rooms(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_room_fkey;
       public          postgres    false    214    2934    212            ?           2606    41698     schedules schedules_id_time_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_id_time_fkey FOREIGN KEY (id_time) REFERENCES public.times(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_id_time_fkey;
       public          postgres    false    2940    217    214            ?           2606    41703    tickets tickets_id_booking_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_id_booking_fkey FOREIGN KEY (id_booking) REFERENCES public.bookings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.tickets DROP CONSTRAINT tickets_id_booking_fkey;
       public          postgres    false    2922    216    200            
      x?}ͱ!@???>??6?̒??BR&R??}?O
?tf?4]`?<??yXTLdI
'j#??Eޙz?Y?(?U?dXd???ö?q|??#5L??=2?zq?U;?M?c?????9? ԏ-V            x?3?4r?2?4v?2?4q?u??????? -I?         ?   x?3?tvS?8?3/]!?؆c?t@NbU"???ݓ?3?U?????2+??WH?,?D?64??xȤ#?y
!w/?PgV瘚TpxQ?B@??]?,???%??*? ??4o~&??=... ?pL?         ?  x????o?0?gߧ?B???ؾؑ*?B?t?		??q?$??O??U|VV?"!S??x??q?_[????f??????~^*9z^.??4/???????[??#SΚ:o ?t3??%@)*?nҦá??6ӭm;?Յ?
??s?'U_?d?M??Z??L?j??(?ډ?nN??q_?ye??????I?L?w???+???3???D?d??E????V %??f?	?2???????t??2I??????-??__Q?Ír{??BL???N??tΉ?9????t?@?D@"???'R???m:c)'????Zi@???o5OWޛ???m??W?ͼ?뗡k????e:2&r?Y^?8f$\?59!J??"I*T??G???^???vx̦???X!6`???{??H8??F??*?b?vvڟ??sg?	m?2???6?(e?Ω?1?xDF??K)zȬ???O??h??OS|X?yap??????O?P?@WZ(mU?]?BQi???^??Ձ?𶘤M??H?c5p?/?dVH0Y??t4:?$?6sCS"???R??W??E??~????e?O?ŧ?=??m?3?)usO$??M?^"!??H# '.`J?V,?Q??:#훬q??%???Zi?& ???         ?   x?%??? Dѳ? %??t?.^	}?Q?g??y??a?Kܐϰ?=L??d??H????e̐?9d???u?r]?r??"*???z$?u%E1d?CF|?U??^??!??CD??0?#1???r3?i?????'2V         P   x?=???@D?o(?Ȳ?????t	??&???K?!?F???N??ˬ?_,?XI????m}ʓ헱?B^?U} @??         ?
  x?M?I?#;??ôq?x??st@
8ʬ6????9 e???؟?O^?????"??矬7?k=??y>?"o????'?s?&<s???????|g??'?y???????I?;?!ߑ??????3??????LF??\????wG???w?g?F>{7?9#{G???o0? #??;ȒR??????:?
????O?{Iw???OP	Y??p??]???|grJ?;?{?M?{?̾/?T'?lS??l????7?sXט??6??N]???棪o?ٻ1????????@?ُsJ΁??)9{d??xYҽ?3????
2?U??9?뿑O0f??<???YA?$?%?!K????$?????@*??ב?`?FV?%??:?%?\\?$?	r ?????%)?!??苓Œ?;?????bv??dqG??bIf}G?9??d?$??ٳ$.N6?仯C6K??'?%???fI??aI?}??^???-U?w$?????!?OF?w$?獹#?????e???????7?D?Q?e?4?W??/	<*??ኲ?;? K}G??;?ewzd???k?ߠ4??????3&z)S?e?^??0??׾8P???????3?Y^W=w?3?K?
??6?
??1@? 벿?Y?I$?dN??De?{q߽?\?5?][eY????+x?N?m&W?Ÿ?Ȅq"?L?O????Ov$1)?lS'?$Qs?b????C$?)b?%?V?Z?|'?d?z'?)>?'?u???	?ⴢ?w???3????+N+F??8??????jɗ ???+??)9i?b?%?W????|_???u|???B???i+Ȓ<[?JN[J}?O=,?M5? ???V???ZKz??M51(?f	??%%Քܭ%?i%???%?W!??J??Ͻ?6%c??=?TzI:I???K@??)Ii	??$NP~'?(?.U????:èu?l0j??^AֹW{??Ӗ?Z6X???lx?%?????Jt?????Z6?@??ec?s?KJ???]??%??m?d???V?uAKAϻ?
???~? D?h	"?R??]A?y7?zA?B??/A?y)?'?|?zSɓ??>1??1??%?[?"E?[E?b0?(R$O.??1?RjK1g?Qy???KW??U,]??d,]_K/?a?%?V?*O??yU?i??*?4|^5? ?W[d???WC???k?Y?!E[?!E?:i?A?l}DP_?O?%???m?NG?&ԑ??	u???????? ??ɽL?c?&4h)??Iȍ?\?]Dk E?@?@?F???h?,????֠?&?5()tN ?&?it94?O#???ퟏ?Y?ۉ*Ց???@~??(c??u??$A???(l
?\?h%??/?~??\?y~?댤?1??z'?dpf?????-?oprZ?????&0pV???L???A?0.7O;??89??8?f?#Zgې?͒|??hs?rK?g?Dg? ?M)d?Bvڹ<??<?;?ݎ?:???L?h?q??g???AC????(??n?"??vo?v??t??%hXϬ-??Ȯ?d@??y ?^T?ZI&?(?L?|'??y?Ԅ?????h??Ǧ?1`j2??Y??<0?'????c? ?t,D??]M'S???d"?ЧCC3??4?J??>D??O???W?KӯQ;?(?N?}??Ӣ????3[?"??D=w?t??O??Hs?? Ҝ??Ad??էCCsR?=eN?? ?<;?uiAU???J??>DZP?;???XD?|_}:?U???O?d?"-?~DZ"E|?H??%Rt?g???b?,G????H??)?3_#E ?k??|?!???"??E+?!?/ZI?|ӧu(??V?)?#E ?{?H!?/?JK?÷?: ??D?o	R??Y?)??,T???N?9??????3Di	???????B?==>??C?B̡???)-A??)??}=~?????tKʔ?[????B??A????"?q?HʸR?ds????ǅ|?AO????uFF??AO??Ez\G??q??d?8W???\/??i?f?|?L4JR?$^%ŝ????'?*9 ?k?????m??{G9ΐ?]?=???w?W?I?!???8?XӒ?>?1<9????q?2??w??ܼ?cq^G?	?:???:???:??k???6t7>?yq&??>??
~PjC:?=N?Q???GK?`??	h衝?ƙ٭B?HR? ??"=H9Dz?rmIO|>??'>p?S????$?jCO?߀?޵?#??f?C??Ţy?4֞?+????i,?????"	???t?I???????S ?X??AW3???" l????!??P?4???2?uN??3??`?{GY??wbq?]m???d????ѿ^Up&?? 2????OAuw#Z???V?OZ??F?͸??7?m`??fL?p3.yHP???Ӹ?>?i?I ??:???uWAv4u\@???!l???ّ????????	x@ؐqoJs, l??~!lt???????V?u????H?????O?/	ac? !!l(m???a???H
?0z	a?P]Bؘ?]H?m?	a??I+?"c??!!ltYAvdTg	a??C???Z?qa??o? l?%????W??ф? ;???H>??Ro?O???g,?7#?/??nv?FL??F?	???'??d?	v#??v#&5?T?	v#h?'؍$????{?????????"??         ?   x??λQ1@?x?1?,?B!?X?_f??o???H̭????]??(?????.#/??d4?o ?U?`?Fj?1???ל??????\ ?|?RX?,?M???Cr???8u?A??@?OȅP-?ZTY?ȏ)?j?w?@Z>aI?lX?!?q???)?O47,l??:ƶ??u}??J??!?4f?2????VB?g?'??m?V??=?P<Ί??c??3??????}߿c?~{           x??\Kr???Wq??C?x-o????y.e?P6???? 	I)۔?Ѣ?o?k?G??㯔?-?>?oi??_6??w-??~??h??XC?????6?w???????F??+?lH?!O?j???"$??+?G???K?l??l????ۈ??'??+!!??D??ܕmD?
???c??-????Cc?hT!Qݽz??U%??xk@???c??\u?l??bA??p?х4???#+?}?????Ɗc?6"Qr??Yr9~??b??6>?????F?4?D??v??C?Id??#???e?q??0T??5?W?ZI?a?W??2????G??j?m?+Eq?W?,CQ?}~h8??#ď??sh?O??*$
?ħt?n?P?B??????ט??G?_Ur٘Ea????1H壿?qU?d?9??'Qy?%W%Z!QTW/g?9??o?C?L??^?[?a????J9?A?(?
Ǡ??rU?y+?Q???]N+????&Ѕ????+?????6@V%?e????=??W?H???5?f?
??Y??G?? ?f?$???Մ>?-???>?4?|??ذrE???ƊC
?"?c???F4uS4?.tSj]?4z+Y^Q>?18hu?2??j0????+-???rZ????????o?DUB?V?i%??T"tS-??%???upV?aU?ȫf*q@>j͡{????Ӻ??@??????U?ӺjrZWMO???j0c?&aUaJ??I?٧?????*?A?W5???0%^υ{???؆ӏX	w?cU??pdW?Zi3?p^a|H??H?q^?ړle??g?? ??Ґ?6?y<΅?ym?DQ>x???Nmt!Q??`?z?~,?1?F;??Va???>?#?S???1?c?Vɀ?_3?????up?(z?@?1>????☴?a??O?&W?,$*?p??<?1?F;???s>iũs??cږ?І???cՕ?iV?8>+q[9??0FuU?n?Z??+?ڍz?wx]??8???g ɺ?z?t-^??j?;???m??H?a[N?h=?W>~4??͇^?j????c??0???8Z??á?G??Y5?,????:?E??@i????.?>?4?~,??????.\iDu? ޢ?+Ī+وvwJ?ۡgx?b? r??0F??s??G+Y^??vK??g}???ѽ???
??>ts8?9?p}??J????@???Qc/??+qX?ᜡϡ??1%?????Vp??gMV???g"?}T?c?<???6?????\vZW?O??䴮LO???????Wc????ҰM?s"V?7?V??????n_W??n???텕????6?Ao???Xgdz?{tq?}d?U?cf??Q??9|s???Jɡ????l0	l<\섢??E?@???]q?$?Kc䰂????^A/:?e??[?????[K??J???8?V??vX?k??????`U{?"?U!??M????b?]4c??6઱???5??B2???-?Yv??6!w??G/??????v???lܳ?@?G??}j????u??&??ȿ?ʢ?j6???h z5 ?C??晒(??{??=\??y????=\??9}?j?a)?jP??i?_?ۀ]Q??*??????Gs{??E?????f?p4?????%t??%?A???>??6z&?m7??C?|Onhà?+?uՋl?v???!?`?y?NFb??{Q?K?N?wwۏE9???h??????4B6?2w???q?ظO???4f4Fl???i?=k{????$?>p??f?q?nbԑ?'E????'_???V?48??/???K?Tݳ?/?l??c7=??}?l??p?e?JUr?I?Qk?^%?>'?R]??u20?亾Ѩ??Z/?U	???>QW??^????C/d#?'j?4B??U?h????q?????@??a⛆J?kj?????????n^???lh???{?*???9q??<???>?归W???????ޘ(?1IG'??Ө?<?66?_s????jy?[?r?;Ǒ????`???zo }????kU%??ec?/?q?g2#?B38?ߞ`G??'??cl???у??͎???????????~2;???5??po3b?N??"O????H?8?d???g????????D?c?6?~?9qN?q>&ծ?}?Nk???H?x	?Ȝx	?H?x?G??k???~?\?????U????H??l|??z??	vd#q?6?h??4_y?R? ?7e?s?&?l(?'????B>ث?;???Ԙ???ޙ?K???K??,2????[.???D?ۏEqл?>r??#}?X?5????
n?g?$VW?l!??(?["6U??/x??%!6U??Ԅ?T	Y???Gz5Ы~?<??rq\UҴ??C?????ەѽ???952?=f?9?n??5OQ?v???????>#w???8g^??8????2??+c??9?6???????i? ?ϓ?h}?G?λ?ٱW~ZW]r??V??5??}????????k?_^?r??!??c?=N??e?=???m?M??}??~??'Q?????8?{????Ȳ???Av?,$·0?M?&
oe???,?3H???9?E??G???!qGF??:?d??ſR?D??+%t???????ܫ!?J??J?O???Ӝ?d]??׶???٧?ʙ?y??V?d???ry?L???l59?????? p??????Q?e???Zb5?&?s5x?v??Z/???"_qL?G??9??)????v???????1k??q?N??w?s?N?`??sf???jN?̇X?Iќ???????Î?2???+R~W4?NX-?K?ߟ?????j?????F????scQ??mX?"?l???F4??}?S??????t?`???k?uR?m7y?3???(r?ᐅt?.?p~#}??=?b@???M??KC+ъ?k??k?%k???(#W??ՇÑW??L??8???芜b%zX?&??Mz????`?1??`?1?????D?]-???n">?Q>?1??g?|K????ct?+??M|??Ε????G}??7Q?b???V?_n<??C?????`?q?????w??W8'?q?n???]ˡ??y+?J?}?59?Ħ???jݕ??6?o?X?`?tq?i#???`???m??%???3k~Z?]Nk?k]??[????[]?E???#?+?+??r?{?????Q6t?????;?$'??????6o??ld??6??9?u?=u?a
???W????pX?md??6??pX?.#?)$????;????(????ȼv????h?^???X?Q?M۸}Qui???????Q)?^         ?   x?eͻ?0??????C???xA?B??ZEQ?>??L????A"Ku?e?
cW??[???~	??Zqmʥ??A?????-R.?|?Q:ʢ???????W_H?Qb3D6?6?h???3?-??.??>҃?=W??.$}^}&?̥}???t?8???9潇??|?NKZԦ]??mM??o?A?     