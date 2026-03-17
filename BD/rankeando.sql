-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-03-2026 a las 17:42:01
-- Versión del servidor: 8.4.7
-- Versión de PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rankeando`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `players`
--

DROP TABLE IF EXISTS `players`;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `real_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationality` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `team_id` (`team_id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `players`
--

INSERT INTO `players` (`id`, `nickname`, `real_name`, `nationality`, `role`, `photo_url`, `team_id`, `created_at`) VALUES
(1, 'Shaiiko', 'Stéphane Lebleu', 'France', 'Entry', '/assets/equipos/jugadores/shaiiko.png', 1, '2026-03-09 16:39:10'),
(2, 'Doki', 'Jake Howlett', 'UK', 'Flex', '/assets/equipos/jugadores/doki.png', 1, '2026-03-09 16:39:10'),
(3, 'Kendrew', 'Kyle Frisch', 'UK', 'Support', '/assets/equipos/jugadores/kendrew.png', 1, '2026-03-09 16:39:10'),
(4, 'Lexi', 'Alex Smith', 'Canada', 'Anchor', '/assets/equipos/jugadores/lexi.png', 1, '2026-03-09 16:39:10'),
(5, 'Laz', 'Lazarus Brown', 'USA', 'Flex', '/assets/equipos/jugadores/laz.png', 1, '2026-03-09 16:39:10'),
(6, 'Joee', 'Joe Smith', 'Germany', 'Entry', '/assets/equipos/jugadores/joee.png', 2, '2026-03-09 16:39:10'),
(7, 'Benja', 'Benjamin Alvarez', 'Spain', 'Flex', '/assets/equipos/jugadores/benja.png', 2, '2026-03-09 16:39:10'),
(8, 'Finka', 'Anna Müller', 'Germany', 'Support', '/assets/equipos/jugadores/finka.png', 2, '2026-03-09 16:39:10'),
(9, 'Joonas', 'Joonas Savolainen', 'Finland', 'Anchor', '/assets/equipos/jugadores/joonas.png', 2, '2026-03-09 16:39:10'),
(10, 'Mav', 'Matthew Jones', 'UK', 'Flex', '/assets/equipos/jugadores/mav.png', 2, '2026-03-09 16:39:10'),
(11, 'Psycho', 'Pedro Silva', 'Brazil', 'Entry', '/assets/equipos/jugadores/psycho.png', 3, '2026-03-09 16:39:10'),
(12, 'Reckless', 'Lucas Oliveira', 'Brazil', 'Flex', '/assets/equipos/jugadores/reckless.png', 3, '2026-03-09 16:39:10'),
(13, 'Tusk', 'Rafael Gomes', 'Brazil', 'Support', '/assets/equipos/jugadores/tusk.png', 3, '2026-03-09 16:39:10'),
(14, 'Bolt', 'Mateus Santos', 'Brazil', 'Anchor', '/assets/equipos/jugadores/bolt.png', 3, '2026-03-09 16:39:10'),
(15, 'Neo', 'Gabriel Costa', 'Brazil', 'Flex', '/assets/equipos/jugadores/neo.png', 3, '2026-03-09 16:39:10'),
(16, 'Rexen', 'Kyle Robertson', 'USA', 'Entry', '/assets/equipos/jugadores/rexen.png', 4, '2026-03-09 16:39:10'),
(17, 'Risk', 'Ethan Lee', 'USA', 'Flex', '/assets/equipos/jugadores/risk.png', 4, '2026-03-09 16:39:10'),
(18, 'Beaulo', 'Jason Doty', 'USA', 'Support', '/assets/equipos/jugadores/beaulo.png', 4, '2026-03-09 16:39:10'),
(19, 'Mentalist', 'Matt Smith', 'USA', 'Anchor', '/assets/equipos/jugadores/mentalist.png', 4, '2026-03-09 16:39:10'),
(20, 'Shuttle', 'Ryan Adams', 'USA', 'Flex', '/assets/equipos/jugadores/shuttle.png', 4, '2026-03-09 16:39:10'),
(21, 'PsychoN', 'Niklas Berg', 'Sweden', 'Entry', '/assets/equipos/jugadores/psychon.png', 5, '2026-03-09 16:39:10'),
(22, 'P4', 'Peter Andersson', 'Sweden', 'Flex', '/assets/equipos/jugadores/p4.png', 5, '2026-03-09 16:39:10'),
(23, 'Ranger', 'Fredrik Svensson', 'Sweden', 'Support', '/assets/equipos/jugadores/ranger.png', 5, '2026-03-09 16:39:10'),
(24, 'Zero', 'Marcus Nilsson', 'Sweden', 'Anchor', '/assets/equipos/jugadores/zero.png', 5, '2026-03-09 16:39:10'),
(25, 'Ace', 'Oskar Lindberg', 'Sweden', 'Flex', '/assets/equipos/jugadores/ace.png', 5, '2026-03-09 16:39:10'),
(26, 'Zeek', 'Zachary King', 'USA', 'Entry', '/assets/equipos/jugadores/zeek.png', 6, '2026-03-09 16:39:10'),
(27, 'Yeti', 'Chris Johnson', 'USA', 'Flex', '/assets/equipos/jugadores/yeti.png', 6, '2026-03-09 16:39:10'),
(28, 'Goliath', 'Aaron Lee', 'USA', 'Support', '/assets/equipos/jugadores/goliath.png', 6, '2026-03-09 16:39:10'),
(29, 'Titan', 'David Roberts', 'USA', 'Anchor', '/assets/equipos/jugadores/titan.png', 6, '2026-03-09 16:39:10'),
(30, 'Rogue', 'Ethan Baker', 'USA', 'Flex', '/assets/equipos/jugadores/rogue.png', 6, '2026-03-09 16:39:10'),
(31, 'Favela', 'Lucas Pereira', 'Switzerland', 'Entry', '/assets/equipos/jugadores/favela.png', 7, '2026-03-09 16:39:10'),
(32, 'Kyo', 'Romain Dubois', 'France', 'Flex', '/assets/equipos/jugadores/kyo.png', 7, '2026-03-09 16:39:10'),
(33, 'Skade', 'Julien Martin', 'France', 'Support', '/assets/equipos/jugadores/skade.png', 7, '2026-03-09 16:39:10'),
(34, 'Nash', 'Simon Lambert', 'Switzerland', 'Anchor', '/assets/equipos/jugadores/nash.png', 7, '2026-03-09 16:39:10'),
(35, 'Echo', 'Alexandre Moreau', 'France', 'Flex', '/assets/equipos/jugadores/echo.png', 7, '2026-03-09 16:39:10'),
(36, 'Intense', 'Lucas Smith', 'Brazil', 'Entry', '/assets/equipos/jugadores/intense.png', 8, '2026-03-09 16:39:10'),
(37, 'Fury', 'Gabriel Oliveira', 'Brazil', 'Flex', '/assets/equipos/jugadores/fury.png', 8, '2026-03-09 16:39:10'),
(38, 'Storm', 'Rafael Costa', 'Brazil', 'Support', '/assets/equipos/jugadores/storm.png', 8, '2026-03-09 16:39:10'),
(39, 'Nova', 'Thiago Mendes', 'Brazil', 'Anchor', '/assets/equipos/jugadores/nova.png', 8, '2026-03-09 16:39:10'),
(40, 'Blaze', 'Carlos Lima', 'Brazil', 'Flex', '/assets/equipos/jugadores/blaze.png', 8, '2026-03-09 16:39:10'),
(41, 'Retro', 'Matt Doyle', 'USA', 'Entry', '/assets/equipos/jugadores/retro.png', 9, '2026-03-09 16:39:10'),
(42, 'King', 'Daniel Harris', 'USA', 'Flex', '/assets/equipos/jugadores/king.png', 9, '2026-03-09 16:39:10'),
(43, 'Shade', 'Luke Peterson', 'USA', 'Support', '/assets/equipos/jugadores/shade.png', 9, '2026-03-09 16:39:10'),
(44, 'Phantom', 'Ryan Carter', 'USA', 'Anchor', '/assets/equipos/jugadores/phantom.png', 9, '2026-03-09 16:39:10'),
(45, 'Ghost', 'Alex Turner', 'USA', 'Flex', '/assets/equipos/jugadores/ghost.png', 9, '2026-03-09 16:39:10'),
(46, 'Viper', 'João Silva', 'Brazil', 'Entry', '/assets/equipos/jugadores/viper.png', 10, '2026-03-09 16:39:10'),
(47, 'Spike', 'Lucas Santos', 'Brazil', 'Flex', '/assets/equipos/jugadores/spike.png', 10, '2026-03-09 16:39:10'),
(48, 'Claw', 'Rafael Lima', 'Brazil', 'Support', '/assets/equipos/jugadores/claw.png', 10, '2026-03-09 16:39:10'),
(49, 'Fang', 'Thiago Costa', 'Brazil', 'Anchor', '/assets/equipos/jugadores/fang.png', 10, '2026-03-09 16:39:10'),
(50, 'Rogue', 'Mateus Oliveira', 'Brazil', 'Flex', '/assets/equipos/jugadores/rogue_m80.png', 10, '2026-03-09 16:39:10'),
(51, 'Alpha', 'Pedro Gomes', 'Brazil', 'Entry', '/assets/equipos/jugadores/alpha.png', 11, '2026-03-09 16:39:10'),
(52, 'Beta', 'Lucas Ferreira', 'Brazil', 'Flex', '/assets/equipos/jugadores/beta.png', 11, '2026-03-09 16:39:10'),
(53, 'Gamma', 'Rafael Alves', 'Brazil', 'Support', '/assets/equipos/jugadores/gamma.png', 11, '2026-03-09 16:39:10'),
(54, 'Delta', 'Mateus Costa', 'Brazil', 'Anchor', '/assets/equipos/jugadores/delta.png', 11, '2026-03-09 16:39:10'),
(55, 'Epsilon', 'Bruno Lima', 'Brazil', 'Flex', '/assets/equipos/jugadores/epsilon.png', 11, '2026-03-09 16:39:10'),
(56, 'Kamikaze', 'Vinicius Souza', 'Brazil', 'Entry', '/assets/equipos/jugadores/kamikaze.png', 12, '2026-03-09 16:39:10'),
(57, 'Ranger', 'Gustavo Lima', 'Brazil', 'Flex', '/assets/equipos/jugadores/ranger_furia.png', 12, '2026-03-09 16:39:10'),
(58, 'Blitz', 'Fernando Oliveira', 'Brazil', 'Support', '/assets/equipos/jugadores/blitz.png', 12, '2026-03-09 16:39:10'),
(59, 'Shadow', 'Lucas Mendes', 'Brazil', 'Anchor', '/assets/equipos/jugadores/shadow.png', 12, '2026-03-09 16:39:10'),
(60, 'Fenix', 'Thiago Santos', 'Brazil', 'Flex', '/assets/equipos/jugadores/fenix.png', 12, '2026-03-09 16:39:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranking`
--

DROP TABLE IF EXISTS `ranking`;
CREATE TABLE IF NOT EXISTS `ranking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mmr` int DEFAULT NULL,
  `matches_played` int DEFAULT NULL,
  `kd` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ranking`
--

INSERT INTO `ranking` (`id`, `nickname`, `country`, `mmr`, `matches_played`, `kd`) VALUES
(1, 'Aserz', NULL, 5024, 176, 2.02),
(2, 'RelaesZ.CHIEFS', 'Australia', 4991, 171, 1.75),
(3, 'DaveBlunts', NULL, 4974, 159, 1.32),
(4, 'Liulr7', 'UK', 4964, 160, 1.56),
(5, 'tazaSon', 'Israel', 4949, 156, 1.34),
(6, 'tititazuzhe', NULL, 4936, 158, 1.93),
(7, 'choleric', 'USA', 4934, 242, 1.72),
(8, 'FLOW', 'Australia', 4925, 171, 1.41),
(9, 'TT.vxmptuah', NULL, 4924, 200, 1.50),
(10, 'Ohpul', NULL, 4922, 210, 1.15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tag` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `teams`
--

INSERT INTO `teams` (`id`, `name`, `tag`, `country`, `logo_url`, `created_at`) VALUES
(1, 'FaZe Clan', 'FAZE', 'International', '/assets/equipos/logos/faze.png', '2026-03-09 16:39:10'),
(2, 'G2 Esports', 'G2', 'Europe', '/assets/equipos/logos/g2.png', '2026-03-09 16:39:10'),
(3, 'W7M Esports', 'W7M', 'Brazil', '/assets/equipos/logos/w7m.png', '2026-03-09 16:39:10'),
(4, 'Spacestation Gaming', 'SSG', 'USA', '/assets/equipos/logos/ssg.png', '2026-03-09 16:39:10'),
(5, 'Ninjas in Pyjamas', 'NIP', 'Sweden', '/assets/equipos/logos/nip.png', '2026-03-09 16:39:10'),
(6, 'Team SoloMid', 'TSM', 'USA', '/assets/equipos/logos/tsm.png', '2026-03-09 16:39:10'),
(7, 'BDS Esport', 'BDS', 'Switzerland', '/assets/equipos/logos/bds.png', '2026-03-09 16:39:10'),
(8, 'Team Liquid', 'LIQ', 'International', '/assets/equipos/logos/liquid.png', '2026-03-09 16:39:10'),
(9, 'DarkZero Esports', 'DZ', 'USA', '/assets/equipos/logos/darkzero.png', '2026-03-09 16:39:10'),
(10, 'M80', 'M80', 'Brazil', '/assets/equipos/logos/m80.png', '2026-03-09 16:39:10'),
(11, 'Wolves Esports', 'WLV', 'Brazil', '/assets/equipos/logos/wolves.png', '2026-03-09 16:39:10'),
(12, 'FURIA Esports', 'FURIA', 'Brazil', '/assets/equipos/logos/furia.png', '2026-03-09 16:39:10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
