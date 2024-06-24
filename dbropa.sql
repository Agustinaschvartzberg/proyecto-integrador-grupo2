-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 23-06-2024 a las 22:47:18
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
-- Base de datos: `dbropa`
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
(1, 'que lindo', '2024-04-15 23:26:05', '2024-04-15 23:26:05', NULL, 15, 1),
(5, 'que bueno', '2024-04-15 23:27:07', '2024-04-15 23:27:07', NULL, 15, 2),
(6, 'que bueno', '2024-04-15 23:27:14', '2024-04-15 23:27:14', NULL, 15, 3),
(7, 'que feo', '2024-04-15 23:27:34', '2024-04-15 23:27:34', NULL, 16, 4),
(8, 'que feo', '2024-04-15 23:27:38', '2024-04-15 23:27:38', NULL, 16, 5),
(9, 'que feo', '2024-04-15 23:27:41', '2024-04-15 23:27:41', NULL, 16, 6),
(10, 'que barato', '2024-04-15 23:27:54', '2024-04-15 23:27:54', NULL, 17, 7),
(11, 'que barato', '2024-04-15 23:27:57', '2024-04-15 23:27:57', NULL, 17, 8),
(12, 'que barato', '2024-04-15 23:28:00', '2024-04-15 23:28:00', NULL, 17, 9),
(13, 'que canchero', '2024-04-15 23:28:23', '2024-04-15 23:28:23', NULL, 18, 9),
(14, 'que canchero', '2024-04-15 23:28:27', '2024-04-15 23:28:27', NULL, 18, 10),
(15, 'que canchero', '2024-04-15 23:28:31', '2024-04-15 23:28:31', NULL, 18, 8),
(16, 'que bonito', '2024-04-15 23:28:49', '2024-04-15 23:28:49', NULL, 19, 8),
(17, 'que bonito', '2024-04-15 23:28:54', '2024-04-15 23:28:54', NULL, 19, 7),
(18, 'que bonito', '2024-04-15 23:28:57', '2024-04-15 23:28:57', NULL, 19, 6),
(19, 'que mala calidad', '2024-04-15 23:29:11', '2024-04-15 23:29:11', NULL, 20, 6),
(20, 'que mala calidad', '2024-04-15 23:29:16', '2024-04-15 23:29:16', NULL, 20, 7),
(21, 'que mala calidad', '2024-04-15 23:29:18', '2024-04-15 23:29:18', NULL, 20, 8),
(22, 'que buena calidad', '2024-04-15 23:29:31', '2024-04-15 23:29:31', NULL, 21, 5),
(23, 'que buena calidad', '2024-04-15 23:29:35', '2024-04-15 23:29:35', NULL, 21, 4),
(24, 'que buena calidad', '2024-04-15 23:29:38', '2024-04-15 23:29:38', NULL, 21, 3),
(25, 'no me gusto', '2024-04-15 23:29:55', '2024-04-15 23:29:55', NULL, 22, 3),
(26, 'no me gusto', '2024-04-15 23:29:59', '2024-04-15 23:29:59', NULL, 22, 4),
(27, 'no me gusto', '2024-04-15 23:30:03', '2024-04-15 23:30:03', NULL, 22, 5),
(28, 'me fascino', '2024-04-15 23:30:17', '2024-04-15 23:30:17', NULL, 23, 7),
(29, 'me fascino', '2024-04-15 23:30:21', '2024-04-15 23:30:21', NULL, 23, 8),
(30, 'me fascino', '2024-04-15 23:30:23', '2024-04-15 23:30:23', NULL, 23, 9),
(31, 'me encanto', '2024-04-15 23:30:35', '2024-04-15 23:30:35', NULL, 24, 2),
(32, 'me encanto', '2024-04-15 23:30:37', '2024-04-15 23:30:37', NULL, 24, 3);

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

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `photo`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(15, 'top2.webp', 'ushuaia', 'top crop animal print', '2024-04-15 22:47:14', '2024-06-23 22:45:34', NULL, 1),
(16, 'top1.webp', 'alaska', 'top musculoso con volados', '2024-04-15 22:47:20', '2024-06-23 22:45:42', NULL, 2),
(17, 'top3.webp', 'rio', 'top largo con volados', '2024-04-15 22:47:25', '2024-06-23 22:45:50', NULL, 3),
(18, 'top10.webp', 'roma', 'top un solo hombro', '2024-04-15 22:47:29', '2024-06-23 22:45:58', NULL, 4),
(19, 'top5.webp', 'jamaica', 'top manga corta', '2024-04-15 22:47:36', '2024-06-23 22:46:11', NULL, 5),
(20, 'top6.webp', 'buenos aires', 'top rallado', '2024-04-15 22:47:42', '2024-06-23 22:46:19', NULL, 6),
(21, 'top7.webp', 'miami', 'top batik', '2024-04-15 22:47:49', '2024-06-23 22:46:29', NULL, 7),
(22, 'top8.webp', 'nueva york', 'top camuflado', '2024-04-15 22:47:54', '2024-06-23 22:46:36', NULL, 8),
(23, 'top9.webp', 'thailandia', 'top titanic', '2024-04-15 22:48:22', '2024-06-23 22:46:45', NULL, 9),
(24, 'top10.webp', 'roma', 'top un solo hombro', '2024-04-15 22:48:38', '2024-06-23 22:46:53', NULL, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `date`, `dni`, `photo`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Agustina Schvartzberg', 'agustinaschvartzberg@gmail.com', '12345', '2024-04-15', 46288481, 'foto.png', '2024-04-15 21:02:40', '2024-04-15 21:02:40', NULL),
(2, 'Agustina Schvartzberg', 'agustinaschvartzberg@gmail.com', '12345', '2024-04-15', 46288481, 'foto.png', '2024-04-15 21:07:49', '2024-04-15 21:07:49', NULL),
(3, 'Sattas', 'sattas@gmail.com', '67890', '2024-04-15', 46288482, 'foto.png', '2024-04-15 21:08:42', '2024-04-15 21:08:42', NULL),
(4, 'Vicky Stutzbach', 'vstutzbach@gmail.com', '12456', '2024-04-15', 46288483, 'foto.png', '2024-04-15 21:09:08', '2024-04-15 21:09:08', NULL),
(5, 'Agustina Schvartzberg', 'aschvartzberg@udesa.edu.ar', '12365', '2024-04-15', 46288484, 'foto.png', '2024-04-15 21:11:29', '2024-04-15 21:11:29', NULL),
(6, 'Sattas', 'sattas@udesa.edu.ar', '54321', '2024-04-15', 46288485, 'foto.png', '2024-04-15 21:12:03', '2024-04-15 21:12:03', NULL),
(7, 'Sattas', 'sattas@udesa.edu.ar', '54321', '2024-04-15', 46288486, 'foto.png', '2024-04-15 21:12:49', '2024-04-15 21:12:49', NULL),
(8, 'Sattas', 'sattas@udesa.edu.ar', '65432', '2024-04-15', 46288487, 'foto.png', '2024-04-15 21:13:20', '2024-04-15 21:13:20', NULL),
(9, 'Vicky Stutzbach', 'vickystut@udesa.edu.ar', '76543', '2024-04-15', 46288488, 'foto.png', '2024-04-15 21:13:49', '2024-04-15 21:13:49', NULL),
(10, 'Sofia Attas', 'sofiaattas@udesa.edu.ar', '87654', '2024-04-15', 46288489, 'foto.png', '2024-04-15 21:14:22', '2024-04-15 21:14:22', NULL),
(11, 'Agus Schvartzberg', 'agusschvartzberg@udesa.edu.ar', '97654', '2024-04-15', 46288480, 'foto.png', '2024-04-15 21:14:55', '2024-04-15 21:14:55', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarios_id` (`usuarios_id`),
  ADD KEY `productos_id` (`productos_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
