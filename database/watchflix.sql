--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.list DROP CONSTRAINT list_pkey;
ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
ALTER TABLE public.list ALTER COLUMN listid DROP DEFAULT;
DROP SEQUENCE public.users_user_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.list_listid_seq;
DROP TABLE public.list;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.list (
    listid integer NOT NULL,
    userid smallint NOT NULL,
    id integer NOT NULL,
    backdrop_path text,
    poster_path text,
    title character varying(255) NOT NULL,
    vote_average real NOT NULL,
    overview text
);


--
-- Name: list_listid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.list_listid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: list_listid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.list_listid_seq OWNED BY public.list.listid;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(62) NOT NULL
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: list listid; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list ALTER COLUMN listid SET DEFAULT nextval('public.list_listid_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: list; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.list (listid, userid, id, backdrop_path, poster_path, title, vote_average, overview) FROM stdin;
1	1	347201	/6jjx8qsnMdevUIBzxtQbmQ6OOb6.jpg	/9GB2iXCPVP6bgyQXXPUchX8CD7p.jpg	Boruto: Naruto the Movie	7.5999999	Boruto is the son of the 7th Hokage Naruto who completely rejects his father. Behind this, he has feelings of wanting to surpass Naruto, who is respected as a hero. He ends up meeting his father's friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation written by Masashi Kishimoto rises!
2	1	412117	/5mFcjZ58f9Pqg5RNv493XlfgzIX.jpg	/nYcaCNkB4EgVyvrXxxbklefDrGL.jpg	The Secret Life of Pets 2	6.5999999	Max the terrier must cope with some major life changes when his owner gets married and has a baby. When the family takes a trip to the countryside, nervous Max has numerous run-ins with canine-intolerant cows, hostile foxes and a scary turkey. Luckily for Max, he soon catches a break when he meets Rooster, a gruff farm dog who tries to cure the lovable pooch of his neuroses.
3	1	567609	/j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg	/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg	Ready or Not	6.80000019	A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.
4	1	627474	/Ar0T8lVLZjY2k8SsylGorJ0gZiu.jpg	/hliYE00XaaQ4UOHyoU4gJm6t2wD.jpg	Staging Christmas	8	Lori stages homes for a living and her busiest season is Christmas! Though she normally only stages homes that are for sale, she’s intrigued when a wealthy widower named Elliot asks her to stage his home for the holidays to cheer up his daughter, Maddie. As Lori spends more and more time with Elliot and Maddie, she starts to feel like part of the family.
5	1	475557	/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg	/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg	Joker	8.39999962	During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.
6	1	458897	/a0xTB1vBxMGt6LGG4N7k1wO9lfL.jpg	/r5WnfZPYAVhBA9FuZGn6THWaGHD.jpg	Charlie's Angels	6.4000001	When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.
7	1	68718	/qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg	/5WJnxuw41sddupf8cwOxYftuvJG.jpg	Django Unchained	8	With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.
8	1	181808	/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg	/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg	Star Wars: The Last Jedi	7	Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.
9	1	420818	/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg	/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg	The Lion King	7.0999999	Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (user_id, username) FROM stdin;
1	uzinatorcl
2	thebearingedge
\.


--
-- Name: list_listid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.list_listid_seq', 9, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);


--
-- Name: list list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (listid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

