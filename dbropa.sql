-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 25-06-2024 a las 02:44:02
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
(1, 'Agustina Schvartzberg', 'agustinaschvartzberg@gmail.com', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam ', '2024-04-15', 46288481, 'foto.png', '2024-04-15 21:02:40', '2024-06-25 02:40:59', NULL),
(2, 'Agustina Schvartzberg', 'agustinaschvartzberg@gmail.com', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam ', '2024-04-15', 46288481, 'foto.png', '2024-04-15 21:07:49', '2024-06-25 02:42:19', NULL),
(3, 'Sattas', 'sattas@gmail.com', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288482, 'foto.png', '2024-04-15 21:08:42', '2024-06-25 02:42:33', NULL),
(4, 'Vicky Stutzbach', 'vstutzbach@gmail.com', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288483, 'foto.png', '2024-04-15 21:09:08', '2024-06-25 02:42:41', NULL),
(5, 'Agustina Schvartzberg', 'aschvartzberg@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288484, 'foto.png', '2024-04-15 21:11:29', '2024-06-25 02:42:55', NULL),
(6, 'Sattas', 'sattas@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288485, 'foto.png', '2024-04-15 21:12:03', '2024-06-25 02:43:04', NULL),
(7, 'Sattas', 'sattas@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam ', '2024-04-15', 46288486, 'foto.png', '2024-04-15 21:12:49', '2024-06-25 02:43:14', NULL),
(8, 'Sattas', 'sattas@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288487, 'foto.png', '2024-04-15 21:13:20', '2024-06-25 02:43:22', NULL),
(9, 'Vicky Stutzbach', 'vickystut@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288488, 'foto.png', '2024-04-15 21:13:49', '2024-06-25 02:43:30', NULL),
(10, 'Sofia Attas', 'sofiaattas@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288489, 'foto.png', '2024-04-15 21:14:22', '2024-06-25 02:43:40', NULL),
(11, 'Agus Schvartzberg', 'agusschvartzberg@udesa.edu.ar', '$2a$10$z7bVv4NGKeYXMmGh4d1PXu3Noaa4dtI012ihgtaikctDON/arOAam', '2024-04-15', 46288480, 'foto.png', '2024-04-15 21:14:55', '2024-06-25 02:43:50', NULL),
(12, 'hola', 'hola@gmaillcom', '$2a$10$3VQezd8RHKKo/XtxSrQy8et5CtzFEUjzQXNx1lWW36vSBe0fvu0RK', NULL, 12345, NULL, '2024-06-24 03:04:44', '2024-06-24 03:04:44', NULL),
(13, 'victoria ', 'vstutzb@gmail.com', '$2a$10$WiifgkatgDCaEUET.EpjT.ZEQwZRFwncJsTHjvPh8Gw2gbYi4gM7G', NULL, 30494920, NULL, '2024-06-24 03:59:12', '2024-06-24 03:59:12', NULL),
(14, 'victoria ', 'vstutzb@gmail.com', '$2a$10$UJ.VUvuFqAN4.Ay7YnQujepeAss9WlBshNEkg8nRNFXR9dmdt5CJW', NULL, 30494920, NULL, '2024-06-24 04:07:10', '2024-06-24 04:07:10', NULL),
(15, 'victoria ', 'vstutzb@gmail.com', '$2a$10$DGY60ZlfAo505wDayai9/usCL/h/LyIFrBBge8Zpwhshig2j1vSiW', NULL, 183894, NULL, '2024-06-24 16:54:51', '2024-06-24 16:54:51', NULL),
(16, 'victoria ', 'vstutzb@gmail.com', '$2a$10$LQBt93EPUj8NJNegA0XE7eNNGqypJLq3W0O0mxxIH2Qjjul.eWHD.', NULL, 183894, NULL, '2024-06-24 17:22:49', '2024-06-24 17:22:49', NULL),
(17, 'hola', 'hola@gmaillcom', '$2a$10$wNSKKmeKt3MBNpCr4.ica.9zlcTWeSEdav8MEOBk.poJXrBHfaGVe', NULL, -4123, NULL, '2024-06-24 19:24:53', '2024-06-24 19:24:53', NULL),
(18, 'hoal', 'hola@gmaillcom', '$2a$10$IUjPDCl.o3ywYwNHhzU25ecWs5pay9DcsWYtaobY15iuQ0cQvsFMW', NULL, 123559, NULL, '2024-06-24 19:25:39', '2024-06-24 19:25:39', NULL),
(19, 'victoria ', 'hola@gmaillcom', '$2a$10$sbuWXniC32yD45rki9LaWOwKh6V4EavXBnFH1ijKKnmN2wnimwLKa', NULL, 1234, NULL, '2024-06-24 19:26:39', '2024-06-24 19:26:39', NULL),
(20, 'hola', 'hola@gmaillcom', '$2a$10$DPthkJ5qU8atw0264A1S1uCUbIhZqQrwemOHa575IoNSpfhGJH4kK', NULL, 12345, NULL, '2024-06-24 19:27:39', '2024-06-24 19:27:39', NULL),
(21, 'victoria ', 'vstutzb@gmail.com', '$2a$10$lkJNX1PZGTz/U4dgMB8b0ew9FMQKaZWf9r0UjRrfyxalL2e0iwTHG', NULL, 123456, NULL, '2024-06-24 19:48:43', '2024-06-24 19:48:43', NULL);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
