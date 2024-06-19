-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 19-06-2024 a las 21:53:43
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `texto` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `productos_id` int(10) UNSIGNED DEFAULT NULL,
  `usuarios_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `texto`, `created_at`, `updated_at`, `deleted_at`, `productos_id`, `usuarios_id`) VALUES
(1, 'que lindo', '2024-04-15 20:26:05', '2024-04-15 20:26:05', NULL, 15, 1),
(5, 'que bueno', '2024-04-15 20:27:07', '2024-04-15 20:27:07', NULL, 15, 2),
(6, 'que bueno', '2024-04-15 20:27:14', '2024-04-15 20:27:14', NULL, 15, 3),
(7, 'que feo', '2024-04-15 20:27:34', '2024-04-15 20:27:34', NULL, 16, 4),
(8, 'que feo', '2024-04-15 20:27:38', '2024-04-15 20:27:38', NULL, 16, 5),
(9, 'que feo', '2024-04-15 20:27:41', '2024-04-15 20:27:41', NULL, 16, 6),
(10, 'que barato', '2024-04-15 20:27:54', '2024-04-15 20:27:54', NULL, 17, 7),
(11, 'que barato', '2024-04-15 20:27:57', '2024-04-15 20:27:57', NULL, 17, 8),
(12, 'que barato', '2024-04-15 20:28:00', '2024-04-15 20:28:00', NULL, 17, 9),
(13, 'que canchero', '2024-04-15 20:28:23', '2024-04-15 20:28:23', NULL, 18, 9),
(14, 'que canchero', '2024-04-15 20:28:27', '2024-04-15 20:28:27', NULL, 18, 10),
(15, 'que canchero', '2024-04-15 20:28:31', '2024-04-15 20:28:31', NULL, 18, 8),
(16, 'que bonito', '2024-04-15 20:28:49', '2024-04-15 20:28:49', NULL, 19, 8),
(17, 'que bonito', '2024-04-15 20:28:54', '2024-04-15 20:28:54', NULL, 19, 7),
(18, 'que bonito', '2024-04-15 20:28:57', '2024-04-15 20:28:57', NULL, 19, 6),
(19, 'que mala calidad', '2024-04-15 20:29:11', '2024-04-15 20:29:11', NULL, 20, 6),
(20, 'que mala calidad', '2024-04-15 20:29:16', '2024-04-15 20:29:16', NULL, 20, 7),
(21, 'que mala calidad', '2024-04-15 20:29:18', '2024-04-15 20:29:18', NULL, 20, 8),
(22, 'que buena calidad', '2024-04-15 20:29:31', '2024-04-15 20:29:31', NULL, 21, 5),
(23, 'que buena calidad', '2024-04-15 20:29:35', '2024-04-15 20:29:35', NULL, 21, 4),
(24, 'que buena calidad', '2024-04-15 20:29:38', '2024-04-15 20:29:38', NULL, 21, 3),
(25, 'no me gusto', '2024-04-15 20:29:55', '2024-04-15 20:29:55', NULL, 22, 3),
(26, 'no me gusto', '2024-04-15 20:29:59', '2024-04-15 20:29:59', NULL, 22, 4),
(27, 'no me gusto', '2024-04-15 20:30:03', '2024-04-15 20:30:03', NULL, 22, 5),
(28, 'me fascino', '2024-04-15 20:30:17', '2024-04-15 20:30:17', NULL, 23, 7),
(29, 'me fascino', '2024-04-15 20:30:21', '2024-04-15 20:30:21', NULL, 23, 8),
(30, 'me fascino', '2024-04-15 20:30:23', '2024-04-15 20:30:23', NULL, 23, 9),
(31, 'me encanto', '2024-04-15 20:30:35', '2024-04-15 20:30:35', NULL, 24, 2),
(32, 'me encanto', '2024-04-15 20:30:37', '2024-04-15 20:30:37', NULL, 24, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `producto` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `pasword` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `DNI` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `udpedate_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
